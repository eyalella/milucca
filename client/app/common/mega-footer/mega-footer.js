import angular from 'angular';
import megaFooterComponent from './mega-footer.component';
import footerSections from './footer-sections/footer-sections';

let megaFooterModule = angular.module('mega-footer', [
  footerSections
])
  .component('megaFooter', megaFooterComponent)
  .name;

export default megaFooterModule;
