angular.module('myApp.signupService', [])
    .factory('$localstorage', ['$window', function($window) {
        return {
            set: function(key, value) {
                $window.localStorage[key] = value;
            },
            get: function(key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },
            setObject: function(key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function(key) {
                return JSON.parse($window.localStorage[key] || '{}');
            },
            delete_all:function(key){
                delete $window.localStorage[key];
                console.log("Local Storage Deleted");
            }
        }
    }])

    .factory('signupUser',function($http,$q,$log){
        return{
            register:function(data){
                console.log(data.name);
                var deferred = $q.defer();
                $http({
                    url:"http://localhost/anguportal_new/api.php?action=registerUser",
                    method:"POST",
                    data:"name="+data.name+"&email="+data.email+"&pass="+data.pass,
                    headers: {'Content-Type':"application/x-www-form-urlencoded"}
                }).then(function successCallback(data){
                    deferred.resolve(data);
                },function errorCallback(data) {
                    deferred.reject(data);
                });
                return deferred.promise;
            }
        }
    });