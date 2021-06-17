import { state } from '../../../state';
import { data } from '../../../data';
import { bookmark } from '../../../bookmark';
import { theme } from '../../../theme';
import { toolbar } from '../../../toolbar';
import { modal } from '../../../modal';
import { version } from '../../../version';
import { menu } from '../../../menu';
import { icon } from '../../../icon';
import { logo } from '../../../logo';
import { link } from '../../../link';

import * as form from '../../../form';

import { Button } from '../../../button';
import { Collapse } from '../../../collapse';

import { Control_helperText } from '../../../control/helperText';
import { Control_inputButton } from '../../../control/inputButton';
import { Control_groupText } from '../../../control/groupText';
import { Control_radio } from '../../../control/radio';
import { Control_radioGrid } from '../../../control/radioGrid';
import { Control_checkbox } from '../../../control/checkbox';
import { Control_slider } from '../../../control/slider';
import { Control_slimSlider } from '../../../control/slimSlider';
import { Control_colorMixer } from '../../../control/colorMixer';
import { Control_color } from '../../../control/color';
import { Control_text } from '../../../control/text';
import { Control_textReset } from '../../../control/textReset';


import { node } from '../../../../utility/node';
import { complexNode } from '../../../../utility/complexNode';

const menuContentBookmark = {};

menuContentBookmark.style = function() {
  const menuContentItem = node('div|id:menu-content-item-style,class:menu-content-item');

  const bookmarkStyle = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'bookmark-style-block', labelText: 'Block', description: 'Bookmark tiles more square shaped.', value: 'block' },
      { id: 'bookmark-style-list', labelText: 'List', description: 'Bookmark tiles more short and wide.', value: 'list' }
    ],
    groupName: 'bookmark-style',
    path: 'bookmark.style',
    action: () => {

      switch (state.get.current().bookmark.style) {
        case 'block':
          bookmark.mod.layout.direction.vertical();
          break;

        case 'list':
          bookmark.mod.layout.direction.horizontal();
          break;
      };

      bookmark.render.class();

      bookmark.render.clear();

      bookmark.render.item();

      bookmark.bind.sort();

      data.save();

    }
  });

  menuContentItem.appendChild(menu.render.component.item.header('Style'));

  menuContentItem.appendChild(
    menu.render.component.item.form([
      bookmarkStyle.wrap()
    ])
  );

  return menuContentItem;
};

menuContentBookmark.general = function() {
  const menuContentItem = node('div|id:menu-content-item-general,class:menu-content-item');

  const bookmarkUrlShow = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-url-show',
    path: 'bookmark.url.show',
    labelText: 'Show URL on Bookmark hover',
    action: () => {

      bookmark.render.class();

      data.save();

    }
  });

  const bookmarkLineShow = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-line-show',
    path: 'bookmark.line.show',
    labelText: 'Show Bookmark line',
    action: () => {

      bookmark.render.class();

      data.save();

    }
  });

  const bookmarkShadowShow = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-shadow-show',
    path: 'bookmark.shadow.show',
    labelText: 'Show shadow on Bookmark hover',
    description: 'Effects may not be visible if Theme Shadow is set to 0.',
    action: () => {

      bookmark.render.class();

      data.save();

    }
  });

  const bookmarkHoverScaleShow = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-hoverScale-show',
    path: 'bookmark.hoverScale.show',
    labelText: 'Grow on Bookmark hover',
    action: () => {

      bookmark.render.class();

      data.save();

    }
  });

  const bookmarkNewTab = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-newTab',
    path: 'bookmark.newTab',
    labelText: 'Open Bookmarks in a new tab',
    action: () => {

      bookmark.render.clear();

      bookmark.render.item();

      bookmark.bind.sort();

      data.save();

    }
  });

  menuContentItem.appendChild(menu.render.component.item.header('General'));

  menuContentItem.appendChild(
    menu.render.component.item.form([
      bookmarkUrlShow.wrap(),
      bookmarkLineShow.wrap(),
      bookmarkShadowShow.wrap(),
      bookmarkHoverScaleShow.wrap(),
      bookmarkNewTab.wrap()
    ])
  );

  return menuContentItem;
};

menuContentBookmark.orientation = function() {
  const menuContentItem = node('div|id:menu-content-item-orientation,class:menu-content-item');

  const bookmarkOrientation = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'bookmark-orientation-top', labelText: 'Top', value: 'top' },
      { id: 'bookmark-orientation-bottom', labelText: 'Bottom', value: 'bottom' }
    ],
    groupName: 'bookmark-orientation',
    path: 'bookmark.orientation',
    action: () => {
      bookmark.render.class();
      data.save();
    }
  });

  const bookmarkOrientationHelper = new Control_helperText({
    text: ['Display the URL and Controls either at the top or bottom of a Bookmark Tile.']
  });

  menuContentItem.appendChild(menu.render.component.item.header('Orientation'));

  menuContentItem.appendChild(
    menu.render.component.item.form([
      bookmarkOrientation.wrap(),
      bookmarkOrientationHelper.wrap()
    ])
  );

  return menuContentItem;
};

export { menuContentBookmark }
