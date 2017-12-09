class AppService {
  constructor() {
    this.showBackdrop = false;
    this.language = 'eng';
  }

  toggleLanguage() {
    if (this.language === 'eng') {
      this.language = 'heb';
    } else {
      this.language = 'eng';
    }
    return this.language;
  }
}

export default AppService;
