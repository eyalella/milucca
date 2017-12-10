import angular from 'angular';

const looks = [{name: 'wild'}, {name: 'new year\'s'}, {name: 'natural'}];

class HomeLooksController {
  constructor($scope) {  'ngInject';
    this.looks = looks;
    this.activeLook = looks[0].name;
    this.onSlideChange = angular.bind(this, onSlideChange, $scope);
  }
}

function onSlideChange($scope, swiper) {
  const look = looks[swiper.activeIndex];
  this.activeLook = look ? look.name : '';
  $scope.$apply();
}

export default HomeLooksController;
