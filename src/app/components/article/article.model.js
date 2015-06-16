'use strict';

angular.module('ccArticles')
	.factory("articleModel", ['articleService', function(articleService)	
	{	
		var ArticleDataModel = function()
		{
			this.content = null ;
			this.author = null ;
			this.title = null ;		
			this.url = null ;			
			this.comments = [] ;
			
		}


		ArticleDataModel.prototype.load = function(id)
		{
			var self = this,
				promise = null ;

				promise = articleService.getArticleData(id) ;
					
			
			promise.then(function(listing)
			{
				var article = listing[0].data.children[0].data ;
				var comments = listing[0].data.children ;

				self.title = article.title ;
				self.content = article.selftext ;
				self.author = article.author ;
				self.url = article.url ;
				
				console.log(article) ;
				console.log(comments) ;
			})
			
		}

		return ArticleDataModel ;
}]) ;		
