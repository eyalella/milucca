import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter
]);

homeModule.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
}]);

homeModule.component('home', homeComponent);

export default homeModule.name;
