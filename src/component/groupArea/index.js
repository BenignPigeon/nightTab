import { state } from '../state';
import { data } from '../data';
import { modal } from '../modal';
import { theme } from '../theme';
import { group } from '../group';
import { layout } from '../layout';
import { bookmark } from '../bookmark';
import { groupForm } from '../groupForm';

import { Button } from '../button';

import { node } from '../../utility/node';
import { complexNode } from '../../utility/complexNode';
import { isValidString } from '../../utility/isValidString';
import { trimString } from '../../utility/trimString';
import { clearChildNode } from '../../utility/clearChildNode';

const GroupArea = function({ groupData = {} } = {}) {

  this.element = {
    group: node('div|class:group'),
    header: node('div|class:group-header'),
    name: {
      name: node('div|class:group-name'),
      text: node('h1|class:group-name-text')
    },
    control: {
      control: node('div|class:group-control'),
      group: node('div|class:group-control-group form-group form-group-horizontal')
    },
    body: node('div|class:group-body')
  };

  this.control = {};

  this.control.button = {
    up: new Button({
      text: 'Move this group up',
      srOnly: true,
      iconName: 'arrowKeyboardUp',
      style: ['line'],
      title: 'Move this group up',
      classList: ['group-control-button', 'group-control-up'],
      func: () => {

        groupData.position.destination--;

        if (groupData.position.destination < 0) {
          groupData.position.destination = 0;
        };

        group.mod.item.move(groupData);

        layout.bookmark.clear();

        bookmark.render.item();

        bookmark.bind.sort();

        data.save();

      }
    }),
    sort: new Button({
      text: 'Drag group to reorder',
      srOnly: true,
      iconName: 'reorder',
      style: ['line'],
      title: 'Drag group to reorder',
      classList: ['group-control-button', 'group-control-sort'],
    }),
    down: new Button({
      text: 'Move this group down',
      srOnly: true,
      iconName: 'arrowKeyboardDown',
      style: ['line'],
      title: 'Move this group right',
      classList: ['group-control-button', 'group-control-up'],
      func: () => {

        groupData.position.destination++;

        if (groupData.position.destination > bookmark.all.length - 1) {
          groupData.position.destination = bookmark.all.length - 1;
        };

        group.mod.item.move(groupData);

        layout.bookmark.clear();

        bookmark.render.item();

        bookmark.bind.sort();

        data.save();

      }
    }),
    edit: new Button({
      text: 'Edit this group',
      srOnly: true,
      iconName: 'edit',
      style: ['line'],
      title: 'Edit this group',
      classList: ['group-control-button', 'group-control-edit'],
      func: () => {

        groupData.type.existing = true;

        modal.open({
          heading: isValidString(groupData.group.name.text) ? 'Edit ' + groupData.group.name.text : 'Edit unnamed group',
          actionText: 'Save',
          content: groupForm.form(groupData),
          size: 'small',
          successAction: () => {

            group.mod.item.edit(groupData);

            layout.bookmark.clear();

            bookmark.render.item();

            bookmark.bind.sort();

            data.save();

          }
        });

      }
    }),
    remove: new Button({
      text: 'Remove this group',
      srOnly: true,
      iconName: 'cross',
      style: ['line'],
      title: 'Remove this group',
      classList: ['group-control-button', 'group-control-remove'],
      func: () => {

        modal.open({
          heading: isValidString(groupData.group.name.text) ? 'Remove ' + groupData.group.name.text : 'Remove unnamed bookmark',
          size: 'small',
          actionText: 'Remove',
          content: 'Are you sure you want to remove this Group and all the Bookmarks within? This can not be undone.',
          successAction: () => {

            group.mod.item.remove(groupData);

            layout.bookmark.clear();

            bookmark.render.item();

            bookmark.bind.sort();

            data.save();

          }
        });

      }
    })
  };

  this.control.disable = () => {
    for (var key in this.control.button) {
      this.control.button[key].disable();
    };
  };

  this.control.enable = () => {
    for (var key in this.control.button) {
      this.control.button[key].enable();
    };
  };

  this.assembleElements = () => {

    this.element.name.text.innerHTML = groupData.group.name.text;

    this.element.name.name.appendChild(this.element.name.text);

    this.element.header.appendChild(this.element.name.name);

    this.element.control.group.appendChild(this.control.button.up.button);

    this.element.control.group.appendChild(this.control.button.sort.button);

    this.element.control.group.appendChild(this.control.button.down.button);

    this.element.control.group.appendChild(this.control.button.edit.button);

    this.element.control.group.appendChild(this.control.button.remove.button);

    this.element.control.control.appendChild(this.element.control.group);

    this.element.header.appendChild(this.element.control.control);

    this.element.group.appendChild(this.element.header);

    this.element.group.appendChild(this.element.body);

    this.element.body.position = groupData.position;

  };

  this.clear = () => {

    clearChildNode(this.element.body);

  };

  this.group = () => {

    this.assembleElements();

    if (state.get.current().bookmark.edit) {
      this.control.enable();
    } else {
      this.control.disable();
    };

    return this.element.group;

  };

};

export { GroupArea };
