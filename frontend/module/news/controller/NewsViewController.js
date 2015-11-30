let NewsViewController = function($scope, Breadcrumbs, newsItem) {
    $scope.news = newsItem;
};

export default ['$scope', 'app.common.service.Breadcrumbs', 'newsItem', NewsViewController];