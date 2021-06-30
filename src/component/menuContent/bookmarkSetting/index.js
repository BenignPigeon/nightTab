import { state } from '../../state';
import { data } from '../../data';
import { header } from '../../header';
import { bookmark } from '../../bookmark';
import { theme } from '../../theme';
import { version } from '../../version';
import { menu } from '../../menu';
import { icon } from '../../icon';
import { logo } from '../../logo';
import { link } from '../../link';
import { layout } from '../../layout';
import { toolbar } from '../../toolbar';

import * as form from '../../form';

import { Button } from '../../button';
import { Collapse } from '../../collapse';
import { Edge } from '../../edge';

import { Control_helperText } from '../../control/helperText';
import { Control_inputButton } from '../../control/inputButton';
import { Control_groupText } from '../../control/groupText';
import { Control_radio } from '../../control/radio';
import { Control_radioGrid } from '../../control/radioGrid';
import { Control_checkbox } from '../../control/checkbox';
import { Control_slider } from '../../control/slider';
import { Control_slimSlider } from '../../control/slimSlider';
import { Control_colorMixer } from '../../control/colorMixer';
import { Control_color } from '../../control/color';
import { Control_text } from '../../control/text';
import { Control_textReset } from '../../control/textReset';

import { node } from '../../../utility/node';
import { complexNode } from '../../../utility/complexNode';

const bookmarkSetting = {};

bookmarkSetting.style = (parent) => {

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

  parent.appendChild(
    node('div', [
      bookmarkStyle.wrap(),
    ])
  );

};

bookmarkSetting.general = (parent) => {

  const bookmarkEdge = new Edge({ element: document.querySelector('.bookmark') });

  const bookmarkSize = new Control_slider({
    object: state.get.current(),
    path: 'bookmark.size',
    id: 'bookmark-size',
    labelText: 'Bookmark size',
    value: state.get.current().bookmark.size,
    defaultValue: state.get.default().bookmark.size,
    min: state.get.minMax().bookmark.size.min,
    max: state.get.minMax().bookmark.size.max,
    action: () => {

      bookmark.render.style();

      bookmarkEdge.updatePosition();

      data.save();

    },
    mouseDownAction: () => {
      bookmarkEdge.open();
    },
    mouseUpAction: () => {
      bookmarkEdge.close();
    }
  });

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

  parent.appendChild(
    node('div', [
      bookmarkSize.wrap(),
      node('hr'),
      bookmarkUrlShow.wrap(),
      bookmarkLineShow.wrap(),
      bookmarkShadowShow.wrap(),
      bookmarkHoverScaleShow.wrap(),
      bookmarkNewTab.wrap()
    ])
  );

};

bookmarkSetting.orientation = (parent) => {

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

  parent.appendChild(
    node('div', [
      bookmarkOrientation.wrap(),
      bookmarkOrientationHelper.wrap()
    ])
  );

};

export { bookmarkSetting }
