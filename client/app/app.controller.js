class AppController {
  constructor($scope, appService) { 'ngInject';
    this.showBackdrop = appService.showBackdrop;
    $scope.$watch(() => appService.showBackdrop, (showBackdrop) => {
      this.showBackdrop = showBackdrop;
    });
  }
}

export default AppController;
