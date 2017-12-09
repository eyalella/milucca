import angular from 'angular';
import megaFooterComponent from './mega-footer.component';

let megaFooterModule = angular.module('megaFooter', [])
  .component('megaFooter', megaFooterComponent)
  .name;

export default megaFooterModule;
