import template from './template/about.html';

export default function ($stateProvider) {
    $stateProvider.state('about', {
        url: '/about',
        templateUrl:  '/' + template,
        controller: 'AboutController'
    });
};