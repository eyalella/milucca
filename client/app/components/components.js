import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import CatalogSection from './catalog-section/catalog-section';

let componentModule = angular.module('app.components', [
  Home,
  About,
  CatalogSection
]).name;

export default componentModule;
