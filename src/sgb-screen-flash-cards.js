'use strict';

angular.module('sgb-screen-flash-cards', ['megazord'])
    .controller('sgb-screen-flash-cards-controller', ['$stateParams', '_screen', '_screenParams', '$scope','$timeout',
    		   function ($stateParams, _screen, _screenParams, $scope, $timeout) {

        _screen.initialize($scope, _screenParams);
        $scope.cards = $stateParams.data;
        $scope.flipped = false; 
        $scope.backCard = false; 
        $scope.changeCard = false; 
        $scope.index = 0; 
        $scope.currentCard = angular.copy($scope.cards[$scope.index]);

    	$scope.waitAnim = function() {
    		$timeout(function() {		
    			$scope.changeCard = false;  
			}, 270);
    	}

       $scope.flip = function() {
        	$scope.flipped = true
        	$timeout(function() {
        	 	$scope.flipped=false;
        	 	$scope.backCard = !$scope.backCard;
			 }, 270);
    	}

    	$scope.animate = function() {
    		$scope.currentCard.hide = true; 
    	    $scope.flipped = false; 
    	    $scope.changeCard = true; 
    	}

    	$scope.previousCard = function () {
 			$scope.animate(); 
			$scope.index = $scope.index==0 ? $scope.cards.length-1 : $scope.index-1;
    	    $scope.currentCard = angular.copy($scope.cards[$scope.index]);
    		$scope.waitAnim(); 
    	}	

    	$scope.nextCard = function () {
    		$scope.animate(); 
    		$scope.index =  $scope.index == $scope.cards.length-1? 0 : $scope.index +1;
			$scope.currentCard = angular.copy($scope.cards[$scope.index]);
			$scope.waitAnim(); 
    	}

    }]);