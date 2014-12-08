app.directive('appAside', function(){

    return {
        restrict: 'AE',
        templateUrl: 'aside/_Aside.html',
        replace: false,
        transclude: true
    };
    
});