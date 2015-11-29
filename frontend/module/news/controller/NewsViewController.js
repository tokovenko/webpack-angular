let NewsViewController = function($scope, Breadcrumbs, newsItem) {
    Breadcrumbs.clear()
        .add('Home', 'home')
        .add('News', 'news')
        .add(newsItem.name);

    $scope.title = 'News view page';
    $scope.news = newsItem;
};

export default ['$scope', 'app.common.service.Breadcrumbs', 'newsItem', NewsViewController];