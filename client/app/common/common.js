import angular from 'angular';
import TopBar from './top-bar/top-bar';
import Search from './search/search';
import MegaMenu from './mega-menu/mega-menu';
import MegaMenuCatalog from './mega-menu-catalog/mega-menu-catalog';
import MegaFooter from './mega-footer/mega-footer';
import SocialFeed from './social-feed/social-feed';
import CatalogItem from './catalog-item/catalog-item';
import MultiColorTitle from './multi-color-title/multi-color-title';

let commonModule = angular.module('app.common', [
  TopBar,
  Search,
  MegaMenu,
  MegaMenuCatalog,
  MegaFooter,
  SocialFeed,
  CatalogItem,
  MultiColorTitle
]).name;

export default commonModule;
