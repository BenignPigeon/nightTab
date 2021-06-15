import { state } from '../state';
import { data } from '../data';
import { modal } from '../modal';
import { bookmark } from '../bookmark';

import { Button } from '../button';

import { node } from '../../utility/node';

import './index.css';

const GroupEmpty = function({ groupData = {}, position = 0 } = {}) {

  this.element = {
    empty: node('div|class:group-empty'),
    control: node('div|class:group-control'),
    headline: node('p:Empty Group|class:group-empty-headline small muted')
  };

  this.control = {};

  this.control.button = {
    remove: new Button({
      text: 'Add a Bookmark',
      style: ['line'],
      size: 'small',
      func: () => {
        bookmark.add.open();
      }
    })
  };


  this.assembleElements = () => {

    this.element.control.appendChild(this.control.button.remove.button);

    this.element.empty.appendChild(this.element.headline);

    this.element.empty.appendChild(this.element.control);

  };

  this.empty = () => {

    this.assembleElements();

    return this.element.empty;

  };

};

export { GroupEmpty };
