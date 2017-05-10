$(document).ready(function() {
      var player1;
      var player2;
      var player1Score = 0;
      var player2Score = 0;
      var turnScore = 0;
      var activePlayer = 1;

      $("#computer").click(function(event) {
        $("#compimg").attr("src","img/computeractive.png");
        $("#friendimg").attr("src","img/friends.png");
      });
      $("#friend").click(function(event) {
        $("#compimg").attr("src","img/computer.png");
        $("#friendimg").attr("src","img/friendactive.png");
      });

      $("#playbtn").click(function(event) {
        if($('#computer').is(':checked')) {
          $("#ply1img").attr("src","img/playerc.png");
          $("#ply2img").attr("src","img/laptop.png");
          player1 = "You";
          player2 = "Computer";
        } else {
          $("#ply1img").attr("src","img/playera.png");
          $("#ply2img").attr("src","img/playerb.png");
          player1 = "Player 1";
          player2 = "Player 2";
        }
        $(".playsection").show();
        $(".scoresection").show();
        player1Score = 0;
        player2Score = 0;
        turnScore = 0;
        activePlayer = 1;

        $(".player1").text(player1);
        $(".player2").text(player2);

        $(".player1Score").text(player1Score);
        $(".player2Score").text(player2Score);
        $(".turnScore").text(turnScore);
        changeplayer(activePlayer);
        $(".homepage").hide();
        $(".rules").hide();
        $(".winnerSection").hide();
      });

      $("#rollbtn").click(function(event) {
        $("#diceimg").attr("src","img/r2web.gif");
        setTimeout(
          function()
          {
          var result = dice.roll();

            if (result === 6) {
              $("#diceimg").attr("src","img/s6.png");
            } else if (result === 5) {
              $("#diceimg").attr("src","img/s5.png");
            } else if (result === 4) {
              $("#diceimg").attr("src","img/s4.png");
            } else if (result === 3) {
              $("#diceimg").attr("src","img/s3.png");
            } else if (result === 2) {
              $("#diceimg").attr("src","img/s2.png");
            } else{
              $("#diceimg").attr("src","img/s1.png");
            }
            if (result>1) {
              turnScore = turnScore + result;
              $(".turnScore").text(turnScore);
            } else {
              turnScore = 0;
              $(".turnScore").text(turnScore);
              if(activePlayer === 1){
                activePlayer = 2;
              }else {
                activePlayer = 1;
              }
              changeplayer(activePlayer);
            }
          }, 1000);
      });

      var dice = {
        sides: 6,
        roll: function () {
          var randomNumber = Math.floor(Math.random() * this.sides) + 1;
          return randomNumber;
        }
      }

      function changeplayer(player) {
        if (player === 1) {
          $(".player").text(player1);
          $(".player1").css("background-color", "#7e9186");
          $(".player2").css("background-color", "transparent");
          // background-color: #05b553;

        } else {
          $(".player").text(player2);
          $(".player2").css("background-color", "#7e9186");
          $(".player1").css("background-color", "transparent");
        }
      }
      $("#passbtn").click(function(event) {
        if(activePlayer === 1){
          player1Score = player1Score + turnScore;
          $(".player1Score").text(player1Score);
          if(player1Score<100){
            activePlayer = 2;
            changeplayer(activePlayer);
          }else{
            $(".playsection").hide();
            $(".winnerSection").show();
            $(".winner").text("Winner is" + player1);
          }
        }else {
          player2Score = player2Score + turnScore;
          $(".player2Score").text(player2Score);
          if(player2Score<100){
            activePlayer = 1;
            changeplayer(activePlayer);
          }else{
            $(".playsection").hide();
            $(".winnerSection").show();
            $(".winner").text("Winner is" + player2);
          }
        }
        turnScore = 0;
        $(".turnScore").text(turnScore);
      });

    });
