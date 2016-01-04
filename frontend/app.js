import 'babel-polyfill';

import angular from 'angular';
import router from 'angular-ui-router';

import home from './module/home/home';
import about from './module/about/about';
import news from './module/news/news';
import user from './module/user/user';
import error from './module/error/error';

import breadcrumbs from './common/service/Breadcrumbs';
import alert from './common/service/Alert';

import "./css/main.css";
import "./css/spinner.css";
import "./index.html";

angular
    .module('app', [about, home, news, user, error, breadcrumbs, alert, router])
    .config(($locationProvider, $urlRouterProvider, $stateProvider) => {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $urlRouterProvider.otherwise('/404');
    })
    .controller('MainController', ['$rootScope', '$scope', breadcrumbs, alert, '$http', function($rootScope, $scope, Breadcrumbs, Alerts, $http) {
        this.breadcrumbs = Breadcrumbs;
        this.alerts = Alerts;

        this.preloader = false;
        $rootScope.$on('$stateChangeStart', () => {
            console.log('$stateChangeStart...')
            this.preloader = true;
        });
        $rootScope.$on('$stateChangeSuccess', () => {
            console.log('$stateChangeSuccess...')
            this.preloader = false;
        });
        $rootScope.$on('$stateChangeError', () => {
            console.log('$stateChangeError...')
            this.preloader = false;
        });

    }]);