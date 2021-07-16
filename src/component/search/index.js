import { state } from '../state';
import { bookmark } from '../bookmark';

import * as form from '../form';

import { Control_text } from '../control/text';
import { KeyboardShortcut } from '../keyboardShortcut';

import { node } from '../../utility/node';
import { trimString } from '../../utility/trimString';
import { isValidString } from '../../utility/isValidString';
import { complexNode } from '../../utility/complexNode';

import './index.css';

export const Search = function({} = {}) {

  this.element = {
    search: node('div|class:search'),
    form: node('form|class:search,action,method:get'),
    submit: node('input|type:submit,value:Search,class:is-hidden'),
    input: new Control_text({
      object: state.get.current(),
      path: 'header.search.string',
      id: 'header-search-string',
      value: '',
      placeholder: 'Search Bookmarks or',
      labelText: 'Search',
      srOnly: true,
      action: () => {
        this.performSearch();
      }
    })
  };

  this.placeholder = () => {

    let placeholder = '';

    if (state.get.current().bookmark.show) {
      placeholder = 'Find bookmarks or search';
    } else {
      placeholder = 'Search';
    };

    placeholder = placeholder + ' ' + state.get.current().header.search.engine[state.get.current().header.search.engine.selected].name;

    this.element.input.text.placeholder = placeholder;

  };

  this.bind = {
    add: () => {

      this.element.input.text.addEventListener('keydown', this.clearSearch);

    },
    remove: () => {

      this.element.input.text.removeEventListener('keydown', this.clearSearch);

    }
  };

  this.delete = new KeyboardShortcut({ keycode: 8, action: () => { this.close(); } });

  this.engine = {
    set: () => {
      this.element.form.setAttribute('action', state.get.current().header.search.engine[state.get.current().header.search.engine.selected].url);
    },
    bind: () => {
      this.element.input.addEventListener()
    }
  };

  this.performSearch = () => {

    // state.get.current().search = true;

    const searchString = trimString(this.element.input.text.value).toLowerCase();

    bookmark.all.forEach((item, i) => {
      item.items.forEach((item, i) => {

        // item.searchMatch = false;
        //
        // let matchUrl = isValidString(item.url) && item.url.toLowerCase().includes(searchString);
        //
        // let matchName = isValidString(item.display.name.text) && trimString(item.display.name.text).toLowerCase().includes(searchString);
        //
        // if (matchUrl || matchName) {
        //   item.searchMatch = true;
        // };

      });
    });

    bookmark.item.clear();
    bookmark.item.render();
    bookmark.sort.bind();

  };

  this.clearSearch = () => {

    // state.get.current().search = false;

    bookmark.all.forEach((item, i) => {
      item.items.forEach((item, i) => {

        delete item.searchMatch;

      });
    });

  };

  this.assemble = () => {

    this.element.input.text.type = 'Search';

    this.element.input.text.name = 'q';

    this.element.form.appendChild(this.element.input.text);

    this.element.form.appendChild(this.element.submit);

    this.element.search.appendChild(this.element.form);

  };

  this.search = () => {

    return this.element.search;

  };

  this.assemble();

  this.placeholder();

  this.engine.set();

  this.bind.add();

  this.clearSearch();

};
