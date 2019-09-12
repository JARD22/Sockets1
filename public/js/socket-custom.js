var socket = io();
//Saber si estamos conectados al servidor (escuchar)
socket.on('connect', function() {

    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});


//Enviar informacion (emit)
socket.emit('enviarMensaje', {
    usuario: 'Jorge',
    mensaje: 'Probando los sockets'
}, function(resp) {
    console.log('Respuesta Server:', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(Data) {
    console.log('Servidor:', Data);
})