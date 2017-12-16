import angular from 'angular';
import filteredResultsComponent from './filtered-results.component';

let filteredResultsModule = angular.module('filtered-results', [])
  .component('filteredResults', filteredResultsComponent)
  .name;

export default filteredResultsModule;
