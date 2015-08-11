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