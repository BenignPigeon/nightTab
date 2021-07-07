import { state } from '../state';

import { node } from '../../utility/node';

import './index.css';

const Edge = function({ element = false, padding = 0 } = {}) {

  this.tick = null;

  this.element = {
    edge: node('div|class:edge is-transparent')
  };

  this.bind = {
    set: () => {

      this.tick = window.setTimeout(() => {

        this.bind.set();

        this.track();

      }, 100);

    },
    remove: () => {

      clearTimeout(this.tick);

      this.tick = null;

    }
  };

  this.assemble = () => {

    this.element.edge = node('div|class:edge is-transparent');

    this.element.edge.addEventListener('transitionend', (event) => {

      if (event.propertyName === 'opacity' && getComputedStyle(this.element.edge).opacity == 0) {

        this.element.edge.parentElement.removeChild(this.element.edge);

        this.element.edge.removeAttribute('style');

        this.element.edge.classList.remove('is-edge-opening');

      };

      if (event.propertyName === 'opacity' && getComputedStyle(this.element.edge).opacity == 1) {

        this.bind.set();

        this.element.edge.classList.remove('is-edge-opening');

      };

    });

  };

  this.destroy = () => {

    this.element.edge.classList.remove('is-opaque');

    this.element.edge.classList.add('is-transparent');

  };

  this.show = () => {

    const html = document.querySelector('html');

    const body = document.querySelector('body');

    body.appendChild(this.element.edge);

    getComputedStyle(this.element.edge).opacity;

    getComputedStyle(this.element.edge).width;

    getComputedStyle(this.element.edge).height;

    getComputedStyle(this.element.edge).top;

    getComputedStyle(this.element.edge).left;

    this.element.edge.classList.remove('is-transparent');

    this.element.edge.classList.add('is-opaque');

    this.track();

    this.element.edge.classList.add('is-edge-opening');

    html.classList.add('is-edge');

  };

  this.hide = () => {

    this.destroy();

    const html = document.querySelector('html');

    html.classList.remove('is-edge');

    this.bind.remove();

  };

  this.track = () => {

    if (element) {

      const html = document.querySelector('html');

      const scrollTop = document.documentElement.scrollTop;

      const scrollLeft = document.documentElement.scrollLeft;

      const rect = element.getBoundingClientRect();

      const fontSize = parseInt(getComputedStyle(html).fontSize, 10);

      const layoutSpace = parseFloat(getComputedStyle(html).getPropertyValue('--layout-space'), 10);

      const layoutSize = state.get.current().layout.size;

      // this.element.edge.style.setProperty('--edge-width', rect.width + (((layoutSpace * fontSize) * padding) * 2));
      //
      // this.element.edge.style.setProperty('--edge-height', rect.height + (((layoutSpace * fontSize) * padding) * 2));
      //
      // this.element.edge.style.setProperty('--edge-top', rect.top + scrollTop - ((layoutSpace * fontSize) * padding));
      //
      // this.element.edge.style.setProperty('--edge-left', rect.left + scrollLeft - ((layoutSpace * fontSize) * padding));

      this.element.edge.style.width = rect.width + ((layoutSize / 100) * (((layoutSpace * fontSize) * padding) * 2)) + 'px';

      this.element.edge.style.height = rect.height + ((layoutSize / 100) * (((layoutSpace * fontSize) * padding) * 2)) + 'px';

      this.element.edge.style.top = rect.top + scrollTop - ((layoutSize / 100) * ((layoutSpace * fontSize) * padding)) + 'px';

      this.element.edge.style.left = rect.left + scrollLeft - ((layoutSize / 100) * ((layoutSpace * fontSize) * padding)) + 'px';

    };

  };

  this.assemble();

};

export { Edge };
