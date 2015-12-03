let NewsViewController = function($scope, Breadcrumbs, newsItem) {

    $scope.addComment = function(data) {
        newsItem.addComment(data);
        data.text = '';
    };

    $scope.news = newsItem;
};

export default ['$scope','app.common.service.Breadcrumbs', 'newsItem', NewsViewController];