import angular from 'angular';
import footerSectionsComponent from './footer-sections.component';

let footerSectionsModule = angular.module('footer-sections', [])
  .component('footerSections', footerSectionsComponent)
  .name;

export default footerSectionsModule;
