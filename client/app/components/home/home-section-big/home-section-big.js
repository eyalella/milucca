import angular from 'angular';
import homeSectionBigComponent from './home-section-big.component';

let homeSectionBigModule = angular.module('home-section-big', []);

homeSectionBigModule.component('homeSectionBig', homeSectionBigComponent);

export default homeSectionBigModule.name;
