angular.module("devmtnTravel").controller("bookedCtrl", function($scope,$stateParams, mainSrv)
{
  $scope.data=mainSrv.packageInfo[$stateParams.id];
})
