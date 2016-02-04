angular.module('app.HomeController', [])

.controller('HomeController', homeController);

function homeController($scope, $state, Camera) {
  $scope.goToMapList = function() {
    $state.go('selectMap');
  };
  $scope.takePhoto = function(){
    // $state.go('selectMap');
    Camera.getPicture()
    .then(function (imageURI) {
      console.log("+++ 13 HomeController.js imageURI: ", imageURI)
      Camera.storeImage(1, 1, imageURI)
    })
  }
}