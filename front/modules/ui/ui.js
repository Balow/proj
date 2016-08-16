(function() {
    'use strict';

    var dependencies = [];

    angular.module('ui', dependencies)
        .config(configFn)
        .run(runFn)
        .directive('uiButton', ['CONFIG',uiButtonDirective])
        .directive('uiHeader', ['CONFIG',uiHeaderDirective])
        .directive('uiMeta', ['CONFIG',uiMetaDirective])

    function uiButtonDirective() {
        return {
            restrict: 'E',
            transclude: true,
            template: '\
            <button type="button" class="btn">\
            <i class="glyphicon"></i>\
            <span ng-transclude></span></button>',
            link: function(scope, jQlement, jQAttrs) {
                //console.log(jQAttrs)
                if (jQAttrs.level) jQlement.find('button').addClass('btn-' + jQAttrs.level);
                if (jQAttrs.icon) jQlement.find('i').addClass('glyphicon-' + jQAttrs.icon);
            }
        };
    }


    function uiHeaderDirective(CONFIG) {
        return {
            restrict: 'E',
            templateUrl: CONFIG.basePath + 'ui/ui-header.html'
        };
    }

    function uiMetaDirective(CONFIG) {
        return {
            restrict: 'E',
            templateUrl: CONFIG.basePath + 'ui/ui-meta.html'
        };
    }

    function runFn() {
        //console.log('Run : ui');
    }

    function configFn() {
        //console.log('Config : ui');
    }


})();
