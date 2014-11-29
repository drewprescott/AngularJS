var app = angular.module('app', []);

app.controller('header', ['$scope', function($scope) {
  $scope.title = 'Hola!';

  $scope.introductions = [{value: true, story: "There can be only one..."},{value: false, story: "to be, or not to be, that is the question..."},{value: true, story: "Or maybe they is something else at test here."}];

  $scope.$watch('myData.val', function(x){
    $scope.myData.toolong = x.length > 3;
  });

}]);

app.controller('body', ['$scope', function($scope){
  $scope.body = "NG Repeat";
  $scope.dataArr = [{name: "drew", age: 27, happy: true},
                    {name: "mallory", age: 26, happy: true},
                    {name: "landon", age: 1, happy: true}];

  $scope.makeHappy = function(indx){

      $scope.$watch('dataArr', function(indx){
        $scope.dataArr.shift(indx);
      });

    console.log($scope.dataArr);
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

app.filter('charFilter', function(){
  return function(input, length){ //input is the name expected, length is the the paramenter of what's expected
    if (!length){
      length = 10;
    }
    if(!input){
      return '';
    }

    if (input.length == length){
      return input;
    } else {
      return input.substring(1, length) + '...';
    }
  };
});

app.filter('changeName', function(){
  return function(text){
    if (text == 'Prescott'){
      return text.toUpperCase();
    } else {
      return text;
    }

  };
});
