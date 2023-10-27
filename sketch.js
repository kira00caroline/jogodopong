let xBolinha=290;
let yBolinha=250;
let diametro=20
let raio=diametro /2;

let velovidadeXBolinha=7
let velocidadeYBolinha=7
function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(0);
  mostrabolinha();
  movimentabolinha();
   verificaColisaoBorda
 
 }


function mostrabolinha(){
   circle(xBolinha,yBolinha,diametro)
  
}
function movimentabolinha(){
  
   xBolinha +=velovidadeXBolinha;
  yBolinha +=velocidadeYBolinha;
}


function verificaColisaoBorda() {
    if (xbolinha + raio > width || xbolinha - raio < 0) {
        velocidadexbolinha *= -1;
    }
    if (ybolinha + raio > height || ybolinha - raio < 0) {
        velocidadeybolinha *= -1;
    }
}