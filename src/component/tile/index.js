import { state } from '../state';
import { data } from '../data';
import { bookmark } from '../bookmark';
import { group } from '../group';
import { bookmarkForm } from '../bookmarkForm';

import { Button } from '../button';
import { Video } from '../video';
import { StagedGroup } from '../stagedGroup';
import { Modal } from '../modal';

import { node } from '../../utility/node';
import { complexNode } from '../../utility/complexNode';
import { isValidString } from '../../utility/isValidString';
import { trimString } from '../../utility/trimString';

const Tile = function({
  bookmarkData = {},
  preview = false
} = {}) {

  this.element = {
    bookmark: node('div|class:bookmark'),
    front: node('div|class:bookmark-front'),
    back: node('div|class:bookmark-back'),
    content: {
      link: node('a|class:bookmark-link,tabindex:1'),
      display: {
        wrap: node('div|class:bookmark-display-wrap'),
        display: node('div|class:bookmark-display'),
        visual: {
          visual: node('div|class:bookmark-display-visual'),
          letter: complexNode({ tag: 'div', text: bookmarkData.link.display.visual.letter.text, attr: [{ key: 'class', value: 'bookmark-display-visual-letter' }] }),
          icon: node('div|class:bookmark-display-visual-icon'),
          faIcon: node('div|class:' + bookmarkData.link.display.visual.icon.prefix + ' fa-' + bookmarkData.link.display.visual.icon.name),
          image: node('div|class:bookmark-display-visual-image')
        },
        name: {
          name: node('div|class:bookmark-display-name'),
          text: node('div:' + bookmarkData.link.display.name.text + '|class:bookmark-display-name-text')
        }
      },
      background: {
        wrap: node('div|class:bookmark-background-wrap'),
        image: node('div|class:bookmark-background-image'),
        video: node('div|class:bookmark-background-video')
      }
    },
    url: {
      url: node('div|class:bookmark-url'),
      text: node('span|class:bookmark-url-text')
    },
    control: node('div|class:bookmark-control')
  };

  if (preview) { this.element.bookmark.classList.add('bookmark-preview'); };

  this.control = {};

  this.control.button = {
    left: new Button({
      text: 'Move this bookmark left',
      srOnly: true,
      iconName: 'arrowKeyboardLeft',
      style: ['link'],
      title: 'Move this bookmark left',
      classList: ['bookmark-control-button', 'bookmark-control-left'],
      func: () => {

        bookmarkData.position.destination.item--;

        if (bookmarkData.position.destination.item < 0) {
          bookmarkData.position.destination.item = 0;
        };

        bookmark.mod.item.move(bookmarkData);

        bookmark.render.clear();

        bookmark.render.item();

        bookmark.bind.sort();

        data.save();

      }
    }),
    sort: new Button({
      text: 'Drag bookmark to reorder',
      srOnly: true,
      iconName: 'reorder',
      style: ['link'],
      title: 'Drag bookmark to reorder',
      classList: ['bookmark-control-button', 'bookmark-control-sort']
    }),
    right: new Button({
      text: 'Move this bookmark right',
      srOnly: true,
      iconName: 'arrowKeyboardRight',
      style: ['link'],
      title: 'Move this bookmark right',
      classList: ['bookmark-control-button', 'bookmark-control-right'],
      func: () => {

        bookmarkData.position.destination.item++;

        if (bookmarkData.position.destination.item > bookmark.all[bookmarkData.position.destination.group].items.length - 1) {
          bookmarkData.position.destination.item = bookmark.all[bookmarkData.position.destination.group].items.length - 1;
        };

        bookmark.mod.item.move(bookmarkData);

        bookmark.render.clear();

        bookmark.render.item();

        bookmark.bind.sort();

        data.save();

      }
    }),
    edit: new Button({
      text: 'Edit this bookmark',
      srOnly: true,
      iconName: 'edit',
      style: ['link'],
      title: 'Edit this bookmark',
      classList: ['bookmark-control-button', 'bookmark-control-edit'],
      func: () => {

        bookmarkData.type.existing = true;

        const editModal = new Modal({
          heading: isValidString(bookmarkData.link.display.name.text) ? 'Edit ' + bookmarkData.link.display.name.text : 'Edit unnamed bookmark',
          content: bookmarkForm.form(bookmarkData),
          successText: 'Save',
          width: 60,
          maxHeight: true,
          successAction: () => {

            switch (bookmarkData.group.destination) {
              case 'new':

                bookmarkData.position.destination.group = bookmark.all.length;

                const newGroupData = new StagedGroup();

                newGroupData.newGroup({
                  name: bookmarkData.group.name
                });

                group.mod.item.add(newGroupData);

                break;
            };

            bookmark.mod.item.edit(bookmarkData);

            bookmark.mod.propagate.state.apply(bookmarkData);

            bookmark.render.clear();

            bookmark.render.item();

            bookmark.bind.sort();

            data.save();

          }
        });

        editModal.open();

      }
    }),
    remove: new Button({
      text: 'Remove this bookmark',
      srOnly: true,
      iconName: 'cross',
      style: ['link'],
      title: 'Remove this bookmark',
      classList: ['bookmark-control-button', 'bookmark-control-remove'],
      func: () => {

        const removeModal = new Modal({
          heading: isValidString(bookmarkData.link.display.name.text) ? 'Remove ' + bookmarkData.link.display.name.text : 'Remove unnamed bookmark',
          content: 'Are you sure you want to remove this Bookmark? This can not be undone.',
          successText: 'Remove',
          width: 'small',
          successAction: () => {

            bookmark.mod.item.remove(bookmarkData);

            bookmark.render.clear();

            bookmark.render.item();

            bookmark.bind.sort();

            data.save();

          }
        });

        removeModal.open();

      }
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

  this.style = (newBookmarkData) => {

    if (newBookmarkData) {
      bookmarkData = newBookmarkData;
    };

    if (isValidString(bookmarkData.link.url) && !preview) {
      this.element.content.link.setAttribute('href', trimString(bookmarkData.link.url));
    } else {
      this.element.content.link.setAttribute('href', '#');
    };

    if (state.get.current().bookmark.newTab && !preview) {
      this.element.content.link.setAttribute('target', '_blank');
    };

    if (!preview) {
      this.element.bookmark.style.setProperty('--bookmark-transition-delay', bookmarkData.position.origin.item);
    };

    this.element.bookmark.style.setProperty('--bookmark-color-opacity', bookmarkData.link.color.opacity);

    this.element.bookmark.style.setProperty('--bookmark-color-opacity', bookmarkData.link.color.opacity);

    if (bookmarkData.link.color.opacity < 100) {
      this.element.bookmark.style.setProperty('--bookmark-clip-padding', 0);
    };

    if (preview) {
      const alignment = ['top-left', 'top-center', 'top-right', 'center-left', 'center-center', 'center-right', 'bottom-left', 'bottom-center', 'bottom-right'];

      alignment.forEach((item, i) => {
        this.element.bookmark.classList.remove('is-bookmark-alignment-' + item);
      });
      const order = ['visual-name', 'name-visual'];

      order.forEach((item, i) => {
        this.element.bookmark.classList.remove('is-bookmark-order-' + item);
      });
      const direction = ['vertical', 'horizontal'];

      direction.forEach((item, i) => {
        this.element.bookmark.classList.remove('is-bookmark-direction-' + item);
      });
    };

    this.element.bookmark.classList.add('is-bookmark-alignment-' + bookmarkData.link.display.alignment);

    this.element.bookmark.classList.add('is-bookmark-order-' + bookmarkData.link.display.order);

    this.element.bookmark.classList.add('is-bookmark-direction-' + bookmarkData.link.display.direction);

    this.element.bookmark.style.setProperty('--bookmark-display-translate-x', bookmarkData.link.display.translate.x);

    this.element.bookmark.style.setProperty('--bookmark-display-translate-y', bookmarkData.link.display.translate.y);

    this.element.bookmark.style.setProperty('--bookmark-display-rotate', bookmarkData.link.display.rotate);

    this.element.bookmark.style.setProperty('--bookmark-display-gutter', bookmarkData.link.display.gutter);

    this.element.bookmark.style.setProperty('--bookmark-display-visual-size', bookmarkData.link.display.visual.size);

    this.element.bookmark.style.setProperty('--bookmark-display-visual-image-url', 'url(' + trimString(bookmarkData.link.display.visual.image.url) + ')');

    this.element.bookmark.style.setProperty('--bookmark-display-name-size', bookmarkData.link.display.name.size);

    this.element.bookmark.style.setProperty('--bookmark-border', bookmarkData.link.border);

    if (bookmarkData.link.accent.by == 'custom') {
      this.element.bookmark.style.setProperty('--theme-accent-r', bookmarkData.link.accent.rgb.r);
      this.element.bookmark.style.setProperty('--theme-accent-g', bookmarkData.link.accent.rgb.g);
      this.element.bookmark.style.setProperty('--theme-accent-b', bookmarkData.link.accent.rgb.b);
      this.element.bookmark.style.setProperty('--theme-accent', 'var(--theme-accent-r), var(--theme-accent-g), var(--theme-accent-b)');

      this.element.bookmark.style.setProperty('--theme-accent-text', '0, 0%, calc(((((var(--theme-accent-r) * var(--theme-t-r)) + (var(--theme-accent-g) * var(--theme-t-g)) + (var(--theme-accent-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%)');

      this.element.bookmark.style.setProperty('--bookmark-display-visual-color', 'var(--theme-accent)');
      this.element.bookmark.style.setProperty('--bookmark-display-visual-color-focus-hover', 'var(--theme-accent)');
    };

    if (bookmarkData.link.color.by == 'custom') {
      this.element.bookmark.style.setProperty('--theme-color-r', bookmarkData.link.color.rgb.r);
      this.element.bookmark.style.setProperty('--theme-color-g', bookmarkData.link.color.rgb.g);
      this.element.bookmark.style.setProperty('--theme-color-b', bookmarkData.link.color.rgb.b);

      this.element.bookmark.style.setProperty('--theme-color-h', bookmarkData.link.color.hsl.h);
      this.element.bookmark.style.setProperty('--theme-color-s', bookmarkData.link.color.hsl.s);
      this.element.bookmark.style.setProperty('--theme-color-l', bookmarkData.link.color.hsl.l);

      this.element.bookmark.style.setProperty('--theme-color', bookmarkData.link.color.hsl.h + ', ' + bookmarkData.link.color.hsl.s + '%, ' + bookmarkData.link.color.hsl.l + '%');
      this.element.bookmark.style.setProperty('--theme-color-text', '0, 0%, calc(((((var(--theme-color-r) * var(--theme-t-r)) + (var(--theme-color-g) * var(--theme-t-g)) + (var(--theme-color-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%)');

      this.element.bookmark.style.setProperty('--bookmark-color', 'var(--theme-color)');
      this.element.bookmark.style.setProperty('--bookmark-color-focus-hover', 'var(--theme-color)');

      this.element.bookmark.style.setProperty('--bookmark-display-name-color', 'var(--theme-color-text)');
      this.element.bookmark.style.setProperty('--bookmark-display-name-color-focus-hover', 'var(--theme-color-text)');

      this.element.bookmark.style.setProperty('--button-link-text', 'var(--theme-color-text)');
      this.element.bookmark.style.setProperty('--button-link-text-focus-hover', 'var(--theme-color-text)');
      this.element.bookmark.style.setProperty('--button-link-text-active', 'var(--theme-color-text)');
    };

    if (bookmarkData.link.background.show) {
      this.element.bookmark.style.setProperty('--bookmark-background-opacity', bookmarkData.link.background.opacity);

      switch (bookmarkData.link.background.type) {
        case 'image':
          if (isValidString(bookmarkData.link.background.image.url)) {
            this.element.bookmark.style.setProperty('--bookmark-background-image-url', 'url(' + trimString(bookmarkData.link.background.image.url) + ')');
          };
          break;
      };
    };

    if (bookmarkData.link.shape.tall) {
      this.element.bookmark.classList.add('bookmark-tall');
    };

    if (bookmarkData.link.shape.wide) {
      this.element.bookmark.classList.add('bookmark-wide');
    };

  };

  this.assemble = () => {

    if (bookmarkData.link.display.visual.show || bookmarkData.link.display.name.show) {
      if (bookmarkData.link.display.visual.show) {
        switch (bookmarkData.link.display.visual.type) {
          case 'letter':
            if (isValidString(bookmarkData.link.display.visual.letter.text)) {
              this.element.content.display.visual.visual.appendChild(this.element.content.display.visual.letter);
              this.element.content.display.display.appendChild(this.element.content.display.visual.visual);
            };
            break;

          case 'icon':
            if (isValidString(bookmarkData.link.display.visual.icon.name)) {
              this.element.content.display.visual.icon.appendChild(this.element.content.display.visual.faIcon);
              this.element.content.display.visual.visual.appendChild(this.element.content.display.visual.icon);
              this.element.content.display.display.appendChild(this.element.content.display.visual.visual);
            };
            break;

          case 'image':
            if (isValidString(bookmarkData.link.display.visual.image.url)) {
              this.element.content.display.visual.visual.appendChild(this.element.content.display.visual.image);
              this.element.content.display.display.appendChild(this.element.content.display.visual.visual);
            };
            break;
        };
      };

      if (bookmarkData.link.display.name.show && isValidString(bookmarkData.link.display.name.text)) {
        this.element.content.display.name.name.appendChild(this.element.content.display.name.text);
        this.element.content.display.display.appendChild(this.element.content.display.name.name);
      };

      this.element.content.display.wrap.appendChild(this.element.content.display.display);

      this.element.content.link.appendChild(this.element.content.display.wrap);
    };

    if (bookmarkData.link.background.show) {

      switch (bookmarkData.link.background.type) {
        case 'image':
          this.element.content.background.wrap.appendChild(this.element.content.background.image);
          break;

        case 'video':
          this.element.content.background.wrap.appendChild(this.element.content.background.video);

          if (isValidString(bookmarkData.link.background.video.url)) {
            const backgroundVideoElement = new Video({
              url: bookmarkData.link.background.video.url
            });

            this.element.content.background.video.appendChild(backgroundVideoElement.video);
          };

          break;
      };

      this.element.content.link.appendChild(this.element.content.background.wrap);
    };

    this.element.bookmark.appendChild(this.element.front);

    this.element.bookmark.appendChild(this.element.back);

    this.element.front.appendChild(this.element.content.link);

    this.element.control.appendChild(this.control.button.left.button);

    this.element.control.appendChild(this.control.button.sort.button);

    this.element.control.appendChild(this.control.button.right.button);

    this.element.control.appendChild(this.control.button.edit.button);

    this.element.control.appendChild(this.control.button.remove.button);

    this.element.back.appendChild(this.element.control);

    if (isValidString(bookmarkData.link.url)) {

      this.element.url.text.textContent = trimString(bookmarkData.link.url).replace(/^https?\:\/\//i, '').replace(/\/+$/, '');

      this.element.url.url.appendChild(this.element.url.text);

      this.element.back.appendChild(this.element.url.url);

    };

    if (state.get.current().bookmark.edit) {
      this.control.enable();
    } else {
      this.control.disable();
    };

  };

  this.tile = () => {

    return this.element.bookmark;

  };

  this.update = (newBookmarkData) => {

    this.style(newBookmarkData);

  };

  this.assemble();

  this.style();

};

export { Tile };
