import angular from 'angular';
import breadCrumbsComponent from './bread-crumbs.component';

let breadCrumbsModule = angular.module('bread-crumbs', [])
  .component('breadCrumbs', breadCrumbsComponent)
  .name;

export default breadCrumbsModule;
