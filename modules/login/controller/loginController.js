angular.module("myApp.loginController", [])
    .controller('loginController',function($scope,$localstorage,$state,LoginUser){
        $scope.login = function(uname,pass){
            var promise = LoginUser.login(uname,pass);
            promise.then(function (value) {
                $scope.usen = value.data.email;
                $scope.passw = atob(value.data.password);
                console.log(''+$scope.passw);
                $state.go('success');

                $localstorage.set('userData',$scope.usen+$scope.passw);
                $localstorage.setObject('user',{
                    userData:$scope.usen+$scope.passw
                });
                user=$localstorage.getObject('user');
                console.log("data:"+JSON.stringify(user.userData));
            });
        };
    });

