var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/category/headsets');

    $stateProvider
        .state('category', {
            url: '/category/:categoryId',
            templateUrl: 'main.html',
            controller: 'mainCtrl'
        })
        .state('tag', {
            url: '/tag/:tagId',
            templateUrl: 'main.html',
            controller: 'mainCtrl'
        })
        .state('search', {
            url: '/search/:searchString',
            templateUrl: 'main.html',
            controller: 'mainCtrl'
        })
        .state('about',{
            url:'/about',
            templateUrl: 'about.html'

        })
        .state('terms',{
            url:'/terms',
            templateUrl: 'terms.html'
        })
        .state('policy',{
            url:'/policy',
            templateUrl: 'policy.html'
        })

});


/**
 * filter gets string and returns string with first char capital and other chars lower case.
 */

app.filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : ''; // substr() extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
    }
});

app.filter('searchFor', function(){
    /*
    * All filters must return a function. The first parameter  is the data that is to be filtered,
    * and the second is an argument that may be passed with a colon (searchFor:searchString)
     */

    return function(arr, searchString){
        if(!searchString){
            return arr;

        }
        var result = [];
        searchString = searchString.toLowerCase();
        // Using the forEach helper method to loop through the array
        angular.forEach(arr, function(item){
            if(item.title.toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }
        });
        return result;
    };
});
