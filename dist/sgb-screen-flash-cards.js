(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

angular.module('sgb-screen-flash-cards', ['megazord'])
    .controller('sgb-screen-flash-cards-controller', ['$stateParams', '_screen', '_screenParams', '$scope','$timeout',
    		   function ($stateParams, _screen, _screenParams, $scope, $timeout) {

        _screen.initialize($scope, _screenParams);
        $scope.cards = $stateParams.data;
        var selectedCard = null;
        var WAIT = false;
        $scope.rotate = false; 
        $scope.index = 0; 
        $scope.content = {
        	titleToShow : $scope.cards[0].title,
        	textToShow : $scope.cards[0].text_1
        }

        $scope.flip = function(index) {
      		$scope.rotate = !$scope.rotate;
      		$scope.content.textToShow = $scope.rotate ? $scope.cards[index].text_2 : $scope.cards[index].text_1; 
      		//var myEl = angular.element(document.querySelector('.no-rotate'));
			//myEl.removeClass('.flipped');
      		//flip(card, 20); 
    	}

    	function flip(card, i, callback) {
      		$timeout(function() {
        		card.isFlipped = false;
        		WAIT = false;
        		if (callback) callback();
      		}, 10 * (i || 30) );
    	}


        //$scope.templateType = _screenParams.templateType; 

        //Delete after mz framework gets updated
        //$scope.screenType = "sgb-screen-detail";

    }]); 

},{}]},{},[1]);
