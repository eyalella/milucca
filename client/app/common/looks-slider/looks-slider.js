import angular from 'angular';
import looksSliderComponent from './looks-slider.component';

let looksSliderModule = angular.module('looks-slider', [])
  .component('looksSlider', looksSliderComponent)
  .name;

export default looksSliderModule;
