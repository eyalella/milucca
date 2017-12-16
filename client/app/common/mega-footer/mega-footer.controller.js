const footerBottomMenu = ['catalog', 'about milucca', 'my choice', 'looks', '#millucalive', 'get in touch'];

class MegaFooterController {
  constructor() {
    this.footerBottomMenu = footerBottomMenu;
    this.footerSectionsVisible = true;
  }

  toggleFooterSections() {
    this.footerSectionsVisible = !this.footerSectionsVisible;
  }
}

export default MegaFooterController;
