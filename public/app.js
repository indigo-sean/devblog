var DevBlog = angular.module('DevBlog', ['ngRoute']);

DevBlog.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
  .when('/', {
      templateUrl: '/app/views/home.html',
      controller: 'HomeCtrl'
    })
  .when('/about', {
      templateUrl: '/app/views/about.html',
      controller: 'StaticCtrl'
    })
  .when('/blogs', {
      templateUrl: '/app/views/blogs.html',
      controller: 'BlogsCtrl'
    })
  .otherwise({
      templateUrl: '/app/views/404.html'
    });
    
    $locationProvider.html5Mode(true);

  }]);

DevBlog.run(['$rootScope', '$http', function ($rootScope, $http) {
    console.log('App is running!');
  }]);
