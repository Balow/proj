(function() {
    'use strict';

    var dependencies = [];

    angular.module('core.item', dependencies)
        .run(runFn)
        .service('ItemManager', ['$http', '$q', ItemManager])

    var urlBaseApi = "http://localhost:5000/api/";

    function ItemManager($http, $q) {
        
        console.log('ItemManager');

        //theme box
        this.listThemeBox = [];

        //indicator
        this.listIndicator = [];

        var self = this;

        this.getDataItem = function(type) {
            
            var ref;

            // switch datatype
            switch(type){
                case 'indicator':
                    ref = self.listIndicator;
                    break;
                case 'themeBox':
                    ref = self.listThemeBox;
                    break;
                default :
                    return;
            }

            //Création du traitement déféré
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: urlBaseApi + type
            }).then(function(response) {
                console.log(response);
                ref = response.data;

                //résolution de la promesse
                defer.resolve(ref);
            })

            // Retour synchrone de la promesse du triatement
            return defer.promise;
        }

    }

    function runFn() {
        console.log('Run : core.item');
    }



})();
