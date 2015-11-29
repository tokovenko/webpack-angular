import newsTemplate from './template/news.html';
import newsViewTemplate from './template/news-view.html';

export default function ($stateProvider) {
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
};