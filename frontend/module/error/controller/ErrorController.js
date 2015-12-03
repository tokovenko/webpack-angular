let ErrorController = function($scope, Breadcrumbs) {
    Breadcrumbs.clear()
        .add('Home', 'home')
        .add('Error');

    $scope.title = 'Page not found';
};

export default ['$scope', 'app.common.service.Breadcrumbs', ErrorController];