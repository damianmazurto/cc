'use strict';

angular.module('ccArticles', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('listing', {
        url: '/:type?/:name?/count:?',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        resolve: {
         	pagination: ['$stateParams', function($stateParams) {
	            switch($stateParams.type)
	            {
	            	case 'next':
	            	case 'prev':
	            		return {action: $stateParams.type, name: $stateParams.name, count: $stateParams.count} ;
	            	default: return {action: 'first'} ;
	            }
         	}]
        }

      })
      .state('article', {
      	url: '/article/:id',
      	templateUrl: 'app/components/article/article.html',
      	controller: 'ArticleCtrl'
      }) ;

    $urlRouterProvider.otherwise('/');
  })
;
