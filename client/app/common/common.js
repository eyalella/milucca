import angular from 'angular';
import TopBar from './top-bar/top-bar';
import Search from './search/search';
import MegaMenu from './mega-menu/mega-menu';
import MegaFooter from './mega-footer/mega-footer';
import SocialFeed from './social-feed/social-feed';
import CatalogItem from './catalog-item/catalog-item';
import MultiColorTitle from './multi-color-title/multi-color-title';
import RelatedProducts from './related-products/related-products';
import LooksSlider from './looks-slider/looks-slider';
import BreadCrumbs from './bread-crumbs/bread-crumbs';
import FilteredResults from './filtered-results/filtered-results';

let commonModule = angular.module('app.common', [
  TopBar,
  Search,
  MegaMenu,
  MegaFooter,
  SocialFeed,
  CatalogItem,
  MultiColorTitle,
  RelatedProducts,
  LooksSlider,
  BreadCrumbs,
  FilteredResults
]).name;

export default commonModule;
