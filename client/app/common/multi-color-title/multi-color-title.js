import angular from 'angular';
import multiColorTitleComponent from './multi-color-title.component';

let multiColorTitleModule = angular.module('multi-color-title', [])
  .component('multiColorTitle', multiColorTitleComponent)
  .name;

export default multiColorTitleModule;
