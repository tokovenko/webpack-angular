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
    .config(($locationProvider, $urlRouterProvider, $stateProvider) => {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $urlRouterProvider.otherwise('/404');
    })
    .controller('MainController', ['$rootScope', '$scope', breadcrumbs, alert, function($rootScope, $scope, Breadcrumbs, Alerts) {
        this.breadcrumbs = Breadcrumbs;
        this.alerts = Alerts;

        this.preloader = false;
        $rootScope.$on('$stateChangeStart', () => {
            this.preloader = true;
        });
        $rootScope.$on('$stateChangeSuccess', () => {
            this.preloader = false;
        });
        $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
            this.preloader = false;
        });
    }]);