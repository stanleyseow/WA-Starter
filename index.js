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

client.on("message_create", async (msg) => {
  // ❗ Avoid processing the bot's own messages (prevents loops)
  if (msg.fromMe) return;

  // Handle !ping (public command)
  if (msg.body.startsWith("!ping")) {
    console.log(`${msg.from} sent a ping`);
    await client.sendMessage(msg.from, "pong");
    return; // stop here so we don't run the owner code
  }
///////////////////////////////////////////////////////////
// ADD YOUR CODE HERE
///////////////////////////////////////////////////////////    
    
    





    
///////////////////////////////////////////////////////////
////  DO NOT EDIT BELOW
///////////////////////////////////////////////////////////
}) // end of message_create

client.initialize();


