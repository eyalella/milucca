import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import about from './about.component';

let aboutModule = angular.module('about', [
  uiRouter
]);

aboutModule.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('about', {
      url: '/about',
      component: 'about'
    });
}]);

aboutModule.component('about', about);

export default aboutModule.name;
