import angular from 'angular';

import routes from './routes.js';

import NewsController from './controller/NewsController.js';
import NewsViewController from './controller/NewsViewController.js';

import NewsFactory from './factory/News.js';
import breadcrumbs from './../../common/service/Breadcrumbs.js';

export default angular
    .module('app.news', ['ui.router', 'app.news.factory'])
    .config(routes)
    .controller('NewsController', NewsController)
    .controller('NewsViewController', NewsViewController);