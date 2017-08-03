angular.module("devmtnTravel").controller("packagesCtrl", function($scope, mainSrv)
{
  $scope.data=mainSrv.packageInfo;
})
