import angular from 'angular';
import homeLooksComponent from './home-looks.component';

let homeLooksModule = angular.module('home-looks', []);

homeLooksModule.component('homeLooks', homeLooksComponent);

export default homeLooksModule.name;
