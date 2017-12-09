import angular from 'angular';
import homeStoriesComponent from './home-stories.component';

let homeStoriesModule = angular.module('home-stories', []);

homeStoriesModule.component('homeStories', homeStoriesComponent);

export default homeStoriesModule.name;
