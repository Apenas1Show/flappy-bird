console.log('[DevSoutinho] Flappy Bird');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

const planoDeFundo = {
  spriteX: 390, // inicio da sprite no eixo X
  spriteY: 0, // inicio da sprite no eixo Y
  largura: 275, // largura da sprite
  altura: 204, // altura da sprite
  x: 0, 
  y: canvas.height - 204, // pegamos o valor da altura do canvas e subtraimos o valor da altura do sprite
  desenha(){
    contexto.fillStyle = '#70c5ce'; // cor do nosso plano de fundo do canvas
    contexto.fillRect(0,0, canvas.width, canvas.height); // qual o espaço ele vai ocupar do nosso plano de fundo
    
    contexto.drawImage(
      sprites, //imagem base que a gente tem
      planoDeFundo.spriteX, planoDeFundo.spriteY, //SpriteX e SpriteY | sourceX e sourceY é o inicio do sprite no eixo x e no eixo y
      planoDeFundo.largura, planoDeFundo.altura, // Tamanho do recorte do sprite
      planoDeFundo.x,planoDeFundo.y, // aonde ele vai se posicionar no canvas
      planoDeFundo.largura,planoDeFundo.altura
    );
    
    contexto.drawImage(
      sprites, //imagem base que a gente tem
      planoDeFundo.spriteX, planoDeFundo.spriteY, //SpriteX e SpriteY | sourceX e sourceY é o inicio do sprite no eixo x e no eixo y
      planoDeFundo.largura, planoDeFundo.altura, // Tamanho do recorte do sprite
      (planoDeFundo.x + planoDeFundo.largura),planoDeFundo.y, // aonde ele vai se posicionar no canvas
      planoDeFundo.largura,planoDeFundo.altura
    );
  },
}

const chao = {
  spriteX: 0, // inicio da sprite no eixo X
  spriteY: 610, // inicio da sprite no eixo Y
  largura: 224, // largura da sprite
  altura: 112, // altura da sprite
  x: 0, 
  y: canvas.height - 112, // pegamos o valor da altura do canvas e subtraimos o valor da altura do sprite
  desenha(){
    contexto.drawImage(
      sprites, //imagem base que a gente tem
      chao.spriteX, chao.spriteY, //SpriteX e SpriteY | sourceX e sourceY é o inicio do sprite no eixo x e no eixo y
      chao.largura, chao.altura, // Tamanho do recorte do sprite
      chao.x,chao.y, // aonde ele vai se posicionar no canvas
      chao.largura,chao.altura
    );
    
    contexto.drawImage(
      sprites, 
      chao.spriteX, chao.spriteY, 
      chao.largura, chao.altura, 
      (chao.x + chao.largura),chao.y, // nesta linha nós vamos pegar o chão e empurrar para a direita para completar o canvas
      chao.largura,chao.altura
    );
  },
}

const flappyBird = {
  spriteX: 0, // inicio da sprite no eixo X
  spriteY: 0, // inicio da sprite no eixo Y
  largura: 33, // largura da sprite
  altura: 24, // altura da sprite
  x: 10, // posição da sprite no eixo X
  y: 50, // posição da sprite no eixo Y
  
  gravidade: 0.25,
  velocidade: 0,

  atualiza(){
    flappyBird.velocidade = flappyBird.velocidade + flappyBird.gravidade
    console.log(flappyBird.velocidade)
    flappyBird.y = flappyBird.y + flappyBird.velocidade;//flappyBird.velocidade ; // faz com que o passarinho desça com +1 e suba com -1;  
    flappyBird.x = flappyBird.x + 1;

  },
  
  desenha(){
    contexto.drawImage(
      sprites, //imagem base que a gente tem
      flappyBird.spriteX, flappyBird.spriteY, //SpriteX e SpriteY | sourceX e sourceY é o inicio do sprite no eixo x e no eixo y
      flappyBird.largura, flappyBird.altura, // Tamanho do recorte do sprite
      flappyBird.x,flappyBird.y, // aonde ele vai se posicionar no canvas
      flappyBird.largura,flappyBird.altura
    );  
  },
}

function loop(){
  flappyBird.atualiza();
  
  planoDeFundo.desenha();
  chao.desenha();
  flappyBird.desenha();
  
  
  requestAnimationFrame(loop);

}

loop();