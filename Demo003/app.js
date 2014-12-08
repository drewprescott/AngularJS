var app = angular.module('App', []);

app.controller('content', ['$scope', function($scope){
    
    $scope.test = "drew Prescott";

}]);

app.controller('login-user', ['$scope', function($scope){

    $scope.user = 'Login to access acount.';

}]);

app.controller('main-controller', ['$scope', function($scope){

    $scope.buddy = "sup";
    
    
}]);

app.controller('login-feature', ['$scope', function($scope){

    
}]);


app.directive('appBody', function(){
    
    return {
        restrict: 'AE',
        templateUrl: 'Body.html',
        replace: false,
        transclude: true
    };
    
});

app.directive('appFooter', function(){
    
    return {
        restrict: 'AE',
        templateUrl: 'Footer.html',
        replace: false,
        transclude: true
    };
    
});

app.directive('appLogin', function(){
    
    return {
        restrict: 'AE',
        templateUrl: 'Login.html',
        replace: false,
        transclude: true,
        link: function(scope, el, attrs)
        {
            el.bind('mouseenter', function(){
                console.log('rolled over');
            });
        }
    };
    
});

app.directive('onHover', function(){
    return {
        restrict: 'A',
        transclude: true,
        replace: false,
        link: function(scope, element, attrs){
            element[0].innerText = 'button';
            element.bind('mouseenter', function(){
                element[0].innerText = 'sup';
            })
        }
        
    }

});

app.directive('appAside', function(){
    
    return {
        restrict: 'AE',
        templateUrl: 'Aside.html',
        replace: false,
        transclude: true
    };
    
});