
var velocityX = 25;
var velocityY = 15;
var positionX = 0;
var positionY = 0;
var velocityX2 = 50;
var velocityY2 = 30;
var positionX2 = 0;
var positionY2 = 0;
var ball = document.getElementById('ball');
var ball2 = document.getElementById('ball2');


function moveBall() {
 positionX = positionX + velocityX;
 positionY = positionY + velocityY;
 ball.style.left = positionX + "px";
 ball.style.top = positionY + "px";

if ( positionX < 0 || positionX > 300) {velocityX = velocityX * -1; ball.style.background = "blue";}
if ( positionY < 0 || positionY > 300) {velocityY = velocityY * -1; ball.style.background = "green";}

}


function moveBall2() {
 positionX2 = positionX2 + velocityX2;
 positionY2 = positionY2 + velocityY2;
 ball2.style.left = positionX2 + "px";
 ball2.style.top = positionY2 + "px";

if ( positionX2 < 0 || positionX2 > 300) {velocityX2 = velocityX2 * -1; ball2.style.background = "yellow";}
if ( positionY2 < 0 || positionY2 > 300) {velocityY2 = velocityY2 * -1; ball2.style.background = "red";}

}


setInterval(moveBall, 100);
setInterval(moveBall2, 100);

