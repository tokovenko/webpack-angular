import angular from 'angular';
import newsJson from './../../../news.json';

export default angular
    .module('app.news.factory', [])
    .service('News', function($q, $timeout, $http) {
        var news = {};

        news.findAll = function() {
            var defer = $q.defer();
            $http({
                url: '/news.json',
                type: 'GET',
                timeout: 2000
            }).then(function(response) {
                defer.resolve(response.data);
            });
            return defer.promise;
        };

        news.findOne = function(key) {
            var defer = $q.defer();
            news.findAll().then(function(list) {
                defer.resolve(list[key]);
            });
            return defer.promise;
        };


        return news;
});