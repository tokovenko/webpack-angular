let AboutController = function($scope, Breadcrumbs) {
    Breadcrumbs.clear()
        .add('Home', 'home')
        .add('About');

    $scope.title = 'About page';
};

export default ['$scope', 'app.common.service.Breadcrumbs', AboutController];