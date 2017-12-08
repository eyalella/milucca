import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import AppService from './app.service';

import 'angular-ui-swiper';

angular.module('app', [
  uiRouter,
  Common,
  Components,
  'ui.swiper'
])
  .config(['$locationProvider', ($locationProvider) => {
    $locationProvider.html5Mode(true).hashPrefix('!');
  }])
  .component('app', AppComponent)
  .service('appService', AppService);
