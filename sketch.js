var gamestate = PLAY
var PLAY = 1
var END = 2


var runner, enemy, gameover;

var runnerImg, enemyImg, gameoverImg, fundoImg;

var invisibleGround;

var enemiesGroup;




function preload(){


runnerImg = loadAnimation("megaman1.png",
"megaman2.png","megaman3 - Copia.png","megaman3.png",
"megaman4 - Copia.png","megaman4.png","megaman5.png",
"megaman6.png","megaman7.png","megaman8.png",);

enemyImg = loadImage("smilerEnemy.png");

gameoverImg = loadImage("teladegameovre.jpg");

fundoImg = loadImage("fundo.jpg");

}







function setup(){

    createCanvas(windowWidth, windowHeight);


    fundo = createSprite(windowWidth/2, windowHeight/2);
    fundo.addImage(fundoImg);
    fundo.scale = 1.51;

    runner = createSprite(windowWidth*0.15, windowHeight*0.5);
    runner.addAnimation("running", runnerImg);
    runner.scale = 0.6;

    invisibleGround = createSprite(runner.x, runner.y + 240, 200, 3);
    invisibleGround.visible = false;

    enemiesGroup = new Group();
}



function draw(){

background(100);




fundo.velocityX = -10

if(fundo.x < 200){

fundo.x = windowWidth-200;


}




runner.collide(invisibleGround);

if(keyDown("space") && runner.y >= windowHeight*0.4){

runner.velocityY = -52;

}

if(enemiesGroup.isTouching(runner)){

gamestate = END;

gameover = createSprite(windowWidth/2, windowHeight/2);
gameover.addImage(gameoverImg);
gameover.scale = 2.36

}
if(gamestate === END){

enemiesGroup.destroyEach();






}






runner.velocityY = runner.velocityY + 3;


spawnEnemies();


drawSprites();

}


function spawnEnemies(){

if(frameCount % 70 === 0){

enemy = createSprite(windowWidth, windowHeight/2 + 40);
enemy.addImage(enemyImg);
enemy.lifetime = 700;
enemy.velocityX = -30;
enemy.scale = 0.3;
enemiesGroup.add(enemy);

}
}