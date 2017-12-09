import angular from 'angular';
import TopBar from './top-bar/top-bar';
import Search from './search/search';
import MegaMenu from './mega-menu/mega-menu';
import MegaMenuCatalog from './mega-menu-catalog/mega-menu-catalog';
import MegaFooter from './mega-footer/mega-footer';
import SocialFeed from './social-feed/social-feed';

let commonModule = angular.module('app.common', [
  TopBar,
  Search,
  MegaMenu,
  MegaMenuCatalog,
  MegaFooter,
  SocialFeed
]).name;

export default commonModule;
