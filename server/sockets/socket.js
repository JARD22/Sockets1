const { io } = require('../server')


//el objeto client obtiene toda la informacion de la computadora o de la conexion que se establecio
io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        Usuario: 'Admin',
        Mensaje: 'Bienvenido a la sala de chat'
    });


    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });


    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO bien '
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO MAL'
        //     })
        // }

    });
});