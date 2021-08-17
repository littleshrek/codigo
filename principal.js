var juego = new Phaser.Game (200, 300, Phaser.AUTO, 'bloque_juego' );

var estadoPrincipal = {
    
    preload: function(){
        //carga todos los recursos,
      juego.stage.backgroundColor = "#00aae4";
    },
    
    create: function(){
        // mostrar en pantalla
    },
    
    update: function(){
        //Animamos el juego
    }

};

juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');
