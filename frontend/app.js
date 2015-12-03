import angular from 'angular';
import router from 'angular-ui-router';

import home from './module/home/home';
import about from './module/about/about';
import news from './module/news/news';
import error from './module/error/error';

import breadcrumbs from './common/service/Breadcrumbs';
import alert from './common/service/Alert';

import "./css/main.css";
import "./css/spinner.css";
import "./index.html";

angular
    .module('app', [about, home, news, error, breadcrumbs, alert, router])
    .config(function ($locationProvider, $urlRouterProvider, $stateProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $urlRouterProvider.otherwise('/404');
    })
    .controller('MainController', ['$rootScope', '$scope', breadcrumbs, alert, function ($rootScope, $scope, Breadcrumbs, Alerts) {
        var self = this;
        self.breadcrumbs = Breadcrumbs;
        self.alerts = Alerts;

        self.preloader = false;
        $rootScope.$on('$stateChangeStart', function() {
            self.preloader = true;
        });
        $rootScope.$on('$stateChangeSuccess', function() {
            self.preloader = false;
        });
        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
            self.preloader = false;
        });
    }]);