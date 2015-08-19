(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

angular.module('sgb-screen-flash-cards', ['megazord'])
    .controller('sgb-screen-flash-cards-controller', ['$stateParams', '_screen', '_screenParams', '$scope','$timeout',
               function ($stateParams, _screen, _screenParams, $scope, $timeout) {

        _screen.initialize($scope, _screenParams);
        $scope.cards = $stateParams.data;
        $scope.index = 0; 
        $scope.currentCard = angular.copy($scope.cards[$scope.index]);
        $scope.flipped = false;
        
        $scope.flip = function() {
            $scope.flipped = !$scope.flipped;
        };

        $scope.nextCard = function () {
            $scope.index =  $scope.index == $scope.cards.length-1? 0 : $scope.index +1;
            $scope.currentCard = angular.copy($scope.cards[$scope.index]);
        }

        $scope.previousCard = function () {
            $scope.index = $scope.index==0 ? $scope.cards.length-1 : $scope.index-1;
            $scope.currentCard = angular.copy($scope.cards[$scope.index]);
           
        }   

    }])

    .directive("flipper", function() {
        return {
            restrict: "E",
            template: "<div class='flipper' ng-transclude ng-class='{ flipped: flipped }'></div>",
            transclude: true,
            scope: {
                flipped: "="
            }
        };
    }).

    directive("front", function() {
        return {
            restrict: "E",
            template: "<div class='front tile' ng-transclude></div>",
            transclude: true
        };
    })

    .directive("back", function() {
        return {
            restrict: "E",
            template: "<div class='back tile' ng-transclude></div>",
            transclude: true
        }
    });

},{}]},{},[1]);
