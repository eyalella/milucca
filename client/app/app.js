// Third party must be loaded before all components
import './third-party.scss';
import './fonts.scss';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import AppService from './app.service';
import CatalogModel from './models/catalog.model';
import FooterModel from './models/footer.model';

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
  .service('appService', AppService)
  .service('catalogModel', CatalogModel)
  .service('footerModel', FooterModel);
