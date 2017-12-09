import angular from 'angular';
import catalogItemComponent from './catalog-item.component';

let catalogItemModule = angular.module('catalog-item', [])
  .component('catalogItem', catalogItemComponent)
  .name;

export default catalogItemModule;
