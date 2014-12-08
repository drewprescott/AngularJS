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