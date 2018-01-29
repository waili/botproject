module.exports = function (controller) {

    controller.hears(['hello'], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            convo.say('Hello hello hellooo!');

            convo.ask('What is your favorite color?', function (response, convo) {
                convo.say('Cool, I like ' + response.text + ' too!');
                convo.next();
            });
        });
    });
};