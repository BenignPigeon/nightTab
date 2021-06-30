import { state } from '../state';
import { data } from '../data';
import { header } from '../header';

import { Button } from '../button';
import { Modal } from '../modal';

import { node } from '../../utility/node';
import { complexNode } from '../../utility/complexNode';
import { isValidString } from '../../utility/isValidString';
import { trimString } from '../../utility/trimString';
import { clearChildNode } from '../../utility/clearChildNode';

import './index.css';

const HeaderItem = function({
  name = false,
  index = false,
  child = false
} = {}) {

  this.element = {
    item: node('div|class:header-item header-item-' + name),
    body: node('div|class:header-item-body'),
    control: {
      control: node('div|class:header-item-control'),
      group: node('div|class:header-item-control-group form-group form-group-horizontal')
    }
  };

  this.control = {};

  this.control.button = {
    sort: new Button({
      text: 'Drag header item to reorder',
      srOnly: true,
      iconName: 'drag',
      style: ['line'],
      title: 'Drag header item to reorder',
      classList: ['header-control-button', 'header-control-sort'],
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

  this.assemble = () => {

    this.element.control.group.appendChild(this.control.button.sort.button);

    this.element.control.control.appendChild(this.element.control.group);

    this.element.item.appendChild(this.element.control.control);

    if (child) {

      this.element.body.appendChild(child);

      this.element.item.appendChild(this.element.body);

    };

  };

  this.item = () => {

    this.assemble();

    if (state.get.current().group.edit) {
      this.control.enable();
    } else {
      this.control.disable();
    };

    return this.element.item;

  };

};

export { HeaderItem };
