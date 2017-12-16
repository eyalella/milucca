import template from './catalog-section-title.html';
import controller from './catalog-section-title.controller';
import './catalog-section-title.scss';

let catalogSectionTitleComponent = {
  bindings: {
    title: '@'
  },
  template,
  controller
};

export default catalogSectionTitleComponent;
