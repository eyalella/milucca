import angular from 'angular';
import megaMenuComponent from './mega-menu.component';
import MegaMenuCatalog from './mega-menu-catalog/mega-menu-catalog';

let megaMenuModule = angular.module('mega-menu', [
  MegaMenuCatalog
])
  .component('megaMenu', megaMenuComponent)
  .name;

export default megaMenuModule;
