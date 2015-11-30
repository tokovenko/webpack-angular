let HomeController = function($scope, Breadcrumbs) {
    Breadcrumbs.clear();

    $scope.title = 'Home page';
};

export default ['$scope', 'app.common.service.Breadcrumbs', HomeController];