var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userclickedpatter=[];
function nextSequences() {
    var rannum=Math.floor(Math.random()*4);
    var randomcolors=buttonColours[rannum];
    gamePattern.push(randomcolors);
    $("#"+randomcolors).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
 var audio=new Audio("sounds/"+randomcolors+".mp3");
 audio.play();
}
$(".btn").click(function(){
  var userchosencolor=nextSequences();
  userclickedpatter.push(userchosencolor);
});
