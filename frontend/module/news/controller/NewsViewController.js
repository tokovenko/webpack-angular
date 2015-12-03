import breadcrumbs from './../../../common/service/Breadcrumbs';

let NewsViewController = function($scope, Breadcrumbs, newsItem) {

    $scope.addComment = function(data) {
        newsItem.addComment(data);
        data.text = '';
    };

    $scope.news = newsItem;
};

export default ['$scope', breadcrumbs, 'newsItem', NewsViewController];