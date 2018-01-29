//
// Fallback Command
//
module.exports = function (controller) {

    controller.hears(["(.*)"], 'direct_message,direct_mention', function (bot, message) {
        var mardown = "Sorry I am dumb af T.T Just hope that <@personEmail:asmatin@cisco.com|Ashrara> can smoke less aye! <br/>Try "
            + bot.enrichCommand(message, "help");
            
        bot.reply(message, mardown);
    });
}