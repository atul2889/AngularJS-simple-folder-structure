angular.module("myApp.signupController", [])
    .controller('signupController',function($scope,$localstorage,$state,signupUser,$mdDialog){
        $scope.user = {};

        $scope.register = function() {
            console.log('' + JSON.stringify($scope.user));

            var promise = signupUser.register($scope.user);

            promise.then(function (value) {
                console.log('data inserted');
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title('Success')
                        .textContent('You are successfully registered.')
                        .ariaLabel('Alert Dialog Demo')
                        .ok('Ok')
                        .targetEvent()
                );
                $state.go('login');
            },function(error){
                $scope.error=error;
               console.log(''+$scope.error);

            });
        }
    });