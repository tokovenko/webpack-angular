import breadcrumbs from './../../../common/service/Breadcrumbs';
import alert from './../../../common/service/Alert';

let NewsViewController = function($scope, Breadcrumbs, Alert, newsItem) {

    $scope.addComment = function(data) {
        newsItem
            .addComment(data)
            .then(function(comment) {
                $scope.$apply(function() {
                    newsItem.comments.push(comment);
                    data.text = '';
                });
            })
            .catch(function() {
                $scope.$apply(function() {
                    Alert.add('danger', 'Comment added fail');
                });
            });
    };
    $scope.setLike = function(like) {
        newsItem.setLike(like);
        Alert.add('success', 'Like ' + (like ? 'added' : 'removed') + ' successfully');
    };

    $scope.news = newsItem;
};

export default ['$scope', breadcrumbs, alert, 'newsItem', NewsViewController];