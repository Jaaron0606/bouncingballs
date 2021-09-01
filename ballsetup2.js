

function randomColors(){
    var color = Math.floor(Math.random()*16777215).toString(16); 
    return color = "#" + color;
}

function randomPosition() {
    var position = {
        x: Math.floor(Math.random() * windowHeight),
        y: Math.floor(Math.random() * windowWidth),
    }
    return position;
}

function randomVelocity() {
    var velocity = (Math.floor(Math.random() * 100));
    return velocity;

}