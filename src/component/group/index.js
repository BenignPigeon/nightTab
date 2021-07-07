import { state } from '../state';
import { data } from '../data';
import { layout } from '../layout';
import { bookmark } from '../bookmark';
import { groupDefault } from '../groupDefault';

import { GroupArea } from '../groupArea';
import { StagedGroup } from '../stagedGroup';
import { GroupForm } from '../groupForm';
import { Modal } from '../modal';

import { node } from '../../utility/node';
import { isValidString } from '../../utility/isValidString';
import { trimString } from '../../utility/trimString';
import { applyCSSVar } from '../../utility/applyCSSVar';
import { applyCSSClass } from '../../utility/applyCSSClass';
import { applyCSSState } from '../../utility/applyCSSState';

import Sortable from 'sortablejs';

import './index.css';

const group = {};

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

    group.area.current = [];

    bookmark.all.forEach((item, i) => {

      const itemIndex = i;

      const currentGroupkData = new StagedGroup(item);

      currentGroupkData.position.origin = itemIndex;

      currentGroupkData.position.destination = itemIndex;

      const groupArea = new GroupArea({
        groupData: currentGroupkData
      });

      layout.element.bookmark.appendChild(groupArea.group());

      group.area.current.push(groupArea);

    });

  },
  clear: () => {}
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

group.area = {
  current: []
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

        bookmark.item.clear();

        bookmark.item.render();

        bookmark.sort.bind();

        group.add.mod.close();

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
  bind: () => {

    const sortable = Sortable.create(layout.element.bookmark, {
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

        bookmark.item.clear();

        bookmark.item.render();

        bookmark.sort.bind();

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
  group.sort.bind();
};

export { group };
