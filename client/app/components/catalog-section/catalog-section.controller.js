class CatalogSectionController {
  constructor($stateParams, catalogModel) { 'ngInject';
    catalogModel.getCatalogCategory($stateParams.id).then((pageData) => {
      this.pageData = pageData;
    });
  }
}

export default CatalogSectionController;
