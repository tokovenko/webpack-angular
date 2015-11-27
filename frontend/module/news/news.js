import angular from 'angular';
import template from './news.html';

export default angular
    .module('app.news', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider.state('news', {
            url: '/news',
            templateUrl: template
        });
    })
    .controller('NewsController', function($scope) {
        $scope.title = 'News page';
    });