app.directive('appFooter', function(){
    
    return {
        restrict: 'AE',
        templateUrl: 'footer/_Footer.html',
        replace: true,
        transclude: true
    };
    
});