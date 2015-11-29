import angular from 'angular';
import router from 'angular-ui-router';

import home from './module/home/home.js';
import about from './module/about/about.js';
import news from './module/news/news.js';
import breadcrumbs from './common/service/Breadcrumbs.js';

import "./css/main.css";
import "./css/spinner.css";
import "./index.html";

angular
    .module('app', ['app.about','app.home','app.news','app.common.service.Breadcrumbs','ui.router'])
    .config(function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    })
    .controller('MainController', ['$rootScope', '$scope', 'app.common.service.Breadcrumbs', function ($rootScope, $scope, Breadcrumbs) {
        var self = this;
        self.breadcrumbs = Breadcrumbs;

        self.preloader = false;
        $rootScope.$on('$stateChangeStart', function() {
            self.preloader = true;
        });
        $rootScope.$on('$stateChangeSuccess', function() {
            self.preloader = false;
        });
        $rootScope.$on('$stateChangeError', function() {
            self.preloader = false;
        });
    }]);