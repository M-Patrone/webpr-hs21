
const radius = 10;
const ball = {x:20, y:0, dx: 1, dy: 5};
let   old  = {x: ball.x, y: ball.y};
let isFalling = true;

function start() {
    const canvas  = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "black";

    setInterval(() => {
        nextBoard();
        display(context);
    }, 1000 / 20);
}

function nextBoard() {
    // keep old ball values for the sake of efficient clearing of the old display
    old.x = ball.x;
    old.y =ball.y
    // handle ball is hitting the bounds
    //   reverse direction
    //   lose some energy relative to the current inertia (only velocity varies)
    if(ball.y >= 400){
        ball.dy = ball.dy*-1
        isFalling=false;
    }
    if(ball.y<=10 && ball.dy<=0){
        ball.dy = ball.dy*-1
        isFalling=true;
    }
    // calculate new position
    // calculate any changes in velocity due to gravitational pull or medium resistance
    ball.x+=ball.dx
    ball.y+=ball.dy
    ball.dy*=isFalling?1.1:0.9
}

function display(context) {
    context.clearRect(old.x - radius - 1 , old.y - radius -1 , 22, 22 );
    fillBox(context)
}

function fillBox(context) {
    context.beginPath();
    context.arc(ball.x, ball.y, radius, 0, 6.3, false);
    context.fill();
}


