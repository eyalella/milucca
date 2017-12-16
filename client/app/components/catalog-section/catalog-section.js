import angular from 'angular';
import catalogSectionComponent from './catalog-section.component';
import catalogSectionTitle from './catalog-section-title/catalog-section-title';

let catalogSectionModule = angular.module('catalog-section', [
  catalogSectionTitle
]);

catalogSectionModule.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('section', {
      url: '/catalog/:id',
      component: 'catalogSection'
    });
}]);

catalogSectionModule.component('catalogSection', catalogSectionComponent);

export default catalogSectionModule.name;

