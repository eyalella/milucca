import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import homeComponent from './home.component';
import homeGalleryComponent from './home-gallery/home-gallery';
import homeSectionBig from './home-section-big/home-section-big';
import homeStories from './home-stories/home-stories';
import homeMyChoice from './home-my-choice/home-my-choice';

let homeModule = angular.module('home', [
  uiRouter,
  homeGalleryComponent,
  homeSectionBig,
  homeStories,
  homeMyChoice
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
