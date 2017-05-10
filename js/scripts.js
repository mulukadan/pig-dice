$(document).ready(function() {
      $("form").submit(function(event) {
        var a = parseInt($("input#sidea").val());
        var b = parseInt($("input#sideb").val());
        var c = parseInt($("input#sidec").val());
        var results="";



      if(c> a+b || b>a+c || a>b+c){
        results = "Not a Triangle";
      }else {
        if(a===b && a===c){
          results = "Equilateral";
        }else {
          if(a===b || a===c || b===c ){
          results = "Isosceles";
        }
        else {
          if(a!=b && a!=c){
             results = "Scalene";
          }
        }
      }
      }
        setImageSource(results);
        $(".output").text(results);
        event.preventDefault();
      });

      $("#computer").click(function(event) {
        $("#compimg").attr("src","img/computeractive.png");
        $("#friendimg").attr("src","img/friends.png");
        $("#ply1img").attr("src","img/playerc.png");
        $("#ply2img").attr("src","img/laptop.png");


        // event.preventDefault();
      });
      $("#friend").click(function(event) {
        $("#compimg").attr("src","img/computer.png");
        $("#friendimg").attr("src","img/friendactive.png");
        $("#ply1img").attr("src","img/playera.png");
        $("#ply2img").attr("src","img/playerb.png");

        // event.preventDefault();
      });
    });
