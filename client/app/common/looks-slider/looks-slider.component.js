import template from './looks-slider.html';
import controller from './looks-slider.controller';
import './looks-slider.scss';

let looksSliderComponent = {
  bindings: {
    slidesPerView: '<',
    looks: '<',
    centeredSlides: '<',
    onSlideChangeEnd: '&',
    onSliderInit: '&'
  },
  template,
  controller
};

export default looksSliderComponent;
