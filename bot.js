const Discord = require("discord.js-selfbot-v13");
const fs = require("fs");

const clients = [];
const amount = 3; // mesaj başına kaç kişi etiketleyecek
const guildid = "1070582618116079647";
const channelids = ["1070582618640355360", "1070582683371061258"];
const interval = 2; //kaç milisaniyede
let messages = fs.readFileSync("./messages.txt", "utf-8").split("\n");
let usedMessages = [];
let tokens = fs.readFileSync("./tokens.txt", "utf-8").split("\n");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let currentMessageIndex = 0;

// Read in the IDs to mention from "ids.txt"
let userIDs = fs.readFileSync("./ids.txt", "utf-8").split("\n");
// Remove empty lines
userIDs = userIDs.filter((id) => id.length > 0);
// Shuffle the user IDs to distribute them among the bot accounts
shuffleArray(userIDs);

// Distribute the user IDs among the bot accounts
let userIDChunks = [];
let chunkSize = Math.ceil(userIDs.length / tokens.length);
for (let i = 0; i < userIDs.length; i += chunkSize) {
  userIDChunks.push(userIDs.slice(i, i + chunkSize));
}

tokens.forEach((token, tokenIndex) => {
  const client = new Discord.Client();
  client.login(token);

  client.on("ready", () => {
    console.log(`Bot is ready with token ${token}.`);

    let ids = userIDChunks[tokenIndex % userIDChunks.length];

    // Divide ids into smaller chunks
    let chunkedIds = [];
    while (ids.length > 0) {
      let chunk = ids.splice(0, amount);
      chunkedIds.push(chunk);
    }

    let channelIndex = 0;
    let idIndex = 0;

    let loop = setInterval(function () {
      if (channelIndex >= channelids.length) {
        channelIndex = 0;
      }

      if (idIndex >= chunkedIds.length) {
        idIndex = 0;
      }

      let channelId = channelids[channelIndex];
      let channel = client.channels.cache.get(channelId);

      if (!channel) {
        console.warn(`Channel not found with ID ${channelId}!`);
        channelIndex++;
        return;
      }

      // Shuffle the messages array if all messages have been used
      if (usedMessages.length === messages.length) {
        usedMessages = [];
        shuffleArray(messages);
        console.log("All messages used, shuffling messages.");
      }

      // Get the next unused message
      let message = messages.find((message) => !usedMessages.includes(message));

        let chunk = chunkedIds[idIndex];
        let randomIds = chunk.sort(() => Math.random() - 0.5);
        let userList = randomIds.map((id) => `<@${id}>`).join(" ");
        let randomString = Math.random().toString(36).substring(2, 60);
        let fullMessage = randomString + "| " + userList + " " + message;

        channel.send(fullMessage).catch((err) => {
          console.warn(`Error sending message with token ${token}!`);
          console.warn(err);
          tokens.splice(tokenIndex, 1);
        });

        // Mark the used message as used
        usedMessages.push(message);

        channelIndex++;
        idIndex++;

        if (tokenIndex === tokens.length - 1) {
          currentMessageIndex++;
        }

        if (currentMessageIndex >= messages.length) {
          currentMessageIndex = 0;
        }
      }, interval);
    });

    // Move this inside the loop
    client.on("error", (err) => {
      console.warn(`Stopped spamming with token ${token}!`);
      console.warn(err);

      // Remove the token from the tokens array if acc banned 
      tokens.splice(tokenIndex, 1);
    });

  clients.push(client);
});
