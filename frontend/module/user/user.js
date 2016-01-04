import routes from './routes';
import UserRegistrationController from './controller/UserRegistrationController';


export default angular
    .module('app.user', ['ui.router'])
    .config(routes)
    .controller('UserRegistrationController', UserRegistrationController)
    .name;