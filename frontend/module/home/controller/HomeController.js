import breadcrumbs from './../../../common/service/Breadcrumbs';

let HomeController = function($scope, Breadcrumbs) {
    Breadcrumbs.clear();

    $scope.title = 'Home page';
};

export default ['$scope', breadcrumbs, HomeController];