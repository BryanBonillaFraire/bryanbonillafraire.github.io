var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d")
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


var ballX = canvas.width / 2;
var ballY = canvas.height / 2;
var ballXDelta = 3;
var ballYDelta = 3;
var radius = 20;

var paddleX = 600;
var paddleY = 580;
var paddleSpeed = 5;
var paddleHeight = 10 ;
var paddleWidth = 150;

var leftPressed = false;
var rightPressed = false;

var bricks = []
var rowCount = 5;
var columnCount = 22;

var score = 0;

var gameOver = false;

function drawBall()
{

    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.arc(ballX, ballY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();

}

function drawScore(){
    ctx.font = "32px Arial";
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.fillText("Score = " + score , 1050, 35);
    ctx.strokeText("Score = " + score , 1050, 35);
}

function drawPaddle()
{
    ctx.strokeStyle = "white";
    ctx.fillStyle = "blue"
    ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight)

}
function Brick (x, y, color){
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 20;
    this.color = color;
    this.hit = false;
}

for(var r = 0; r < rowCount; r++){
    bricks[r] = [];
    for( c = 0; c < columnCount; c++){
        var startX = 50 + (c * 50);
        var startY = 50 + (r * 20);
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        var color = "rgb("+ red + "," + green + "," + blue + ")";
        bricks[r][c] = new Brick(startX, startY, color);
    }
}

function drawBricks(){
    for(var r = 0; r < rowCount; r++){
        
        for( c = 0; c < columnCount; c++){
            if(!bricks[r][c].hit){
                ctx.beginPath();
                ctx.rect(bricks[r][c].x, bricks[r][c].y, bricks[r][c].w, bricks[r][c].h);
                ctx.fillStyle = bricks[r][c].color;
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            }
            if(!bricks[r][c].hit){
                if(ballX + 10 > bricks[r][c].x && ballX - 20 < bricks[r][c].x + bricks[r][c].w && ballY + 10 > bricks[r][c].y && ballY - 20 < bricks[r][c].y + bricks[r][c].h){
                    bricks[r][c].hit = true;
                    ballYDelta *= -1; 
                    score++;
                }
            }
        }
    }

}

function collision()
{

    if(ballX + radius > 1200 || ballX - radius < 0){
        ballXDelta = -1 * ballXDelta;
    }
    
    if(ballY + radius > 600 || ballY - radius < 0){
        ballYDelta = -1 * ballYDelta;

        if(ballY + radius > 600){
            gameOver = true;
        }
    }
    if(ballX > paddleX && ballX < paddleX + paddleWidth && ballY + radius > paddleY)
    {
        ballYDelta *= -1;
    }

}


function keyDownHandler(e)
{

    if(e.keyCode == 37)
    {
        leftPressed = true;
    }
    
    else if(e.keyCode == 39)
    {
        rightPressed = true;
    }

}

function movement()
{
    if(leftPressed && (paddleX + paddleSpeed ) >= 0){
        paddleX -= paddleSpeed;
    }
    else if(rightPressed && (paddleX + paddleSpeed + paddleWidth) <= 1200){
        paddleX += paddleSpeed;
    }

}

function keyUpHandler(e)
{

    if(e.keyCode == 37)
    {
        leftPressed = false;
    }
    
    else if(e.keyCode == 39)
    {
        rightPressed = false;
    }

}


function gameLoop()
{
    ctx.clearRect(0, 0, 1200, 600);
    if(!gameOver){
        drawBall();
        collision();
        drawPaddle();
        movement();
        drawBricks();
        drawScore();
    }
    else{
        ctx.font = "100px Arial";
        ctx.fillStyle = "black"
        ctx.strokeStyle = "white"
        ctx.fillText("GameOver", 220, 180);
        ctx.fillText("Score Was: " + score, 220, 300);
        ctx.fillText("Hecho por Bryan Bonilla", 50, 420);
        ctx.strokeText("GameOver", 220, 180);
        ctx.strokeText("Score Was: " + score, 220, 300);
        ctx.strokeText("Hecho por Bryan Bonilla", 50, 420);
    }
    ballY = ballY + ballYDelta;
    ballX = ballX + ballXDelta;
}

setInterval(gameLoop, 10);