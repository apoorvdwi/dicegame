if (window.performance) {
  console.info("window.performance works fine on this browser");
}
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    console.info( "This page is reloaded" );
    dicegame() ;
  }
  else {
    console.info( "This page is not reloaded" );
  }

function dicegame() {

var randomnumber1 = Math.floor((Math.random()*6)+1);
var source1 = "images/dice" + randomnumber1 + ".png";

var randomnumber2 = Math.floor((Math.random()*6)+1);
var source2 = "images/dice" + randomnumber2 + ".png";

document.querySelector(".img1").setAttribute("src", source1);
document.querySelector(".img2").setAttribute("src", source2);

if(randomnumber1 > randomnumber2) {

  document.querySelector("h1").textContent = "Player 1 wins !";
}
else if(randomnumber2 > randomnumber1){

  document.querySelector("h1").textContent = "Player 2 wins !";
}
else {

  document.querySelector("h1").textContent = "Draw !";

}
}
