import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import aboutComponent from './about.component';

let aboutModule = angular.module('about', [
  uiRouter
]);

aboutModule.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('about', {
      url: '/',
      component: 'about'
    });
}]);

aboutModule.component('about', aboutComponent);

export default aboutModule.name;
