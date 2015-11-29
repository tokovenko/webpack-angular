import angular from 'angular';

export default angular
    .module('app.news.factory', [])
    .service('News', function($q, $timeout) {
        var news = {};

        news.findAll = function() {
            var defer = $q.defer();
            $timeout(function() {
                defer.resolve([{id: 1, name: 'News 1'}, {id: 2, name: 'News 2'}, {id: 3, name: 'News 3'}]);
            }, 500);
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