import { state } from '../state';

const themePreset = {};

themePreset.get = () => {
  return [{
    name: 'nightTab (default)',
    color: state.get.default().theme.color,
    accent: { hsl: state.get.default().theme.accent.hsl, rgb: state.get.default().theme.accent.rgb },
    font: state.get.default().theme.font,
    background: state.get.default().theme.background,
    radius: state.get.default().theme.radius,
    shadow: state.get.default().theme.shadow,
    style: state.get.default().theme.style,
    shade: state.get.default().theme.shade
  }, {
    name: 'Black',
    color: { range: { primary: { h: 0, s: 0 } }, contrast: { start: 0, end: 100 } },
    accent: { hsl: { h: 0, s: 0, l: 80 }, rgb: { r: 204, g: 204, b: 204 } },
    font: state.get.default().theme.font,
    background: state.get.default().theme.background,
    radius: state.get.default().theme.radius,
    shadow: state.get.default().theme.shadow,
    style: 'dark',
    shade: state.get.default().theme.shade
  }, {
    name: 'White',
    color: { range: { primary: { h: 0, s: 0 } }, contrast: { start: 0, end: 100 } },
    accent: { hsl: { h: 0, s: 0, l: 20 }, rgb: { r: 51, g: 51, b: 51 } },
    font: state.get.default().theme.font,
    background: state.get.default().theme.background,
    radius: state.get.default().theme.radius,
    shadow: state.get.default().theme.shadow,
    style: 'light',
    shade: state.get.default().theme.shade
  }, {
    name: 'Origin',
    color: { range: { primary: { h: 222, s: 14, l: 16 } }, contrast: { start: 12, end: 88 } },
    accent: { hsl: { h: 30, s: 100, l: 50 }, rgb: { r: 255, g: 128, b: 0 } },
    font: { display: { name: 'Fira Sans', weight: 400, style: 'normal' }, ui: { name: 'Noto Sans', weight: 400, style: 'normal' } },
    background: {
      type: 'image',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1626472271306.jpeg?raw=true', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 15 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 50,
    shadow: 75,
    style: 'dark',
    shade: { opacity: 0, blur: 10 }
  }, {
    name: 'Midnight',
    color: { range: { primary: { h: 221, s: 40 } }, contrast: { start: 12, end: 50 } },
    accent: { rgb: { r: 0, g: 17, b: 255 }, hsl: { h: 236, s: 100, l: 50 } },
    font: { display: { name: 'Megrim', weight: 400, style: 'normal' }, ui: { name: 'Lato', weight: 400, style: 'normal' } },
    background: {
      type: 'video',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/videos/1626351787997.mp4?raw=true', blur: 0, grayscale: 100, scale: 100, accent: 20, opacity: 20 }
    },
    radius: 50,
    shadow: 75,
    style: 'dark',
    shade: { opacity: 10, blur: 0 }
  }, {
    name: 'Lex',
    color: { range: { primary: { h: 278, s: 73 } }, contrast: { start: 10, end: 60 } },
    accent: { rgb: { r: 0, g: 255, b: 170 }, hsl: { h: 160, s: 100, l: 50 } },
    font: { display: { name: 'Autour One', weight: 400, style: 'normal' }, ui: { name: 'Solway', weight: 400, style: 'normal' } },
    background: {
      type: 'gradient',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 0,
        start: { hsl: { h: 268, s: 72, l: 25 }, rgb: { r: 61, g: 18, b: 110 } },
        end: { hsl: { h: 299, s: 72, l: 25 }, rgb: { r: 108, g: 18, b: 110 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 10,
    shadow: 100,
    style: 'dark',
    shade: { opacity: 90, blur: 0 }
  }, {
    name: 'Cruiser',
    color: { range: { primary: { h: 217, s: 46 } }, contrast: { start: 18, end: 74 } },
    accent: { rgb: { r: 255, g: 251, b: 0 }, hsl: { h: 59, s: 100, l: 50 } },
    font: { display: { name: 'Alatsi', weight: 400, style: 'normal' }, ui: { name: 'Source Sans Pro', weight: 400, style: 'normal' } },
    background: {
      type: 'theme',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 20,
    shadow: 150,
    style: 'dark',
    shade: { opacity: 70, blur: 0 }
  }, {
    name: 'Mint',
    color: { range: { primary: { h: 157, s: 50 } }, contrast: { start: 12, end: 50 } },
    accent: { rgb: { r: 94, g: 255, b: 226 }, hsl: { h: 169, s: 100, l: 68 } },
    font: { display: { name: 'Unica One', weight: 400, style: 'normal' }, ui: { name: 'Montserrat', weight: 400, style: 'normal' } },
    background: {
      type: 'color',
      color: { hsl: { h: 154, s: 69, l: 32 }, rgb: { r: 25, g: 138, b: 89 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 80,
    shadow: 100,
    style: 'dark',
    shade: { opacity: 40, blur: 20 }
  }, {
    name: 'Snow',
    color: { range: { primary: { h: 217, s: 46 } }, contrast: { start: 75, end: 100 } },
    accent: { rgb: { r: 181, g: 226, b: 236 }, hsl: { h: 191, s: 59, l: 82 } },
    font: { display: { name: 'Righteous', weight: 400, style: 'normal' }, ui: { name: 'Raleway', weight: 400, style: 'normal' } },
    background: {
      type: 'theme',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 0,
    shadow: 25,
    style: 'light',
    shade: { opacity: 60, blur: 0 }
  }, {
    name: 'Vanadium',
    color: { range: { primary: { h: 218, s: 33 } }, contrast: { start: 15, end: 65 } },
    accent: { hsl: { h: 30, s: 100, l: 50 }, rgb: { r: 255, g: 128, b: 0 } },
    font: { display: { name: 'Grenze Gotisch', weight: 100, style: 'normal' }, ui: { name: 'Roboto', weight: 400, style: 'normal' } },
    background: {
      type: 'video',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/videos/1626342631982.mp4?raw=true', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 30 }
    },
    radius: 25,
    shadow: 25,
    style: 'dark',
    shade: { opacity: 20, blur: 10 }
  }, {
    name: 'Rumble',
    color: { range: { primary: { h: 25, s: 29 } }, contrast: { start: 12, end: 50 } },
    accent: { rgb: { r: 196, g: 0, b: 66 }, hsl: { h: 340, s: 100, l: 38 } },
    font: { display: { name: 'Odibee Sans', weight: 400, style: 'normal' }, ui: { name: 'Roboto Condensed', weight: 400, style: 'normal' } },
    background: {
      type: 'theme',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 75,
    shadow: 175,
    style: 'dark',
    shade: { opacity: 50, blur: 0 }
  }, {
    name: 'Sol',
    color: { range: { primary: { h: 52, s: 100 } }, contrast: { start: 0, end: 90 } },
    accent: { rgb: { r: 255, g: 185, b: 0 }, hsl: { h: 44, s: 100, l: 50 } },
    font: { display: { name: 'Fredoka One', weight: 400, style: 'normal' }, ui: { name: 'Muli', weight: 400, style: 'normal' } },
    background: {
      type: 'accent',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 50,
    shadow: 25,
    style: 'light',
    shade: { opacity: 60, blur: 0 }
  }, {
    name: 'Deco',
    color: { range: { primary: { h: 184, s: 38 } }, contrast: { start: 22, end: 75 } },
    accent: { rgb: { r: 255, g: 161, b: 161 }, hsl: { h: 0, s: 100, l: 82 } },
    font: { display: { name: 'Poiret One', weight: 400, style: 'normal' }, ui: { name: 'Lato', weight: 400, style: 'normal' } },
    background: {
      type: 'theme',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 200,
    shadow: 50,
    style: 'dark',
    shade: { opacity: 10, blur: 0 }
  }, {
    name: 'Grimm',
    color: { range: { primary: { h: 283, s: 7 } }, contrast: { start: 18, end: 45 } },
    accent: { rgb: { r: 0, g: 255, b: 102 }, hsl: { h: 144, s: 100, l: 50 } },
    font: { display: { name: 'Griffy', weight: 400, style: 'normal' }, ui: { name: 'Roboto Slab', weight: 400, style: 'normal' } },
    background: {
      type: 'theme',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 100,
    shadow: 150,
    style: 'dark',
    shade: { opacity: 90, blur: 0 }
  }, {
    name: 'Macaroon',
    color: { range: { primary: { h: 301, s: 28 } }, contrast: { start: 55, end: 80 } },
    accent: { rgb: { r: 110, g: 109, b: 208 }, hsl: { h: 241, s: 51, l: 62 } },
    font: { display: { name: 'Calistoga', weight: 400, style: 'normal' }, ui: { name: 'Source Sans Pro', weight: 400, style: 'normal' } },
    background: {
      type: 'theme',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 40,
    shadow: 50,
    style: 'light',
    shade: { opacity: 30, blur: 0 }
  }, {
    name: 'Pepper',
    color: { range: { primary: { h: 0, s: 69 } }, contrast: { start: 15, end: 80 } },
    accent: { rgb: { r: 255, g: 150, b: 0 }, hsl: { h: 35, s: 100, l: 50 } },
    font: { display: { name: 'Big Shoulders Display', weight: 400, style: 'normal' }, ui: { name: 'Montserrat', weight: 400, style: 'normal' } },
    background: {
      type: 'gradient',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 360,
        start: { hsl: { h: 358, s: 77, l: 32 }, rgb: { r: 144, g: 19, b: 23 } },
        end: { hsl: { h: 9, s: 72, l: 44 }, rgb: { r: 193, g: 56, b: 31 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 60,
    shadow: 100,
    style: 'dark',
    shade: { opacity: 10, blur: 0 }
  }, {
    name: 'Steel',
    color: { range: { primary: { h: 214, s: 30 } }, contrast: { start: 20, end: 80 } },
    accent: { rgb: { r: 59, g: 95, b: 118 }, hsl: { h: 203, s: 33, l: 35 } },
    font: { display: { name: 'Abel', weight: 400, style: 'normal' }, ui: { name: 'Raleway', weight: 400, style: 'normal' } },
    background: {
      type: 'theme',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 30,
    shadow: 50,
    style: 'light',
    shade: { opacity: 70, blur: 0 }
  }, {
    name: 'Outrun',
    color: { range: { primary: { h: 227, s: 52 } }, contrast: { start: 15, end: 60 } },
    accent: { rgb: { r: 255, g: 0, b: 187 }, hsl: { h: 316, s: 100, l: 50 } },
    font: { display: { name: 'Major Mono Display', weight: 400, style: 'normal' }, ui: { name: 'Roboto Condensed', weight: 400, style: 'normal' } },
    background: {
      type: 'image',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1626365114391.jpeg?raw=true', blur: 0, grayscale: 0, scale: 100, accent: 60, opacity: 70 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 0,
    shadow: 0,
    style: 'dark',
    shade: { opacity: 70, blur: 0 }
  }, {
    name: 'Pumpkin',
    color: { range: { primary: { h: 198, s: 0 } }, contrast: { start: 10, end: 60 } },
    accent: { rgb: { r: 238, g: 119, b: 34 }, hsl: { h: 25, s: 86, l: 53 } },
    font: { display: { name: 'Girassol', weight: 400, style: 'normal' }, ui: { name: 'Muli', weight: 400, style: 'normal' } },
    background: {
      type: 'theme',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 20,
    shadow: 100,
    style: 'dark',
    shade: { opacity: 10, blur: 0 }
  }, {
    name: 'Funkadelic',
    color: { range: { primary: { h: 307, s: 100 } }, contrast: { start: 20, end: 70 } },
    accent: { rgb: { r: 238, g: 238, b: 34 }, hsl: { h: 60, s: 86, l: 53 } },
    font: { display: { name: 'Monoton', weight: 400, style: 'normal' }, ui: { name: 'Lato', weight: 400, style: 'normal' } },
    background: {
      type: 'theme',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 120,
    shadow: 0,
    style: 'dark',
    shade: { opacity: 80, blur: 0 }
  }, {
    name: 'Azure',
    color: { range: { primary: { h: 215, s: 18 } }, contrast: { start: 13, end: 40 } },
    accent: { rgb: { r: 0, g: 255, b: 255 }, hsl: { h: 180, s: 100, l: 50 } },
    font: { display: { name: 'Unica One', weight: 400, style: 'normal' }, ui: { name: 'Inria Sans', weight: 400, style: 'normal' } },
    background: {
      type: 'gradient',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 0,
        start: { hsl: { h: 200, s: 33, l: 30 }, rgb: { r: 51, g: 85, b: 102 } },
        end: { hsl: { h: 212, s: 29, l: 19 }, rgb: { r: 34, g: 48, b: 63 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 25,
    shadow: 50,
    style: 'dark',
    shade: { opacity: 10, blur: 10 }
  }, {
    name: 'Bean',
    color: { range: { primary: { h: 191, s: 80 } }, contrast: { start: 7, end: 65 } },
    accent: { rgb: { r: 255, g: 160, b: 0 }, hsl: { h: 38, s: 100, l: 50 } },
    font: { display: { name: 'Life Savers', weight: 400, style: 'normal' }, ui: { name: 'Oswald', weight: 400, style: 'normal' } },
    background: {
      type: 'theme',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 50,
    shadow: 175,
    style: 'dark',
    shade: { opacity: 10, blur: 0 }
  }, {
    name: 'Infrared',
    color: { range: { primary: { h: 359, s: 100 } }, contrast: { start: 12, end: 85 } },
    accent: { hsl: { h: 0, s: 100, l: 50 }, rgb: { r: 255, g: 0, b: 0 } },
    font: { display: { name: 'Bellota', weight: 400, style: 'normal' }, ui: { name: 'Lexend', weight: 400, style: 'normal' } },
    background: {
      type: 'video',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/videos/1626342620002.mp4?raw=true', blur: 0, grayscale: 0, scale: 100, accent: 60, opacity: 100 }
    },
    radius: 25,
    shadow: 75,
    style: 'dark',
    shade: { opacity: 0, blur: 5 }
  }, {
    name: 'Marker',
    color: { range: { primary: { h: 0, s: 0 } }, contrast: { start: 56, end: 96 } },
    accent: { rgb: { r: 34, g: 51, b: 68 }, hsl: { h: 210, s: 33, l: 20 } },
    font: { display: { name: 'Permanent Marker', weight: 400, style: 'normal' }, ui: { name: 'Roboto Condensed', weight: 400, style: 'normal' } },
    background: {
      type: 'image',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1626365108115.jpeg?raw=true', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 25 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 30,
    shadow: 50,
    style: 'light',
    shade: { opacity: 90, blur: 0 }
  }, {
    name: 'Kapow',
    color: { range: { primary: { h: 194, s: 77 } }, contrast: { start: 24, end: 54 } },
    accent: { rgb: { r: 21, g: 255, b: 0 }, hsl: { h: 115, s: 100, l: 50 } },
    font: { display: { name: 'Bangers', weight: 400, style: 'normal' }, ui: { name: 'Sniglet', weight: 400, style: 'normal' } },
    background: {
      type: 'image',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1626516786268.jpeg?raw=true', blur: 0, grayscale: 100, scale: 100, accent: 0, opacity: 10 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 40,
    shadow: 100,
    style: 'dark',
    shade: { opacity: 40, blur: 4 }
  }, {
    name: 'Dash',
    color: { range: { primary: { h: 211, s: 10 } }, contrast: { start: 50, end: 100 } },
    accent: { rgb: { r: 187, g: 17, b: 68 }, hsl: { h: 342, s: 83, l: 40 } },
    font: { display: { name: 'Fredericka the Great', weight: 400, style: 'normal' }, ui: { name: 'Oswald', weight: 400, style: 'normal' } },
    background: {
      type: 'theme',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 0,
    shadow: 0,
    style: 'light',
    shade: { opacity: 50, blur: 0 }
  }, {
    name: 'Savage',
    color: { range: { primary: { h: 35, s: 7 } }, contrast: { start: 5, end: 20 } },
    accent: { rgb: { r: 255, g: 0, b: 0 }, hsl: { h: 0, s: 100, l: 50 } },
    font: { display: { name: 'Metal Mania', weight: 400, style: 'normal' }, ui: { name: 'Lato', weight: 400, style: 'normal' } },
    background: {
      type: 'gradient',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 180,
        start: { hsl: { h: 30, s: 5, l: 7 }, rgb: { r: 20, g: 19, b: 18 } },
        end: { hsl: { h: 0, s: 100, l: 13 }, rgb: { r: 66, g: 0, b: 0 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 0,
    shadow: 250,
    style: 'dark',
    shade: { opacity: 80, blur: 0 }
  }, {
    name: 'Trine',
    color: { range: { primary: { h: 228, s: 71 } }, contrast: { start: 10, end: 60 } },
    accent: { rgb: { r: 0, g: 255, b: 255 }, hsl: { h: 180, s: 100, l: 50 } },
    font: { display: { name: 'Josefin Sans', weight: 300, style: 'normal' }, ui: { name: 'Roboto Slab', weight: 400, style: 'normal' } },
    background: {
      type: 'image',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1626365111390.jpeg?raw=true', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 30 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 50,
    shadow: 125,
    style: 'dark',
    shade: { opacity: 10, blur: 0 }
  }, {
    name: 'Obsidian',
    color: { range: { primary: { h: 200, s: 10 } }, contrast: { start: 5, end: 30 } },
    accent: { rgb: { r: 0, g: 255, b: 255 }, hsl: { h: 180, s: 100, l: 50 } },
    font: { display: { name: 'Zilla Slab', weight: 700, style: 'normal' }, ui: { name: 'Montserrat', weight: 400, style: 'normal' } },
    background: {
      type: 'theme',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 25,
    shadow: 200,
    style: 'dark',
    shade: { opacity: 50, blur: 0 }
  }, {
    name: 'Earthquake',
    color: { range: { primary: { h: 0, s: 13 } }, contrast: { start: 15, end: 40 } },
    accent: { rgb: { r: 255, g: 204, b: 0 }, hsl: { h: 48, s: 100, l: 50 } },
    font: { display: { name: 'Tulpen One', weight: 400, style: 'normal' }, ui: { name: 'Barlow Condensed', weight: 400, style: 'normal' } },
    background: {
      type: 'theme',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 80,
    shadow: 100,
    style: 'dark',
    shade: { opacity: 80, blur: 0 }
  }, {
    name: 'Koto',
    color: { range: { primary: { h: 231, s: 56 } }, contrast: { start: 13, end: 60 } },
    accent: { rgb: { r: 255, g: 12, b: 88 }, hsl: { h: 341, s: 100, l: 52 } },
    font: { display: { name: 'Dosis', weight: 200, style: 'normal' }, ui: { name: 'Montserrat', weight: 400, style: 'normal' } },
    background: {
      type: 'image',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1626365116841.jpeg?raw=true', blur: 0, grayscale: 0, scale: 100, accent: 20, opacity: 50 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 25,
    shadow: 50,
    style: 'dark',
    shade: { opacity: 0, blur: 10 }
  }, {
    name: 'Replica',
    color: { range: { primary: { h: 212, s: 23 } }, contrast: { start: 54, end: 100 } },
    accent: { hsl: { h: 210, s: 40, l: 30 }, rgb: { r: 51, g: 85, b: 119 } },
    font: { display: { name: 'Abel', weight: 400, style: 'normal' }, ui: { name: 'Raleway', weight: 400, style: 'normal' } },
    background: {
      type: 'image',
      color: { rgb: { r: 255, g: 255, b: 255 }, hsl: { h: 0, s: 0, l: 0 } },
      visual: { show: true, type: 'image' },
      gradient: { angle: 160, start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } }, end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } } },
      vignette: { opacity: 0, start: 90, end: 70 },
      image: { type: 'url', url: 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1626366863277.jpeg?raw=true', blur: 0, grayscale: 0, opacity: 40, scale: 100, accent: 0 },
      video: { url: '', blur: 0, grayscale: 0, opacity: 50, scale: 100, accent: 0 }
    },
    radius: 0,
    shadow: 25,
    style: 'light',
    shade: { opacity: 53, blur: 5 }
  }, {
    name: 'Acrid',
    color: { range: { primary: { h: 301, s: 32 } }, contrast: { start: 11, end: 65 } },
    accent: { rgb: { r: 29, g: 213, b: 0 }, hsl: { h: 112, s: 100, l: 42 } },
    font: { display: { name: 'Titillium Web', weight: 400, style: 'italic' }, ui: { name: 'Inconsolata', weight: 400, style: 'normal' } },
    background: {
      type: 'gradient',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 154, s: 62, l: 24 }, rgb: { r: 23, g: 99, b: 66 } },
        end: { hsl: { h: 300, s: 42, l: 21 }, rgb: { r: 76, g: 31, b: 76 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 30,
    shadow: 75,
    style: 'dark',
    shade: { opacity: 20, blur: 0 }
  }, {
    name: 'Nord',
    color: { range: { primary: { h: 220, s: 16 } }, contrast: { start: 15, end: 50 } },
    accent: { hsl: { h: 213, s: 32, l: 52 }, rgb: { r: 94, g: 129, b: 172 } },
    font: { display: { name: 'Rubik', weight: 400, style: 'normal' }, ui: { name: 'Inter', weight: 400, style: 'normal' } },
    background: {
      type: 'theme',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 75,
    shadow: 100,
    style: 'dark',
    shade: { opacity: 10, blur: 0 }
  }, {
    name: 'Hypnos',
    color: { range: { primary: { h: 243, s: 26 } }, contrast: { start: 10, end: 45 } },
    accent: { hsl: { h: 30, s: 100, l: 80 }, rgb: { r: 255, g: 204, b: 153 } },
    font: { display: { name: 'Shadows Into Light', weight: 100, style: 'normal' }, ui: { name: 'Fira Code', weight: 400, style: 'normal' } },
    background: {
      type: 'theme',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 60,
    shadow: 25,
    style: 'dark',
    shade: { opacity: 20, blur: 0 }
  }, {
    name: 'Aerial',
    color: { range: { primary: { h: 200, s: 27 } }, contrast: { start: 11, end: 77 } },
    accent: { hsl: { h: 180, s: 100, l: 50 }, rgb: { r: 0, g: 255, b: 255 } },
    font: { display: { name: 'Unica One', weight: 400, style: 'normal' }, ui: { name: 'Inria Sans', weight: 400, style: 'normal' } },
    background: {
      type: 'video',
      color: { rgb: { r: 0, g: 0, b: 0 }, hsl: { h: 0, s: 0, l: 0 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 10, opacity: 60 },
      video: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/videos/1626342605376.mp4?raw=true', blur: 0, grayscale: 0, scale: 100, accent: 35, opacity: 60 }
    },
    radius: 25,
    shadow: 50,
    style: 'dark',
    shade: { opacity: 2, blur: 0 }
  }];
};

export { themePreset };
