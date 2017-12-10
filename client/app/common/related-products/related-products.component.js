import template from './related-products.html';
import controller from './related-products.controller';
import './related-products.scss';

let relatedProductsComponent = {
  bindings: {
    productName: '@'
  },
  template,
  controller
};

export default relatedProductsComponent;
