import angular from 'angular';
import filteredResultsComponent from './filtered-results.component';
import filteredResultsFilters from './filtered-results-filters/filtered-results-filters';

let filteredResultsModule = angular.module('filtered-results', [
  filteredResultsFilters
])
  .component('filteredResults', filteredResultsComponent)
  .name;

export default filteredResultsModule;
