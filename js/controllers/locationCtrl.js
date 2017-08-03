angular.module("devmtnTravel").controller("locationCtrl", function($scope, mainSrv)
{
  $scope.data=mainSrv.travelInfo;
})
