import breadcrumbs from './../../../common/service/Breadcrumbs';
import alert from './../../../common/service/Alert';

let NewsViewController = function($scope, Breadcrumbs, Alert, newsItem) {

    $scope.addComment = function(data) {
        newsItem.addComment(data);
        data.text = '';
        Alert.add('success', 'Comment added successfully');
    };
    $scope.setLike = function(like) {
        newsItem.setLike(like);
        Alert.add('success', 'Like added successfully');
    };

    $scope.news = newsItem;
};

export default ['$scope', breadcrumbs, alert, 'newsItem', NewsViewController];