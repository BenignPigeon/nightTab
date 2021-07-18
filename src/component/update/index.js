import { state } from '../state';
import { version } from '../version';
import { convertColor } from '../../utility/convertColor';
import { updateLegacy } from '../updateLegacy';

const update = {};

update.mod = updateLegacy.get();

update.mod['7.0.0'] = function(data) {

  data.state.header.order.splice(data.state.header.order.indexOf('editAdd'), 1);
  data.state.header.order.splice(data.state.header.order.indexOf('colorAccent'), 1);
  data.state.header.order.splice(data.state.header.order.indexOf('menu'), 1);

  data.state.header.greeting.size = data.state.header.greeting.size * 100;
  data.state.header.clock.size = data.state.header.clock.size * 100;
  data.state.header.transitional.size = data.state.header.transitional.size * 100;
  data.state.header.date.size = data.state.header.date.size * 100;
  data.state.header.search.size = data.state.header.search.size * 100;

  data.state.header.order.push('toolbar');

  data.state.layout.padding = data.state.layout.padding * 10;

  data.state.layout.gutter = data.state.layout.gutter * 10;

  data.state.layout.size = data.state.layout.size * 100;

  data.state.layout.area = {
    header: {
      width: data.state.header.area.width,
      justify: data.state.header.area.justify
    },
    bookmark: {
      width: data.state.link.area.width,
      justify: data.state.link.area.justify
    }
  };

  delete data.state.header.area.width;
  delete data.state.header.area.justify;
  delete data.state.link.area.width;
  delete data.state.link.area.justify;

  switch (data.state.layout.alignment) {
    case 'topleft':
      data.state.layout.alignment = 'top-left';
      break;

    case 'topcenter':
      data.state.layout.alignment = 'top-center';
      break;

    case 'topright':
      data.state.layout.alignment = 'top-right';
      break;

    case 'centerleft':
      data.state.layout.alignment = 'center-left';
      break;

    case 'centercenter':
      data.state.layout.alignment = 'center-center';
      break;

    case 'centerright':
      data.state.layout.alignment = 'center-right';
      break;

    case 'bottomleft':
      data.state.layout.alignment = 'bottom-left';
      break;

    case 'bottomcenter':
      data.state.layout.alignment = 'bottom-center';
      break;

    case 'bottomright':
      data.state.layout.alignment = 'bottom-right';
      break;

  };

  switch (data.state.layout.order) {
    case 'headerlink':
      data.state.layout.order = 'header-bookmark';
      break;

    case 'linkheader':
      data.state.layout.order = 'bookmark-header';
      break;

  };

  data.state.toolbar = { style: 'transparent', location: 'header', position: 'bottom-right', size: 100, accent: { show: true }, add: { show: true }, edit: { show: true } };

  data.state.theme.background = data.state.background;

  delete data.state.background;

  data.state.theme.background.gradient = {
    angle: 160,
    start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
    end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
  };

  if (data.state.theme.background.visual.show) {

    switch (data.state.theme.background.visual.type) {
      case 'image':
        data.state.theme.background.type = 'image';
        break;

      case 'video':
        data.state.theme.background.type = 'video';
        break;
    };

  } else {

    if (data.state.theme.background.color.by === 'custom') {
      data.state.theme.background.type = 'color';
    } else {
      data.state.theme.background.type = 'theme';
    };

  };

  delete data.state.theme.background.color.by;

  delete data.state.theme.background.visual.image.file;

  data.state.theme.background.visual.image.blur = data.state.theme.background.visual.blur;
  data.state.theme.background.visual.image.opacity = data.state.theme.background.visual.opacity * 100;
  data.state.theme.background.visual.image.scale = data.state.theme.background.visual.scale * 100;
  data.state.theme.background.visual.image.grayscale = data.state.theme.background.visual.grayscale * 100;
  data.state.theme.background.visual.image.accent = data.state.theme.background.visual.accent * 100;

  data.state.theme.background.visual.video.blur = data.state.theme.background.visual.blur;
  data.state.theme.background.visual.video.opacity = data.state.theme.background.visual.opacity * 100;
  data.state.theme.background.visual.video.scale = data.state.theme.background.visual.scale * 100;
  data.state.theme.background.visual.video.grayscale = data.state.theme.background.visual.grayscale * 100;
  data.state.theme.background.visual.video.accent = data.state.theme.background.visual.accent * 100;

  delete data.state.theme.background.visual.blur;
  delete data.state.theme.background.visual.scale;
  delete data.state.theme.background.visual.opacity;
  delete data.state.theme.background.visual.grayscale;
  delete data.state.theme.background.visual.accent;

  data.state.theme.background.vignette = data.state.theme.background.visual.vignette;
  data.state.theme.background.image = data.state.theme.background.visual.image;
  data.state.theme.background.video = data.state.theme.background.visual.video;

  delete data.state.theme.background.visual.vignette;
  delete data.state.theme.background.visual.image;
  delete data.state.theme.background.visual.video;

  data.state.theme.radius = data.state.theme.radius * 100;
  data.state.theme.shadow = data.state.theme.shadow * 100;

  data.state.theme.color.shades = 14;

  data.state.theme.color.range = {
    primary: {
      h: data.state.theme.color.hsl.h,
      s: data.state.theme.color.hsl.s
    }
  };

  if (data.state.theme.color.contrast.light > data.state.theme.color.contrast.dark) {

    data.state.theme.color.contrast = {
      start: Math.ceil((data.state.theme.color.hsl.l * data.state.theme.color.contrast.dark) / 18),
      end: Math.ceil((data.state.theme.color.hsl.l * data.state.theme.color.contrast.light) / 4)
    };

  } else if (data.state.theme.color.contrast.light < data.state.theme.color.contrast.dark) {

    data.state.theme.color.contrast = {
      start: Math.ceil((data.state.theme.color.hsl.l * data.state.theme.color.contrast.light) / 18),
      end: Math.ceil((data.state.theme.color.hsl.l * data.state.theme.color.contrast.dark) / 4)
    };

  } else {

    data.state.theme.color.contrast = {
      start: Math.ceil(data.state.theme.color.hsl.l / 8),
      end: Math.ceil(data.state.theme.color.contrast.dark * 18)
    };

  };

  if (data.state.theme.color.contrast.end <= data.state.theme.color.contrast.start) {
    data.state.theme.color.contrast.end = data.state.theme.color.contrast.start + 1;
  };

  if (data.state.theme.color.contrast.start > state.get.minMax().theme.color.contrast.start.max) {

    data.state.theme.color.contrast.start = state.get.minMax().theme.color.contrast.start.max;

  } else if (data.state.theme.color.contrast.start < state.get.minMax().theme.color.contrast.start.min) {

    data.state.theme.color.contrast.start = state.get.minMax().theme.color.contrast.start.min;

  };

  if (data.state.theme.color.contrast.end > state.get.minMax().theme.color.contrast.end.max) {

    data.state.theme.color.contrast.end = state.get.minMax().theme.color.contrast.end.max;

  } else if (data.state.theme.color.contrast.end < state.get.minMax().theme.color.contrast.end.min) {

    data.state.theme.color.contrast.end = state.get.minMax().theme.color.contrast.end.min;

  };

  data.state.theme.shade.opacity = data.state.theme.shade.opacity * 100;
  data.state.theme.shade.blur = 0;

  delete data.state.theme.color.hsl;
  delete data.state.theme.color.rgb;
  delete data.state.theme.color.generated;

  data.state.theme.custom.all.forEach((item, i) => {

    item.color.range = {
      primary: {
        h: item.color.hsl.h,
        s: item.color.hsl.s
      }
    };

    if (item.color.contrast.light > item.color.contrast.dark) {

      item.color.contrast = {
        start: Math.ceil((item.color.hsl.l * item.color.contrast.dark) / 10),
        end: Math.ceil((item.color.hsl.l * item.color.contrast.light) / 3)
      };

    } else if (item.color.contrast.light < item.color.contrast.dark) {

      item.color.contrast = {
        start: Math.ceil((item.color.hsl.l * item.color.contrast.light) / 10),
        end: Math.ceil((item.color.hsl.l * item.color.contrast.dark) / 3)
      };

    } else {

      item.color.contrast = {
        start: Math.ceil((item.color.contrast.light) * 4),
        end: Math.ceil((item.color.contrast.dark) * 16)
      };

    };

    if (item.color.contrast.end <= item.color.contrast.start) {
      item.color.contrast.end = item.color.contrast.start + 1;
    };

    if (item.color.contrast.start > state.get.minMax().theme.color.contrast.start.max) {

      item.color.contrast.start = state.get.minMax().theme.color.contrast.start.max;

    } else if (item.color.contrast.start < state.get.minMax().theme.color.contrast.start.min) {

      item.color.contrast.start = state.get.minMax().theme.color.contrast.start.min;

    };

    if (item.color.contrast.end > state.get.minMax().theme.color.contrast.end.max) {

      item.color.contrast.end = state.get.minMax().theme.color.contrast.end.max;

    } else if (item.color.contrast.end < state.get.minMax().theme.color.contrast.end.min) {

      item.color.contrast.end = state.get.minMax().theme.color.contrast.end.min;

    };

    delete item.color.hsl;
    delete item.color.rgb;
    delete item.color.generated;

    item.radius = item.radius * 100;

    item.shadow = item.shadow * 100;

    if (item.shade) {
      item.shade.opacity = item.shade.opacity * 100;
    } else {
      item.shade = {
        opacity: 20
      };
    };

    item.shade.blur = 0;

    item.background = {
      type: 'theme',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100 }
    };

  });

  data.state.theme.custom.all.push(JSON.parse(JSON.stringify({
    name: '',
    color: data.state.theme.color,
    accent: { hsl: data.state.theme.accent.hsl, rgb: data.state.theme.accent.rgb },
    font: data.state.theme.font,
    background: data.state.theme.background,
    radius: data.state.theme.radius,
    shadow: data.state.theme.shadow,
    style: data.state.theme.style,
    shade: data.state.theme.shade
  })));

  data.state.bookmark = data.state.link;
  data.state.bookmark.url = data.state.link.item.url;
  data.state.bookmark.line = data.state.link.item.line;
  data.state.bookmark.shadow = data.state.link.item.shadow;
  data.state.bookmark.hoverScale = data.state.link.item.hoverScale;
  data.state.bookmark.size = data.state.link.item.size * 100;

  delete data.state.link;

  data.bookmark = data.bookmarks;

  delete data.bookmarks;

  data.bookmark.forEach((item, i) => {

    item.items.forEach((item, i) => {

      item.timestamp = item.timeStamp;

      delete item.timeStamp;

      item.border = data.state.bookmark.item.border;

      item.background.opacity = item.background.opacity * 100;

      switch (item.display.visual.type) {
        case 'letter':
          item.display.visual.size = item.display.visual.letter.size * 10;
          break;

        case 'icon':
          item.display.visual.size = item.display.visual.icon.size * 10;
          break;

        case 'image':
          item.display.visual.size = item.display.visual.image.size * 10;
          break;

      };

      item.color.opacity = item.color.opacity * 100;

      item.display.name.size = item.display.name.size * 10;

      item.display.gutter = item.display.gutter * 10;

      switch (item.display.order) {
        case 'visualname':
          item.display.order = 'visual-name';
          break;

        case 'namevisual':
          item.display.order = 'name-visual';
          break;

      };

      switch (item.display.alignment) {
        case 'topleft':
          item.display.alignment = 'top-left';
          break;

        case 'topcenter':
          item.display.alignment = 'top-center';
          break;

        case 'topright':
          item.display.alignment = 'top-right';
          break;

        case 'centerleft':
          item.display.alignment = 'center-left';
          break;

        case 'centercenter':
          item.display.alignment = 'center-center';
          break;

        case 'centerright':
          item.display.alignment = 'center-right';
          break;

        case 'bottomleft':
          item.display.alignment = 'bottom-left';
          break;

        case 'bottomcenter':
          item.display.alignment = 'bottom-center';
          break;

        case 'bottomright':
          item.display.alignment = 'bottom-right';
          break;

      };

      item.shape = {
        wide: item.wide,
        tall: item.tall
      };

      delete item.wide;
      delete item.tall;

    });

  });

  data.state.header.clock.hour = data.state.header.clock.hours;
  delete data.state.header.clock.hours;

  data.state.header.clock.minute = data.state.header.clock.minutes;
  delete data.state.header.clock.minutes;

  data.state.header.clock.second = data.state.header.clock.seconds;
  delete data.state.header.clock.seconds;

  return data;
};

update.run = function(data) {

  // loop over all updates in mod.all object
  for (var key in update.mod) {
    if (version.compare(data.version, key) == -1) {
      console.log('\t > running update', key);
      data = update.mod[key](data);
      data.version = key;
    };
  };

  // if no update is needed version bump
  if (version.compare(data.version, version.number) == -1) {
    console.log('\t > no state data to update, version bump to', version.number);
    data.version = version.number;
  };

  return data;

};

export { update };
