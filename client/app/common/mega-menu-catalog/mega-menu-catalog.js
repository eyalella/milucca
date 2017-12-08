import angular from 'angular';
import megaMenuCatalogComponent from './mega-menu-catalog.component';

let megaMenuCatalogModule = angular.module('mega-menu-catalog', [])
  .component('megaMenuCatalog', megaMenuCatalogComponent)
  .name;

export default megaMenuCatalogModule;
