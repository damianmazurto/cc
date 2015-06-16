'use strict';

angular.module('ccArticles')
  .controller('ArticleCtrl', function ($scope, $state, $stateParams, articleModel, commentService) {
    
   
   $scope.ArticleData = new articleModel ;

   $scope.ArticleData.load($stateParams.id) ;

   $scope.goBack = function()
   {
      $state.go('listing', {}) ;
   }

   console.log($stateParams.id) ;

   $scope.addComment = function()
   {
   		commentService.add($scope.inputEmail, $scope.commentContent) ;
   }	
  });
