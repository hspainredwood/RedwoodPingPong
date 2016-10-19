angular.module("myApp").controller("playerController", function($scope) {
    $scope.players = [];

    $.getJSON("./data/data.json", function(json) {
        console.log(json); // this will show the info it in firebug console
    });

    for (var i = 0; i < 10; i++) {
        $scope.players.push({
            firstName: "John " + i,
            lastName: "Doe " + i,
            summary: "This is a summary",
            games: [],
            style: {
                power: 10,
                spin: 10,
                control: 10
            },
            record: {
                wins: 10,
                losses: 0
            }
        });

        for (var j = 0; j < 10; j++) {
            $scope.players[i].games.push({
                result: "Win",
                opponent: "Neil " + i,
                date: "10/15/2016"
            });
        }
    }

    $scope.selectedPlayer = {};

    $scope.selectPlayer = function(player) {
        $scope.selectedPlayer = player;
    }

     $scope.selectPlayer($scope.players[0]);

     $scope.filterPlayers = function (player) {
         return player != $scope.selectedPlayer;
     }


     $scope.newGame = {};

     $scope.newGame.opponent = "";
     $scope.newGame.date = "";
     $scope.newGame.result = "";

     $scope.addNewGame = function() {

         var gameCopy = {};

         gameCopy.opponent = $scope.newGame.opponent;
         gameCopy.result = $scope.newGame.result;
         gameCopy.date = $scope.newGame.date;

         if (gameCopy.result == "Win") {
             $scope.selectedPlayer.record.wins++;
         }
         
         $scope.selectedPlayer.games.unshift(gameCopy);
         $scope.selectedPlayer.games.pop();
     }
     


});