import { state } from '../state';
import { data } from '../data';
import { layout } from '../layout';
import { group } from '../group';
import { bookmarkDefault } from '../bookmarkDefault';
import { bookmarkPreset } from '../bookmarkPreset';

import { BookmarkTile } from '../bookmarkTile';
import { GroupEmpty } from '../groupEmpty';
import { BookmarkForm } from '../bookmarkForm';
import { StagedBookmark } from '../stagedBookmark';
import { StagedGroup } from '../stagedGroup';
import { Modal } from '../modal';

import { node } from '../../utility/node';
import { clearChildNode } from '../../utility/clearChildNode';
import { applyCSSVar } from '../../utility/applyCSSVar';
import { applyCSSClass } from '../../utility/applyCSSClass';
import { applyCSSState } from '../../utility/applyCSSState';

import Sortable from 'sortablejs';

import './index.css';

const bookmark = {};

bookmark.element = {
  area: node('div|class:bookmark-area')
};

bookmark.all = bookmarkPreset.get();

bookmark.tile = {
  current: []
};

bookmark.item = {
  mod: {
    add: (bookmarkData) => {

      bookmark.all[bookmarkData.position.destination.group].items.splice(bookmarkData.position.destination.item, 0, bookmarkData.link);

    },
    edit: (bookmarkData) => {

      bookmark.all[bookmarkData.position.origin.group].items.splice(bookmarkData.position.origin.item, 1);

      bookmark.all[bookmarkData.position.destination.group].items.splice(bookmarkData.position.destination.item, 0, bookmarkData.link);

    },
    move: (bookmarkData) => {

      bookmarkData.link = bookmark.all[bookmarkData.position.origin.group].items.splice(bookmarkData.position.origin.item, 1)[0];

      bookmark.all[bookmarkData.position.destination.group].items.splice(bookmarkData.position.destination.item, 0, bookmarkData.link);

    },
    remove: (bookmarkData) => {

      bookmark.all[bookmarkData.position.origin.group].items.splice(bookmarkData.position.origin.item, 1);

    },
    propagate: (bookmarkData) => {

      if (bookmarkData.propagate.display || bookmarkData.propagate.layout || bookmarkData.propagate.theme) {

        bookmark.all.forEach((item, i) => {

          item.items.forEach((item, i) => {

            if (bookmarkData.propagate.display) {
              item.display.visual.show = bookmarkData.link.display.visual.show;
              item.display.name.show = bookmarkData.link.display.name.show;
            };

            if (bookmarkData.propagate.layout) {
              item.display.visual.size = bookmarkData.link.display.visual.size;
              item.display.name.size = bookmarkData.link.display.name.size;
              item.display.gutter = bookmarkData.link.display.gutter;
              item.display.rotate = bookmarkData.link.display.rotate;
              item.display.translate = bookmarkData.link.display.translate;
              item.display.alignment = bookmarkData.link.display.alignment;
              item.display.direction = bookmarkData.link.display.direction;
              item.display.order = bookmarkData.link.display.order;
              item.border = bookmarkData.link.border;
            };

            if (bookmarkData.propagate.theme) {
              item.accent = bookmarkData.link.accent;
              item.color = bookmarkData.link.color;
            };

          });

        });

      };

    }
  },
  render: () => {

    bookmark.item.clear();

    group.item.render();

    bookmark.tile.current = [];

    bookmark.all.forEach((item, i) => {

      const groupIndex = i;

      const targetGroupArea = group.area.current[i].element.body;

      if (item.items.length > 0) {

        item.items.forEach((item, i) => {

          const itemIndex = i;

          const currentBookmarkData = new StagedBookmark(item);

          currentBookmarkData.position.origin.group = groupIndex;

          currentBookmarkData.position.origin.item = itemIndex;

          currentBookmarkData.position.destination.group = groupIndex;

          currentBookmarkData.position.destination.item = itemIndex;

          const bookmarkTile = new BookmarkTile({ bookmarkData: currentBookmarkData });

          bookmarkTile.tile().groupIndex = groupIndex;

          bookmarkTile.tile().index = i;

          targetGroupArea.appendChild(bookmarkTile.tile());

          bookmark.tile.current.push(bookmarkTile);

        });

      } else {

        const emptyGroupItem = new GroupEmpty({
          groupIndex: groupIndex
        });

        targetGroupArea.appendChild(emptyGroupItem.empty());

      };

    });

    layout.element.bookmark.appendChild(bookmark.element.area);

  },
  clear: () => {

    clearChildNode(bookmark.element.area);

  }
};

bookmark.edit = {
  open: () => {

    state.get.current().bookmark.edit = true;

    bookmark.edit.render();

  },
  close: () => {

    state.get.current().bookmark.edit = false;

    bookmark.edit.render();

  },
  toggle: () => {

    if (state.get.current().bookmark.edit) {
      bookmark.edit.close();
    } else {
      bookmark.edit.open();
    };

  },
  render: () => {

    applyCSSState('bookmark.edit');

    if (bookmark.tile.current.length > 0) {
      bookmark.tile.current.forEach((item, i) => {

        if (state.get.current().bookmark.edit) {
          item.control.enable();
        } else {
          item.control.disable();
        };

      });
    };

  }
};

bookmark.direction = {
  mod: {
    vertical: () => {

      bookmark.all.forEach((item, i) => {
        item.items.forEach((item, i) => {

          item.display.direction = 'vertical';

        });
      });

    },
    horizontal: () => {

      bookmark.all.forEach((item, i) => {
        item.items.forEach((item, i) => {

          item.display.direction = 'horizontal';

        });
      });

    }
  }
};

bookmark.add = {
  mod: {
    open: () => { state.get.current().bookmark.add = true; },
    close: () => { state.get.current().bookmark.add = false; }
  },
  render: ({
    groupIndex = false
  } = {}) => {

    const newBookmarkData = new StagedBookmark();

    newBookmarkData.type.new = true;

    newBookmarkData.position.destination.item = bookmark.all[0].items.length;

    if (groupIndex || groupIndex === 0) {
      newBookmarkData.position.destination.group = groupIndex;

      newBookmarkData.position.destination.item = bookmark.all[groupIndex].items.length;
    };

    const bookmarkForm = new BookmarkForm({ bookmarkData: newBookmarkData });

    const addModal = new Modal({
      heading: 'Add a new Bookmark',
      content: bookmarkForm.form(),
      successText: 'Add',
      width: 60,
      maxHeight: true,
      openAction: () => {

        bookmark.add.mod.open();

        data.save();

      },
      closeAction: () => {

        bookmark.add.mod.close();

        data.save();

      },
      successAction: () => {

        switch (newBookmarkData.group.destination) {
          case 'new':

            const newGroupData = new StagedGroup();

            newGroupData.group.name.text = newBookmarkData.group.name;

            newGroupData.newGroup();

            group.item.mod.add(newGroupData);

            newBookmarkData.position.destination.group = bookmark.all.length - 1;

            break;

        };

        newBookmarkData.link.timestamp = new Date().getTime();

        bookmark.item.mod.add(newBookmarkData);

        bookmark.item.mod.propagate(newBookmarkData);

        bookmark.item.clear();

        bookmark.item.render();

        bookmark.sort.bind();

        bookmark.add.mod.close();

        data.save();

      },
      dismissAction: () => {

        bookmark.add.mod.close();

        data.save();

      }
    });

    addModal.open();

  }
};

bookmark.sort = {
  bind: () => {

    group.area.current.forEach((item, i) => {

      const sortable = Sortable.create(item.element.body, {
        handle: '.bookmark-control-sort',
        group: 'bookmark-sort',
        ghostClass: 'bookmark-sort-placeholder',
        animation: 500,
        easing: 'cubic-bezier(0.8, 0.8, 0.4, 1.4)',
        filter: '.group-empty',
        onEnd: (event) => {

          // console.log('============ debug sort ============');
          // console.log(event);
          // console.log('group:', 'origin', event.from.position.origin, 'destination', event.to.position.origin);
          // console.log('item:', 'origin', event.oldIndex, 'destination', event.newIndex);

          const newBookmarkData = new StagedBookmark();

          newBookmarkData.position.origin.group = event.from.position.origin;

          newBookmarkData.position.origin.item = event.oldIndex;

          newBookmarkData.position.destination.group = event.to.position.origin;

          newBookmarkData.position.destination.item = event.newIndex;

          newBookmarkData.type.existing = true;

          bookmark.item.mod.move(newBookmarkData);

          layout.bookmark.clear();

          bookmark.item.clear();

          bookmark.item.render();

          bookmark.sort.bind();

          data.save();

        }
      });

    });

  }
};

bookmark.restore = (dataToRestore) => {
  bookmark.all = dataToRestore.bookmark;
  console.log('bookmark restored');
};

bookmark.init = () => {
  applyCSSVar([
    'bookmark.size'
  ]);
  applyCSSClass([
    'bookmark.orientation',
    'bookmark.style'
  ]);
  applyCSSState([
    'bookmark.show',
    'bookmark.hoverScale.show',
    'bookmark.shadow.show',
    'bookmark.line.show',
    'bookmark.url.show'
  ]);

  bookmark.add.mod.close();
  bookmark.edit.render();
  bookmark.item.render();
  bookmark.sort.bind();
};

export { bookmark };
