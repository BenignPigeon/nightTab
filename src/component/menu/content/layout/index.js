import { state } from '../../../state';
import { data } from '../../../data';
import { layout } from '../../../layout';
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

import { Edge } from '../../../edge';
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

import { node } from '../../../../utility/node';
import { complexNode } from '../../../../utility/complexNode';

const menuContentLayout = {};

menuContentLayout.size = function() {
  const menuContentItem = node('div|id:menu-content-item-size,class:menu-content-item');

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
      layout.variable.render.size();
      layoutEdge.updatePosition();
      data.save();
    },
    mouseDownAction: () => {
      layoutEdge.open();
    },
    mouseUpAction: () => {
      layoutEdge.close();
    }
  });

  menuContentItem.appendChild(menu.render.component.item.header('Scaling'));

  menuContentItem.appendChild(
    menu.render.component.item.form([
      layoutSize.wrap()
    ])
  );

  return menuContentItem;
};

menuContentLayout.area = function() {
  const menuContentItem = node('div|id:menu-content-item-area,class:menu-content-item');

  const layoutEdge = new Edge({ element: layout.element.layout });

  const layoutWidth = new Control_slider({
    object: state.get.current(),
    path: 'layout.width',
    id: 'layout-width',
    labelText: 'Width',
    value: state.get.current().layout.width,
    defaultValue: state.get.default().layout.width,
    min: state.get.minMax().layout.width.min,
    max: state.get.minMax().layout.width.max,
    action: () => {
      layout.variable.render.width();
      layoutEdge.updatePosition();
      data.save();
    },
    mouseDownAction: () => {
      layoutEdge.open();
    },
    mouseUpAction: () => {
      layoutEdge.close();
    }
  });

  const layoutPadding = new Control_slider({
    object: state.get.current(),
    path: 'layout.padding',
    id: 'layout-padding',
    labelText: 'Padding',
    value: state.get.current().layout.padding,
    defaultValue: state.get.default().layout.padding,
    min: state.get.minMax().layout.padding.min,
    max: state.get.minMax().layout.padding.max,
    action: () => {
      layout.variable.render.padding();
      layoutEdge.updatePosition();
      data.save();
    },
    mouseDownAction: () => {
      layoutEdge.open();
    },
    mouseUpAction: () => {
      layoutEdge.close();
    }
  });

  const layoutGutter = new Control_slider({
    object: state.get.current(),
    path: 'layout.gutter',
    id: 'layout-gutter',
    labelText: 'Gutter',
    value: state.get.current().layout.gutter,
    defaultValue: state.get.default().layout.gutter,
    min: state.get.minMax().layout.gutter.min,
    max: state.get.minMax().layout.gutter.max,
    action: () => {
      layout.variable.render.gutter();
      layoutEdge.updatePosition();
      data.save();
    },
    mouseDownAction: () => {
      layoutEdge.open();
    },
    mouseUpAction: () => {
      layoutEdge.close();
    }
  });

  menuContentItem.appendChild(menu.render.component.item.header('Area'));

  menuContentItem.appendChild(
    menu.render.component.item.form([
      layoutWidth.wrap(),
      layoutPadding.wrap(),
      layoutGutter.wrap()
    ])
  );

  return menuContentItem;
};

export { menuContentLayout }
