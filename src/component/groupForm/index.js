import { state } from '../state';
import { data } from '../data';
import { modal } from '../modal';
import { theme } from '../theme';
import { bookmark } from '../bookmark';
import { groupDefault } from '../groupDefault';

import * as form from '../form';

import { Button } from '../button';
import { Suggest } from '../autoSuggest';
import { Collapse } from '../collapse';
import { Tab } from '../tab';

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

const groupForm = {};

groupForm.current = null;

groupForm.form = function(groupData) {

  const groupFormElement = node('form|class:group-form');

  const groupFormMain = node('div|class:group-form-main');

  const groupNameShow = new Control_checkbox({
    object: groupData.group,
    path: 'name.show',
    id: 'name-show',
    labelText: 'Show Group name'
  });

  const groupNameText = new Control_text({
    object: groupData.group,
    path: 'name.text',
    id: 'name-text',
    value: groupData.group.name.text,
    placeholder: 'Example group',
    labelText: 'Group name',
    srOnly: true
  });

  const groupNameRandom = new Button({
    text: 'Random Group name',
    style: ['line'],
    func: () => {
      groupData.group.name.text = randomString({ adjectivesCount: randomNumber(1, 3) });
      groupNameText.update();
    }
  });

  const groupOpenAllShow = new Control_checkbox({
    object: groupData.group,
    path: 'openAll.show',
    id: 'openAll-show',
    labelText: 'Show Open all',
    description: 'Open all button will appear if there is at least one Bookmark in this Group.'
  });

  const positionDestinationOptions = function() {

    const option = [];

    if (bookmark.all.length > 0) {

      let count = bookmark.all.length;

      if (groupData.type.new) {
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

  const positionDestination = new Control_select({
    object: groupData,
    path: 'position.destination',
    id: 'position-destination',
    labelText: 'Position',
    option: positionDestinationOptions(),
    selected: groupData.position.destination
  });

  groupFormElement.appendChild(node('div|class:group-form-main', [
    form.fieldset({
      children: [
        form.wrap({
          children: [
            node('h2:Name')
          ]
        }),
        form.wrap({
          children: [
            form.indent({
              children: [
                groupNameShow.wrap(),
                form.wrap({
                  children: [
                    form.indent({
                      children: [
                        groupNameText.wrap(),
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
    }),
    node('hr'),
    form.fieldset({
      children: [
        form.wrap({
          children: [
            node('h2:Open all')
          ]
        }),
        form.wrap({
          children: [
            form.indent({
              children: [
                groupOpenAllShow.wrap()
              ]
            })
          ]
        })
      ]
    }),
    node('hr'),
    form.fieldset({
      children: [
        form.wrap({
          children: [
            node('h2:Ordering')
          ]
        }),
        form.wrap({
          children: [
            form.indent({
              children: [
                positionDestination.wrap()
              ]
            })
          ]
        })
      ]
    })
  ]));

  return groupFormElement;

};

export { groupForm };
