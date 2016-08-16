(function() {
    'use strict';

    var dependencies = ['core'];

    angular.module('templateIndicator', dependencies)
    	.config(configFn)
    	.run(runFn)
        .directive('templateIndicator', ['CONFIG',templateIndicatorDirective])
        .controller('TemplateIndicatorCtrl', ['$scope', 'ItemManager', TemplateIndicatorCtrl])


    function TemplateIndicatorCtrl($scope, ItemManager)
    {

        $scope.indicatorCollection = [];

        var toto = $scope.theme;
        console.log('erf: ' + toto);
        
        console.log('TemplateIndicatorCtrl : controller');
        ItemManager.getDataItem('indicator').then(function(data){
            $scope.indicatorCollection = data;
        });

        function getIndicatorById($scope)
        {
            console.log("yeah");
            return $scope.indicatorCollection;
        }

    }


    function templateIndicatorDirective(CONFIG) {
        return {
            restrict: 'E',
            controller:'TemplateIndicatorCtrl',
            scope:true,
            templateUrl: CONFIG.basePath + 'template/template-indicator.html',
            link: function(scope, jQlement, jQAttrs) {
                //console.log(jQAttrs)
                if (jQAttrs.level) jQlement.find('li').addClass('theme-' + jQAttrs.level);
            }
        };
    }

    function runFn() {
    	console.log('Run : templateIndicator');
    }

    function configFn() {
		//console.log('Config : core');
    }


})();
