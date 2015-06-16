'use strict';

angular.module('ccArticles')
  .controller('MainCtrl', function ($scope, $state, pagination, mainModel) {
    
    $scope.ArticleList = new mainModel ;

    $scope.ArticleList.load(pagination) ;
   
    $scope.lastAction = pagination.action ;
   

    //navigation functions
    $scope.nextPage = function()
    {      

      switch($scope.lastAction)
      {
        case 'next':
          pagination.count = (parseInt(pagination.count) + 25) ;
          break ;
        case 'prev':
          pagination.count = (parseInt(pagination.count) - 1) ;
          break ;
        case 'first':
          pagination.count = 25 ;
      }

      $state.go('listing', {type:'next', name:$scope.ArticleList.after, count:pagination.count}) ;
    }  
    
    $scope.prevPage = function()
    {
      switch($scope.lastAction)
      {
        case 'next':
          pagination.count = (parseInt(pagination.count) + 1) ;
          break ;
        case 'prev':
          pagination.count = (parseInt(pagination.count) - 25) ;
          break ;        
      }

      $state.go('listing', {type:'prev', name:$scope.ArticleList.before, count:pagination.count}) ;
    }  

    $scope.showArticle = function(id)
    {
      $state.go('article', {id: id}) ;
    }
  });
