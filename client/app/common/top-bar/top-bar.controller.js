import { NAVIGATION, NAVIGATION_TO_ROUTE } from '../constants';

class TopBarController {
  constructor(appService) { 'ngInject';
    this._appService = appService;
    this.megaMenuVisible = false;
    this.mobileMenuIsVisible = false;
    this.navigationItems = NAVIGATION;
    this.NAVIGATION_TO_ROUTE = NAVIGATION_TO_ROUTE;
    this.megaMenuSectionIndex = -1;
    this.language = appService.language;
  }

  toggleLanguage() {
    this.language = this._appService.toggleLanguage();
  }

  toggleMenu() {
    this._appService.showBackdrop = !this.mobileMenuIsVisible;
    this.mobileMenuIsVisible = !this.mobileMenuIsVisible;
  }

  hoverOpenMegaMenu(section) {
    if (section === '#miluccalive') return;
    this.megaMenuSection = section;
    this.megaMenuVisible = true;
    this._appService.showBackdrop = true;
  }

  hoverCloseMegaMenu() {
    this.megaMenuVisible = false;
    this._appService.showBackdrop = false;
  }

  clickToggleMegaMenu(section) {
    if (section === '#miluccalive') return;
    const sectionIndex = NAVIGATION.indexOf(section);
    if (this.megaMenuSectionIndex === sectionIndex && this.megaMenuVisible) {
      this.megaMenuVisible = false;
    } else {
      this.megaMenuSectionIndex = sectionIndex;
      this.megaMenuSection = section;
      this.megaMenuVisible = true;
    }
  }
}

export default TopBarController;
