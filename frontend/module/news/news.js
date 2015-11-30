import angular from 'angular';

import routes from './routes';
import NewsController from './controller/NewsController';
import NewsViewController from './controller/NewsViewController';
import NewsFactory from './factory/News';

export default angular
    .module('app.news', ['ui.router', 'app.news.factory'])
    .config(routes)
    .controller('NewsController', NewsController)
    .controller('NewsViewController', NewsViewController);