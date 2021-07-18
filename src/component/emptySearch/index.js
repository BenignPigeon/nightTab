import { state } from '../state';
import { header } from '../header';

import { node } from '../../utility/node';
import { trimString } from '../../utility/trimString';
import { complexNode } from '../../utility/complexNode';

import './index.css';

export const EmptySearch = function() {

  this.element = {
    empty: node('div|class:search-empty'),
    description: complexNode({
      tag: 'p',
      text: `No bookmarks matching "${trimString(header.element.search.element.input.text.value)}" found`,
      attr: [{
        key: 'class',
        value: 'search-empty-string'
      }]
    }),
    helper: node(`p:"Enter" to Search ${state.get.current().header.search.engine[state.get.current().header.search.engine.selected].name}.|class:search-empty-helper small muted`),
  };

  this.assemble = () => {

    this.element.empty.appendChild(this.element.description);

    this.element.empty.appendChild(this.element.helper);

  };

  this.empty = () => {
    return this.element.empty;
  };

  this.assemble();

};
