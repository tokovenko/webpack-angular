import angular from 'angular';

import routes from './routes';
import HomeController from './controller/HomeController';

export default angular
    .module('app.home', ['ui.router'])
    .config(routes)
    .controller('HomeController', HomeController);