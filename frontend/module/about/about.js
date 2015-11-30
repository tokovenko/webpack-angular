import angular from 'angular';

import routes from './routes';
import AboutController from './controller/AboutController';

export default angular
    .module('app.about', ['ui.router'])
    .config(routes)
    .controller('AboutController', AboutController);