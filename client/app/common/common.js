import angular from 'angular';
import TopBar from './top-bar/top-bar';
import Search from './search/search';
import MegaMenu from './mega-menu/mega-menu';
import MegaMenuCatalog from './mega-menu-catalog/mega-menu-catalog';

let commonModule = angular.module('app.common', [
  TopBar,
  Search,
  MegaMenu,
  MegaMenuCatalog
]).name;

export default commonModule;
