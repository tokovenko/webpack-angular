let NewsController = function($scope, Breadcrumbs, newsList) {
    Breadcrumbs.clear()
        .add('Home', 'home')
        .add('News');

    $scope.title = 'News page';
    $scope.newsList = newsList;
};

export default ['$scope','app.common.service.Breadcrumbs','newsList', NewsController];