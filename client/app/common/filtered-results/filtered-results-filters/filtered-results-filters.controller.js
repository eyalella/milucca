const FILTERS = [{
  name: 'coverage',
  options: ['height', 'medium', 'light']
}, {
  name: 'concerns',
  options: ['SHAPELESS EYEBROWS', 'SHINY FACE', 'DULL FACE', 'UNDER EYES CIRCLES', 'ACNE', 'SHORT EYELASHES']
}];

class FilteredResultsFiltersController {
  constructor() {
    this.filters = FILTERS;
    this.filtersVisibale = false;
    this.filtersState = {};

    FILTERS.forEach((filter) => {
      this.filtersState[filter.name] = {
        isOpen: false,
        activeOptions: []
      };
    });
  }

  toggleFilters() {
    this.filtersVisibale = !this.filtersVisibale;
  }

  toggleFilter(filterName) {
    this.filtersState[filterName].isOpen = !this.filtersState[filterName].isOpen;
  }

  toggleFilterOption(filterName, option) {
    const activeOptions = this.filtersState[filterName].activeOptions;
    const index = activeOptions.indexOf(option);
    if (index > -1) {
      activeOptions.splice(index, 1);
    } else {
      activeOptions.push(option);
    }
  }

  clearAllFilters() {
    Object.keys(this.filtersState).forEach((key) => {
      this.filtersState[key].activeOptions = [];
    });
  }

  getFilterCount(filterName) {
    if (filterName === 'all') {
      let count = 0;
      Object.keys(this.filtersState).forEach((key) => {
        count += this.filtersState[key].activeOptions.length;
      });
      return count;
    }
    return this.filtersState[filterName].activeOptions.length;
  }
}

export default FilteredResultsFiltersController;
