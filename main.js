process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = proccess.env.TG_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});
 // Команды для бота.
 bot.onText(/\/age(.+)/,(msg,match)=>{
   ageValue = msg 
   let output 
   if (ageValue > 18 ){
     output = "she(he?!?!?!?) is legal"
   }
   else {
     output = "Bro u have a problem! Run!"
   }

   bot.onText(/\/help(,+)/,(msg,match)=>{
    switch (msg) {
        case 'noting':{ 
          bot.sendMessage = "welcom to age bot, here u can found some discription. This bot create to see howe api work and, maybe, helps u to not to go in jail. No thx bro... ur welcom. Have a goode day " ;
          break
        }
        case 'wtf ':{
          bot.sendMessage = "idk bro";
          break
        } 
   }

   });
  