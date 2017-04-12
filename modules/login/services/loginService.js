angular.module('myApp.loginService', [])
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

    .factory('LoginUser',function($http,$q,$log){
        return{
            login:function(username1,password1){
                var deferred = $q.defer();
                $http({
                    url:"http://localhost/anguportal_new/api.php?action=login",
                    method:"POST",
                    data:"username="+username1+"&password="+password1,
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
