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

const headerSetting = {};

headerSetting.control = {
  header: {
    greeting: { show: false },
    transitional: { show: false },
    clock: { hour: { show: false }, minute: { show: false }, second: { show: false } },
    date: { day: { show: false }, date: { show: false }, month: { show: false }, year: { show: false } },
    search: { show: false }
  }
};

const updateDisabled = () => {

  if ((
      state.get.current().header.clock.second.show ||
      state.get.current().header.clock.minute.show ||
      state.get.current().header.clock.hour.show
    ) && (
      state.get.current().header.date.day.show ||
      state.get.current().header.date.date.show ||
      state.get.current().header.date.month.show ||
      state.get.current().header.date.year.show
    )) {
    headerSetting.control.header.transitional.show.enable();
  } else {
    headerSetting.control.header.transitional.show.disable();
  };

};

headerSetting.greeting = (parent) => {

  headerSetting.control.header.greeting.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.greeting.show',
    id: 'header-greeting-show',
    labelText: 'Show Greeting',
    action: function() {
      header.mod.order.update();
      layout.header.clear();
      header.item.render();
      layout.area.assemble();
      updateDisabled();
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      headerSetting.control.header.greeting.show.wrap()
    ])
  );

};

headerSetting['transitional-words'] = (parent) => {

  headerSetting.control.header.transitional.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.transitional.show',
    id: 'header-transitional-show',
    labelText: 'Show Transitional words',
    action: () => {
      header.mod.order.update();
      layout.header.clear();
      header.item.render();
      layout.area.assemble();
      updateDisabled();
      data.save();
    }
  });

  updateDisabled();

  parent.appendChild(
    node('div', [
      headerSetting.control.header.transitional.show.wrap()
    ])
  );

};

headerSetting.clock = (parent) => {

  headerSetting.control.header.clock.hour.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.clock.hour.show',
    id: 'header-clock-hour-show',
    labelText: 'Show Hours',
    action: () => {
      header.mod.order.update();
      layout.header.clear();
      header.item.render();
      layout.area.assemble();
      updateDisabled();
      data.save();
    }
  });

  headerSetting.control.header.clock.minute.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.clock.minute.show',
    id: 'header-clock-minute-show',
    labelText: 'Show Minutes',
    action: () => {
      header.mod.order.update();
      layout.header.clear();
      header.item.render();
      layout.area.assemble();
      updateDisabled();
      data.save();
    }
  });

  headerSetting.control.header.clock.second.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.clock.second.show',
    id: 'header-clock-second-show',
    labelText: 'Show Seconds',
    action: () => {
      header.mod.order.update();
      layout.header.clear();
      header.item.render();
      layout.area.assemble();
      updateDisabled();
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      headerSetting.control.header.clock.hour.show.wrap(),
      headerSetting.control.header.clock.minute.show.wrap(),
      headerSetting.control.header.clock.second.show.wrap()
    ])
  );

};

headerSetting.date = (parent) => {

  headerSetting.control.header.date.day.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.date.day.show',
    id: 'header-date-day-show',
    labelText: 'Show Day',
    action: () => {
      header.mod.order.update();
      layout.header.clear();
      header.item.render();
      layout.area.assemble();
      updateDisabled();
      data.save();
    }
  });

  headerSetting.control.header.date.date.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.date.date.show',
    id: 'header-date-date-show',
    labelText: 'Show Date',
    action: () => {
      header.mod.order.update();
      layout.header.clear();
      header.item.render();
      layout.area.assemble();
      updateDisabled();
      data.save();
    }
  });

  headerSetting.control.header.date.month.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.date.month.show',
    id: 'header-date-month-show',
    labelText: 'Show Month',
    action: () => {
      header.mod.order.update();
      layout.header.clear();
      header.item.render();
      layout.area.assemble();
      updateDisabled();
      data.save();
    }
  });

  headerSetting.control.header.date.year.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.date.year.show',
    id: 'header-date-year-show',
    labelText: 'Show Year',
    action: () => {
      header.mod.order.update();
      layout.header.clear();
      header.item.render();
      layout.area.assemble();
      updateDisabled();
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      headerSetting.control.header.date.day.show.wrap(),
      headerSetting.control.header.date.date.show.wrap(),
      headerSetting.control.header.date.month.show.wrap(),
      headerSetting.control.header.date.year.show.wrap()
    ])
  );

};

headerSetting.search = (parent) => {

  headerSetting.control.header.search.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.search.show',
    id: 'header-search-show',
    labelText: 'Show Search',
    action: () => {
      header.mod.order.update();
      layout.header.clear();
      header.item.render();
      layout.area.assemble();
      updateDisabled();
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      headerSetting.control.header.search.show.wrap()
    ])
  );

};

export { headerSetting }
