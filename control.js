var five = require("johnny-five"),
    board = new five.Board(),
    { Client } = require('discord.js'),
    client = new Client,
    ledBool = false;

client.on('ready', () => {
    client.user.setGame('with Leds')
})

board.on('ready', async () => {
    var led = new five.Led(13);

    client.on('message', async msg => {
        if (msg.content.toLowerCase() === '!led' && msg.author.id === 'ur id') {
            if (!ledBool) {
                msg.delete()
                await led.on()
                msg.reply('Led on.').then(mesaj => mesaj.delete(1000))
                ledBool = true;
            } else {
                msg.delete()
                await led.off()
                msg.reply('Led off.').then(mesaj => mesaj.delete(1000))
                ledBool = false;
            }
        }
    })
});

client.login('SUPER_SECRET_TOKEN')
