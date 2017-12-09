import angular from 'angular';
import homeMyChoiceComponent from './home-my-choice.component';

let homeMyChoiceModule = angular.module('home-my-choice', []);

homeMyChoiceModule.component('homeMyChoice', homeMyChoiceComponent);

export default homeMyChoiceModule.name;
