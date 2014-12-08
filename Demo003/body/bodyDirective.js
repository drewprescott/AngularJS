app.directive('appBody', function(){
    
    return {
        restrict: 'AE',
        templateUrl: 'body/_Body.html',
        replace: false,
        link: function(scope, element, attrs){
            
            console.log(element);
            
            attrs.$observe('test', function(val){
                console.log(val);
                element.find('figcaption').text(val);
            });
            
            
            
        }
    };
    
});