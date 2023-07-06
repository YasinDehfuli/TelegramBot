const TelegramBot = require('node-telegram-bot-api');
// replace the value below with the Telegram token you receive from @BotFather
const token = 'TOKEN-HERE';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, msg => {
    bot.sendMessage(msg.chat.id,'salaM '+ msg.chat.first_name + ' bE boT maN khoshoomadI :)',
        {
        reply_markup : {
            'keyboard' :[
                ['لینک من','معرفی به دیگران']
                    ,
                ['درباره ما','ارسال لینک']
            ]
        }
    }
    )

})

