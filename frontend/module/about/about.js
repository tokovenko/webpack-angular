import angular from 'angular';
import template from './about.html';

export default angular
    .module('app.about', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider.state('about', {
            url: '/about',
            templateUrl: template
        });
    })
    .controller('AboutController', function($scope) {
        $scope.title = 'About page';
    });