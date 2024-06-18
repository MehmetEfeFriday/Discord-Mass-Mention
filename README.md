# Discord Mass Mention
This Node.js script allows you to send mass mentions on Discord using your own bots. You can customize the number of user IDs to use in each message, specify the guild ID and channel IDs to target, set the interval between each message, and provide multiple tokens to send messages through different accounts.

[Video Taken While Using the Sample](https://youtu.be/A2Roa8xsaLA) and [Real Time Chat Spam Video Very Fast](https://youtu.be/XZctJrYFT90)

## Add a star because why not
because why not xd 
First of all, I wrote this and similar codes 6 months ago in response to people like [vast](https://github.com/imvast), a son of a bitch who sells codes like this for 200 dollars and sometimes scams people, but I couldn't publish it because my computer broke down, but now I'm publishing it just like that xd
Vast closed my old github account with fake spam.
Even though I sent them to github with proofs, I didn't get a positive result and now I continue here.
I won't continue this project anymore because I don't care.
Now I'm thinking of finding the key again in Brawl Stars somehow and doing very good things, I won't make the mistake I made in zer0_bot. anyway, let's continue
[My Discord Server](https://discord.gg/HMESXRwX2Z)

## Features
This code allows you to ping and advertise to anyone on a Discord server. It supports multiple tokens for efficient use.

## Requirements
- Node.js
- Discord bot token(s)
- The list of member IDs to be mentioned, you can get the list with scrape.js, remember that you can never get 100%, you need very long periods of time related documentation:
- https://github.com/aiko-chan-ai/discord.js-selfbot-v13/blob/2.15.1/Document/FetchGuildMember.md
- https://arandomnewaccount.gitlab.io/discord-unofficial-docs/lazy_guilds.html

## Configuration
- `amount`: The number of user IDs to be used in each message.
- `guildid`: ID of the Discord server you want to perform actions on.
- `channelids`: IDs of the channels you want to send messages to. You can customize this by adding or removing channel IDs.
- `interval`: The timeout between each message.
- `tokens`: Tokens for Discord bot accounts. You can specify multiple tokens for efficient use.

## How to use
1. Clone the repository: `git clone https://github.com/MehmetEfeFriday/Discord-Mass-Mention`
2. Install the dependencies: `npm install`
3. Customize the configuration in the `bot.js` file according to your requirements.
4. Create text files for messages and tokens (`messages.txt` and `tokens.txt` respectively) and fill them with the required data.
5. Run `npm i discord.js-selfbot-v13@2.15.1` for scrape.js (only works in this version)
6. Run scrape.js to get member ids
7. Run the code: `node bot.js`

## Thank you
I couldn't have done this project without Discum and discord.js-selfbot-v13, thank you very much.

## Buy Me a Coffee
If you found this code useful and want to support its development, you can donate via cryptocurrency:
- BTC: [1GVwrLLEMBmA6wCWnvgDLwqLv8HhryRioDs]
- USDT: [TE65qTLAx73kQ4LjbQYiWnXWBNK6GwKNXM]
- TON: [UQDHzwnAoZ3ZY86PX7oF4b37pikY6boM1RO7okLuO3nfwgqt]
