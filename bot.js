const Discord = require("discord.js-selfbot-v13");
const fs = require("fs");

const clients = [];
const amount = 5; // Number of user IDs to use in each message
const guildid = "1070582618116079647"; // add your guild id only can be 1 if you make more than 1 account will get banned.
const channelids = ["1070582618640355360", "1070582683371061258"]; // add your channel ids maximum 3 channel id recommended minumum 2 but Customisable, you can put more than 3 or less than 2, but the most effective is to put 3 channel ids
const interval = 666; // Timeout between each message.
let messages = fs.readFileSync("./messages.txt", "utf-8").split("\n");
let usedMessages = [];
let messageIndex = 0;
const tokens = fs
  .readFileSync("./tokens.txt", "utf-8") // add your tokens (can be multi token xd)
  .split("\n")
  .map((token) => token.trim())
  .filter((token) => token.length > 0);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let userIdsToUse = [];
let messagesToUse = [];

tokens.forEach((token, tokenIndex) => {
  const client = new Discord.Client();
  client.login(token);

  client.on("ready", () => {
    console.log(`Bot is ready with token ${token}.`);

    fs.readFile("ids.txt", "utf-8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      let ids = data.split("\n");
      ids = ids.filter((id) => id.trim().length > 0);
      shuffleArray(ids);

      let channelIndex = 0;

      let loop = setInterval(function () {
        if (channelIndex >= channelids.length) {
          channelIndex = 0;
        }

        let channelId = channelids[channelIndex];
        let channel = client.channels.cache.get(channelId);

        if (userIdsToUse.length === 0) {
          userIdsToUse = [...ids];
          shuffleArray(userIdsToUse);
        }

        if (messagesToUse.length === 0) {
          messagesToUse = [...messages];
          shuffleArray(messagesToUse);
        }

        if (userIdsToUse.length === 0 && messagesToUse.length === 0) {
          clearInterval(loop);
          console.log("All messages and IDs used.");
          return;
        }

        let message = messagesToUse.pop();
        let userIdsInMessage = [];
        for (let i = 0; i < amount && userIdsToUse.length > 0; i++) {
          userIdsInMessage.push(`<@${userIdsToUse.pop()}>`);
        }
        let randomString = Math.random().toString(36).substring(2, 60);
        let fullMessage = randomString + "| " + userIdsInMessage.join(" ") + " " + message;

        channel.send(fullMessage).catch((err) => {
          console.warn(`Stopped spamming with token ${token}!`);
          clearInterval(loop);
        });

        usedMessages.push(message);

        channelIndex++;

        if (tokenIndex === tokens.length - 1) {
          messageIndex++;
          if (messageIndex >= messages.length) {
            messageIndex = 0;
            shuffleArray(messages);
          }
        }
      }, interval);
    });
  });

  clients.push(client);
});
