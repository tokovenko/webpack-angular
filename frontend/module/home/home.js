import angular from 'angular';
import template from './home.html';

export default angular
    .module('app.home', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            templateUrl: template
        });
    })
    .controller('HomeController', function($scope) {
        $scope.title = 'Home page';
    });