import { state } from '../state';
import { data } from '../data';
import { layout } from '../layout';
import { group } from '../group';
import { bookmarkForm } from '../bookmarkForm';
import { bookmarkDefault } from '../bookmarkDefault';
import { bookmarkPreset } from '../bookmarkPreset';

import { Tile } from '../tile';
import { GroupEmpty } from '../groupEmpty';
import { StagedBookmark } from '../stagedBookmark';
import { StagedGroup } from '../stagedGroup';
import { Modal } from '../modal';

import { node } from '../../utility/node';

import Sortable from 'sortablejs';

import './index.css';

const bookmark = {};

bookmark.all = bookmarkPreset.get();

bookmark.mod = {};

bookmark.mod.add = {
  open: function() {
    state.get.current().bookmark.add = true;
  },
  close: function() {
    state.get.current().bookmark.add = false;
  },
  toggle: function() {
    if (state.get.current().bookmark.add) {
      bookmark.mod.add.close();
    } else {
      bookmark.mod.add.open();
    };
  }
};

bookmark.mod.edit = {
  open: function() {
    state.get.current().bookmark.edit = true;
  },
  close: function() {
    state.get.current().bookmark.edit = false;
  },
  toggle: function() {
    if (state.get.current().bookmark.edit) {
      bookmark.mod.edit.close();
    } else {
      bookmark.mod.edit.open();
    };
  }
};

bookmark.mod.item = {};

bookmark.mod.item.add = function(bookmarkData) {
  bookmark.all[bookmarkData.position.destination.group].items.splice(bookmarkData.position.destination.item, 0, bookmarkData.link);
};

bookmark.mod.item.edit = function(bookmarkData) {
  bookmark.all[bookmarkData.position.origin.group].items.splice(bookmarkData.position.origin.item, 1);

  bookmark.all[bookmarkData.position.destination.group].items.splice(bookmarkData.position.destination.item, 0, bookmarkData.link);
};

bookmark.mod.item.move = function(bookmarkData) {
  bookmarkData.link = bookmark.all[bookmarkData.position.origin.group].items.splice(bookmarkData.position.origin.item, 1)[0];

  bookmark.all[bookmarkData.position.destination.group].items.splice(bookmarkData.position.destination.item, 0, bookmarkData.link);
};

bookmark.mod.item.remove = function(bookmarkData) {
  bookmark.all[bookmarkData.position.origin.group].items.splice(bookmarkData.position.origin.item, 1);
};

bookmark.mod.layout = {};

bookmark.mod.layout.direction = {
  vertical: () => {

    bookmark.all.forEach(function(item, i) {

      item.items.forEach((item, i) => {

        item.display.direction = 'vertical';

      });

    });

  },
  horizontal: () => {

    bookmark.all.forEach(function(item, i) {

      item.items.forEach((item, i) => {

        item.display.direction = 'horizontal';

      });

    });

  }
};

bookmark.mod.propagate = {};

bookmark.mod.propagate.state = {
  current: {
    visual: false,
    name: false,
    layout: false,
    theme: false
  },
  reset: function() {
    for (let key in bookmark.mod.propagate.state.current) {
      bookmark.mod.propagate.state.current[key] = false;
    }
  },
  apply: function(bookmarkData) {

    bookmark.all.forEach(function(item, i) {

      item.items.forEach((item, i) => {

        if (bookmark.mod.propagate.state.current.layout) {
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

        if (bookmark.mod.propagate.state.current.visual) {
          item.display.visual.show = bookmarkData.link.display.visual.show;
        };

        if (bookmark.mod.propagate.state.current.name) {
          item.display.name.show = bookmarkData.link.display.name.show;
        };

        if (bookmark.mod.propagate.state.current.theme) {
          item.accent = bookmarkData.link.accent;
          item.color = bookmarkData.link.color;
        };

      });

    });

    bookmark.mod.propagate.state.reset();

  }
};

bookmark.render = {};

bookmark.render.clear = function() {

  group.area.current.forEach((item, i) => {
    item.clear();
  });

};

bookmark.tile = {
  current: []
};

bookmark.render.tile = {};

bookmark.render.tile.edit = {
  open: function() {
    if (bookmark.tile.current.length > 0) {
      bookmark.tile.current.forEach((item, i) => {
        item.control.enable();
      });
    };
  },
  close: function() {
    if (bookmark.tile.current.length > 0) {
      bookmark.tile.current.forEach((item, i) => {
        item.control.disable();
      });
    };
  }
};

bookmark.render.item = function() {

  layout.bookmark.clear();

  group.render.item();

  bookmark.tile.current = [];

  bookmark.all.forEach(function(item, i) {

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

        const tile = new Tile({ bookmarkData: currentBookmarkData });

        tile.tile().groupIndex = groupIndex;

        tile.tile().index = i;

        targetGroupArea.appendChild(tile.tile());

        bookmark.tile.current.push(tile);

      });

    } else {

      const emptyGroup = new GroupEmpty({
        position: groupIndex
      });

      targetGroupArea.appendChild(emptyGroup.empty());

    };

  });

};

bookmark.render.style = function() {
  const html = document.querySelector('html');
};

bookmark.render.class = function() {
  const html = document.querySelector('html');

  if (state.get.current().bookmark.edit) {
    html.classList.add('is-bookmark-edit');
  } else {
    html.classList.remove('is-bookmark-edit');
  };

  const style = ['block', 'list'];

  style.forEach((item, i) => {
    html.classList.remove('is-bookmark-style-' + item);
  });

  html.classList.add('is-bookmark-style-' + state.get.current().bookmark.style);

  const orientation = ['top', 'bottom'];

  orientation.forEach((item, i) => {
    html.classList.remove('is-bookmark-orientation-' + item);
  });

  html.classList.add('is-bookmark-orientation-' + state.get.current().bookmark.orientation);

  if (state.get.current().bookmark.url.show) {
    html.classList.add('is-bookmark-url-show');
  } else {
    html.classList.remove('is-bookmark-url-show');
  };

  if (state.get.current().bookmark.line.show) {
    html.classList.add('is-bookmark-line-show');
  } else {
    html.classList.remove('is-bookmark-line-show');
  };

  if (state.get.current().bookmark.shadow.show) {
    html.classList.add('is-bookmark-shadow-show');
  } else {
    html.classList.remove('is-bookmark-shadow-show');
  };

  if (state.get.current().bookmark.hoverScale.show) {
    html.classList.add('is-bookmark-hover-scale-show');
  } else {
    html.classList.remove('is-bookmark-hover-scale-show');
  };
};

bookmark.render.add = function() {
  const newBookmarkData = new StagedBookmark();

  newBookmarkData.type.new = true;

  newBookmarkData.position.destination.item = bookmark.all[0].items.length;

  const addModal = new Modal({
    heading: 'Add a new Bookmark',
    content: bookmarkForm.form(newBookmarkData),
    successText: 'Add',
    width: 60,
    maxHeight: true,
    successAction: () => {

      switch (newBookmarkData.group.destination) {
        case 'new':

          const newGroupData = new StagedGroup();

          newGroupData.group.name.text = newBookmarkData.group.name;

          newGroupData.newGroup();

          group.mod.item.add(newGroupData);

          newBookmarkData.position.destination.group = bookmark.all.length - 1;

          break;

      };

      bookmark.mod.item.add(newBookmarkData);

      bookmark.mod.propagate.state.apply(newBookmarkData);

      bookmark.render.clear();

      bookmark.render.item();

      bookmark.bind.sort();

      bookmark.add.close();

      data.save();

    },
    dismissAction: () => {

      bookmark.add.close();

      data.save();

    }
  });

  addModal.open();

};

bookmark.restore = function(dataToRestore) {
  bookmark.all = dataToRestore.bookmark;
  console.log('bookmark restored');
};

bookmark.add = {
  open: function() {
    bookmark.mod.add.open();
    bookmark.render.add();
  },
  close: function() {
    bookmark.mod.add.close();
  }
};

bookmark.edit = {
  open: function() {
    bookmark.mod.edit.open();
    bookmark.render.class();
    bookmark.render.tile.edit.open();
  },
  close: function() {
    bookmark.mod.edit.close();
    bookmark.render.class();
    bookmark.render.tile.edit.close();
  },
  toggle: function() {
    if (state.get.current().bookmark.edit) {
      bookmark.edit.close();
    } else {
      bookmark.edit.open();
    };
  }
};

bookmark.bind = {};

bookmark.bind.sort = function() {

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

        bookmark.mod.item.move(newBookmarkData);

        bookmark.render.clear();

        bookmark.render.item();

        bookmark.bind.sort();

        data.save();

      }
    });

  });

};

bookmark.init = function() {
  bookmark.add.close();
  bookmark.render.style();
  bookmark.render.class();
  bookmark.render.item();
  bookmark.bind.sort();
};

export { bookmark };
