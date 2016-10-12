function MainController($scope) {
  $scope.contact = {
    name: 'Jennifer',
    email: 'test@test.com'
  };
}

angular
  .module('app')
  .controller('MainController', MainController);