'use strict';

angular.module('ccArticles')
	.service("articleService", function($http, $q)
	{	

		var reddit_api_url = "https://www.reddit.com/r/comments/" ;
	

		return({
                    getArticleData: getArticleData                    
               });		

		function getArticleData(id)
		{
 				var request = $http({

                        method: "get",
                        url: reddit_api_url + id + '.json',                               
                    });

                return(request.then(handleSuccess, handleError));
		}

		function handleError( response ) {

                    if (
                        ! angular.isObject( response.data ) ||
                        ! response.data.message
                        ) {

                        return( $q.reject( "An unknown error occurred." ) );

                    }

                    // Otherwise, use expected error message.
                    return( $q.reject( response.data.message ) );

        }

       function handleSuccess( response ) {
       			
	                return( response.data );

        }	
	}) 