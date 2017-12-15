import angular from 'angular';
import megaMenuComponent from './mega-menu.component';
import MegaMenuCatalog from './mega-menu-catalog/mega-menu-catalog';
import MegaMenuModel from './mega-menu.model';

let megaMenuModule = angular.module('mega-menu', [
  MegaMenuCatalog
])
  .component('megaMenu', megaMenuComponent)
  .service('megaMenuModel', MegaMenuModel)
  .name;

export default megaMenuModule;
