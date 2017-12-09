import angular from 'angular';
import megaFooterComponent from './mega-footer.component';

let megaFooterModule = angular.module('mega-footer', [])
  .component('megaFooter', megaFooterComponent)
  .name;

export default megaFooterModule;
