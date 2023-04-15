var juego = new Phaser.Game(588, 294, Phaser.CANVAS, 'bloque_juego');
var fondoJuego;
var boton;
var flappy;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;

var estadoPrincipal = {
    preload: function () {
                
        juego.load.image('fondo', 'img/bg.jpeg');
        juego.load.spritesheet('pajaros', 'img/pajaro.png',86,64); //se carga la imagen
        
    },

    create: function () {
        
        fondoJuego = juego.add.tileSprite(0, 0, 588, 294, 'fondo');
        flappy = juego.add.sprite(100,100, 'pajaros'); //se muestra la imagen en el eje x,y
        //flappy.frame=1;
        flappy.scale.setTo(1);
        flappy.animations.add('vuelo',[0,1,2],10,true); //nombre de la animacion "vuelo", veloidad="10", arreglo de elementos de la imagen
        teclaDerecha=juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        teclaIzquierda=juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        teclaArriba=juego.input.keyboard.addKey(Phaser.Keyboard.UP);
        teclaAbajo=juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
               
    },

    update: function () {
        //animamos el juego
        fondoJuego.tilePosition.x-=1;  //corre hacia la izquierda el fondo
        flappy.animations.play('vuelo');
        if(teclaDerecha.isDown){
            flappy.x++;
        }else if (teclaIzquierda.isDown){
            flappy.x--;
        }else if (teclaArriba.isDown){
            flappy.y--;
        }else if(teclaAbajo.isDown){
            flappy.y++;
        }
    }
};

//asignamos el estado que acaba de crear el juego
juego.state.add('principal', estadoPrincipal);

//iniciar el juego del estado principal por defecto
juego.state.start('principal');