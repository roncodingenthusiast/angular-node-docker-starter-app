app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'public/templates/home.html',
		controller: 'mainCtrl'
	})
	//league list
	.when('/anotherroute',{
		templateUrl: 'public/templates/new-page.html', 
		controller: 'newPageCtrl',
		templateTitle: 'list_all_leagues'
	})
	.otherwise({
		redirecTo: '/'
	});
});