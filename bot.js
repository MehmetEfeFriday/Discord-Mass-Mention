const Discord = require("discord.js-selfbot-v13");
const fs = require("fs");

const clients = [];
const amount = 5; // Specify how many IDs to use in each message :/ automod can detect and account will be banned or muted
const guildid = "1204881067861999616";
const channelids = ["1221906513631903865", "1213923277869678652", "1206174279385747466", "1213918540361367622","1211272712534753352","1223931233768050712"];
const interval = 100;
let messages = fs.readFileSync("./messages.txt", "utf-8").split("\n");
let usedMessages = [];
let messageIndex = 0;
let totalUsersPinged = 0;
let totalMessagesSent = 0;
const tokens = fs
  .readFileSync("./tokens.txt", "utf-8")
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

// Multi-token logic SO FUCKEDD
tokens.forEach((token) => {
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
        let randomString = Math.random().toString(36).substring(2, 60);
        let userList = "";
        for (let i = 0; i < amount && userIdsToUse.length > 0; i++) {
          userList += `<@${userIdsToUse.pop()}> `;
        }
        let fullMessage = randomString + "| " + userList + message;

        channel.send(fullMessage).then(() => {
          totalUsersPinged += amount;
          totalMessagesSent++;
          console.log(`Total Users Pinged: ${totalUsersPinged}, Total Messages Sent: ${totalMessagesSent}`);
        }).catch((err) => {
          console.warn(`Stopped spamming with token ${token}!`);
          clearInterval(loop);
        });

        usedMessages.push(message);

        channelIndex++;
      }, interval);
    });
  });

  clients.push(client);
});

clients.forEach(client => {
  client.on('ready', () => console.log(`${client.user.username} is connected`));
});
