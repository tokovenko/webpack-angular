import breadcrumbs from './../../../common/service/Breadcrumbs';

let AboutController = function($scope, Breadcrumbs) {
    Breadcrumbs.clear()
        .add('Home', 'home')
        .add('About');

    $scope.title = 'About page';
};

export default ['$scope', breadcrumbs, AboutController];