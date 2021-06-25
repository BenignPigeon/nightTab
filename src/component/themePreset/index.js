const themePreset = {};

themePreset.get = function() {
  return [{
    name: 'nightTab (default)',
    font: state.get.default().theme.font,
    color: state.get.default().theme.color,
    accent: { hsl: state.get.default().theme.accent.hsl, rgb: state.get.default().theme.accent.rgb },
    radius: state.get.default().theme.radius,
    shadow: state.get.default().theme.shadow,
    style: state.get.default().theme.style,
    shade: state.get.default().theme.shade
  }, {
    name: 'Black',
    font: state.get.default().theme.font,
    color: { hsl: { h: 0, s: 0, l: 50 }, rgb: { r: 128, g: 128, b: 128 }, contrast: { light: 5, dark: 5 } },
    accent: { hsl: { h: 0, s: 0, l: 50 }, rgb: { r: 128, g: 128, b: 128 } },
    radius: state.get.default().theme.radius,
    shadow: state.get.default().theme.shadow,
    style: 'dark',
    shade: state.get.default().theme.shade
  }, {
    name: 'White',
    font: state.get.default().theme.font,
    color: { hsl: { h: 0, s: 0, l: 50 }, rgb: { r: 128, g: 128, b: 128 }, contrast: { light: 5, dark: 5 } },
    accent: { hsl: { h: 0, s: 0, l: 50 }, rgb: { r: 128, g: 128, b: 128 } },
    radius: state.get.default().theme.radius,
    shadow: state.get.default().theme.shadow,
    style: 'light',
    shade: state.get.default().theme.shade
  }, {
    name: 'Midnight',
    font: { display: { name: 'Megrim', weight: 400, style: 'normal' }, ui: { name: 'Lato', weight: 400, style: 'normal' } },
    color: { hsl: { h: 221, s: 40, l: 48 }, rgb: { r: 73, g: 104, b: 171 }, contrast: { light: 4, dark: 3.5 } },
    accent: { rgb: { r: 0, g: 17, b: 255 }, hsl: { h: 236, s: 100, l: 50 } },
    radius: 50,
    shadow: 75,
    style: 'dark',
    shade: { opacity: 10 }
  }, {
    name: 'Lex',
    font: { display: { name: 'Autour One', weight: 400, style: 'normal' }, ui: { name: 'Solway', weight: 400, style: 'normal' } },
    color: { hsl: { h: 278, s: 73, l: 50 }, rgb: { r: 153, g: 34, b: 221 }, contrast: { light: 4, dark: 4 } },
    accent: { rgb: { r: 0, g: 255, b: 170 }, hsl: { h: 160, s: 100, l: 50 } },
    radius: 10,
    shadow: 100,
    style: 'dark',
    shade: { opacity: 90 }
  }, {
    name: 'Cruiser',
    font: { display: { name: 'Alatsi', weight: 400, style: 'normal' }, ui: { name: 'Source Sans Pro', weight: 400, style: 'normal' } },
    color: { hsl: { h: 217, s: 46, l: 60 }, rgb: { r: 106, g: 142, b: 199 }, contrast: { light: 4, dark: 4 } },
    accent: { rgb: { r: 255, g: 251, b: 0 }, hsl: { h: 59, s: 100, l: 50 } },
    radius: 20,
    shadow: 150,
    style: 'dark',
    shade: { opacity: 70 }
  }, {
    name: 'Mint',
    font: { display: { name: 'Unica One', weight: 400, style: 'normal' }, ui: { name: 'Montserrat', weight: 400, style: 'normal' } },
    color: { hsl: { h: 157, s: 50, l: 49 }, rgb: { r: 63, g: 191, b: 143 }, contrast: { light: 4, dark: 4 } },
    accent: { rgb: { r: 94, g: 255, b: 226 }, hsl: { h: 169, s: 100, l: 68 } },
    radius: 80,
    shadow: 100,
    style: 'dark',
    shade: { opacity: 40 }
  }, {
    name: 'Snow',
    font: { display: { name: 'Righteous', weight: 400, style: 'normal' }, ui: { name: 'Raleway', weight: 400, style: 'normal' } },
    color: { hsl: { h: 217, s: 46, l: 58 }, rgb: { r: 98, g: 136, b: 197 }, contrast: { light: 4.4, dark: 1.5 } },
    accent: { rgb: { r: 181, g: 226, b: 236 }, hsl: { h: 191, s: 59, l: 82 } },
    radius: 0,
    shadow: 25,
    style: 'light',
    shade: { opacity: 60 }
  }, {
    name: 'Vanadium',
    font: { display: { name: 'Grenze Gotisch', weight: 100, style: 'normal' }, ui: { name: 'Roboto', weight: 400, style: 'normal' } },
    color: { hsl: { h: 218, s: 33, l: 43 }, rgb: { r: 73, g: 100, b: 146 }, contrast: { light: 5, dark: 3.5 } },
    accent: { hsl: { h: 30, s: 100, l: 50 }, rgb: { r: 255, g: 128, b: 0 } },
    radius: 25,
    shadow: 25,
    style: 'dark',
    shade: { opacity: 20 }
  }, {
    name: 'Rumble',
    font: { display: { name: 'Odibee Sans', weight: 400, style: 'normal' }, ui: { name: 'Roboto Condensed', weight: 400, style: 'normal' } },
    color: { hsl: { h: 25, s: 29, l: 48 }, rgb: { r: 159, g: 118, b: 87 }, contrast: { light: 5, dark: 3.5 } },
    accent: { rgb: { r: 196, g: 0, b: 66 }, hsl: { h: 340, s: 100, l: 38 } },
    radius: 75,
    shadow: 175,
    style: 'dark',
    shade: { opacity: 50 }
  }, {
    name: 'Sol',
    font: { display: { name: 'Fredoka One', weight: 400, style: 'normal' }, ui: { name: 'Muli', weight: 400, style: 'normal' } },
    color: { hsl: { h: 56, s: 100, l: 30 }, rgb: { r: 153, g: 142, b: 0 }, contrast: { light: 2, dark: 1 } },
    accent: { rgb: { r: 255, g: 185, b: 0 }, hsl: { h: 44, s: 100, l: 50 } },
    radius: 50,
    shadow: 25,
    style: 'light',
    shade: { opacity: 90 }
  }, {
    name: 'Deco',
    font: { display: { name: 'Poiret One', weight: 400, style: 'normal' }, ui: { name: 'Lato', weight: 400, style: 'normal' } },
    color: { hsl: { h: 184, s: 38, l: 61 }, rgb: { r: 119, g: 188, b: 194 }, contrast: { light: 1, dark: 4 } },
    accent: { rgb: { r: 255, g: 161, b: 161 }, hsl: { h: 0, s: 100, l: 82 } },
    radius: 200,
    shadow: 50,
    style: 'dark',
    shade: { opacity: 10 }
  }, {
    name: 'Grimm',
    font: { display: { name: 'Griffy', weight: 400, style: 'normal' }, ui: { name: 'Roboto Slab', weight: 400, style: 'normal' } },
    color: { hsl: { h: 283, s: 7, l: 40 }, rgb: { r: 105, g: 94, b: 109 }, contrast: { light: 5, dark: 2 } },
    accent: { rgb: { r: 0, g: 255, b: 102 }, hsl: { h: 144, s: 100, l: 50 } },
    radius: 100,
    shadow: 150,
    style: 'dark',
    shade: { opacity: 90 }
  }, {
    name: 'Macaroon',
    font: { display: { name: 'Calistoga', weight: 400, style: 'normal' }, ui: { name: 'Source Sans Pro', weight: 400, style: 'normal' } },
    color: { hsl: { h: 301, s: 28, l: 56 }, rgb: { r: 175, g: 112, b: 173 }, contrast: { light: 3, dark: 2 } },
    accent: { rgb: { r: 110, g: 109, b: 208 }, hsl: { h: 241, s: 51, l: 62 } },
    radius: 40,
    shadow: 50,
    style: 'light',
    shade: { opacity: 30 }
  }, {
    name: 'Pepper',
    font: { display: { name: 'Big Shoulders Display', weight: 400, style: 'normal' }, ui: { name: 'Montserrat', weight: 400, style: 'normal' } },
    color: { hsl: { h: 0, s: 69, l: 62 }, rgb: { r: 224, g: 91, b: 91 }, contrast: { light: 3.5, dark: 4.5 } },
    accent: { rgb: { r: 255, g: 150, b: 0 }, hsl: { h: 35, s: 100, l: 50 } },
    radius: 60,
    shadow: 100,
    style: 'dark',
    shade: { opacity: 10 }
  }, {
    name: 'Steel',
    font: { display: { name: 'Abel', weight: 400, style: 'normal' }, ui: { name: 'Raleway', weight: 400, style: 'normal' } },
    color: { hsl: { h: 214, s: 30, l: 44 }, rgb: { r: 78, g: 107, b: 145 }, contrast: { light: 3.5, dark: 3 } },
    accent: { rgb: { r: 59, g: 95, b: 118 }, hsl: { h: 203, s: 33, l: 35 } },
    radius: 30,
    shadow: 50,
    style: 'light',
    shade: { opacity: 70 }
  }, {
    name: 'Outrun',
    font: { display: { name: 'Major Mono Display', weight: 400, style: 'normal' }, ui: { name: 'Roboto Condensed', weight: 400, style: 'normal' } },
    color: { hsl: { h: 227, s: 52, l: 55 }, rgb: { r: 80, g: 106, b: 199 }, contrast: { light: 4, dark: 4 } },
    accent: { rgb: { r: 255, g: 0, b: 187 }, hsl: { h: 316, s: 100, l: 50 } },
    radius: 0,
    shadow: 0,
    style: 'dark',
    shade: { opacity: 70 }
  }, {
    name: 'Pumpkin',
    font: { display: { name: 'Girassol', weight: 400, style: 'normal' }, ui: { name: 'Muli', weight: 400, style: 'normal' } },
    color: { hsl: { h: 198, s: 0, l: 46 }, rgb: { r: 117, g: 117, b: 117 }, contrast: { light: 5, dark: 3.5 } },
    accent: { rgb: { r: 238, g: 119, b: 34 }, hsl: { h: 25, s: 86, l: 53 } },
    radius: 20,
    shadow: 100,
    style: 'dark',
    shade: { opacity: 10 }
  }, {
    name: 'Funkadelic',
    font: { display: { name: 'Monoton', weight: 400, style: 'normal' }, ui: { name: 'Lato', weight: 400, style: 'normal' } },
    color: { hsl: { h: 307, s: 100, l: 59 }, rgb: { r: 254, g: 45, b: 230 }, contrast: { light: 4, dark: 4 } },
    accent: { rgb: { r: 238, g: 238, b: 34 }, hsl: { h: 60, s: 86, l: 53 } },
    radius: 120,
    shadow: 0,
    style: 'dark',
    shade: { opacity: 80 }
  }, {
    name: 'Azure',
    font: { display: { name: 'Unica One', weight: 400, style: 'normal' }, ui: { name: 'Inria Sans', weight: 400, style: 'normal' } },
    color: { hsl: { h: 215, s: 18, l: 32 }, rgb: { r: 67, g: 79, b: 96 }, contrast: { light: 2, dark: 2 } },
    accent: { rgb: { r: 0, g: 255, b: 255 }, hsl: { h: 180, s: 100, l: 50 } },
    radius: 25,
    shadow: 50,
    style: 'dark',
    shade: { opacity: 20 }
  }, {
    name: 'Bean',
    font: { display: { name: 'Life Savers', weight: 400, style: 'normal' }, ui: { name: 'Oswald', weight: 400, style: 'normal' } },
    color: { hsl: { h: 191, s: 73, l: 48 }, rgb: { r: 33, g: 178, b: 211 }, contrast: { light: 5, dark: 4 } },
    accent: { rgb: { r: 255, g: 160, b: 0 }, hsl: { h: 38, s: 100, l: 50 } },
    radius: 50,
    shadow: 175,
    style: 'dark',
    shade: { opacity: 10 }
  }, {
    name: 'Marker',
    font: { display: { name: 'Permanent Marker', weight: 400, style: 'normal' }, ui: { name: 'Roboto Condensed', weight: 400, style: 'normal' } },
    color: { hsl: { h: 0, s: 0, l: 50 }, rgb: { r: 128, g: 128, b: 128 }, contrast: { light: 4, dark: 1 } },
    accent: { rgb: { r: 34, g: 51, b: 68 }, hsl: { h: 210, s: 33, l: 20 } },
    radius: 30,
    shadow: 50,
    style: 'light',
    shade: { opacity: 90 }
  }, {
    name: 'Kapow',
    font: { display: { name: 'Bangers', weight: 400, style: 'normal' }, ui: { name: 'Sniglet', weight: 400, style: 'normal' } },
    color: { hsl: { h: 194, s: 77, l: 50 }, rgb: { r: 29, g: 179, b: 225 }, contrast: { light: 4.5, dark: 2.6 } },
    accent: { rgb: { r: 21, g: 255, b: 0 }, hsl: { h: 115, s: 100, l: 50 } },
    radius: 40,
    shadow: 100,
    style: 'dark',
    shade: { opacity: 70 }
  }, {
    name: 'Dash',
    font: { display: { name: 'Fredericka the Great', weight: 400, style: 'normal' }, ui: { name: 'Oswald', weight: 400, style: 'normal' } },
    color: { hsl: { h: 211, s: 10, l: 50 }, rgb: { r: 114, g: 127, b: 140 }, contrast: { light: 5, dark: 2 } },
    accent: { rgb: { r: 187, g: 17, b: 68 }, hsl: { h: 342, s: 83, l: 40 } },
    radius: 0,
    shadow: 0,
    style: 'light',
    shade: { opacity: 50 }
  }, {
    name: 'Savage',
    font: { display: { name: 'Metal Mania', weight: 400, style: 'normal' }, ui: { name: 'Lato', weight: 400, style: 'normal' } },
    color: { hsl: { h: 35, s: 7, l: 37 }, rgb: { r: 100, g: 95, b: 87 }, contrast: { light: 5.2, dark: 3.2 } },
    accent: { rgb: { r: 255, g: 0, b: 0 }, hsl: { h: 0, s: 100, l: 50 } },
    radius: 0,
    shadow: 250,
    style: 'dark',
    shade: { opacity: 80 }
  }, {
    name: 'Trine',
    font: { display: { name: 'Josefin Sans', weight: 300, style: 'normal' }, ui: { name: 'Roboto Slab', weight: 400, style: 'normal' } },
    color: { hsl: { h: 228, s: 71, l: 50 }, rgb: { r: 36, g: 73, b: 218 }, contrast: { light: 4.2, dark: 3.9 } },
    accent: { rgb: { r: 0, g: 255, b: 255 }, hsl: { h: 180, s: 100, l: 50 } },
    radius: 50,
    shadow: 125,
    style: 'dark',
    shade: { opacity: 10 }
  }, {
    name: 'Obsidian',
    font: { display: { name: 'Zilla Slab', weight: 700, style: 'normal' }, ui: { name: 'Montserrat', weight: 400, style: 'normal' } },
    color: { hsl: { h: 200, s: 10, l: 43 }, rgb: { r: 98, g: 113, b: 120 }, contrast: { light: 4, dark: 4 } },
    accent: { rgb: { r: 0, g: 255, b: 255 }, hsl: { h: 180, s: 100, l: 50 } },
    radius: 25,
    shadow: 200,
    style: 'dark',
    shade: { opacity: 50 }
  }, {
    name: 'Earthquake',
    font: { display: { name: 'Tulpen One', weight: 400, style: 'normal' }, ui: { name: 'Barlow Condensed', weight: 400, style: 'normal' } },
    color: { hsl: { h: 0, s: 13, l: 37 }, rgb: { r: 106, g: 82, b: 82 }, contrast: { light: 6.3, dark: 2 } },
    accent: { rgb: { r: 255, g: 204, b: 0 }, hsl: { h: 48, s: 100, l: 50 } },
    radius: 80,
    shadow: 100,
    style: 'dark',
    shade: { opacity: 80 }
  }, {
    name: 'Koto',
    font: { display: { name: 'Dosis', weight: 200, style: 'normal' }, ui: { name: 'Montserrat', weight: 400, style: 'normal' } },
    color: { hsl: { h: 231, s: 56, l: 53 }, rgb: { r: 68, g: 88, b: 202 }, contrast: { light: 4.5, dark: 4 } },
    accent: { rgb: { r: 255, g: 12, b: 88 }, hsl: { h: 341, s: 100, l: 52 } },
    radius: 25,
    shadow: 50,
    style: 'dark',
    shade: { opacity: 50 }
  }, {
    name: 'Acrid',
    font: { display: { name: 'Titillium Web', weight: 400, style: 'italic' }, ui: { name: 'Inconsolata', weight: 400, style: 'normal' } },
    color: { hsl: { h: 301, s: 32, l: 57 }, rgb: { r: 180, g: 110, b: 179 }, contrast: { light: 4, dark: 4.6 } },
    accent: { rgb: { r: 29, g: 213, b: 0 }, hsl: { h: 112, s: 100, l: 42 } },
    radius: 30,
    shadow: 75,
    style: 'dark',
    shade: { opacity: 20 }
  }, {
    name: 'Nord',
    font: { display: { name: 'Rubik', weight: 400, style: 'normal' }, ui: { name: 'Inter', weight: 400, style: 'normal' } },
    color: { hsl: { h: 220, s: 16, l: 41 }, rgb: { r: 88, g: 99, b: 121 }, contrast: { light: 5.3, dark: 2.5 } },
    accent: { hsl: { h: 213, s: 32, l: 52 }, rgb: { r: 94, g: 129, b: 172 } },
    radius: 75,
    shadow: 100,
    style: 'dark',
    shade: { opacity: 50 }
  }, {
    name: 'Hypnos',
    font: { display: { name: 'Shadows Into Light', weight: 100, style: 'normal' }, ui: { name: 'Fira Code', weight: 400, style: 'normal' } },
    color: { hsl: { h: 243, s: 26, l: 36 }, rgb: { r: 70, g: 68, b: 116 }, contrast: { light: 5.4, dark: 2.6 } },
    accent: { hsl: { h: 30, s: 100, l: 80 }, rgb: { r: 255, g: 204, b: 153 } },
    radius: 60,
    shadow: 25,
    style: 'dark',
    shade: { opacity: 20 }
  }];
};

export { themePreset };