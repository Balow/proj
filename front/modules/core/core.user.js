(function() {
    'use strict';

    var dependencies = [];

    angular.module('core.user', dependencies)
        .service('UserManager', ['$http', '$q', UserManager])

    var urlBaseApi = "http://localhost:5000/api/"

    function UserManager($http, $q) {

        var self = this;
        this.session = [];
        this.session.isAuth = false;
        
        this.connect = function(objUser) {
            //Logique de validation
            // if((objUser.email === 'op@op.fr' ) && (objUser.password === 'op' )){
            // 	return true;
            // }else{
            // 	return false;
            // }
            //Création du traitement déféré

            this.session.email = objUser.email;
            this.session.password = objUser.password;

            var defer = $q.defer();

            $http({
                method: 'GET',
                url: urlBaseApi + objUser.email + 
            }).then(function(response) {
                console.log(response);
                ref = response.data;
                this.session.isAuth = ref;
                //résolution de la promesse
                defer.resolve(ref);
            })

            // Retour synchrone de la promesse du triatement
            return defer.promise;

        };

    }


})();
