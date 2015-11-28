import angular from 'angular';
import router from 'angular-ui-router';

import home from './module/home/home.js';
import about from './module/about/about.js';
import news from './module/news/news.js';

import "./css/main.css";
import "./index.html";

angular
    .module('app', ['app.about','app.home','app.news','ui.router'])
    .config(function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    })
    .run(function ($rootScope) {
        $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
        });
        $rootScope.$on('$stateChangeSuccess', function(e, toState, toParams, fromState, fromParams) {
        });
        $rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams) {
        });
    });