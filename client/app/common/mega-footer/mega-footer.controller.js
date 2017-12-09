const footerMenu = ['catalog', 'about milucca', 'my choice', 'looks', '#millucalive', 'get in touch'];

class MegaFooterController {
  constructor() {
    this.footerMenu = footerMenu;
    this.footerSectionsVisible = false;
  }

  toggleFooterSections() {
    this.footerSectionsVisible = !this.footerSectionsVisible;
  }
}

export default MegaFooterController;
