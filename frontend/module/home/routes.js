import template from './template/home.html';

export default function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl:  '/' + template,
        controller: 'HomeController'
    });
};