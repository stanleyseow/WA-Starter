const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('ready', () => {
    console.log('Client is ready!');
}) // end of ready

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
}) // end of qr

client.on('message_create', async message => {
    if (message.body.startsWith('!ping')) {
        console.log(`${message.from} sent a message: ${message.body}`);
        // send back "pong" to the chat the message was sent in
        await client.sendMessage(message.from, 'pong');
    } 
///////////////////////////////////////////////////////////
// ADD YOUR CODE HERE
///////////////////////////////////////////////////////////    
    
    





    
///////////////////////////////////////////////////////////
////  DO NOT EDIT BELOW
///////////////////////////////////////////////////////////
}) // end of message_create

client.initialize();


