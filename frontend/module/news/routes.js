import newsTemplate from './template/news.html';
import newsViewTemplate from './template/news-view.html';

export default function ($stateProvider) {
    $stateProvider
        .state('news', {
            url: '/news',
            templateUrl: '/' + newsTemplate,
            controller: "NewsController",
            resolve: {
                newsList: (News) => {
                    return News.findAll();
                }
            }
        })
        .state('news.view', {
            url: '/:id',
            templateUrl:  '/' + newsViewTemplate,
            controller: "NewsViewController",
            resolve: {
                newsItem: (News, $stateParams) => {
                    return new News.findOne($stateParams.id-1);
                }
            }
        });
};