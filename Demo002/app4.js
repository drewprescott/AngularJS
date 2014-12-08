//app4.js Angular

//***********************
// Namespace
//***********************


var app = angular.module('App', []);


//***********************
// Controllers
//***********************

app.controller('cntrlOne', function($scope, myConstant, myVal){
    
    $scope.demo = function(newVal){
       return myConstant.attr = newVal;
    };
    
});

app.controller('cntrlTwo', function($scope, myConstant){   
    $scope.ending = myConstant;  
});


app.controller('cntrlThree', function($scope){
    $scope.dataArr = [{name: "Drew", age: 27}, 
                      {name: "Malloy", age: 26}, 
                      {name: "Landon", age: 1.5}];
});

app.controller('cntrlFour', function($scope){
    $scope.toggle = true;
    
    $scope.placeArr = [{city: "Dallas", state: "Texas"}, 
                      {city: "South", state: "Florida"}, 
                      {city: "Windsor", state: "Montana"}];
    
    $scope.toggleButton = function(state){
        return $scope.toggle = state;
    };
    
});

app.controller('cntrlFive', function($scope){
    $scope.test = "drew";
    $scope.toggleHighlighter = 'highlight';
    $scope.engage = true;
    
    $scope.makeTrue = function(){
        $scope.engage = !$scope.engage;
    };
    
});

app.controller('cntrlSix', function($scope, hitCounter){
    $scope.count = 0;
    $scope.showAlert = false;
    $scope.incFunc = function(){
        $scope.count++;
    };
    hitCounter.attr = 20;
    $scope.newVal = hitCounter.attr;
    
    $scope.$watch('count', function(){
        if($scope.count > 3){
        $scope.alert = 'To high!'
        $scope.showAlert = true;
            
        };
    });
});

app.controller('cntrlSeven', function($scope){
    $scope.test = "hi there!";
});

app.controller('cntrlEight', function($scope, findPerson){
    //Set value of test to the factory getName, as an array.
    $scope.test = findPerson.getName(0);
    //When value is passed, return test new name - onclick
    $scope.getPerson = function(num){
        $scope.test = findPerson.getName(num);
    };
    //when name is changed, and number is retyped, name changes as selected.
    $scope.changePersonName = function(oldName, newName){
        findPerson.changeName(oldName, newName);
    };
    
});

app.controller('cntrlNine', function($scope, myService, myServiceTwo){
    $scope.name = myService.name;
    $scope.age = myServiceTwo.age;
    
});

app.controller('cntrlTen', function($scope, myTest){
    $scope.test = myTest.myMsg;
    
});

app.controller('cntrlEleven', function($scope){
    $scope.test = "TODO: Decorates";
});

app.controller('cntrlTwelve', ['$scope', 'myFactory', function(a, b){
    //Use this version to protect from minification.
    a.test = b.nameValue;
}])


//***********************
// Services
//***********************

app.constant('myConstant', {attr: "Default Constant Text"});
app.constant('hitCounter', {attr: 10});
//Constant Values are used for objects. They're not used as often.
//This data is one time and private, and can be changed depending 
//upon the situation. Is this a global variable, a global instance?


app.value('myVal', function(){return "hi";});
//Value Values are used more often, you can pass a string/function

app.factory('findPerson', function(){
   var people = ['Drew', 'Jeremy', 'Landon', 'Mallory'];
    return {
        getName: function(i){
            return people[i];
        },
        changeName: function(location, name){
            return people[location] = name;
        }
    };
});

app.factory('myFactory', function(){
    var name = "Drew Prescott";
    return {
        nameValue: name
    }
});

//Factories can hold private and public data for the browser. You can 
//pass in functions, objects and anything else, though it must return a //value.
//Can also protect values if not returend. Denying them access.
//Think OOP and Closures

app.service('myService', function(){
    this.name = "Drew Prescott"
});

app.service('myServiceTwo', myObject);

function myObject(){ 
    this.age = 3;
}
//Services are similar to factories, but are provided as new //instance of classes via this. Can declar function classes //independitly and cleanly include them via the ex: above, myObject

app.provider('myTest',function(){
    var message = "Hi there!";
    return {
        changeMsg: function(value){
            return message = value;
                },
        $get: function(){
            return {
                myMsg: message
            };
        }
    }
});

app.config(function(myTestProvider){
            myTestProvider.changeMsg('new message');
            });
//Providers must return an Object, data is funneled through the 
//$get value as a function that returns the object.
//config allows you to change the data within a provider at a set time.

//***********************
// filters
//***********************

app.filter('change', function(){
   return function(input) {
    return input + " Prescott";
  };
});


//***********************
// Decorates
//***********************
// Demo Data

app.controller('cntrlThirteen', ['$scope', 'dirFactory', function(thing, factory){
    thing.val = factory.getName();
    
    thing.change = function(val){
        factory.setName(val);
        thing.val = factory.getName();
    };
    
    
    
    
}]);

app.factory('dirFactory', function(){
    var names = "Drew Prescott";
    return {
        getName: function(){return currentName;},
        setName: function(val){return currentName = val;}
    };
});

app.directive('myImage', function(){
    return {
        restrict: 'EA',
        //EA - use as element or attr
        templateUrl: 'newTemp.html',
        //templateUrl to refernece to outside source
        replace: false,
        //true: replace elment that stuff embeds into, false, keep current elm and insert in to
    }
});
