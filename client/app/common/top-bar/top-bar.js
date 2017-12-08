import angular from 'angular';
import topBarComponent from './top-bar.component';

let topBarModule = angular.module('top-bar', [])
  .component('topBar', topBarComponent)
  .name;

export default topBarModule;
