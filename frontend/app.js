import angular from 'angular';
import router from 'angular-ui-router';

import home from './module/home/home';
import about from './module/about/about';
import news from './module/news/news';
import breadcrumbs from './common/service/Breadcrumbs';

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