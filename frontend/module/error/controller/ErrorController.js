import breadcrumbs from './../../../common/service/Breadcrumbs';

let ErrorController = function($scope, Breadcrumbs) {
    Breadcrumbs.clear()
        .add('Home', 'home')
        .add('Error');

    $scope.title = 'Page not found';
};

export default ['$scope', breadcrumbs, ErrorController];