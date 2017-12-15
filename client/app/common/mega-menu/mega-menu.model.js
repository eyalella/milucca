const MOCK_DATA = {
  custom: null,
  errorCode: 0,
  errorMessage: null,
  body: {
    menuItems: [
      {
        id: 1,
        name: 'MakeUp',
        level: 1,
        url: 'catalog/category/1',
        subItems: [
          {
            id: 2,
            name: 'Face',
            level: 2,
            url: 'catalog/subcategory/2',
            subItems: [
              {
                id: 4,
                name: 'Poweder',
                level: 3,
                url: 'catalog/item/4',
                subItems: null
              },
              {
                id: 5,
                name: 'CC Face',
                level: 3,
                url: 'catalog/item/5',
                subItems: null
              }
            ]
          },
          {
            id: 3,
            name: 'Lips',
            level: 2,
            url: 'catalog/subcategory/3',
            subItems: [
              {
                id: 6,
                name: 'Lipstick',
                level: 3,
                url: 'catalog/item/6',
                subItems: null
              },
              {
                id: 8,
                name: 'Mascara',
                level: 3,
                url: 'catalog/item/8',
                subItems: null
              }
            ]
          },
          {
            id: 7,
            name: 'Eyes',
            level: 2,
            url: 'catalog/subcategory/7',
            subItems: null
          }
        ]
      }
    ]
  }
};

class MegaMenuModel {
  constructor($timeout) {
    'ngInject';
    this._$timeout = $timeout;
  }

  get megaMenuCatalog() {
    return this._$timeout(() => {
      return MOCK_DATA.body.menuItems;
    });
  }
}

export default MegaMenuModel;
