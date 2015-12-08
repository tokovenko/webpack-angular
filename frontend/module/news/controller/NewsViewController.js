import breadcrumbs from './../../../common/service/Breadcrumbs';
import alert from './../../../common/service/Alert';

let NewsViewController = ($scope, Breadcrumbs, Alert, newsItem) => {

    $scope.addComment = (data) => {
        newsItem
            .addComment(data)
            .then((comment) => {
                $scope.$apply(() => {
                    newsItem.comments.push(comment);
                    data.text = '';
                });
            })
            .catch(() => {
                $scope.$apply(() => {
                    Alert.add('danger', 'Comment added fail');
                });
            });
    };

    $scope.setLike = (like) => {
        newsItem.setLike(like).then((data) => {
            $scope.$apply(() => {
                newsItem.isLiked = data;
                console.log('newsItem.isLiked: ', newsItem.isLiked)
                Alert.add('success', 'Like ' + (data ? 'added' : 'removed') + ' successfully');
            });
        });
    };

    $scope.news = newsItem;
};

export default ['$scope', breadcrumbs, alert, 'newsItem', NewsViewController];