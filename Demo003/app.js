var app = angular.module('App', []);

app.controller('content', ['$scope', function($scope){
    
    $scope.test = "drew Prescott";
    $scope.wow = "cool dude";

}]);

app.controller('login-user', ['$scope', function($scope){

    $scope.user = 'Login to access acount.';

}]);

app.controller('main-controller', ['$scope', function($scope){

    $scope.buddy = "sup";
     
}]);

app.controller('login-feature', ['$scope', function($scope){
    
}]);










