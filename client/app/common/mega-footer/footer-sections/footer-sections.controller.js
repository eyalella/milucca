class FooterSectionsController {
  constructor(footerModel) { 'ngInject';
    footerModel.footerMenu.then((footerMenu) => {
      this.footerMenu = footerMenu;
    });
  }
}

export default FooterSectionsController;
