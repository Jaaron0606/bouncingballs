var count = document.getElementsByTagName('div').length;
const arrayofballs= ["ball"];
var velocityX = 25;
var velocityY = 25;
var positionX = 0;
var positionY = 0;
var velocityX2 = 50;
var velocityY2 = 30;
var positionX2 = 0;
var positionY2 = 0;
//var ball = document.getElementById("ball");
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;


function randomColors(){
    var color = Math.floor(Math.random()*16777215).toString(16); 
    return color = "#" + color;
}

function createBall() {
    var createDivForBall = document.createElement('div');
    createDivForBall.setAttribute("id", "ball" + count); 
    document.body.appendChild(createDivForBall);
    document.getElementById("ball" + count).style.background = randomColors(); 
    document.getElementById("ball" + count).style.left = randomPosition().x + "px";
    document.getElementById("ball" + count).style.top = randomPosition().y + "px";
    document.getElementById("ball" + count).style.position = "absolute";
    document.getElementById("ball" + count).style.zIndex = 5;
    document.getElementById("ball" + count).style.width = 25 + "px";
    document.getElementById("ball" + count).style.height  = 25 + "px";
    document.getElementById("ball" + count).style.borderRadius = "50%";
    arrayofballs.push("ball" + count); 
    count = document.getElementsByTagName('div').length; 
}

function settingStyle(element) {
    document.getElementById(element);
}

function moveBalls(arrayofElements) {
    arrayofElements.forEach(function callBack(element) {
        //console.log(element);
        var ballElement = document.getElementById(element);
        ballElement.style.background = randomColors();
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        positionX = positionX + velocityX;
        positionY = positionY + velocityY;
        //This item statement is the reason the balls are trailing each other. 
        ballElement.style.left = positionX + "px";
        ballElement.style.top = positionY + "px";

if ( positionX + velocityX < 0 || positionX + velocityX > windowWidth - 25) {velocityX = velocityX * -1;}
if ( positionY + velocityY < 0 || positionY + velocityY > windowHeight - 25) {velocityY = velocityY * -1;}
    });
    }

setInterval(function() { 
    moveBalls(arrayofballs);
}, 100)




