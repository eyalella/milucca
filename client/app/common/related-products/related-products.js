import angular from 'angular';
import relatedProductsComponent from './related-products.component';

let relatedProductsModule = angular.module('related-products', [])
  .component('relatedProducts', relatedProductsComponent)
  .name;

export default relatedProductsModule;
