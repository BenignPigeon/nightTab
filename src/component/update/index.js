import { state } from '../state';
import { version } from '../version';
import { convertColor } from '../../utility/convertColor';
import { updateLegacy } from '../updateLegacy';

const update = {};

update.mod = updateLegacy.get();

update.mod['7.0.0'] = function(data) {

  data.state.layout.padding = data.state.layout.padding * 10;

  data.state.layout.gutter = data.state.layout.gutter * 10;

  data.state.layout.size = data.state.layout.size * 100;

  data.state.layout.area = { header: { width: data.state.header.area.width }, bookmark: { width: data.state.link.area.width } };

  switch (data.state.header.area.justify) {

    case 'left':
      data.state.layout.area.header.align = 'flex-start';
      break;

    case 'center':
      data.state.layout.area.header.align = 'center';
      break;

    case 'right':
      data.state.layout.area.header.align = 'flex-end';
      break;

  };

  switch (data.state.link.area.justify) {

    case 'left':
      data.state.layout.area.bookmark.align = 'flex-start';
      break;

    case 'center':
      data.state.layout.area.bookmark.align = 'center';
      break;

    case 'right':
      data.state.layout.area.bookmark.align = 'flex-end';
      break;

  };

  delete data.state.header.area.width;
  delete data.state.link.area.width;
  delete data.state.header.area.justify;
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

  data.state.toolbar = { style: 'transparent', position: 'bottom-right' };

  data.state.theme.background = data.state.background;

  delete data.state.background;

  data.state.theme.background.gradient = {
    angle: 160,
    start: { hsl: { h: 191, s: 66, l: 62 }, rgb: { r: 94, g: 199, b: 222 } },
    end: { hsl: { h: 243, s: 59, l: 22 }, rgb: { r: 26, g: 23, b: 89 } }
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
  data.state.theme.color.lightness = {
    // contrast: Math.min(data.state.theme.color.contrast.light, data.state.theme.color.contrast.dark) * 9,
    // contrast: Math.round(data.state.theme.color.hsl.l / 3),
    contrast: null,
    offset: null,
    end: null,
    start: null
  };

  switch (data.state.theme.style) {
    case 'dark':
      data.state.theme.color.lightness.contrast = Math.round(data.state.theme.color.contrast.dark * 9);
      break;

    case 'light':
      data.state.theme.color.lightness.contrast = Math.round(data.state.theme.color.contrast.light * 9);
      break;

  };

  if (data.state.theme.color.lightness.contrast > state.minMax.theme.color.lightness.contrast.max) {
    data.state.theme.color.lightness.contrast = state.minMax.theme.color.lightness.contrast.max;
  };

  data.state.theme.color.lightness.offset = state.minMax.theme.color.lightness.contrast.max - data.state.theme.color.lightness.contrast;

  data.state.theme.color.lightness.start = data.state.theme.color.lightness.offset;

  data.state.theme.color.lightness.end = 100 - data.state.theme.color.lightness.offset;

  data.state.theme.color.range = {
    primary: {
      h: data.state.theme.color.hsl.h,
      s: data.state.theme.color.hsl.s
    }
  };

  data.state.theme.shade.opacity = data.state.theme.shade.opacity * 100;
  data.state.theme.shade.blur = 0;

  delete data.state.theme.color.hsl;
  delete data.state.theme.color.rgb;
  delete data.state.theme.color.generated;
  delete data.state.theme.color.contrast;

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
