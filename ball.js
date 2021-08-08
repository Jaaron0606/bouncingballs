
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
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
 positionX = positionX + velocityX;
 positionY = positionY + velocityY;
 ball.style.left = positionX + "px";
 ball.style.top = positionY + "px";

if ( positionX + velocityX < 0 || positionX + velocityX > windowWidth - 25) {velocityX = velocityX * -1;}
if ( positionY + velocityY < 0 || positionY + velocityY > windowHeight - 25) {velocityY = velocityY * -1;}

}


function moveBall2() {
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
 positionX2 = positionX2 + velocityX2;
 positionY2 = positionY2 + velocityY2;
 ball2.style.left = positionX2 + "px";
 ball2.style.top = positionY2 + "px";

if ( positionX2 + velocityX2 < 0 || positionX2 + velocityX2 > windowWidth) {velocityX2 = velocityX2 * -1;}
if ( positionY2 + velocityY2 < 0 || positionY2 + velocityY2 > windowHeight) {velocityY2 = velocityY2 * -1;}

}

setInterval(moveBall, 100);
setInterval(moveBall2, 100);
