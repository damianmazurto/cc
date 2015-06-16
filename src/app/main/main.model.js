'use strict';

angular.module('ccArticles')
	.factory("mainModel", ['mainService', function(mainService)	
	{	
		var ArticleListModel = function()
		{
			this.list = [] ;
			this.before = '' ;
			this.after = '' ;
			this.limit = 25 ;

		}
		
		ArticleListModel.prototype.load = function(pagination)
		{
			

			var self = this,
				promise = null ;

			switch(pagination.action)
			{
				case 'next':
				{					

					promise = mainService.getListAfterName(pagination.name, pagination.count) ;
					

				}
				break ;
				case 'prev':
				{
					promise = mainService.getListBeforeName(pagination.name, pagination.count) ;			
				}
				break ;
				case 'first': 
				{
					promise = mainService.getListFirstPage() ;
				}
				break ;
			}
			
			promise.then(function(listing)
			{
				console.log(listing.data) ;
				self.before = listing.data.before ;
				self.after = listing.data.after ;
				self.list = prepareData(listing.data.children) ;		
				console.log(self) ;	
			})
			
		}


		function prepareData(data)
		{
			var listing = [] ;

			
			for(var i = 0, length = data.length ; i < length ; i += 1)
			{
				var article = {
					id: data[i].data.id,
					author: data[i].data.author,
					date: data[i].data.created_utc*1000,
					name: data[i].data.name,
					title: data[i].data.title,
					url: data[i].data.url,
					permalink: data[i].data.permalink,
					thumbnail: data[i].data.thumbnail
				}
				listing.push(article) ;
				
			}

			return listing ;
		}

		return ArticleListModel ;

	}]) ;