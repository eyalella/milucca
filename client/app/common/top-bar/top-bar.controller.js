const NAVIGATION = ['catalog', 'about milucca', 'my choice', 'looks', '#miluccalive'];

class TopBarController {
  constructor(appService) { 'ngInject';
    this._appService = appService;
    this.megaMenuVisibale = false;
    this.menuIsVisibale = false;
    this.navigationItems = NAVIGATION;
    this.megaMenuSectionIndex = -1;
    this.language = appService.language;
  }

  toggleLanguage() {
    this.language = this._appService.toggleLanguage();
  }

  toggleMenu() {
    this.menuIsVisibale = !this.menuIsVisibale;
    this._appService.showBackdrop = !this._appService.showBackdrop;
  }

  hoverOpenMegaMenu(section) {
    if (section === '#miluccalive') return;
    this.megaMenuSection = section;
    this.megaMenuVisibale = true;
    this._appService.showBackdrop = true;
  }

  hoverCloseMegaMenu() {
    this.megaMenuVisibale = false;
    this._appService.showBackdrop = false;
  }

  clickToggleMegaMenu(section) {
    if (section === '#miluccalive') return;
    const sectionIndex = NAVIGATION.indexOf(section);
    if (this.megaMenuSectionIndex === sectionIndex && this.megaMenuVisibale) {
      this.megaMenuVisibale = false;
    } else {
      this.megaMenuSectionIndex = sectionIndex;
      this.megaMenuSection = section;
      this.megaMenuVisibale = true;
    }
  }
}

export default TopBarController;
