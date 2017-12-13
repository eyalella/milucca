import angular from 'angular';

const swiperBreakpoints = {
  996: {
    direction: 'horizontal',
  },
};

class LooksSliderController {
  constructor() {
    this.breakpoints = swiperBreakpoints;
  }
}

export default LooksSliderController;
