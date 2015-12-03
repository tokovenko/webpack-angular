import breadcrumbs from './../../../common/service/Breadcrumbs';

let NewsController = function($scope, Breadcrumbs, newsList) {
    Breadcrumbs.clear()
        .add('Home', 'home')
        .add('News');

    $scope.title = 'News page';
    $scope.newsList = newsList;
};

export default ['$scope', breadcrumbs, 'newsList', NewsController];