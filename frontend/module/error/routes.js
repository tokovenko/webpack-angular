import template from './template/error.html';

export default function ($stateProvider) {
    $stateProvider.state('404', {
        url: '/404',
        templateUrl:  '/' + template,
        controller: 'ErrorController'
    });
};