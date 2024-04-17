var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  // carregue a imagem do balão verde
  green_balloonImage = loadImage("green_balloon0.png");
  // carregue a imagem do balão rosa
  pink_balloonImage = loadImage("pink_balloon0.png");
  // carregue a imagem do balão azul
  blue_balloonImage = loadImage("blue_balloon0.png");

  
}



function setup() {
  createCanvas(400, 400);
  
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    
}

function draw() {
 background(0);
  // chão em movimento
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //arco em movimento
  bow.y = World.mouseY
  
   // soltar arco quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //criando inimigos continuamente
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon ){
    case 1: //chamar o balão vermelho
    redBalloon();
    break;
    case 2: // chamar o balão azul
    blueBalloon();
    break;
    case 3: // chamar o balão verde
    greenBalloon();
    break;
    case 4: // chamar o balão rosa
    pinkBalloon();
    break;
    default:break;
  }}
  
  drawSprites();
}


// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 5;
  red.lifetime = 80;
  red.scale = 0.1;
}

function blueBalloon() {
  //crieSprite para o balão
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  //adicioneImagem para o balão
  blue.addImage(blue_balloonImage);
  // adicione velocidade para fazer o balão se mover
  blue.velocityX = 2;
  // mudar a dimensão do balão
  blue.scale = 0.1;
  // atriubua tempo de vida ao balão
  blue.lifetime = 200;
}

function greenBalloon() {
  //crieSprite para o balão
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  //adicioneImagem para o balão
  green.addImage(green_balloonImage);
  // adicione velocidade para fazer o balão se mover
  green.velocityX = 2.5;
  // mudar a dimensão do balão
  green.scale = 0.1;
  // atriubua tempo de vida ao balão
  green.lifetime = 160;
}

function pinkBalloon() {
  //crieSprite para o balão
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  //adicioneImagem para o balão
  pink.addImage(pink_balloonImage);
  // adicione velocidade para fazer o balão se mover
  pink.velocityX = 3;
  // mudar a dimensão do balão
  pink.scale = 1.5;
  // atriubua tempo de vida ao balão
  pink.lifetime = 135;
}
