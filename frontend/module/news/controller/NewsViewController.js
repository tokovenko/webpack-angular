let NewsViewController = function($scope, Breadcrumbs, newsItem) {

    newsItem.setLike = function(like) {
        this.isLiked = like;
        this.isLiked ? this.likesCount++ : this.likesCount--;
    };

    newsItem.addComment = function(data) {
        var comment = angular.copy(data);
        comment.author = "E.T.";
        comment.create_time = new Date();
        this.comments.push(comment);

        data.text = '';
    };

    $scope.news = newsItem;
};

export default ['$scope','app.common.service.Breadcrumbs', 'newsItem', NewsViewController];