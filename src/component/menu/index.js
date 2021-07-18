import { state } from '../state';
import { data } from '../data';
import { form } from '../form';
import { bookmark } from '../bookmark';
import { theme } from '../theme';
import { appName } from '../appName';

import { Button } from '../button';
import { MenuFrame } from '../menuFrame';
import { MenuNav } from '../menuNav';
import { Shade } from '../shade';

import { node } from '../../utility/node';
import { clearChildNode } from '../../utility/clearChildNode';

const menu = {};

menu.navData = [
  { name: 'Theme', active: true, overscroll: true, sub: ['Preset', 'Saved', 'Style', 'Colour', 'Accent', 'Font', 'Radius', 'Shadow', 'Shade', 'Background'] },
  { name: 'Layout', active: false, overscroll: true, sub: ['Scaling', 'Area', 'Padding', 'Gutter', 'Alignment'] },
  { name: 'Header', active: false, overscroll: true, sub: ['Area', 'Greeting', 'Transitional words', 'Clock', 'Date', 'Search', ] },
  { name: 'Bookmark', active: false, overscroll: true, sub: ['General', 'Style', 'Orientation'] },
  { name: 'Toolbar', active: false, overscroll: true, sub: ['Size', 'Style', 'Location', 'Position', 'Controls'] },
  { name: 'Data', active: false, overscroll: true, sub: ['Import', 'Backup', 'Clear'] },
  { name: 'Coffee', active: false, overscroll: false },
  { name: appName, active: false, overscroll: false }
];

menu.mod = {};

menu.frame = null;

menu.open = () => {

  menu.frame = new MenuFrame({
    navData: menu.navData
  });

  menu.frame.open();

};

menu.close = () => {

  if (menu.frame) {
    menu.frame.close();
  };

};

menu.toggle = () => {

  if (state.get.current().menu) {
    menu.close();
  } else {
    menu.open();
  };

};

export { menu };
