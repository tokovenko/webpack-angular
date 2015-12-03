class Alert {
    constructor(type='', message='') {
        this.type = type;
        this.message = message;
    }
}

export default angular
    .module('app.common.service.Alert', [])
    .service('app.common.service.Alert', function() {
        let service = {};

        service.list = [];

        service.add = function(type, message) {
            let model = new Alert(type, message);
            service.list.push(model);
            return service;
        };

        service.clear = function() {
            service.list = [];
            return service;
        };

        service.remove = function(alert) {
            let index = service.list.indexOf(alert);
            service.list.splice(index, 1);
            return service;
        };

        return service;
    })
    .directive('alerts', function() {
        return {
            restrict: 'E',
            scope: {
                list: '=',
                delete: '='
            },
            controller: function($scope, $timeout) {
                $scope.timeoutRemove = function(alert) {
                    $timeout(function() {
                        $scope.delete(alert);
                    }, 2000);
                }
            },
            template: `<ol class="alerts-list" ng-if="list.length>0">
                            <li ng-repeat="item in list" ng-init="timeoutRemove(item)">
                                <div class="alert alert-{{item.type}}" role="alert">
                                    <button type="button" class="close" ng-click="delete(item)">
                                        <span>&times;</span>
                                    </button>
                                    {{item.message}}
                                </div>
                            </li>
                        </ol>`
        }
    })
    .name;
