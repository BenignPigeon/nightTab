const state = {};

state.current = {};

state.default = {
  layout: {
    area: { header: { width: 100, align: 'center' }, bookmark: { width: 100, align: 'center' } },
    alignment: 'center-center',
    order: 'header-bookmark',
    direction: 'vertical',
    size: 100,
    width: 80,
    padding: 40,
    gutter: 20,
    breakpoint: 'xs'
  },
  header: {
    area: { justify: 'center', align: 'center' },
    item: { justify: 'left' },
    greeting: { show: false, type: 'good', custom: '', name: '', size: 1, newLine: false },
    clock: {
      hour: { show: true, display: 'number' },
      minute: { show: true, display: 'number' },
      second: { show: false, display: 'number' },
      separator: { show: true, text: '' },
      meridiem: { show: false },
      hour24: { show: true },
      size: 1,
      newLine: false
    },
    transitional: { show: false, type: 'timeanddate', size: 1, newLine: false },
    date: {
      day: { show: true, display: 'word', weekStart: 'monday', length: 'long' },
      date: { show: true, display: 'number', ordinal: true },
      month: { show: true, display: 'word', length: 'long', ordinal: true },
      year: { show: false, display: 'number' },
      separator: { show: true, text: '' },
      format: 'datemonth',
      size: 1,
      newLine: false
    },
    search: {
      show: true,
      style: 'box',
      width: { by: 'auto', size: 30 },
      focus: false,
      engine: {
        selected: 'google',
        google: { url: 'https://www.google.com/search', name: 'Google' },
        duckduckgo: { url: 'https://duckduckgo.com/', name: 'DuckDuckGo' },
        youtube: { url: 'https://www.youtube.com/results?search_query=', name: 'YouTube' },
        giphy: { url: 'https://giphy.com/search/', name: 'Giphy' },
        bing: { url: 'https://www.bing.com/search?q=', name: 'Bing' },
        custom: { url: '', name: '', queryName: '' }
      },
      text: { justify: 'center' },
      size: 1,
      opacity: 1,
      newLine: false,
      newTab: false
    },
    order: ['clock', 'date', 'search'],
    border: { top: 0, bottom: 0 },
    color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, style: 'scroll', opacity: 0.95, show: false, newLine: false },
    radius: false,
    edit: false
  },
  bookmark: {
    area: { direction: "ltr", justify: "center" },
    size: 100,
    url: { show: true },
    line: { show: true },
    shadow: { show: true },
    hoverScale: { show: true },
    orientation: 'bottom',
    style: 'block',
    newTab: false,
    edit: false,
    add: false,
    show: true
  },
  group: { area: { justify: 'left' }, edit: false, add: false },
  toolbar: { style: 'transparent', position: 'bottom-right', accent: { show: true }, add: { show: true }, edit: { show: true } },
  theme: {
    color: {
      range: { primary: { h: 222, s: 14 } },
      lightness: { contrast: 28, offset: null, start: null, end: null },
      shades: 14
    },
    accent: { hsl: { h: 221, s: 100, l: 50 }, rgb: { r: 0, g: 80, b: 255 }, random: { active: false, style: 'any' } },
    font: {
      display: { name: '', weight: 400, style: 'normal' },
      ui: { name: '', weight: 400, style: 'normal' }
    },
    background: {
      type: 'theme',
      color: { hsl: { h: 213, s: 40, l: 65 }, rgb: { r: 130, g: 162, b: 201 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 191, s: 66, l: 62 }, rgb: { r: 94, g: 199, b: 222 } },
        end: { hsl: { h: 243, s: 59, l: 22 }, rgb: { r: 26, g: 23, b: 89 } }
      },
      image: { url: '', blur: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, scale: 100, accent: 0, opacity: 100 }
    },
    style: 'dark',
    radius: 25,
    shadow: 75,
    shade: { opacity: 20, blur: 0 }
  },
  modal: false,
  menu: false,
  autoSuggest: false
};

state.minMax = {
  bookmark: {
    size: { min: 50, max: 500 }
  },
  layout: {
    area: {
      header: { width: { min: 10, max: 100 } },
      bookmark: { width: { min: 10, max: 100 } }
    },
    size: { min: 10, max: 200 },
    width: { min: 10, max: 100 },
    padding: { min: 0, max: 300 },
    gutter: { min: 0, max: 300 }
  },
  theme: {
    color: {
      range: { primary: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 } } },
      lightness: { contrast: { min: 5, max: 45 } }
    },
    accent: {
      hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
      rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } },
    },
    font: {
      display: { weight: { min: 100, max: 900 } },
      ui: { weight: { min: 100, max: 900 } }
    },
    bookmark: {
      shadow: {
        opacity: { min: 0, max: 100 },
        color: {
          hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
          rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
        }
      }
    },
    background: {
      color: {
        hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
        rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
      },
      gradient: {
        angle: { min: 0, max: 360 },
        start: {
          hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
          rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
        },
        end: {
          hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
          rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
        },
      },
      image: { blur: { min: 0, max: 200 }, scale: { min: 100, max: 400 }, accent: { min: 0, max: 100 }, opacity: { min: 0, max: 100 } },
      video: { blur: { min: 0, max: 200 }, scale: { min: 100, max: 400 }, accent: { min: 0, max: 100 }, opacity: { min: 0, max: 100 } }
    },
    radius: { min: 0, max: 500 },
    shadow: { min: 0, max: 300 },
    shade: { opacity: { min: 0, max: 100 }, blur: { min: 0, max: 200 } }
  }
};

state.step = {
  theme: {
    font: {
      display: { weight: 100 },
      ui: { weight: 100 }
    }
  }
};

state.option = {
  layout: {
    alignment: ['top-left', 'top-center', 'top-right', 'center-left', 'center-center', 'center-right', 'bottom-left', 'bottom-center', 'bottom-right'],
    direction: ['horizontal', 'vertical'],
    order: ['header-bookmark', 'bookmark-header']
  },
  bookmark: {
    orientation: ['top', 'bottom'],
    style: ['block', 'list']
  },
  group: {
    area: { justify: ['left', 'center', 'right'] }
  },
  theme: {
    accent: { random: { style: ['any', 'light', 'dark', 'pastel', 'saturated'] } },
    style: ['dark', 'light', 'system'],
    background: {
      type: ['theme', 'accent', 'color', 'gradient', 'image', 'video']
    }
  }
};

state.default.theme.color.lightness.offset = state.minMax.theme.color.lightness.contrast.max - state.default.theme.color.lightness.contrast;

state.default.theme.color.lightness.start = state.default.theme.color.lightness.offset;

state.default.theme.color.lightness.end = 100 - state.default.theme.color.lightness.offset;

state.get = {
  current: () => { return state.current },
  default: () => { return JSON.parse(JSON.stringify(state.default)) },
  minMax: () => { return JSON.parse(JSON.stringify(state.minMax)) },
  step: () => { return JSON.parse(JSON.stringify(state.step)) },
  option: () => { return JSON.parse(JSON.stringify(state.option)) }
};

state.set = {
  restore: (dataToRestore) => {
    state.current = dataToRestore.state;
    console.log('state restored');
  },
  default: () => {
    state.current = state.get.default();
    console.log('state set to default');
  }
};

export { state };
