let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake [0] ={
    x: 5 * box,
    y: 5 * box
}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarcobrinha() {
    for(i=0; i<snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
    
}
function drawfood(){
    context.fillStyle = "purple";
    context.fillRect( food.x, food.y, box, box)
}

document .addEventListener('keydown', update);
function update (event) {
    if(event.keycode == 37 && direction != "right") direction = "left";
    if(event.keycode == 38 && direction != "up") direction = "down";
    if(event.keycode == 39 && direction != "left") direction = "right";
    if(event.keycode == 40 && direction != "down") direction = "up";
}

function iniciarJogo(){
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake [0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "up") snake[0].y = 0;
    if (snake [0].y < 0 && direction == "down")snake[0].y= 16 * box;
for(i =1 ; i< snake.length; i++){
    if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
        clearInterval(jogo);
        alert('GAME OVER');
    }
}

criarBG();
criarcobrinha();
drawfood();

let snakeX = snake[0].x;
let snakeY = snake[0].y;

if (direction == "right") snakeX += box;
if (direction == "left") snakeX -= box;
if (direction == "up") snakeY += box;
if (direction == "down") snakeY -= box;

if(snakeX != food.x || snakeY != food.y){
    snake.pop();
}
else{
    food.x = Math.floor(Math.random() * 15 + 1) * box;
    food.y = Math.floor(Math.random() * 15 + 1) * box;

}

let newhead = {
    x: snakeX,
    y: snakeY,

}
snake.unshift(newhead);
}

let jogo = setInterval(iniciarJogo,100);