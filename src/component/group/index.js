import { state } from '../state';
import { data } from '../data';
import { layout } from '../layout';
import { bookmark } from '../bookmark';
import { header } from '../header';
import { groupDefault } from '../groupDefault';
import { groupAndBookmark } from '../groupAndBookmark';

import { GroupArea } from '../groupArea';
import { GroupEmpty } from '../groupEmpty';
import { StagedGroup } from '../stagedGroup';
import { GroupForm } from '../groupForm';
import { Modal } from '../modal';
import { EmptySearch } from '../emptySearch';

import { node } from '../../utility/node';
import { clearChildNode } from '../../utility/clearChildNode';
import { isValidString } from '../../utility/isValidString';
import { trimString } from '../../utility/trimString';
import { applyCSSVar } from '../../utility/applyCSSVar';
import { applyCSSClass } from '../../utility/applyCSSClass';
import { applyCSSState } from '../../utility/applyCSSState';

import Sortable from 'sortablejs';

import './index.css';

const group = {};

group.area = {
  current: []
};

group.item = {
  mod: {
    add: (groupData) => {
      bookmark.all.splice(groupData.position.destination, 0, groupData.group);
    },
    edit: (groupData) => {
      bookmark.all.splice(groupData.position.origin, 1);
      bookmark.all.splice(groupData.position.destination, 0, groupData.group);
    },
    move: (groupData) => {
      groupData.group = bookmark.all.splice(groupData.position.origin, 1)[0];
      bookmark.all.splice(groupData.position.destination, 0, groupData.group);
    },
    remove: (groupData) => {
      bookmark.all.splice(groupData.position.origin, 1);
    }
  },
  render: () => {

    const addGroup = (groupData, groupIndex) => {

      const currentGroupkData = new StagedGroup(groupData);

      currentGroupkData.position.origin = groupIndex;

      currentGroupkData.position.destination = groupIndex;

      const groupArea = new GroupArea({ groupData: currentGroupkData });

      group.area.current.push(groupArea);

      if (state.get.current().search) {

        if (header.element.search.resultCount().group[groupIndex].searchMatch > 0) {

          bookmark.element.area.appendChild(groupArea.group());

        };

      } else {

        bookmark.element.area.appendChild(groupArea.group());

      };

    };

    const addEmptySearch = () => {

      const emptySearch = new EmptySearch();

      bookmark.element.area.appendChild(emptySearch.empty());

    };

    if (state.get.current().search) {

      // searching

      if (header.element.search.resultCount().total > 0) {

        bookmark.all.forEach((item, i) => {

          const groupIndex = i;

          addGroup(item, groupIndex);

        });

      } else {

        addEmptySearch();

      };

    } else {

      // not searching

      bookmark.all.forEach((item, i) => {

        const groupIndex = i;

        addGroup(item, groupIndex);

      });

    };

  },
  clear: () => {

    group.area.current = [];

    clearChildNode(bookmark.element.area);

  }
};

group.edit = {
  open: () => {

    state.get.current().group.edit = true;

    group.edit.render();

  },
  close: () => {

    state.get.current().group.edit = false;

    group.edit.render();

  },
  toggle: () => {

    if (state.get.current().group.edit) {
      group.edit.close();
    } else {
      group.edit.open();
    };

  },
  render: () => {

    applyCSSState('group.edit');

    if (group.area.current.length > 0) {
      group.area.current.forEach((item, i) => {

        if (state.get.current().group.edit) {
          item.control.enable();
        } else {
          item.control.disable();
        };

      });
    };

  }
};

group.add = {
  mod: {
    open: () => { state.get.current().group.add = true; },
    close: () => { state.get.current().group.add = false; }
  },
  render: () => {

    const newGroupData = new StagedGroup();

    newGroupData.newGroup();

    const groupForm = new GroupForm({ groupData: newGroupData });

    const addModal = new Modal({
      heading: 'Add a new Group',
      content: groupForm.form(),
      successText: 'Add',
      width: 40,
      openAction: () => {

        group.add.mod.open();

        data.save();

      },
      closeAction: () => {

        group.add.mod.close();

        data.save();

      },
      successAction: () => {

        group.item.mod.add(newGroupData);

        group.add.mod.close();

        groupAndBookmark.render();

        data.save();

      },
      dismissAction: () => {

        group.add.mod.close();

        data.save();

      }
    });

    addModal.open();

  }
};

group.sort = {
  sortable: null,
  bind: () => {

    group.sort.sortable = null;

    group.sort.sortable = Sortable.create(bookmark.element.area, {
      handle: '.group-control-sort',
      ghostClass: 'group-sort-placeholder',
      animation: 500,
      easing: 'cubic-bezier(0.8, 0.8, 0.4, 1.4)',
      onEnd: (event) => {

        // console.log('============ debug sort ============');
        // console.log(event);
        // console.log('item:', 'origin', event.oldIndex, 'destination', event.newIndex);

        const newGroupData = new StagedGroup();

        newGroupData.position.origin = event.oldIndex;

        newGroupData.position.destination = event.newIndex;

        group.item.mod.move(newGroupData);

        groupAndBookmark.render();

        data.save();

      }
    });

  }
};

group.init = () => {
  applyCSSClass([
    'group.area.justify'
  ]);
  group.add.mod.close();
  group.edit.render();
};

export { group };
