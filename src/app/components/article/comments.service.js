'use strict';

angular.module('ccArticles')
	.service("commentService", function($http, $q)
	{	
		return({
                    add: add
               });		

		function add(inputEmail, comment)
		{
			 console.log(inputEmail + ' ' + comment)
		}

	})