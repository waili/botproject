//
// Command: help
//



module.exports = function (controller) {
    var date = new Date();
    var current_hour = date.getHours();
    controller.hears(["help", "who"], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are what I can kinda understand:";
        //text += "\n- " + bot.enrichCommand(message, ".commons") + ": shows metadata about myself";
        text += "\n- " + bot.enrichCommand(message, "help, hello, cheese, coffee") + ": Sorry I am pretty useless but I am really concerned that <@personEmail:asmatin@cisco.com|Ashrara> smokes too much T.T";
        bot.reply(message,text);
    });
}
