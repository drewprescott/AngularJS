app.directive('appLogin', function(){
    
    return {
        restrict: 'AE',
        templateUrl: 'login/_Login.html',
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