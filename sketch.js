var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
 jake = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png")
 pista = loadImage("path.png")
 
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
rua = createSprite(200,200)
rua.addImage(pista)


rua.scale=1.2;

boy = createSprite(200,350)
boy.addAnimation("correndo",jake)
//crie um sprite de menino
//adicione uma animação de corrida para ele
boy.scale=0.3;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible = false
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible = false
}

function draw() {
  background(0);
  rua.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX

  boy.x = mouseX
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)
  //código para redefinir o fundo
  if(rua.y > 400 ){
    rua.y = height/2;
  }
  
  drawSprites();
}
