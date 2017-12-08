import angular from 'angular';
import megaMenuComponent from './mega-menu.component';

let megaMenuModule = angular.module('mega-menu', [])
  .component('megaMenu', megaMenuComponent)
  .name;

export default megaMenuModule;
