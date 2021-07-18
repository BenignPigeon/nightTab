import { component } from './component';
import { utility } from './utility';

console.log(component.appName + ' version:', component.version.number, component.version.name);

component.data.init();

component.layout.init();

component.toolbar.init();

component.header.init();

component.group.init();

component.bookmark.init();

component.groupAndBookmark.init();

component.theme.init();

component.pageLock.init();

component.keyboard.init();

// component.menu.open();
