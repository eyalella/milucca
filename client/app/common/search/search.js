import angular from 'angular';
import searchComponent from './search.component';

let searchModule = angular.module('search', [])
  .component('search', searchComponent)
  .name;

export default searchModule;
