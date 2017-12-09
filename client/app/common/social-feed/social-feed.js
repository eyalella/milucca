import angular from 'angular';
import socialFeedComponent from './social-feed.component';

let socialFeedModule = angular.module('social-feed', [])
  .component('socialFeed', socialFeedComponent)
  .name;

export default socialFeedModule;
