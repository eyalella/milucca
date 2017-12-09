import template from './multi-color-title.html';
import controller from './multi-color-title.controller';
import './multi-color-title.scss';

let multiColorTitleComponent = {
  bindings: {},
  transclude: {
    firstLine: '?firstLine',
    secondLine: '?secondLine'
  },
  template,
  controller,
};

export default multiColorTitleComponent;
