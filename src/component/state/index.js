const state = {};

state.current = {};

state.default = {
  layout: { size: 100, width: 80, padding: 40, gutter: 20, breakpoint: 'xs' },
  bookmark: {
    size: 100,
    hover: { size: 0, distance: 15 },
    shadow: { blur: 15, distance: 30 },
    url: { show: true },
    line: { show: true },
    shadow: { show: true },
    hoverScale: { show: false },
    orientation: 'bottom',
    style: 'block',
    edit: false,
    add: false
  },
  group: { edit: false, add: false },
  theme: {
    color: {
      range: { primary: { h: 222, s: 14 } },
      lightness: { contrast: 28, offset: null, start: null, end: null },
      shades: 14
    },
    accent: { hsl: { h: 221, s: 100, l: 50 }, rgb: { r: 0, g: 80, b: 255 } },
    font: {
      display: { name: '', weight: 400, style: 'normal' },
      ui: { name: '', weight: 400, style: 'normal' }
    },
    style: 'dark',
    bookmark: {
      shadow: { opacity: 25, color: { type: 'custom', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } } }
    },
    background: {
      type: 'theme',
      color: { hsl: { h: 213, s: 40, l: 65 }, rgb: { r: 130, g: 162, b: 201 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 191, s: 66, l: 62 }, rgb: { r: 94, g: 199, b: 222 } },
        end: { hsl: { h: 243, s: 59, l: 22 }, rgb: { r: 26, g: 23, b: 89 } }
      },
      image: { url: '', blur: 0, scale: 100, opacity: 100 },
      video: { url: '', blur: 0, scale: 100, opacity: 100 }
    },
    radius: 25,
    shadow: 75
  },
  toolbar: { style: 'transparent', position: 'bottom-right' },
  edit: false,
  modal: false,
  menu: false,
  autoSuggest: false
};

state.minMax = {
  bookmark: {
    hover: {
      size: { min: 0, max: 100 },
      distance: { min: 0, max: 300 }
    },
    shadow: {
      blur: { min: 0, max: 200 },
      distance: { min: 0, max: 300 }
    }
  },
  layout: {
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
      image: { blur: { min: 0, max: 200 }, scale: { min: 100, max: 400 }, opacity: { min: 0, max: 100 } },
      video: { blur: { min: 0, max: 200 }, scale: { min: 100, max: 400 }, opacity: { min: 0, max: 100 } }
    }
  }
};

state.default.theme.color.lightness.offset = state.minMax.theme.color.lightness.contrast.max - state.default.theme.color.lightness.contrast;

state.default.theme.color.lightness.start = state.default.theme.color.lightness.offset;

state.default.theme.color.lightness.end = 100 - state.default.theme.color.lightness.offset;

state.get = {
  current: () => { return state.current },
  default: () => { return JSON.parse(JSON.stringify(state.default)) },
  minMax: () => { return JSON.parse(JSON.stringify(state.minMax)) }
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
