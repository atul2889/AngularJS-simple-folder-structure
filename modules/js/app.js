angular.module('controllers', ['myApp.loginController','myApp.signupController']);
angular.module('services',['myApp.loginService','myApp.signupService']);
angular.module('myApp', ['ui.router','ngMaterial','controllers','services'])
	.run(function(){

	})
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/login');
		$stateProvider
			.state('signup', {
				url: '/signup',
				templateUrl: 'modules/signup/views/signup.html',
				controller: 'signupController'
			})

            .state('success', {
                url: '/success',
                templateUrl: 'modules/success/views/success.html',
                controller: ''
            })

			.state('login', {
				url: '/login',
				templateUrl: 'modules/login/views/login.html',
				controller: 'loginController'
			});

	}]);

