import angular from 'angular';

import routes from './routes';
import ErrorController from './controller/ErrorController';

export default angular
    .module('app.error', ['ui.router'])
    .config(routes)
    .controller('ErrorController', ErrorController);