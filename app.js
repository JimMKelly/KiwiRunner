const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 400;
const width = canvas.width;
const height = canvas.height;

let enemies = [];
let score = 0;
let background = new Image();
background.src = "./assets/forest.jpg";
let gameOver = false;
let enemySpeed = 20

const jumpSound = new Audio('./assets/jump.wav');
const hitSound = new Audio('./assets/scream.wav');

document.addEventListener('keydown', event => {
    if(event.key == " "){
        kiwi.jump();
    }
});

function main(){
    if(!gameOver){
        enemySpeed = Math.round(score/5)+20 
        draw()
    }else{
        score = 0;
        ctx.font = "30px Arial";
        ctx.strokeText("GAME OVER!", (width/3), 50);
    }
}

function setup(){
    kiwi = new Kiwi();    
    setInterval(main, 60);
    setInterval(addEnemy, 2000);
}

function addEnemy(){
    ranNum = Math.random(1)
    if(ranNum < 0.4){
        enemies.push(new Eagle(enemySpeed))
    }else if(ranNum < 0.9){
        enemies.push(new Possum(enemySpeed))
    }
}

function draw(){

    ctx.drawImage(background,0,0,width,height);
    ctx.font = "30px Arial";
    ctx.strokeText("Score: " + score, 20, 50);

    enemies.forEach(enemy=> {
        enemy.move()
        enemy.show()
        if(kiwi.hits(enemy)){
            hitSound.play()
            gameOver = true
        }
        if(enemy.x < -enemy.w){
            score += 1;
            enemies.splice(enemy,1);
        }
    })

    kiwi.move();
    kiwi.show();   
}