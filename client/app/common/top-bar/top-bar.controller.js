const NAVIGATION = ['catalog', 'about milucca', 'my choice', 'looks', '#miluccalive'];

class TopBarController {
  constructor(appService) { 'ngInject';
    this._appService = appService;
    this.megaMenuVisibale = false;
    this.menuIsVisibale = false;
    this.navigationItems = NAVIGATION;
  }

  toggleMenu() {
    this.menuIsVisibale = !this.menuIsVisibale;
  }

  openMegaMenu(section) {
    if (section === '#miluccalive') return;
    this.megaMenuSection = section;
    this.megaMenuVisibale = true;
    this._appService.showBackdrop = true;
  }

  closeMegaMenu() {
    this.megaMenuVisibale = false;
    this._appService.showBackdrop = false;
  }
}

export default TopBarController;
