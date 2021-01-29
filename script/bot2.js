//
const fs = require('fs'); 
const TelegramBot = require('node-telegram-bot-api'); 
const token = ''; //BotFather токен
const file = '../text.txt'; //Директория файла для читки
const groupid = ''; // ID чата, искать через Web версию телеги в URL строке
const bot = new TelegramBot(token, {
    polling: true
});


fs.watch(file, (e, f) => {

    fs.readFile(file, function (err, data) {

        if (err) {
            return console.error(err);
        }
        bot.sendMessage(groupid, data);
    });
});

