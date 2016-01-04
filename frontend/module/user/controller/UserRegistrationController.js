import breadcrumbs from './../../../common/service/Breadcrumbs';

let UserRegistrationController = function($scope, Breadcrumbs, $http) {
    Breadcrumbs.clear()
        .add('Home', 'home')
        .add('Registration');

    $scope.title = 'Registration';

    $scope.registerErrors = false;

    $scope.registerSuccessfully = false;

    $scope.register = function(user) {
        $scope.registerErrors = false;
        $http.post('http://localhost:1337/user/create', {user: user}).then(function() {
            $scope.registerSuccessfully = true;
        }, function(resp) {
            $scope.registerErrors = resp.data.invalidAttributes || false;
        })
    }

};

export default ['$scope', breadcrumbs, '$http', UserRegistrationController];