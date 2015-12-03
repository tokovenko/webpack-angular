import angular from 'angular';
import newsJson from './../../../news.json';
import News from './../model/News';

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
                let news = response.data || [];
                let models = news.map(data => new News(data));
                defer.resolve(models);
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