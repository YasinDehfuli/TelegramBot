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

bot.on('message', msg=>{
    console.log(msg.text)
        if (msg.text === 'سلام'){
            bot.sendVideo(msg.chat.id , 'BAACAgQAAxkBAAMqZKWx8mUHfGqd_palKdy_EqJcL_kAApsQAAIkYDBRBRN-XOrO-Q0vBA')
            bot.sendMessage(msg.chat.id, 'سلامممممممممممممم !')
        }
        if (msg.text === 'خوبی'){
            bot.sendMessage(msg.chat.id, 'من به عنوان یه ربات نمیتوانم احساس داشته باشم! یوهوهو :)')
        }
        if (msg.text === 'کیو دوست داری' || msg.text === 'عاشق کی ایی'){
            bot.sendMessage(msg.chat.id, 'تورو :) 🖤')
        }
        if (msg.text === 'چند تا' || msg.text === 'چند تا دوسم داری'){
            bot.sendMessage(msg.chat.id, 'infinite loop started...')
            for (let i = 0; i < 10; i++) {
                bot.sendMessage(msg.chat.id,'🖤')
            }
        }
})
