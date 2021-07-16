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
import { applyCSSVar } from '../../../utility/applyCSSVar';
import { applyCSSClass } from '../../../utility/applyCSSClass';
import { applyCSSState } from '../../../utility/applyCSSState';

const bookmarkSetting = {};

bookmarkSetting.control = {
  general: {},
  style: {},
  orientation: {}
};

bookmarkSetting.disable = () => {

  if (state.get.current().bookmark.show) {
    bookmarkSetting.control.general.size.enable();
    bookmarkSetting.control.general.urlShow.enable();
    bookmarkSetting.control.general.lineShow.enable();
    bookmarkSetting.control.general.shadowShow.enable();
    bookmarkSetting.control.general.hoverScaleShow.enable();
    bookmarkSetting.control.general.newTab.enable();
    bookmarkSetting.control.style.enable();
    bookmarkSetting.control.orientation.enable();
    bookmarkSetting.control.orientationHelper.enable();
  } else {
    bookmarkSetting.control.general.size.disable();
    bookmarkSetting.control.general.urlShow.disable();
    bookmarkSetting.control.general.lineShow.disable();
    bookmarkSetting.control.general.shadowShow.disable();
    bookmarkSetting.control.general.hoverScaleShow.disable();
    bookmarkSetting.control.general.newTab.disable();
    bookmarkSetting.control.style.disable();
    bookmarkSetting.control.orientation.disable();
    bookmarkSetting.control.orientationHelper.disable();
  };

};

bookmarkSetting.general = (parent) => {

  let bookmarkEdge = false;

  if (state.get.current().bookmark.show && bookmark.tile.current.length > 0) {
    bookmarkEdge = new Edge({ element: bookmark.tile.current[0].tile() })
  };

  bookmarkSetting.control.general.show = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-show',
    path: 'bookmark.show',
    labelText: 'Show Bookmarks',
    action: () => {
      layout.area.assemble();
      applyCSSState('bookmark.show');
      bookmarkSetting.disable();
      data.save();
    }
  });

  bookmarkSetting.control.general.size = new Control_slider({
    object: state.get.current(),
    path: 'bookmark.size',
    id: 'bookmark-size',
    labelText: 'Bookmark size',
    value: state.get.current().bookmark.size,
    defaultValue: state.get.default().bookmark.size,
    min: state.get.minMax().bookmark.size.min,
    max: state.get.minMax().bookmark.size.max,
    action: () => {
      applyCSSVar('bookmark.size');
      data.save();
    },
    sliderAction: () => {
      if (state.get.current().bookmark.show && bookmarkEdge) { bookmarkEdge.track(); };
    },
    mouseDownAction: () => {
      if (state.get.current().bookmark.show && bookmarkEdge) { bookmarkEdge.show(); };
    },
    mouseUpAction: () => {
      if (state.get.current().bookmark.show && bookmarkEdge) { bookmarkEdge.hide(); };
    }
  });

  bookmarkSetting.control.general.urlShow = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-url-show',
    path: 'bookmark.url.show',
    labelText: 'Show URL on Bookmark hover',
    action: () => {
      applyCSSState('bookmark.url.show');
      data.save();
    }
  });

  bookmarkSetting.control.general.lineShow = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-line-show',
    path: 'bookmark.line.show',
    labelText: 'Show Bookmark line',
    action: () => {
      applyCSSState('bookmark.line.show');
      data.save();
    }
  });

  bookmarkSetting.control.general.shadowShow = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-shadow-show',
    path: 'bookmark.shadow.show',
    labelText: 'Show shadow on Bookmark hover',
    description: 'Effects may not be visible if Theme Shadow is set to 0.',
    action: () => {
      applyCSSState('bookmark.shadow.show');
      data.save();
    }
  });

  bookmarkSetting.control.general.hoverScaleShow = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-hoverScale-show',
    path: 'bookmark.hoverScale.show',
    labelText: 'Grow on Bookmark hover',
    action: () => {
      applyCSSState('bookmark.hoverScale.show');
      data.save();
    }
  });

  bookmarkSetting.control.general.newTab = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-newTab',
    path: 'bookmark.newTab',
    labelText: 'Open Bookmarks in a new tab',
    action: () => {
      bookmark.item.clear();
      bookmark.item.render();
      bookmark.sort.bind();
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      bookmarkSetting.control.general.show.wrap(),
      node('hr'),
      bookmarkSetting.control.general.size.wrap(),
      node('hr'),
      bookmarkSetting.control.general.urlShow.wrap(),
      bookmarkSetting.control.general.lineShow.wrap(),
      bookmarkSetting.control.general.shadowShow.wrap(),
      bookmarkSetting.control.general.hoverScaleShow.wrap(),
      bookmarkSetting.control.general.newTab.wrap()
    ])
  );

};

bookmarkSetting.style = (parent) => {

  bookmarkSetting.control.style = new Control_radio({
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
          bookmark.direction.mod.vertical();
          break;

        case 'list':
          bookmark.direction.mod.horizontal();
          break;
      };

      applyCSSClass('bookmark.style');

      bookmark.item.clear();

      bookmark.item.render();

      bookmark.sort.bind();

      data.save();

    }
  });

  parent.appendChild(
    node('div', [
      bookmarkSetting.control.style.wrap(),
    ])
  );

};

bookmarkSetting.orientation = (parent) => {

  bookmarkSetting.control.orientation = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'bookmark-orientation-top', labelText: 'Top', value: 'top' },
      { id: 'bookmark-orientation-bottom', labelText: 'Bottom', value: 'bottom' }
    ],
    groupName: 'bookmark-orientation',
    path: 'bookmark.orientation',
    action: () => {
      applyCSSClass('bookmark.orientation');
      data.save();
    }
  });

  bookmarkSetting.control.orientationHelper = new Control_helperText({
    text: ['Display the URL and Controls either at the top or bottom of a Bookmark Tile.']
  });

  parent.appendChild(
    node('div', [
      bookmarkSetting.control.orientation.wrap(),
      bookmarkSetting.control.orientationHelper.wrap()
    ])
  );

};

export { bookmarkSetting }
