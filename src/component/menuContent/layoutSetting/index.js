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

const layoutSetting = {};

layoutSetting.scaling = (parent) => {

  const layoutEdge = new Edge({ element: layout.element.layout });

  const layoutSize = new Control_slider({
    object: state.get.current(),
    path: 'layout.size',
    id: 'layout-size',
    labelText: 'Global size',
    value: state.get.current().layout.size,
    defaultValue: state.get.default().layout.size,
    min: state.get.minMax().layout.size.min,
    max: state.get.minMax().layout.size.max,
    action: () => {
      applyCSSVar('layout.size');
      data.save();
    },
    sliderAction: () => {
      layoutEdge.track();
    },
    mouseDownAction: () => {
      layoutEdge.show();
    },
    mouseUpAction: () => {
      layoutEdge.hide();
    }
  });

  parent.appendChild(
    node('div', [
      layoutSize.wrap()
    ])
  );

};

layoutSetting.area = (parent) => {

  const layoutEdge = new Edge({ element: layout.element.layout });

  const layoutHeaderEdge = new Edge({ element: layout.element.header, padding: state.get.current().layout.padding });

  const layoutBookmarkEdge = new Edge({ element: layout.element.bookmark, padding: state.get.current().layout.padding });

  const layoutWidth = new Control_slider({
    object: state.get.current(),
    path: 'layout.width',
    id: 'layout-width',
    labelText: 'Layout width',
    value: state.get.current().layout.width,
    defaultValue: state.get.default().layout.width,
    min: state.get.minMax().layout.width.min,
    max: state.get.minMax().layout.width.max,
    action: () => {
      applyCSSVar('layout.width');
      data.save();
    },
    sliderAction: () => {
      layoutEdge.track();
    },
    mouseDownAction: () => {
      layoutEdge.show();
    },
    mouseUpAction: () => {
      layoutEdge.hide();
    }
  });

  const layoutAreaHeaderWidth = new Control_slider({
    object: state.get.current(),
    path: 'layout.area.header.width',
    id: 'layout-area-header-width',
    labelText: 'Header width',
    value: state.get.current().layout.area.header.width,
    defaultValue: state.get.default().layout.area.header.width,
    min: state.get.minMax().layout.area.header.width.min,
    max: state.get.minMax().layout.area.header.width.max,
    action: () => {
      applyCSSVar('layout.area.header.width');
      data.save();
    },
    sliderAction: () => {
      layoutHeaderEdge.track();
    },
    mouseDownAction: () => {
      layoutHeaderEdge.show();
    },
    mouseUpAction: () => {
      layoutHeaderEdge.hide();
    }
  });

  const layoutAreaHeaderAlign = new Control_radioGrid({
    object: state.get.current(),
    radioGroup: [
      { id: 'layout-area-header-align-left', labelText: 'Left', value: 'flex-start', position: 1 },
      { id: 'layout-area-header-align-center', labelText: 'Center', value: 'center', position: 2 },
      { id: 'layout-area-header-align-right', labelText: 'Right', value: 'flex-end', position: 3 }
    ],
    label: 'Header area alignment',
    groupName: 'layout-area-header-align',
    path: 'layout.area.header.align',
    gridSize: '3x1',
    action: () => {
      applyCSSVar('layout.area.header.align');
      data.save();
    }
  });

  const layoutAreaHeaderAlignHelper = new Control_helperText({
    text: ['Effects may not be visible if the Header Area is full width.', 'Only available when Layout Alignment is Vertical.']
  });

  const layoutAreaBookmarkWidth = new Control_slider({
    object: state.get.current(),
    path: 'layout.area.bookmark.width',
    id: 'layout-area-bookmark-width',
    labelText: 'Bookmark width',
    value: state.get.current().layout.area.bookmark.width,
    defaultValue: state.get.default().layout.area.bookmark.width,
    min: state.get.minMax().layout.area.bookmark.width.min,
    max: state.get.minMax().layout.area.bookmark.width.max,
    action: () => {
      applyCSSVar('layout.area.bookmark.width');
      data.save();
    },
    sliderAction: () => {
      layoutBookmarkEdge.track();
    },
    mouseDownAction: () => {
      layoutBookmarkEdge.show();
    },
    mouseUpAction: () => {
      layoutBookmarkEdge.hide();
    }
  });

  const layoutAreaBookmarkAlign = new Control_radioGrid({
    object: state.get.current(),
    radioGroup: [
      { id: 'layout-area-bookmark-align-left', labelText: 'Left', value: 'flex-start', position: 1 },
      { id: 'layout-area-bookmark-align-center', labelText: 'Center', value: 'center', position: 2 },
      { id: 'layout-area-bookmark-align-right', labelText: 'Right', value: 'flex-end', position: 3 }
    ],
    label: 'Bookmark area alignment',
    groupName: 'layout-area-bookmark-align',
    path: 'layout.area.bookmark.align',
    gridSize: '3x1',
    action: () => {
      applyCSSVar('layout.area.bookmark.align');
      data.save();
    }
  });

  const layoutAreaBookmarkAlignHelper = new Control_helperText({
    text: ['Effects may not be visible if the Bookmark Area is full width.', 'Only available when Layout Alignment is Vertical.']
  });

  parent.appendChild(
    node('div', [
      layoutWidth.wrap(),
      node('hr'),
      form.wrap({
        children: [
          form.indent({
            children: [
              layoutAreaHeaderWidth.wrap(),
              layoutAreaHeaderAlign.wrap(),
              layoutAreaHeaderAlignHelper.wrap(),
              node('hr'),
              layoutAreaBookmarkWidth.wrap(),
              layoutAreaBookmarkAlign.wrap(),
              layoutAreaBookmarkAlignHelper.wrap()
            ]
          })
        ]
      })
    ])
  );

};

layoutSetting.padding = (parent) => {

  const layoutEdge = new Edge({ element: layout.element.layout });

  const layoutPadding = new Control_slider({
    object: state.get.current(),
    path: 'layout.padding',
    id: 'layout-padding',
    labelText: 'Padding outside Header and Bookmark Area',
    value: state.get.current().layout.padding,
    defaultValue: state.get.default().layout.padding,
    min: state.get.minMax().layout.padding.min,
    max: state.get.minMax().layout.padding.max,
    action: () => {
      applyCSSVar('layout.padding');
      data.save();
    },
    sliderAction: () => {
      layoutEdge.track();
    },
    mouseDownAction: () => {
      layoutEdge.show();
    },
    mouseUpAction: () => {
      layoutEdge.hide();
    }
  });

  parent.appendChild(
    node('div', [
      layoutPadding.wrap()
    ])
  );

};

layoutSetting.gutter = (parent) => {

  const layoutEdge = new Edge({ element: layout.element.layout });

  const layoutGutter = new Control_slider({
    object: state.get.current(),
    path: 'layout.gutter',
    id: 'layout-gutter',
    labelText: 'Gutter between Header and Bookmark items',
    value: state.get.current().layout.gutter,
    defaultValue: state.get.default().layout.gutter,
    min: state.get.minMax().layout.gutter.min,
    max: state.get.minMax().layout.gutter.max,
    action: () => {
      applyCSSVar('layout.gutter');
      data.save();
    },
    sliderAction: () => {
      layoutEdge.track();
    },
    mouseDownAction: () => {
      layoutEdge.show();
    },
    mouseUpAction: () => {
      layoutEdge.hide();
    }
  });

  parent.appendChild(
    node('div', [
      layoutGutter.wrap()
    ])
  );

};

layoutSetting.alignment = (parent) => {

  const layoutAlignment = new Control_radioGrid({
    object: state.get.current(),
    radioGroup: [
      { id: 'layout-alignment-top-left', labelText: 'Top Left', value: 'top-left', position: 1 },
      { id: 'layout-alignment-top-center', labelText: 'Top Center', value: 'top-center', position: 2 },
      { id: 'layout-alignment-top-right', labelText: 'Top Right', value: 'top-right', position: 3 },
      { id: 'layout-alignment-center-left', labelText: 'Center Left', value: 'center-left', position: 4 },
      { id: 'layout-alignment-center-center', labelText: 'Center Center', value: 'center-center', position: 5 },
      { id: 'layout-alignment-center-right', labelText: 'Center Right', value: 'center-right', position: 6 },
      { id: 'layout-alignment-bottom-left', labelText: 'Bottom Left', value: 'bottom-left', position: 7 },
      { id: 'layout-alignment-bottom-center', labelText: 'Bottom Center', value: 'bottom-center', position: 8 },
      { id: 'layout-alignment-bottom-right', labelText: 'Bottom Right', value: 'bottom-right', position: 9 }
    ],
    label: 'Area alignment',
    groupName: 'layout-alignment',
    path: 'layout.alignment',
    gridSize: '3x3',
    action: () => {
      applyCSSClass('layout.alignment');
    }
  });

  const layoutDirection = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'layout-direction-horizontal', labelText: 'Align horizontal', description: 'Stack the Header and Bookmarks in a row side by side.', value: 'horizontal' },
      { id: 'layout-direction-vertical', labelText: 'Align vertical', description: 'Stack the Header and Bookmarks in a column one above the other.', value: 'vertical' }
    ],
    groupName: 'layout-direction',
    path: 'layout.direction',
    action: () => {
      applyCSSClass('layout.direction');
      data.save();
    }
  });

  const layoutOrder = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'layout-order-header-bookmark', labelText: 'Header then Bookmarks', description: 'Order the Header area to appear before the Bookmarks area.', value: 'header-bookmark' },
      { id: 'layout-order-bookmark-header', labelText: 'Bookmarks then Header', description: 'Order the Bookmarks area to appear before the Header area.', value: 'bookmark-header' }
    ],
    groupName: 'layout-order',
    path: 'layout.order',
    action: () => {
      layout.area.assemble();
      applyCSSClass('layout.order');
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      layoutAlignment.wrap(),
      node('hr'),
      layoutDirection.wrap(),
      node('hr'),
      layoutOrder.wrap()
    ])
  );

};

export { layoutSetting }
