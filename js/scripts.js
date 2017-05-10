$(document).ready(function() {
      var player1;
      var player2;
      var player1Score = 0;
      var player2Score = 0;
      var turnScore = 0;

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

        $(".player1").text(player1);
        $(".player2").text(player2);

        $(".player1Score").text(player1Score);
        $(".player2Score").text(player2Score);
        $(".turnScore").text(turnScore);
      });

      // $("#rollbtn").click(function(event) {
      //
      //   setTimeout(
      //     function()
      //     {
      //       $("#diceimg").attr("src","img/r2web.gif");
      //     }, 1000);
      //   var result = dice.roll();
      //   if (result === 6) {
      //     $("#diceimg").attr("src","img/s6.png");
      //   } else if (result === 5) {
      //     $("#diceimg").attr("src","img/s5.png");
      //   } else if (result === 4) {
      //     $("#diceimg").attr("src","img/s4.png");
      //   } else if (result === 3) {
      //     $("#diceimg").attr("src","img/s3.png");
      //   } else if (result === 2) {
      //     $("#diceimg").attr("src","img/s2.png");
      //   } else{
      //     $("#diceimg").attr("src","img/s1.png");
      //   }
      // });
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
          }, 1000);

      });

      var dice = {
        sides: 6,
        roll: function () {
          var randomNumber = Math.floor(Math.random() * this.sides) + 1;
          return randomNumber;
        }
      }




    });
