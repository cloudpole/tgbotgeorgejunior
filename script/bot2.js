//
const fs = require('fs'); 
const TelegramBot = require('node-telegram-bot-api'); 
const token = '1611822591:AAE01jo3QSp80vxIKztkzMSTl_PVtYEV2OE'; //BotFather токен
const file = 'C:/Users/cloudp/Desktop/eggorjunior/text.txt'; //Директория файла для читки
const groupid = '-1001451161166'; // ID чата
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

