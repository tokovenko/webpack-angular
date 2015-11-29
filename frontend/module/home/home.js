import angular from 'angular';
import template from './home.html';
import breadcrumbs from './../../common/service/Breadcrumbs.js';

export default angular
    .module('app.home', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            templateUrl:  '/' + template,
            controller: 'HomeController'
        });
    })
    .controller('HomeController', ['$scope', 'app.common.service.Breadcrumbs', function($scope, Breadcrumbs) {
        Breadcrumbs.clear();

        $scope.title = 'Home page';
    }]);