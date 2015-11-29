import angular from 'angular';
import newsTemplate from './news.html';
import newsViewTemplate from './news-view.html';
import NewsFactory from './factory/News.js';

export default angular
    .module('app.news', ['ui.router', 'app.news.factory'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('news', {
                url: '/news',
                templateUrl: '/' + newsTemplate,
                controller: "NewsController",
                resolve: {
                    newsList: function(News) {
                        return News.findAll();
                    }
                }
            })
            .state('news-view', {
                url: '/news/:id',
                templateUrl:  '/' + newsViewTemplate,
                controller: "NewsViewController",
                resolve: {
                    newsItem: function(News, $stateParams) {
                        return News.findOne($stateParams.id-1);
                    }
                }
            });
    })
    .controller('NewsController', function($scope, newsList) {
        $scope.title = 'News page';
        $scope.newsList = newsList;
    })
    .controller('NewsViewController', function($scope, newsItem) {
        $scope.title = 'News view page';
        $scope.news = newsItem;
    });