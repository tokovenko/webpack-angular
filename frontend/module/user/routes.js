import newsTemplate from './template/registration.html';

export default function ($stateProvider) {
    $stateProvider
        .state('registration', {
            url: '/registration',
            templateUrl: '/' + newsTemplate,
            controller: "UserRegistrationController"
        });
};