import { form } from '../form';
import { icon } from '../icon';

import { Button } from '../button';

import { complexNode } from '../../utility/complexNode';
import { node } from '../../utility/node';

import './index.css';

const Dropdown = function({ text = 'Dropdown', menuItem = [], buttonStyle = [], buttonClassList = [], srOnly = false, iconName = false } = {}) {

  this.state = {
    open: false
  };

  const buttonOptions = { text: text };

  if (srOnly) { buttonOptions.srOnly = true; };

  if (iconName) { buttonOptions.iconName = iconName; };

  if (buttonStyle.length > 0) { buttonOptions.style = buttonStyle; };

  if (buttonClassList.length > 0) { buttonOptions.classList = buttonClassList; };

  this.dropdownButton = new Button(buttonOptions);

  this.dropdown = this.dropdownButton.button;

  this.dropdown.addEventListener('click', () => {

    if (this.state.open) {
      this.state.open = false;
    } else {
      this.state.open = true;
    };

    this.render();

    this.position();

    this.bind();

  });

  this.bind = () => {

    if (this.state.open) {
      this.documentEvent.add();
    } else {
      this.documentEvent.remove();
    };

  };

  this.render = () => {

    if (this.state.open) {
      document.querySelector('body').appendChild(this.menu);
    } else {
      document.querySelector('body').removeChild(this.menu);
    };

  };

  this.position = () => {

    const vWidth = window.innerWidth || doc.documentElement.clientWidth;

    const vHeight = window.innerHeight || doc.documentElement.clientHeight;

    const dropdownRect = this.dropdown.getBoundingClientRect();

    const menuRect = this.menu.getBoundingClientRect();

    let menuTop;

    if ((dropdownRect.bottom + menuRect.height) > vHeight) {
      menuTop = dropdownRect.top - menuRect.height;
    } else {
      menuTop = dropdownRect.bottom;
    };

    let menuLeft = dropdownRect.left + (dropdownRect.width / 2) - (menuRect.width / 2);

    if (menuLeft < 0) {
      menuLeft = 0;
    } else if ((menuLeft + menuRect.width) > vWidth) {
      menuLeft = vWidth - menuRect.width;
    };

    this.menu.style.setProperty('--dropdown-menu-top', menuTop);

    this.menu.style.setProperty('--dropdown-menu-left', menuLeft);

  };

  this.menu = node('div|class:dropdown-menu');

  this.content = node('div|class:dropdown-content');

  if (menuItem.length > 0) {

    menuItem.forEach((item, i) => {

      const menuItemButton = new Button({
        text: item.text,
        classList: ['dropdown-menu-button']
      });

      menuItemButton.button.addEventListener('click', () => {

        item.action();

        this.close();

      });

      this.content.appendChild(menuItemButton.button);

    });

    this.menu.appendChild(this.content);

  };

  this.open = () => {
    this.state.open = true;
    this.bind();
    this.render();
  };

  this.close = () => {
    this.state.open = false;
    this.bind();
    this.render();
  };

  this.documentEvent = {
    add: () => {
      document.addEventListener('mouseup', this.documentEvent.check);
    },
    remove: () => {
      document.removeEventListener('mouseup', this.documentEvent.check);
    },
    check: (event) => {

      var path = event.composedPath();

      if (!path.includes(this.dropdown) && !path.includes(this.menu)) {
        this.close();
      };

    }
  };

};

export { Dropdown };
