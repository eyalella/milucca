import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

angular.module('app', [
  uiRouter,
  Common,
  Components
]).config(['$locationProvider', ($locationProvider) => {
  $locationProvider.html5Mode(true).hashPrefix('!');
}]).component('app', AppComponent);
