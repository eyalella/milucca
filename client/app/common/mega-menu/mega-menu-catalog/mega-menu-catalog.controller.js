class MegaMenuCatalogController {
  constructor(megaMenuModel) { 'ngInject';
    megaMenuModel.megaMenuCatalog.then((megaMenuCatalog) => {
      this.megaMenuCatalog = megaMenuCatalog;
      this.activeCategory = megaMenuCatalog[0];
    });
  }

  setActiveCategory(id) {
    this.activeCategory = this.megaMenuCatalog.find({ id });
  }

  getSubMenuItems(id) {

  }
}

export default MegaMenuCatalogController;
