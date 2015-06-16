'use strict';

angular.module('ccArticles')
	.service("mainService", function($http, $q)
	{	

		var reddit_api_url = "http://www.reddit.com/r/all/new.json" ;

		return({
                    getListFirstPage: getListFirstPage,
                    getListBeforeName: getListBeforeName,
                    getListAfterName: getListAfterName
               });		

		function getListFirstPage()
		{
 				var request = $http({

                        method: "get",
                        url: reddit_api_url,                               
                    });

                return(request.then(handleSuccess, handleError));
		}


		function getListBeforeName(name, limit)
		{
			 	var request = $http({

                        method: "get",
                        url: reddit_api_url,                               
                        params: {
                        	before: name,
                        	count:limit
                        }
                    });

                return(request.then(handleSuccess, handleError));
		}

		function getListAfterName(name, limit)
		{
			 	var request = $http({

                        method: "get",
                        url: reddit_api_url,                               
                        params: {
                        	after: name,
                        	count:limit
                        }
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