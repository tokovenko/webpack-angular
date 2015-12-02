let NewsViewController = function($scope, Breadcrumbs, newsItem) {

    newsItem.setLike = function(like) {
        this.isLiked = like;
        this.isLiked ? this.likesCount++ : this.likesCount--;
    };
    $scope.news = newsItem;
};

export default ['$scope','app.common.service.Breadcrumbs', 'newsItem', NewsViewController];