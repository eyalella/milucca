import angular from 'angular';
import filteredResultsFiltersComponent from './filtered-results-filters.component';

let filteredResultsFiltersModule = angular.module('filtered-results-filters', [])
  .component('filteredResultsFilters', filteredResultsFiltersComponent)
  .name;

export default filteredResultsFiltersModule;
