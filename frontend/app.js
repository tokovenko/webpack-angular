import angular from 'angular';
import router from 'angular-ui-router';

import home from './module/home/home.js';
import about from './module/about/about.js';
import news from './module/news/news.js';

import "./css/main.css";
import "./css/spinner.css";
import "./index.html";

angular
    .module('app', ['app.about','app.home','app.news','ui.router'])
    .config(function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    })
    .controller('MainController', function ($rootScope, $scope) {
        var self = this;
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
    });