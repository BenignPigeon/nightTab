import { state } from '../state';
import { data } from '../data';
import { layout } from '../layout';
import { bookmark } from '../bookmark';
import { groupForm } from '../groupForm';
import { groupDefault } from '../groupDefault';

import { GroupArea } from '../groupArea';
import { StagedGroup } from '../stagedGroup';
import { Modal } from '../modal';

import { node } from '../../utility/node';
import { isValidString } from '../../utility/isValidString';
import { trimString } from '../../utility/trimString';

import Sortable from 'sortablejs';

import './index.css';

const group = {};

group.mod = {};

group.mod.add = {
  open: () => { state.get.current().group.add = true; },
  close: () => { state.get.current().group.add = false; }
};

group.mod.edit = {
  open: () => { state.get.current().group.edit = true; },
  close: () => { state.get.current().group.edit = false; }
};

group.mod.item = {};

group.mod.item.add = function(groupData) {
  bookmark.all.splice(groupData.position.destination, 0, groupData.group);
};

group.mod.item.edit = function(groupData) {
  bookmark.all.splice(groupData.position.origin, 1);

  bookmark.all.splice(groupData.position.destination, 0, groupData.group);
};

group.mod.item.move = function(groupData) {
  groupData.group = bookmark.all.splice(groupData.position.origin, 1)[0];

  bookmark.all.splice(groupData.position.destination, 0, groupData.group);
};

group.mod.item.remove = function(groupData) {
  bookmark.all.splice(groupData.position.origin, 1);
};

group.area = {
  current: []
};

group.render = {};

group.render.class = function() {
  const html = document.querySelector('html');

  if (state.get.current().group.edit) {
    html.classList.add('is-group-edit');
  } else {
    html.classList.remove('is-group-edit');
  };

  const justify = ['left', 'center', 'right'];

  justify.forEach((item, i) => {
    html.classList.remove('is-group-justify-' + item);
  });

  html.classList.add('is-group-justify-' + state.get.current().group.area.justify);
};

group.render.edit = {
  open: function() {
    if (group.area.current.length > 0) {
      group.area.current.forEach((item, i) => {
        item.control.enable();
      });
    };
  },
  close: function() {
    if (group.area.current.length > 0) {
      group.area.current.forEach((item, i) => {
        item.control.disable();
      });
    };
  }
};

group.render.item = function() {

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

};

group.add = function() {

  const newGroupData = new StagedGroup();

  newGroupData.newGroup();

  const addModal = new Modal({
    heading: 'Add a new Group',
    content: groupForm.form(newGroupData),
    successText: 'Add',
    width: 'small',
    openAction: () => {

      group.mod.add.open();

      data.save();

    },
    closeAction: () => {

      group.mod.add.close();

      data.save();

    },
    successAction: () => {

      group.mod.item.add(newGroupData);

      bookmark.render.clear();

      bookmark.render.item();

      bookmark.bind.sort();

      group.mod.add.close();

      data.save();

    },
    dismissAction: () => {

      group.mod.add.close();

      data.save();

    }
  });

  addModal.open();

};

group.edit = {
  open: function() {
    group.mod.edit.open();
    group.render.class();
    group.render.edit.open();
  },
  close: function() {
    group.mod.edit.close();
    group.render.class();
    group.render.edit.close();
  },
  toggle: function() {
    if (state.get.current().group.edit) {
      group.edit.close();
    } else {
      group.edit.open();
    };
  }
};

group.bind = {};

group.bind.sort = function() {

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

      group.mod.item.move(newGroupData);

      bookmark.render.clear();

      bookmark.render.item();

      bookmark.bind.sort();

      data.save();

    }
  });

};

group.init = function() {
  group.mod.add.close();
  group.render.class();
  group.bind.sort();
};

export { group };
