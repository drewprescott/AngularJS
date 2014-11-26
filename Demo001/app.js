var app = angular.module('app', []);

app.controller('header', ['$scope', function($scope) {
  $scope.title = 'Hola!';

  $scope.introductions = [{value: true, story: "There can be only one..."},{value: false, story: "to be, or not to be, that is the question..."},{value: true, story: "Or maybe they is something else at test here."}];

  $scope.$watch('myData.val', function(newval){
    $scope.myData.toolong = newval.length > 3;
  });
}]);

app.controller('body', ['$scope', function($scope){
  $scope.body = "NG Repeat";
  $scope.dataArr = [{name: "drew", age: 27, happy: true},
                    {name: "mallory", age: 26, happy: true},
                    {name: "landon", age: 1, happy: true}];

  $scope.makeHappy = function(indx){
    $scope.dataArr[indx].happy = false;
    $scope.digit = indx;

  };
}]);


app.controller('bodyTwo', ['$scope', function($scope){
  $scope.title = "NG Watch/Break";

  $scope.num = 0;
  $scope.nums = [];

  $scope.increment = function(){
    $scope.num++;
  };

  $scope.stopWatch = $scope.$watch('num', function(){
    $scope.nums.push($scope.num);
  });
}]);


app.controller('bodyThree', ['$scope', function($scope){
  $scope.title = "Filter types, by String";
  $scope.location = {city: ["Dallas", "Houston", "Sherman", "Longview"]};
  $scope.family = {people: [{name: "Mallory", age: 26}, {name: "Drew", age: 27}, {name: "Landon", age: 1.5}]};

}]);
