angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('about',{
                url:'/about',
                parent:'home',
                templateUrl: "../views/about-adventurers.html"
            })
            .state('locations',{
                url:'/locations',
                templateUrl: "../views/locations.html",
                controller: "locationCtrl"
            })
            .state('packages',{
                url:'/packages',
                templateUrl: "../views/packages.html",
                controller:"packagesCtrl"
            })
            .state('booked',{
                url:'/booked/:id',
                templateUrl: "../views/booked.html",
                controller: 'bookedCtrl'
            })
            .state('contact',{
                url:'/contact',
                parent:'home',
                templateUrl: "../views/contact.html"
            });

        $urlRouterProvider
            .otherwise('/');
    });
