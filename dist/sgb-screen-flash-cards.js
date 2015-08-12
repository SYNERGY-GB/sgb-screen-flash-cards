(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
