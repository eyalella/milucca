import angular from 'angular';
import catalogSectionTitleComponent from './catalog-section-title.component';

let catalogSectionTitleModule = angular.module('catalog-section-title', [])
  .component('catalogSectionTitle', catalogSectionTitleComponent)
  .name;

export default catalogSectionTitleModule;
