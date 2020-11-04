const Eris = require('eris')
const ReactionHandler = require('eris-reactions');

var bot = new Eris("");
bot.on("ready", () => {
    console.log("Ready!");
});
bot.on('messageCreate', async (message) => {
        const reactionListener = new ReactionHandler.continuousReactionStream(
            message, 
            (userID) => true, 
            false, 
            { maxMatches: 10, time: 900000 }
        );

        reactionListener.on('reacted', (event) => {
            console.log(event.msg.channel.id)
            if(event.emoji.name == "👍" && event.msg.channel.id == "541179246312292363") {
                event.msg.addReaction('👍')
            }
        });
});

bot.connect();