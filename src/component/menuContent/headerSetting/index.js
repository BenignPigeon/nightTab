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

const headerSetting = {};

headerSetting.control = {
  area: {},
  greeting: {},
  transitional: {},
  clock: {},
  date: {},
  search: {},
  border: {}
};

headerSetting.disable = () => {

  if (state.get.current().header.greeting.show) {
    headerSetting.control.greeting.size.enable();
  } else {
    headerSetting.control.greeting.size.disable();
  };

  if (state.get.current().header.clock.second.show ||
    state.get.current().header.clock.minute.show ||
    state.get.current().header.clock.hour.show) {
    headerSetting.control.clock.size.enable();
  } else {
    headerSetting.control.clock.size.disable();
  };

  if (state.get.current().header.date.day.show ||
    state.get.current().header.date.date.show ||
    state.get.current().header.date.month.show ||
    state.get.current().header.date.year.show) {
    headerSetting.control.date.size.enable();
  } else {
    headerSetting.control.date.size.disable();
  };

  if (state.get.current().header.search.show) {
    headerSetting.control.search.size.enable();
  } else {
    headerSetting.control.search.size.disable();
  };

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
    headerSetting.control.transitional.show.enable();
  } else {
    headerSetting.control.transitional.show.disable();
  };

  if ((
      state.get.current().header.clock.second.show ||
      state.get.current().header.clock.minute.show ||
      state.get.current().header.clock.hour.show
    ) && (
      state.get.current().header.date.day.show ||
      state.get.current().header.date.date.show ||
      state.get.current().header.date.month.show ||
      state.get.current().header.date.year.show
    ) &&
    state.get.current().header.transitional.show) {
    headerSetting.control.transitional.size.enable();
  } else {
    headerSetting.control.transitional.size.disable();
  };

};

headerSetting.edge = {
  area: {},
  greeting: {},
  transitional: {},
  clock: {},
  date: {},
  search: {}
};

headerSetting.update = () => {

  for (let key in headerSetting.control) {

    headerSetting.control[key].forEach((item, i) => {
      item.update();
    });

  };

};

headerSetting.area = (parent) => {

  headerSetting.area.alignment = new Control_radioGrid({
    object: state.get.current(),
    radioGroup: [
      { id: 'header-item-justify-left', labelText: 'Left', value: 'left', position: 1 },
      { id: 'header-item-justify-center', labelText: 'Center', value: 'center', position: 2 },
      { id: 'header-item-justify-right', labelText: 'Right', value: 'right', position: 3 }
    ],
    label: 'Header item alignment',
    groupName: 'header-item-justify',
    path: 'header.item.justify',
    gridSize: '3x1',
    action: () => {
      applyCSSClass('header.item.justify');
      data.save();
    }
  });

  headerSetting.area.alignmentHelper = new Control_helperText({
    text: ['Effects may not be visible if the <a href="#layout-direction-horizontal">Search box size</a> size is set to Auto and grows to fill available space.']
  });

  parent.appendChild(
    node('div', [
      headerSetting.area.alignment.wrap(),
      headerSetting.area.alignmentHelper.wrap()
    ])
  );

};

headerSetting.greeting = (parent) => {

  headerSetting.edge.greeting.size = new Edge({ primary: header.element.greeting.greeting(), secondary: [header.element.area] });

  headerSetting.control.greeting.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.greeting.show',
    id: 'header-greeting-show',
    labelText: 'Show Greeting',
    action: function() {
      header.item.mod.order();
      header.item.clear();
      header.item.render();
      layout.area.assemble();
      headerSetting.disable();
      headerSetting.disable();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      data.save();
    }
  });

  headerSetting.control.greeting.size = new Control_slider({
    object: state.get.current(),
    path: 'header.greeting.size',
    id: 'header-greeting-size',
    labelText: 'Transitional size',
    value: state.get.current().header.greeting.size,
    defaultValue: state.get.default().header.greeting.size,
    min: state.get.minMax().header.greeting.size.min,
    max: state.get.minMax().header.greeting.size.max,
    action: () => {
      applyCSSVar('header.greeting.size');
      data.save();
    },
    sliderAction: () => {
      headerSetting.edge.greeting.size.track();
    },
    mouseDownAction: () => {
      headerSetting.edge.greeting.size.show();
    },
    mouseUpAction: () => {
      headerSetting.edge.greeting.size.hide();
    }
  });

  parent.appendChild(
    node('div', [
      headerSetting.control.greeting.show.wrap(),
      headerSetting.control.greeting.size.wrap()
    ])
  );

};

headerSetting.transitional = (parent) => {

  headerSetting.edge.transitional.size = new Edge({ primary: header.element.transitional.transitional(), secondary: [header.element.area] });

  headerSetting.control.transitional.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.transitional.show',
    id: 'header-transitional-show',
    labelText: 'Show Transitional words',
    action: () => {
      header.item.mod.order();
      header.item.clear();
      header.item.render();
      layout.area.assemble();
      headerSetting.disable();
      headerSetting.disable();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      data.save();
    }
  });

  headerSetting.control.transitional.size = new Control_slider({
    object: state.get.current(),
    path: 'header.transitional.size',
    id: 'header-transitional-size',
    labelText: 'Transitional size',
    value: state.get.current().header.transitional.size,
    defaultValue: state.get.default().header.transitional.size,
    min: state.get.minMax().header.transitional.size.min,
    max: state.get.minMax().header.transitional.size.max,
    action: () => {
      applyCSSVar('header.transitional.size');
      data.save();
    },
    sliderAction: () => {
      headerSetting.edge.transitional.size.track();
    },
    mouseDownAction: () => {
      headerSetting.edge.transitional.size.show();
    },
    mouseUpAction: () => {
      headerSetting.edge.transitional.size.hide();
    }
  });

  parent.appendChild(
    node('div', [
      headerSetting.control.transitional.show.wrap(),
      headerSetting.control.transitional.size.wrap()
    ])
  );

};

headerSetting.clock = (parent) => {

  headerSetting.edge.clock.size = new Edge({ primary: header.element.clock.clock(), secondary: [header.element.area] });

  headerSetting.control.clock.hour = {
    show: new Control_checkbox({
      object: state.get.current(),
      path: 'header.clock.hour.show',
      id: 'header-clock-hour-show',
      labelText: 'Show Hours',
      action: () => {
        header.item.mod.order();
        header.item.clear();
        header.item.render();
        layout.area.assemble();
        headerSetting.disable();
        headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
        headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
        headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
        headerSetting.edge.date.size.update.primary(header.element.date.date());
        headerSetting.edge.search.size.update.primary(header.element.search.search());
        data.save();
      }
    })
  };

  headerSetting.control.clock.minute = {
    show: new Control_checkbox({
      object: state.get.current(),
      path: 'header.clock.minute.show',
      id: 'header-clock-minute-show',
      labelText: 'Show Minutes',
      action: () => {
        header.item.mod.order();
        header.item.clear();
        header.item.render();
        layout.area.assemble();
        headerSetting.disable();
        headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
        headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
        headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
        headerSetting.edge.date.size.update.primary(header.element.date.date());
        headerSetting.edge.search.size.update.primary(header.element.search.search());
        data.save();
      }
    })
  };

  headerSetting.control.clock.second = {
    show: new Control_checkbox({
      object: state.get.current(),
      path: 'header.clock.second.show',
      id: 'header-clock-second-show',
      labelText: 'Show Seconds',
      action: () => {
        header.item.mod.order();
        header.item.clear();
        header.item.render();
        layout.area.assemble();
        headerSetting.disable();
        headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
        headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
        headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
        headerSetting.edge.date.size.update.primary(header.element.date.date());
        headerSetting.edge.search.size.update.primary(header.element.search.search());
        data.save();
      }
    })
  };

  headerSetting.control.clock.size = new Control_slider({
    object: state.get.current(),
    path: 'header.clock.size',
    id: 'header-clock-size',
    labelText: 'Clock size',
    value: state.get.current().header.clock.size,
    defaultValue: state.get.default().header.clock.size,
    min: state.get.minMax().header.clock.size.min,
    max: state.get.minMax().header.clock.size.max,
    action: () => {
      applyCSSVar('header.clock.size');
      data.save();
    },
    sliderAction: () => {
      headerSetting.edge.clock.size.track();
    },
    mouseDownAction: () => {
      headerSetting.edge.clock.size.show();
    },
    mouseUpAction: () => {
      headerSetting.edge.clock.size.hide();
    }
  });

  parent.appendChild(
    node('div', [
      headerSetting.control.clock.hour.show.wrap(),
      headerSetting.control.clock.minute.show.wrap(),
      headerSetting.control.clock.second.show.wrap(),
      headerSetting.control.clock.size.wrap()
    ])
  );

};

headerSetting.date = (parent) => {

  headerSetting.edge.date.size = new Edge({ primary: header.element.date.date(), secondary: [header.element.area] });

  headerSetting.control.date.day = {
    show: new Control_checkbox({
      object: state.get.current(),
      path: 'header.date.day.show',
      id: 'header-date-day-show',
      labelText: 'Show Day',
      action: () => {
        header.item.mod.order();
        header.item.clear();
        header.item.render();
        layout.area.assemble();
        headerSetting.disable();
        headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
        headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
        headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
        headerSetting.edge.date.size.update.primary(header.element.date.date());
        headerSetting.edge.search.size.update.primary(header.element.search.search());
        data.save();
      }
    })
  };

  headerSetting.control.date.date = {
    show: new Control_checkbox({
      object: state.get.current(),
      path: 'header.date.date.show',
      id: 'header-date-date-show',
      labelText: 'Show Date',
      action: () => {
        header.item.mod.order();
        header.item.clear();
        header.item.render();
        layout.area.assemble();
        headerSetting.disable();
        headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
        headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
        headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
        headerSetting.edge.date.size.update.primary(header.element.date.date());
        headerSetting.edge.search.size.update.primary(header.element.search.search());
        data.save();
      }
    })
  };

  headerSetting.control.date.month = {
    show: new Control_checkbox({
      object: state.get.current(),
      path: 'header.date.month.show',
      id: 'header-date-month-show',
      labelText: 'Show Month',
      action: () => {
        header.item.mod.order();
        header.item.clear();
        header.item.render();
        layout.area.assemble();
        headerSetting.disable();
        headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
        headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
        headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
        headerSetting.edge.date.size.update.primary(header.element.date.date());
        headerSetting.edge.search.size.update.primary(header.element.search.search());
        data.save();
      }
    })
  };

  headerSetting.control.date.year = {
    show: new Control_checkbox({
      object: state.get.current(),
      path: 'header.date.year.show',
      id: 'header-date-year-show',
      labelText: 'Show Year',
      action: () => {
        header.item.mod.order();
        header.item.clear();
        header.item.render();
        layout.area.assemble();
        headerSetting.disable();
        headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
        headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
        headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
        headerSetting.edge.date.size.update.primary(header.element.date.date());
        headerSetting.edge.search.size.update.primary(header.element.search.search());
        data.save();
      }
    })
  };

  headerSetting.control.date.size = new Control_slider({
    object: state.get.current(),
    path: 'header.date.size',
    id: 'header-date-size',
    labelText: 'Date size',
    value: state.get.current().header.date.size,
    defaultValue: state.get.default().header.date.size,
    min: state.get.minMax().header.date.size.min,
    max: state.get.minMax().header.date.size.max,
    action: () => {
      applyCSSVar('header.date.size');
      data.save();
    },
    sliderAction: () => {
      headerSetting.edge.date.size.track();
    },
    mouseDownAction: () => {
      headerSetting.edge.date.size.show();
    },
    mouseUpAction: () => {
      headerSetting.edge.date.size.hide();
    }
  });

  parent.appendChild(
    node('div', [
      headerSetting.control.date.day.show.wrap(),
      headerSetting.control.date.date.show.wrap(),
      headerSetting.control.date.month.show.wrap(),
      headerSetting.control.date.year.show.wrap(),
      headerSetting.control.date.size.wrap()
    ])
  );

};

headerSetting.search = (parent) => {

  headerSetting.edge.search.size = new Edge({ primary: header.element.search.search(), secondary: [header.element.area] });

  headerSetting.control.search.show = new Control_checkbox({
    object: state.get.current(),
    path: 'header.search.show',
    id: 'header-search-show',
    labelText: 'Show Search',
    action: () => {
      header.item.mod.order();
      header.item.clear();
      header.item.render();
      layout.area.assemble();
      headerSetting.disable();
      headerSetting.edge.greeting.size.update.primary(header.element.greeting.greeting());
      headerSetting.edge.transitional.size.update.primary(header.element.transitional.transitional());
      headerSetting.edge.clock.size.update.primary(header.element.clock.clock());
      headerSetting.edge.date.size.update.primary(header.element.date.date());
      headerSetting.edge.search.size.update.primary(header.element.search.search());
      data.save();
    }
  });

  headerSetting.control.search.size = new Control_slider({
    object: state.get.current(),
    path: 'header.search.size',
    id: 'header-search-size',
    labelText: 'Search size',
    value: state.get.current().header.search.size,
    defaultValue: state.get.default().header.search.size,
    min: state.get.minMax().header.search.size.min,
    max: state.get.minMax().header.search.size.max,
    action: () => {
      applyCSSVar('header.search.size');
      data.save();
    },
    sliderAction: () => {
      headerSetting.edge.search.size.track();
    },
    mouseDownAction: () => {
      headerSetting.edge.search.size.show();
    },
    mouseUpAction: () => {
      headerSetting.edge.search.size.hide();
    }
  });

  parent.appendChild(
    node('div', [
      headerSetting.control.search.show.wrap(),
      headerSetting.control.search.size.wrap()
    ])
  );

};

headerSetting.border = (parent) => {

  headerSetting.control.border.top = new Control_slider({
    object: state.get.current(),
    path: 'header.border.top',
    id: 'header-border-top',
    labelText: 'Top border',
    value: state.get.current().header.border.top,
    defaultValue: state.get.default().header.border.top,
    min: state.get.minMax().header.border.top.min,
    max: state.get.minMax().header.border.top.max,
    action: () => {
      applyCSSVar('header.border.top');
      header.area.render();
      data.save();
    }
  });

  headerSetting.control.border.bottom = new Control_slider({
    object: state.get.current(),
    path: 'header.border.bottom',
    id: 'header-border-bottom',
    labelText: 'Bottom border',
    value: state.get.current().header.border.bottom,
    defaultValue: state.get.default().header.border.bottom,
    min: state.get.minMax().header.border.bottom.min,
    max: state.get.minMax().header.border.bottom.max,
    action: () => {
      applyCSSVar('header.border.bottom');
      header.area.render();
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      headerSetting.control.border.top.wrap(),
      headerSetting.control.border.bottom.wrap()
    ])
  );

};

export { headerSetting }
