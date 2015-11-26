import angular from 'angular';
import template from './home.html';

export default angular
    .module('app.home', [])
    .directive('home', function() {
        return {
            templateUrl: template
        }
    });