class AppController {
  constructor($document, $scope, appService) { 'ngInject';
    this.showBackdrop = appService.showBackdrop;
    this.language = appService.language;

    $scope.$watch(() => appService.showBackdrop, (showBackdrop) => {
      this.showBackdrop = showBackdrop;
    });
    $scope.$watch(() => appService.language, (language) => {
      this.language = language;
      $document.find('html').attr('lang', language);
    });
  }
}

export default AppController;
