import { state } from '../state';
import { data } from '../data';
import { layout } from '../layout';

import { Clock } from '../clock';
import { Date } from '../date';
import { Greeting } from '../greeting';
import { Transitional } from '../transitional';
import { Search } from '../search';
import { Toolbar } from '../toolbar';
import { HeaderItem } from '../headerItem';

import { node } from '../../utility/node';
import { clearChildNode } from '../../utility/clearChildNode';
import { applyCSSVar } from '../../utility/applyCSSVar';
import { applyCSSClass } from '../../utility/applyCSSClass';
import { applyCSSState } from '../../utility/applyCSSState';

import Sortable from 'sortablejs';

import './index.css';

const header = {};

header.item = {};

header.item.mod = {
  move: (origin, destination) => {

    const itemToMove = state.get.current().header.order.splice(origin, 1);

    state.get.current().header.order.splice(destination, 0, itemToMove[0]);

  },
  order: () => {

    const headerItems = ['greeting', 'transitional', 'clock', 'date', 'search'];

    headerItems.forEach((item, i) => {
      switch (item) {

        case 'clock':
          if (state.get.current().header.clock.second.show ||
            state.get.current().header.clock.minute.show ||
            state.get.current().header.clock.hour.show) {
            if (!state.get.current().header.order.includes(item)) {
              state.get.current().header.order.unshift(item);
            };
          } else {
            if (state.get.current().header.order.includes(item)) {
              state.get.current().header.order.splice(state.get.current().header.order.indexOf(item), 1)
            };
          };
          break;

        case 'date':
          if (state.get.current().header.date.day.show ||
            state.get.current().header.date.date.show ||
            state.get.current().header.date.month.show ||
            state.get.current().header.date.year.show) {
            if (!state.get.current().header.order.includes(item)) {
              state.get.current().header.order.unshift(item);
            };
          } else {
            if (state.get.current().header.order.includes(item)) {
              state.get.current().header.order.splice(state.get.current().header.order.indexOf(item), 1)
            };
          };
          break;

        default:
          if (state.get.current().header[item].show) {
            if (!state.get.current().header.order.includes(item)) {
              state.get.current().header.order.unshift(item);
            };
          } else {
            if (state.get.current().header.order.includes(item)) {
              state.get.current().header.order.splice(state.get.current().header.order.indexOf(item), 1)
            };
          };
          break;

      };

    });

  }
};

header.item.current = [];

header.item.render = () => {

  const element = {
    header: node('header|class:header')
  };

  const order = state.get.current().header.order;

  order.forEach((item, i) => {

    switch (item) {
      case 'clock':
        if (state.get.current().header.clock.second.show ||
          state.get.current().header.clock.minute.show ||
          state.get.current().header.clock.hour.show) {

          const headerClock = new Clock();

          const headerItem = new HeaderItem({
            name: item,
            child: headerClock.clock()
          });

          header.item.current.push(headerItem);

          element.header.appendChild(headerItem.item());

        };

        break;

      case 'date':
        if (state.get.current().header.date.day.show || state.get.current().header.date.date.show || state.get.current().header.date.month.show || state.get.current().header.date.year.show) {

          const headerDate = new Date();

          const headerItem = new HeaderItem({
            name: item,
            child: headerDate.date()
          });

          header.item.current.push(headerItem);

          element.header.appendChild(headerItem.item());

        };

        break;

      case 'greeting':
        if (state.get.current().header.greeting.show) {

          const headerGreeting = new Greeting();

          const headerItem = new HeaderItem({
            name: item,
            child: headerGreeting.greeting()
          });

          header.item.current.push(headerItem);

          element.header.appendChild(headerItem.item());

        };

        break;

      case 'transitional':
        if (
          ((
            state.get.current().header.clock.second.show ||
            state.get.current().header.clock.minute.show ||
            state.get.current().header.clock.hour.show
          ) && (
            state.get.current().header.date.day.show ||
            state.get.current().header.date.date.show ||
            state.get.current().header.date.month.show ||
            state.get.current().header.date.year.show
          )) &&
          state.get.current().header.transitional.show
        ) {

          const headerTransitional = new Transitional();

          const headerItem = new HeaderItem({
            name: item,
            child: headerTransitional.transitional()
          });

          header.item.current.push(headerItem);

          element.header.appendChild(headerItem.item());

        };

        break;

      case 'search':
        if (state.get.current().header.search.show) {

          const headerSearch = new Search();

          const headerItem = new HeaderItem({
            name: item,
            child: headerSearch.search()
          });

          header.item.current.push(headerItem);

          element.header.appendChild(headerItem.item());

        };

        break;

    };

    layout.element.header.appendChild(element.header);

  });

  const sortable = Sortable.create(element.header, {
    handle: '.header-control-sort',
    ghostClass: 'header-sort-placeholder',
    animation: 500,
    easing: 'cubic-bezier(0.8, 0.8, 0.4, 1.4)',
    onEnd: (event) => {

      // console.log('============ debug sort ============');
      // console.log(event);
      // console.log('item:', 'origin', event.oldIndex, 'destination', event.newIndex);

      header.item.mod.move(event.oldIndex, event.newIndex);

      data.save();

    }
  });

};

header.edit = {
  open: () => {

    state.get.current().header.edit = true;

    header.edit.render();

  },
  close: () => {

    state.get.current().header.edit = false;

    header.edit.render();

  },
  toggle: () => {

    if (state.get.current().header.edit) {
      header.edit.close();
    } else {
      header.edit.open();
    };

  },
  render: () => {

    applyCSSState('header.edit');

    if (header.item.current.length > 0) {
      header.item.current.forEach((item, i) => {

        if (state.get.current().header.edit) {
          item.control.enable();
        } else {
          item.control.disable();
        };

      });
    };

  }
};

header.init = () => {
  header.edit.render();
  header.item.render();
};

export { header };
