import angular from 'angular';

export default angular
    .module('app.common.service.Breadcrumbs', [])
    .service('app.common.service.Breadcrumbs', function() {
        let breadcrumbs = {};

        breadcrumbs.list = [];

        breadcrumbs.add = function(label, state) {
            let breadcrumb = state ? {label: label, state: state} : {label: label};
            breadcrumbs.list.push(breadcrumb);
            return breadcrumbs;
        };

        breadcrumbs.clear = function() {
            breadcrumbs.list = [];
            return breadcrumbs;
        };

        return breadcrumbs;
    })
    .directive('breadcrumbs', function() {
        return {
            restrict: 'E',
            scope: {
                list: '='
            },
            template: `<ol class="breadcrumb" ng-if="list.length>0">
                            <li ng-repeat="item in list">
                                <a ui-sref="{{item.state}}" ng-if="item.state">{{item.label}}</a>
                                <span ng-if="!item.state">{{item.label}}</span>
                            </li>
                        </ol>`
        }
    });
