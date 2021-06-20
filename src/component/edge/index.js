import { node } from '../../utility/node';

import './index.css';

const Edge = function({
  element
} = {}) {

  this.tick = null;

  this.edge = null;

  this.bind = {
    set: () => {

      this.tick = window.setTimeout(() => {

        this.bind.set();
        this.updatePosition();

      }, 100);

    },
    remove: () => {

      clearTimeout(this.tick);

      this.tick = null;

    }
  };

  this.assemble = () => {

    this.edge = node('div|class:edge is-transparent');

    this.edge.addEventListener('transitionend', (event, elapsed) => {
      if (event.propertyName === 'opacity' && getComputedStyle(this.edge).opacity == 0) {

        this.edge.removeAttribute('style');

        this.edge.parentElement.removeChild(this.edge);

      };
    });

  };

  this.destroy = () => {

    this.edge.classList.remove('is-opaque');

    this.edge.classList.add('is-transparent');

  };

  this.open = () => {

    const html = document.querySelector('html');

    const body = document.querySelector('body');

    body.appendChild(this.edge);

    getComputedStyle(this.edge).opacity;

    this.edge.classList.remove('is-transparent');

    this.edge.classList.add('is-opaque');

    html.classList.add('is-edge');

    this.bind.set();

  };

  this.close = () => {

    this.destroy();

    const html = document.querySelector('html');

    html.classList.remove('is-edge');

    this.bind.remove();

  };

  this.updatePosition = () => {
    if (this.edge && element) {

      const scrollTop = document.documentElement.scrollTop;

      const scrollLeft = document.documentElement.scrollLeft;

      const rect = element.getBoundingClientRect();

      this.edge.style.width = rect.width + 'px';

      this.edge.style.height = rect.height + 'px';

      this.edge.style.top = rect.top + scrollTop + 'px';

      this.edge.style.left = rect.left + scrollLeft + 'px';

    };
  };

  this.assemble();

};

export { Edge };