import angular from 'angular';
import template from './about.html';
import breadcrumbs from './../../common/service/Breadcrumbs.js';

export default angular
    .module('app.about', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider.state('about', {
            url: '/about',
            templateUrl:  '/' + template,
            controller: 'AboutController'
        });
    })
    .controller('AboutController', ['$scope','app.common.service.Breadcrumbs',function($scope, Breadcrumbs) {
        Breadcrumbs.clear()
            .add('Home', 'home')
            .add('About');

        $scope.title = 'About page';
    }]);