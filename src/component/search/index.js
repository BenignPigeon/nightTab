import { state } from '../state';
import { bookmark } from '../bookmark';

import * as form from '../form';

import { Control_text } from '../control/text';

import { node } from '../../utility/node';
import { trimString } from '../../utility/trimString';
import { isValidString } from '../../utility/isValidString';
import { complexNode } from '../../utility/complexNode';

import './index.css';

export const Search = function({} = {}) {

  this.element = {
    search: node('div|class:search'),
    input: new Control_text({
      object: state.get.current(),
      path: 'search.string',
      id: 'search-string',
      value: '',
      placeholder: 'Search Bookmarks or',
      labelText: 'Search',
      srOnly: true,
      action: () => {
        this.action();
      }
    })
  };

  let placeholder = '';

  if (state.get.current().bookmark.show) {
    placeholder = 'Find bookmarks or search';
  } else {
    placeholder = 'Search';
  };

  placeholder = placeholder + ' ' + state.get.current().header.search.engine[state.get.current().header.search.engine.selected].name;

  // search.setAttribute('action', state.get.current().header.search.engine[state.get.current().header.search.engine.selected].url);

  this.element.input.text.placeholder = placeholder;

  this.action = () => {

    console.log(bookmark.all);
    // bookmark.all.forEach((item, i) => {
    //   item.items.forEach((item, i) => {
    //
    //   });
    // });

  };


  this.assemble = () => {

    this.element.search.appendChild(this.element.input.text);

  };

  this.search = () => {

    return this.element.search;

  };

  this.assemble();

};
