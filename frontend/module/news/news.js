import angular from 'angular';
import newsTemplate from './news.html';
import newsViewTemplate from './news-view.html';

export default angular
    .module('app.news', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('news', {
                url: '/news',
                templateUrl: '/' + newsTemplate,
                controller: "NewsController",
                resolve: {
                    newsList: function($q, $timeout) {
                        var defer = $q.defer();
                        $timeout(function() {
                            defer.resolve([{id: 1, name: 'News 1'}, {id: 2, name: 'News 2'}, {id: 3, name: 'News 3'}]);
                        }, 1000);
                        return defer.promise;
                    }
                }
            })
            .state('news-view', {
                url: '/news/:id',
                templateUrl:  '/' + newsViewTemplate,
                controller: "NewsViewController",
                resolve: {
                    news: function($q, $timeout, $stateParams) {
                        var defer = $q.defer();
                        $timeout(function() {
                            var newsList = [{id: 1, name: 'News 1'}, {id: 2, name: 'News 2'}, {id: 3, name: 'News 3'}];
                            defer.resolve(newsList[$stateParams.id-1]);
                        }, 1000);
                        return defer.promise;
                    }
                }
            });
    })
    .controller('NewsController', function($scope, newsList) {
        $scope.title = 'News page';
        $scope.newsList = newsList;
    })
    .controller('NewsViewController', function($scope, news) {
        $scope.title = 'News view page';
        $scope.news = news;
    });