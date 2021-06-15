import { state } from '../state';
import { data } from '../data';

import { node } from '../../utility/node';
import { get } from '../../utility/get';
import { set } from '../../utility/set';
import { clearChildNode } from '../../utility/clearChildNode';

import './index.css';

const layout = {}

layout.element = {
  layout: node('div|class:layout'),
  header: node('div|class:layout-header'),
  bookmark: node('div|class:layout-bookmark')
};

layout.area = {
  render: () => {

    const body = document.querySelector('body');

    layout.element.layout.appendChild(layout.element.header);

    layout.element.layout.appendChild(layout.element.bookmark);

    body.appendChild(layout.element.layout);

    const resize = new ResizeObserver((entries) => {

      const size = { sm: 550, md: 700, lg: 900, xl: 1100, xxl: 1600 };

      let breakpoint;

      entries.forEach(function(entry) {

        if (entry.contentRect.width <= size.sm) {
          breakpoint = 'xs';
        } else if (entry.contentRect.width > size.sm && entry.contentRect.width <= size.md) {
          breakpoint = 'sm';
        } else if (entry.contentRect.width > size.md && entry.contentRect.width <= size.lg) {
          breakpoint = 'md';
        } else if (entry.contentRect.width > size.lg && entry.contentRect.width <= size.xl) {
          breakpoint = 'lg';
        } else if (entry.contentRect.width > size.xl && entry.contentRect.width <= size.xxl) {
          breakpoint = 'xl';
        } else if (entry.contentRect.width > size.xxl) {
          breakpoint = 'xxl';
        };

      });

      set({
        object: state.get.current(),
        path: 'layout.breakpoint',
        value: breakpoint
      });

      layout.class.render.breakpoint();

    });

    resize.observe(layout.element.layout);
  },
  clear: () => {
    clearChildNode(layout.element.layout);
  }
};

layout.header = {
  render: () => {},
  clear: () => {
    clearChildNode(layout.element.header);
  }
};

layout.bookmark = {
  render: () => {},
  clear: () => {
    clearChildNode(layout.element.bookmark);
  }
};

layout.class = {
  render: {
    breakpoint: () => {

      const html = document.querySelector('html');

      const size = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

      size.forEach((item, i) => {
        html.classList.remove('is-layout-breakpoint-' + item);
      });

      switch (state.get.current().layout.breakpoint) {
        case 'xs':
          html.classList.add('is-layout-breakpoint-xs');
          break;

        case 'sm':
          html.classList.add('is-layout-breakpoint-sm');
          break;

        case 'md':
          html.classList.add('is-layout-breakpoint-md');
          break;

        case 'lg':
          html.classList.add('is-layout-breakpoint-lg');
          break;

        case 'xl':
          html.classList.add('is-layout-breakpoint-xl');
          break;

        case 'xxl':
          html.classList.add('is-layout-breakpoint-xxl');
          break;

      };
    }
  }
};

layout.variable = {
  render: {
    size: () => {

      const html = document.querySelector('html');

      html.style.setProperty('--layout-size', state.get.current().layout.size);

    },
    width: () => {

      const html = document.querySelector('html');

      html.style.setProperty('--layout-width', state.get.current().layout.width);

    },
    padding: () => {

      const html = document.querySelector('html');

      html.style.setProperty('--layout-padding', state.get.current().layout.padding);

    },
    gutter: () => {

      const html = document.querySelector('html');

      html.style.setProperty('--layout-gutter', state.get.current().layout.gutter);

    }
  }
};

layout.init = function() {
  layout.area.render();
  layout.class.render.breakpoint();
  layout.variable.render.size();
  layout.variable.render.width();
  layout.variable.render.padding();
  layout.variable.render.gutter();
};

export { layout };
