'use strict';

angular.module('sgb-screen-flash-cards', ['megazord'])
    .controller('sgb-screen-flash-cards-controller', ['$stateParams', '_screen', '_screenParams', '$scope','$timeout',
               function ($stateParams, _screen, _screenParams, $scope, $timeout) {

        _screen.initialize($scope, _screenParams);
        $scope.cards = $stateParams.data;
        $scope.flipped = false; 
        $scope.index = 0; 


        $scope.flip = function() {
            $scope.flipped = !$scope.flipped;
        }


        $scope.resetFlip = function() {
            $scope.flipped = false;
        }
        //$scope.templateType = _screenParams.templateType; 

        //Delete after mz framework gets updated
        //$scope.screenType = "sgb-screen-detail";

    }]); 