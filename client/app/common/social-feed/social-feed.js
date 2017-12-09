import angular from 'angular';
import socialFeedComponent from './social-feed.component';

let socialFeedModule = angular.module('socialFeed', [])
  .component('socialFeed', socialFeedComponent)
  .name;

export default socialFeedModule;
