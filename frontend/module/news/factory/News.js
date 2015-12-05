import newsJson from './../../../news.json';
import News from './../model/News';
import alert from './../../../common/service/Alert';

export default angular
    .module('app.news.factory', [])
    .service('News', ['$q', '$timeout', '$http', alert, function($q, $timeout, $http, Alerts) {
        var news = {};

        news.findAll = function() {
            var defer = $q.defer();
            $http({
                url: '/' + newsJson
            }).then(function(response) {
                let news = response.data || [];
                let models = news.map(data => new News(data));
                defer.resolve(models);
            }, function() {
                Alerts.add('danger','Fail to load news...')
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
}]).name;