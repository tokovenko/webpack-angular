import template from './about.html';

export default function ($stateProvider) {
    $stateProvider.state('about', {
        url: '/about',
        templateUrl:  '/' + template,
        controller: 'AboutController'
    });
};