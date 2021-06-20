import { state } from '../state';
import { data } from '../data';
import { theme } from '../theme';
import { bookmark } from '../bookmark';
import { bookmarkDefault } from '../bookmarkDefault';
import { bookmarkMinMax } from '../bookmarkMinMax';

import * as form from '../form';

import { Button } from '../button';
import { Suggest } from '../suggest';
import { Collapse } from '../collapse';
import { Tab } from '../tab';
import { BookmarkPreview } from '../bookmarkPreview';

import { Control_helperText } from '../control/helperText';
import { Control_inputButton } from '../control/inputButton';
import { Control_groupText } from '../control/groupText';
import { Control_radio } from '../control/radio';
import { Control_radioGrid } from '../control/radioGrid';
import { Control_checkbox } from '../control/checkbox';
import { Control_slider } from '../control/slider';
import { Control_slimSlider } from '../control/slimSlider';
import { Control_colorMixer } from '../control/colorMixer';
import { Control_color } from '../control/color';
import { Control_text } from '../control/text';
import { Control_select } from '../control/select';

import { node } from '../../utility/node';
import { complexNode } from '../../utility/complexNode';
import { isValidString } from '../../utility/isValidString';
import { trimString } from '../../utility/trimString';
import { ordinalNumber } from '../../utility/ordinalNumber';
import { randomString } from '../../utility/randomString';
import { randomNumber } from '../../utility/randomNumber';

import './index.css';

const bookmarkForm = {};

bookmarkForm.current = null;

bookmarkForm.form = function(bookmarkData) {

  const bookmarkFormElement = node('form|class:bookmark-form');

  const bookmarkFormMain = node('div|class:bookmark-form-main');

  const displayVisualShow = new Control_checkbox({
    object: bookmarkData.link,
    path: 'display.visual.show',
    id: 'display-visual-show',
    labelText: 'Show Visual Element',
    description: 'Display Letters, Icon or an Image on this Bookmark hexagon.',
    action: () => {
      bookmarkFormElement.disable();
      tilePreview.update.assemble(bookmarkData);
    }
  });

  const displayVisualType = new Control_radio({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'display-visual-type-letter', labelText: 'Letter', value: 'letter' },
      { id: 'display-visual-type-icon', labelText: 'Icon', value: 'icon' },
      { id: 'display-visual-type-image', labelText: 'Image', value: 'image' }
    ],
    groupName: 'display-visual-type',
    path: 'display.visual.type',
    action: () => {
      bookmarkFormElement.disable();
      tilePreview.update.assemble(bookmarkData);
    }
  });

  const displayVisualTypeLetter = new Control_text({
    object: bookmarkData.link,
    path: 'display.visual.letter.text',
    id: 'display-visual-letter-text',
    value: bookmarkData.link.display.visual.letter.text,
    placeholder: 'E',
    labelText: 'Bookmark letter',
    srOnly: true,
    action: () => {
      tilePreview.update.assemble(bookmarkData);
    }
  });

  const displayVisualTypeIcon = new Control_text({
    object: bookmarkData.link,
    path: 'display.visual.icon.label',
    id: 'display-visual-icon-label',
    value: bookmarkData.link.display.visual.icon.label,
    placeholder: 'FontAwesome Brands or Icons',
    labelText: 'Bookmark icon',
    srOnly: true,
    action: () => {
      tilePreview.update.assemble(bookmarkData);
    }
  });

  const displayVisualTypeIconDisplay = new Control_groupText({
    classList: ['bookmark-form-text-icon', 'form-group-item-small']
  });

  const displayVisualTypeIconRemove = new Button({
    text: 'Remove icon',
    srOnly: true,
    style: ['line'],
    iconName: 'cross',
    classList: ['form-group-item-small'],
    func: () => {
      bookmarkData.link.display.visual.icon.label = '';
      bookmarkData.link.display.visual.icon.prefix = '';
      bookmarkData.link.display.visual.icon.name = '';
      bookmarkFormElement.update();
      tilePreview.update.assemble(bookmarkData);
    }
  });

  const displayVisualTypeImage = new Control_text({
    object: bookmarkData.link,
    path: 'display.visual.image.url',
    id: 'display-visual-image-url',
    value: bookmarkData.link.display.visual.image.url,
    placeholder: 'https://www.example.com/image.jpg',
    labelText: 'Bookmark image',
    srOnly: true,
    action: () => {
      tilePreview.update.assemble(bookmarkData);
    }
  });

  const displayVisualSize = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'display.visual.size',
    id: 'display-visual-size',
    labelText: 'Visual size',
    value: bookmarkData.link.display.visual.size,
    defaultValue: bookmarkDefault.display.visual.size,
    min: bookmarkMinMax.display.visual.size.min,
    max: bookmarkMinMax.display.visual.size.max,
    action: () => {
      tilePreview.update.style(bookmarkData);
    }
  });

  const displayVisualShowPropagate = new Control_checkbox({
    object: bookmark.mod.propagate.state.current,
    path: 'visual',
    id: 'apply-to-all-visual',
    labelText: 'Apply Show Visual Element to other Bookmarks',
    description: [
      'When saved, apply the above Visual Element visibility to all other Bookmarks.',
      'Only the Show Visual Element will be applied to all.'
    ]
  });

  const displayNameShow = new Control_checkbox({
    object: bookmarkData.link,
    path: 'display.name.show',
    id: 'display-name-show',
    labelText: 'Show Name',
    action: () => {
      bookmarkFormElement.disable();
      tilePreview.update.assemble(bookmarkData);
    }
  });

  const displayNameText = new Control_text({
    object: bookmarkData.link,
    path: 'display.name.text',
    id: 'display-name-text',
    value: bookmarkData.link.display.name.text,
    placeholder: 'Example',
    labelText: 'Bookmark name',
    srOnly: true,
    action: () => {
      tilePreview.update.assemble(bookmarkData);
    }
  });

  const displayNameSize = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'display.name.size',
    id: 'display-name-size',
    labelText: 'Name size',
    value: bookmarkData.link.display.name.size,
    defaultValue: bookmarkDefault.display.name.size,
    min: bookmarkMinMax.display.name.size.min,
    max: bookmarkMinMax.display.name.size.max,
    action: () => {
      tilePreview.update.style(bookmarkData);
    }
  });

  const displayNameShowPropagate = new Control_checkbox({
    object: bookmark.mod.propagate.state.current,
    path: 'display',
    id: 'apply-to-all-display',
    labelText: 'Apply Show Visual Element and Name to other Bookmarks',
    description: [
      'When saved, apply the above visibility to all other Bookmarks.',
      'Only the Show Visual Element and Name will be applied to all.'
    ]
  });

  const url = new Control_text({
    object: bookmarkData.link,
    path: 'url',
    id: 'url',
    value: bookmarkData.link.url,
    placeholder: 'https://www.example.com/',
    labelText: 'URL',
    action: () => {
      tilePreview.update.assemble(bookmarkData);
    }
  });

  const groupDestination = new Control_radio({
    object: bookmarkData,
    radioGroup: [
      { id: 'group-destination-existing', labelText: 'Existing Group', value: 'existing' },
      { id: 'group-destination-new', labelText: 'New Group', value: 'new' }
    ],
    groupName: 'group.destination',
    path: 'group.destination',
    action: () => {
      bookmarkFormElement.disable();
    }
  });

  const groupName = new Control_text({
    object: bookmarkData,
    path: 'group.name',
    id: 'group-name',
    value: bookmarkData.group.name,
    placeholder: 'Example group',
    labelText: 'URL',
    srOnly: true
  });

  const groupNameRandom = new Button({
    text: 'Random Group name',
    style: ['line'],
    func: () => {
      bookmarkData.group.name = randomString({ adjectivesCount: randomNumber(1, 3) });
      groupName.update();
    }
  });

  const positionDestinationGroupOptions = () => {

    const option = [];

    if (bookmark.all.length > 0) {

      bookmark.all.forEach((item, i) => {

        option.push(isValidString(item.name.text) ? item.name.text : ordinalNumber(i + 1) + ' unnamed group');

      });

    };

    return option;

  };

  const positionDestinationItemOptions = () => {

    const option = [];

    if (bookmark.all[bookmarkData.position.destination.group].items.length > 0) {

      let count = bookmark.all[bookmarkData.position.destination.group].items.length;

      if (bookmarkData.type.new || !(bookmarkData.position.origin.group === bookmarkData.position.destination.group)) {
        count++;
      };

      for (var i = 1; i <= count; i++) {

        option.push(ordinalNumber(i));

      };

    } else {

      option.push(ordinalNumber(1));

    };

    return option;

  };

  const positionDestinationGroup = new Control_select({
    object: bookmarkData,
    path: 'position.destination.group',
    id: 'position-destination-group',
    labelText: 'Group',
    srOnly: true,
    option: positionDestinationGroupOptions(),
    selected: bookmarkData.position.destination.group,
    action: () => {

      if (bookmarkData.type.new) {
        bookmarkData.position.destination.item = bookmark.all[bookmarkData.position.destination.group].items.length;
      } else {

        if (bookmarkData.position.origin.group === bookmarkData.position.destination.group) {
          bookmarkData.position.destination.item = bookmark.all[bookmarkData.position.destination.group].items.length - 1;
        } else {
          bookmarkData.position.destination.item = bookmark.all[bookmarkData.position.destination.group].items.length;
        };

      };

      positionDestinationItem.updateOption(positionDestinationItemOptions(), bookmarkData.position.destination.item);

      // console.log(
      //   'origin', bookmarkData.position.origin,
      //   'destination', bookmarkData.position.destination
      // );
    }
  });

  const positionDestinationItem = new Control_select({
    object: bookmarkData,
    path: 'position.destination.item',
    id: 'position-destination-item',
    labelText: 'Position',
    option: positionDestinationItemOptions(),
    selected: bookmarkData.position.destination.item
  });

  const colorBy = new Control_radio({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'color-by-theme', labelText: 'Theme colour', description: 'Use the Colour defined by the Theme.', value: 'theme' },
      { id: 'color-by-custom', labelText: 'Custom colour', description: 'Override the Theme colour.', value: 'custom' }
    ],
    groupName: 'color-by',
    path: 'color.by',
    action: () => {
      colorMixerCollapse.update();
      bookmarkFormElement.disable();
      tilePreview.update.assemble(bookmarkData);
    }
  });

  const colorMixer = new Control_colorMixer({
    object: bookmarkData.link,
    path: 'color',
    id: 'color',
    labelText: 'Colour',
    defaultValue: JSON.parse(JSON.stringify(bookmarkDefault.color.rgb)),
    minMaxObject: bookmarkMinMax,
    action: () => {
      tilePreview.update.style(bookmarkData);
    }
  });

  const colorOpacity = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'color.opacity',
    id: 'color-opacity',
    labelText: 'Opacity',
    value: bookmarkData.link.color.opacity,
    defaultValue: bookmarkDefault.color.opacity,
    min: bookmarkMinMax.color.opacity.min,
    max: bookmarkMinMax.color.opacity.max,
    action: () => {
      tilePreview.update.style(bookmarkData);
    }
  });

  const accentBy = new Control_radio({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'accent-by-theme', labelText: 'Theme Accent', description: 'Use the Accent defined by the Theme.', value: 'theme' },
      { id: 'accent-by-custom', labelText: 'Custom Accent', description: 'Override the Theme Accent.', value: 'custom' }
    ],
    groupName: 'accent-by',
    path: 'accent.by',
    action: () => {
      accentMixerCollapse.update();
      bookmarkFormElement.disable();
      tilePreview.update.assemble(bookmarkData);
    }
  });

  const accentMixer = new Control_colorMixer({
    object: bookmarkData.link,
    path: 'accent',
    id: 'accent',
    labelText: 'Accent',
    defaultValue: JSON.parse(JSON.stringify(bookmarkDefault.accent.rgb)),
    minMaxObject: bookmarkMinMax,
    action: () => {
      tilePreview.update.style(bookmarkData);
    }
  });

  const displayTranslateX = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'display.translate.x',
    id: 'display-translate-x',
    labelText: 'Horizontal shift',
    value: bookmarkData.link.display.translate.x,
    defaultValue: bookmarkDefault.display.translate.x,
    min: bookmarkMinMax.display.translate.x.min,
    max: bookmarkMinMax.display.translate.x.max,
    action: () => {
      tilePreview.update.style(bookmarkData);
    }
  });

  const displayTranslateY = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'display.translate.y',
    id: 'display-translate-y',
    labelText: 'Vertical shift',
    value: bookmarkData.link.display.translate.y,
    defaultValue: bookmarkDefault.display.translate.y,
    min: bookmarkMinMax.display.translate.y.min,
    max: bookmarkMinMax.display.translate.y.max,
    action: () => {
      tilePreview.update.style(bookmarkData);
    }
  });

  const displayRotate = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'display.rotate',
    id: 'display-rotate',
    labelText: 'Rotate',
    value: bookmarkData.link.display.rotate,
    defaultValue: bookmarkDefault.display.rotate,
    min: bookmarkMinMax.display.rotate.min,
    max: bookmarkMinMax.display.rotate.max,
    action: () => {
      tilePreview.update.style(bookmarkData);
    }
  });

  const displayVisualDirection = new Control_radio({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'display-direction-vertical', labelText: 'Vertical', description: 'Stack the Visual Element and Name one above the other.', value: 'vertical' },
      { id: 'display-direction-horizontal', labelText: 'Horizontal', description: 'Arrange the Visual Element and Name side by side.', value: 'horizontal' }
    ],
    groupName: 'display-direction',
    path: 'display.direction',
    action: () => {
      bookmarkFormElement.disable();
      tilePreview.update.style(bookmarkData);
    }
  });

  const displayVisualOrder = new Control_radio({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'display-order-visual-name', labelText: 'Visual element then name', description: 'Place the Visual Element before the Name.', value: 'visual-name' },
      { id: 'display-order-name-visual', labelText: 'Name then visual element', description: 'Place the Name before the Visual Element.', value: 'name-visual' }
    ],
    groupName: 'display-order',
    path: 'display.order',
    action: () => {
      bookmarkFormElement.disable();
      tilePreview.update.style(bookmarkData);
    }
  });

  const displayGutter = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'display.gutter',
    id: 'display-gutter',
    labelText: 'Gutter',
    value: bookmarkData.link.display.gutter,
    defaultValue: bookmarkDefault.display.gutter,
    min: bookmarkMinMax.display.gutter.min,
    max: bookmarkMinMax.display.gutter.max,
    action: () => {
      tilePreview.update.style(bookmarkData);
    }
  });

  const displayAlignment = new Control_radioGrid({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'toolbar-position-top-left', labelText: 'Top Left', value: 'top-left', position: 1 },
      { id: 'toolbar-position-top-center', labelText: 'Top Center', value: 'top-center', position: 2 },
      { id: 'toolbar-position-top-right', labelText: 'Top Right', value: 'top-right', position: 3 },
      { id: 'toolbar-position-center-left', labelText: 'Center Left', value: 'center-left', position: 4 },
      { id: 'toolbar-position-center-center', labelText: 'Center Center', value: 'center-center', position: 5 },
      { id: 'toolbar-position-center-right', labelText: 'Center Right', value: 'center-right', position: 6 },
      { id: 'toolbar-position-bottom-left', labelText: 'Bottom Left', value: 'bottom-left', position: 7 },
      { id: 'toolbar-position-bottom-center', labelText: 'Bottom Center', value: 'bottom-center', position: 8 },
      { id: 'toolbar-position-bottom-right', labelText: 'Bottom Right', value: 'bottom-right', position: 9 }
    ],
    label: 'Visual Element and Name alignment',
    groupName: 'display-alignment',
    path: 'display.alignment',
    gridSize: '3x3',
    action: () => {
      tilePreview.update.assemble(bookmarkData);
    }
  });

  const shapeWide = new Control_checkbox({
    object: bookmarkData.link,
    path: 'shape.wide',
    id: 'shape-wide',
    labelText: 'Wide tile',
    description: 'Bookmark tile to span across two columns.',
    action: () => {
      tilePreview.update.assemble(bookmarkData);
    }
  });

  const shapeTall = new Control_checkbox({
    object: bookmarkData.link,
    path: 'shape.tall',
    id: 'shape-tall',
    labelText: 'Tall tile',
    description: 'Bookmark tile to span across two columns.',
    action: () => {
      tilePreview.update.assemble(bookmarkData);
    }
  });

  const border = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'border',
    id: 'border',
    labelText: 'Border',
    value: bookmarkData.link.border,
    defaultValue: bookmarkDefault.border,
    min: bookmarkMinMax.border.min,
    max: bookmarkMinMax.border.max,
    action: () => {
      tilePreview.update.style(bookmarkData);
    }
  });

  const displayLayoutPropagate = new Control_checkbox({
    object: bookmark.mod.propagate.state.current,
    path: 'layout',
    id: 'apply-to-all-layout',
    labelText: 'Apply this Layout to other Bookmarks',
    description: [
      'When saved, apply the above Layout to all other Bookmarks.',
      'Only the Visual, Name and Border settings will be applied to all.'
    ]
  });

  const accentMixerArea = node('div', [
    node('hr'),
    accentMixer.wrap()
  ]);

  const accentMixerCollapse = new Collapse({
    type: 'radio',
    radioGroup: accentBy,
    target: [{
      id: accentBy.radioSet[1].radio.value,
      content: accentMixerArea
    }]
  });

  accentMixerCollapse.update();

  const colorMixerArea = node('div', [
    node('hr'),
    colorMixer.wrap()
  ]);

  const colorMixerCollapse = new Collapse({
    type: 'radio',
    radioGroup: colorBy,
    target: [{
      id: colorBy.radioSet[1].radio.value,
      content: colorMixerArea
    }]
  });

  colorMixerCollapse.update();

  const backgroundShow = new Control_checkbox({
    object: bookmarkData.link,
    path: 'background.show',
    id: 'background-show',
    labelText: 'Show background',
    description: 'Display an Image or video Background on this Bookmark tile.',
    action: () => {
      bookmarkFormElement.disable();
      tilePreview.update.assemble(bookmarkData);
    }
  });

  const backgroundType = new Control_radio({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'background-type-image', labelText: 'Image', value: 'image' },
      { id: 'background-type-video', labelText: 'Video', value: 'video' }
    ],
    groupName: 'background-type',
    path: 'background.type',
    action: () => {
      bookmarkFormElement.disable();
      tilePreview.update.assemble(bookmarkData);
    }
  });

  const backgroundImageUrl = new Control_text({
    object: bookmarkData.link,
    path: 'background.image.url',
    id: 'background-image-url',
    value: bookmarkData.link.background.image.url,
    placeholder: 'https://www.example.com/image.jpg',
    labelText: 'Background image URL',
    srOnly: true,
    action: () => {
      tilePreview.update.assemble(bookmarkData);
    }
  });

  const backgroundImageUrlHelper = new Control_helperText({
    text: ['Background image only supports a direct URL to an image file.']
  });

  const backgroundVideoUrl = new Control_text({
    object: bookmarkData.link,
    path: 'background.video.url',
    id: 'background-video-url',
    value: bookmarkData.link.background.video.url,
    placeholder: 'https://www.example.com/video.mp4',
    labelText: 'Background video URL',
    srOnly: true,
    action: () => {
      tilePreview.update.assemble(bookmarkData);
    }
  });

  const backgroundVideoUrlHelper = new Control_helperText({
    text: ['Background video only supports a direct URL to a video file. Supports MP4 and WebM format.', 'YouTube page URLs can not be used.']
  });

  const backgroundOpacity = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'background.opacity',
    id: 'background-opacity',
    labelText: 'Opacity',
    value: bookmarkData.link.background.opacity,
    defaultValue: bookmarkDefault.background.opacity,
    min: bookmarkMinMax.background.opacity.min,
    max: bookmarkMinMax.background.opacity.max,
    action: () => {
      tilePreview.update.style(bookmarkData);
    }
  });

  const displayVisualArea = form.fieldset({
    children: [
      form.wrap({
        children: [
          node('h2:Visual & Name|class:mb-2'),
          node('p:Display Letters, Icon, Image and a Name on this Bookmark tile.|class:mb-5')
        ]
      }),
      form.wrap({
        children: [
          form.indent({
            children: [
              displayVisualShow.wrap(),
              form.wrap({
                children: [
                  form.indent({
                    children: [
                      displayVisualType.radioSet[0].wrap(),
                      form.wrap({
                        children: [
                          form.indent({
                            children: [
                              displayVisualTypeLetter.wrap()
                            ]
                          })
                        ]
                      }),
                      displayVisualType.radioSet[1].wrap(),
                      form.wrap({
                        children: [
                          form.indent({
                            children: [
                              form.wrap({
                                children: [
                                  displayVisualTypeIcon.label,
                                  form.group({
                                    block: true,
                                    children: [
                                      displayVisualTypeIcon.text,
                                      displayVisualTypeIconDisplay.groupText,
                                      displayVisualTypeIconRemove.button
                                    ]
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      displayVisualType.radioSet[2].wrap(),
                      form.wrap({
                        children: [
                          form.indent({
                            children: [
                              displayVisualTypeImage.wrap()
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              node('hr'),
              displayNameShow.wrap(),
              form.wrap({
                children: [
                  form.indent({
                    children: [
                      displayNameText.wrap()
                    ]
                  })
                ]
              }),
              node('hr'),
              displayNameShowPropagate.wrap()
            ]
          })
        ]
      })
    ]
  });

  const displayAddressArea = form.fieldset({
    children: [
      form.wrap({
        children: [
          node('h2:Address|class:mb-2'),
          complexNode({ tag: 'p', text: 'Be sure to use the full URL and include <strong>"https://..."</strong>', attr: [{ key: 'class', value: 'mb-5' }] })
        ]
      }),
      form.wrap({
        children: [
          form.indent({
            children: [
              url.wrap()
            ]
          })
        ]
      })
    ]
  });

  const displayPositionArea = form.fieldset({
    children: [
      form.wrap({
        children: [
          node('h2:Position|class:mb-2'),
          node('p:The Group to place this Bookmark in.|class:mb-5')
        ]
      }),
      form.wrap({
        children: [
          form.indent({
            children: [
              groupDestination.radioSet[0].wrap(),
              form.wrap({
                children: [
                  form.indent({
                    children: [
                      positionDestinationGroup.wrap(),
                      positionDestinationItem.wrap()
                    ]
                  })
                ]
              }),
              groupDestination.radioSet[1].wrap(),
              form.wrap({
                children: [
                  form.indent({
                    children: [
                      groupName.wrap(),
                      groupNameRandom.wrap()
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });

  const displayLayoutArea = form.fieldset({
    children: [
      form.wrap({
        children: [
          node('h2:Layout|class:mb-2'),
          node('p:Change the Visual element and Name position.|class:mb-5')
        ]
      }),
      form.wrap({
        children: [
          form.indent({
            children: [
              displayVisualSize.wrap(),
              displayNameSize.wrap(),
              node('hr'),
              displayAlignment.grid(),
              node('hr'),
              displayTranslateX.wrap(),
              displayTranslateY.wrap(),
              displayRotate.wrap(),
              node('hr'),
              displayVisualDirection.wrap(),
              node('hr'),
              displayVisualOrder.wrap(),
              node('hr'),
              displayGutter.wrap(),
              node('hr'),
              shapeWide.wrap(),
              shapeTall.wrap(),
              node('hr'),
              border.wrap(),
              node('hr'),
              displayLayoutPropagate.wrap()
            ]
          })
        ]
      })
    ]
  });

  const themePropagate = new Control_checkbox({
    object: bookmark.mod.propagate.state.current,
    path: 'theme',
    id: 'apply-to-all-theme',
    labelText: 'Apply this Theme to other Bookmarks',
    description: [
      'When saved, apply the above Theme to all other Bookmarks.',
      'Only the Colour, Accent and Opacity settings will be applied to all.'
    ]
  });

  const displayThemeArea = form.fieldset({
    children: [
      form.wrap({
        children: [
          node('h2:Theme|class:mb-2'),
          node('p:Override the Theme and Accent colour.|class:mb-5')
        ]
      }),
      form.wrap({
        children: [
          form.indent({
            children: [
              colorBy.wrap(),
              form.wrap({
                children: [
                  form.indent({
                    children: [
                      colorMixerCollapse.collapse(),
                      node('hr'),
                      colorOpacity.wrap()
                    ]
                  })
                ]
              }),
              node('hr'),
              accentBy.wrap(),
              form.wrap({
                children: [
                  form.indent({
                    children: [
                      accentMixerCollapse.collapse()
                    ]
                  })
                ]
              }),
              node('hr'),
              backgroundShow.wrap(),
              form.wrap({
                children: [
                  form.indent({
                    children: [
                      backgroundType.radioSet[0].wrap(),
                      form.wrap({
                        children: [
                          form.indent({
                            children: [
                              backgroundImageUrl.wrap(),
                              backgroundImageUrlHelper.wrap()
                            ]
                          })
                        ]
                      }),
                      backgroundType.radioSet[1].wrap(),
                      form.wrap({
                        children: [
                          form.indent({
                            children: [
                              backgroundVideoUrl.wrap(),
                              backgroundVideoUrlHelper.wrap()
                            ]
                          })
                        ]
                      }),
                      node('hr'),
                      backgroundOpacity.wrap()
                    ]
                  })
                ]
              }),
              node('hr'),
              form.wrap({
                children: [
                  themePropagate.wrap()
                ]
              })
            ]
          })
        ]
      })
    ]
  });

  const formTab = new Tab({
    group: [{
      tabText: 'Visual & Name',
      area: displayVisualArea,
      active: true
    }, {
      tabText: 'Address',
      area: displayAddressArea,
      active: false
    }, {
      tabText: 'Position',
      area: displayPositionArea,
      active: false
    }, {
      tabText: 'Layout',
      area: displayLayoutArea,
      active: false
    }, {
      tabText: 'Theme',
      area: displayThemeArea,
      active: false
    }]
  });

  bookmarkFormMain.appendChild(formTab.tab());

  const tilePreview = new BookmarkPreview({
    bookmarkData: bookmarkData
  });

  const bookmarkFormAside = node('div|class:bookmark-form-aside');

  bookmarkFormAside.appendChild(tilePreview.preview());

  bookmarkFormElement.appendChild(bookmarkFormMain);

  bookmarkFormElement.appendChild(bookmarkFormAside);

  if (isValidString(bookmarkData.link.display.visual.icon.prefix) && isValidString(bookmarkData.link.display.visual.icon.name)) {
    displayVisualTypeIconDisplay.update(node('span|class:bookmark-form-icon ' + bookmarkData.link.display.visual.icon.prefix + ' fa-' + bookmarkData.link.display.visual.icon.name));
  } else {
    displayVisualTypeIconDisplay.update();
  };

  const displayVisualTypeIconAutoSuggest = new Suggest({
    input: displayVisualTypeIcon.text,
    widthElement: displayVisualArea,
    type: 'fontawesomeIcon',
    postFocus: displayVisualTypeIconDisplay.groupText,
    action: () => {
      tilePreview.update.assemble(bookmarkData);
    }
  });

  bookmark.mod.propagate.state.reset();

  bookmarkFormElement.disable = () => {
    if (bookmarkData.link.display.visual.show) {
      displayVisualType.enable();
      displayVisualTypeLetter.enable();
      displayVisualTypeIcon.enable();
      displayVisualTypeIconDisplay.enable();
      displayVisualTypeIconRemove.enable();
      displayVisualTypeImage.enable();
      displayVisualSize.enable();

      switch (bookmarkData.link.display.visual.type) {
        case 'letter':
          displayVisualTypeLetter.enable();
          displayVisualTypeIcon.disable();
          displayVisualTypeIconDisplay.disable()
          displayVisualTypeIconRemove.disable();
          displayVisualTypeImage.disable();
          break;

        case 'icon':
          displayVisualTypeLetter.disable();
          displayVisualTypeIcon.enable();
          displayVisualTypeIconDisplay.enable();
          displayVisualTypeIconRemove.enable();
          displayVisualTypeImage.disable();
          break;

        case 'image':
          displayVisualTypeLetter.disable();
          displayVisualTypeIcon.disable();
          displayVisualTypeIconDisplay.disable()
          displayVisualTypeIconRemove.disable();
          displayVisualTypeImage.enable();
          break;
      };
    } else {
      displayVisualType.disable();
      displayVisualTypeLetter.disable();
      displayVisualTypeIcon.disable();
      displayVisualTypeIconDisplay.disable();
      displayVisualTypeIconRemove.disable();
      displayVisualTypeImage.disable();
      displayVisualSize.disable();
    };

    if (bookmarkData.link.display.name.show) {
      displayNameText.enable();
      displayNameSize.enable();
    } else {
      displayNameText.disable();
      displayNameSize.disable();
    };

    if (bookmarkData.link.display.visual.show || bookmarkData.link.display.name.show) {
      displayTranslateX.enable();
      displayTranslateY.enable();
      displayRotate.enable();
    } else {
      displayTranslateX.disable();
      displayTranslateY.disable();
      displayRotate.disable();
    };

    if (bookmarkData.link.display.visual.show && bookmarkData.link.display.name.show) {
      displayVisualDirection.enable();
      displayVisualOrder.enable();
      displayGutter.enable();
    } else {
      displayVisualDirection.disable();
      displayVisualOrder.disable();
      displayGutter.disable();
    };

    switch (bookmarkData.link.color.by) {
      case 'theme':
        colorMixer.disable();
        break;

      case 'custom':
        colorMixer.enable();
        break;
    };

    switch (bookmarkData.link.accent.by) {
      case 'theme':
        accentMixer.disable();
        break;

      case 'custom':
        accentMixer.enable();
        break;
    };

    if (bookmarkData.link.background.show) {
      backgroundType.enable();
      backgroundOpacity.enable();

      switch (bookmarkData.link.background.type) {
        case 'image':
          backgroundImageUrl.enable();
          backgroundImageUrlHelper.enable();
          backgroundVideoUrl.disable();
          backgroundVideoUrlHelper.disable();
          break;

        case 'video':
          backgroundImageUrl.disable();
          backgroundImageUrlHelper.disable();
          backgroundVideoUrl.enable();
          backgroundVideoUrlHelper.enable();
          break;
      };
    } else {
      backgroundType.disable();
      backgroundImageUrl.disable();
      backgroundImageUrlHelper.disable();
      backgroundVideoUrl.disable();
      backgroundVideoUrlHelper.disable();
      backgroundOpacity.disable();
    };

    switch (bookmarkData.group.destination) {
      case 'existing':
        positionDestinationGroup.enable();
        positionDestinationItem.enable();
        groupName.disable();
        groupNameRandom.disable();
        break;

      case 'new':
        positionDestinationGroup.disable();
        positionDestinationItem.disable();
        groupName.enable();
        groupNameRandom.enable();
        break;
    };
  };

  bookmarkFormElement.update = () => {
    displayVisualShow.update();
    displayVisualType.update();
    displayVisualTypeLetter.update();
    displayVisualTypeIcon.update();
    if (isValidString(bookmarkData.link.display.visual.icon.prefix) && isValidString(bookmarkData.link.display.visual.icon.name)) {
      displayVisualTypeIconDisplay.update(node('span|class:bookmark-form-icon ' + bookmarkData.link.display.visual.icon.prefix + ' fa-' + bookmarkData.link.display.visual.icon.name));
    } else {
      displayVisualTypeIconDisplay.update();
    };
    displayVisualTypeImage.update();
    displayNameShow.update();
    displayNameText.update();
    url.update();
  };

  bookmarkFormElement.updateIcon = (autoSuggestData) => {
    bookmarkData.link.display.visual.icon.label = autoSuggestData.label;
    bookmarkData.link.display.visual.icon.name = autoSuggestData.name;
    if (autoSuggestData.styles.includes('solid')) {
      bookmarkData.link.display.visual.icon.prefix = 'fas';
    } else if (autoSuggestData.styles.includes('brands')) {
      bookmarkData.link.display.visual.icon.prefix = 'fab';
    };
    bookmarkFormElement.update();
  };

  bookmarkFormElement.disable();

  bookmarkForm.current = bookmarkFormElement;

  bookmarkFormElement.addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    };
  });

  return bookmarkFormElement;

};

export { bookmarkForm };
