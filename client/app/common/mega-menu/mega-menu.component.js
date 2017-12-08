import template from './mega-menu.html';
import controller from './mega-menu.controller';
import './mega-menu.scss';

let megaMenuComponent = {
  bindings: {
    section: '@'
  },
  template,
  controller
};

export default megaMenuComponent;
