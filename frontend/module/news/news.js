import routes from './routes';
import NewsController from './controller/NewsController';
import NewsViewController from './controller/NewsViewController';
import NewsFactory from './factory/News';

import css from './css/news.css';

export default angular
    .module('app.news', ['ui.router', NewsFactory])
    .config(routes)
    .controller('NewsController', NewsController)
    .controller('NewsViewController', NewsViewController)
    .name;