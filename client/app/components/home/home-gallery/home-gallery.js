import angular from 'angular';
import homeGalleryComponent from './home-gallery.component';

let homeGalleryModule = angular.module('home-gallery', []);

homeGalleryModule.component('homeGallery', homeGalleryComponent);

export default homeGalleryModule.name;
