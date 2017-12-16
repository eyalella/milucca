class MegaMenuCatalogController {
  constructor(catalogModel) { 'ngInject';
    catalogModel.catalogMenuItems.then((catalog) => {
      this.catalog = catalog;
      this.activeCategory = catalog[0];
    });
  }
}

export default MegaMenuCatalogController;
