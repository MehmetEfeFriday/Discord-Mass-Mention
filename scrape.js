const Discord = require('discord.js-selfbot-v13');
const fs = require('fs');
const client = new Discord.Client();

client.on('debug', console.log);

client.on('ready', () => {
    console.log('Logged in as', client.user.tag);
    const guild = client.guilds.cache.get('yourshittyguildiid'); // Replace with your guild ID
    guild.members.fetchBruteforce({
        depth: 2, // 2 levels of recursion
        delay: 500, // 500ms delay between each request
    });

    // Function to save member IDs to 'ids.txt' and overwrite the file
    function saveMemberIds() {
        const memberIds = Array.from(guild.members.cache.keys());
        console.log('Member IDs:', memberIds);

        // Write member IDs to 'ids.txt' and overwrite the file
        fs.writeFileSync('ids.txt', memberIds.join('\n'));
        console.log('Member IDs saved to ids.txt');
    }

    saveMemberIds();

    // Set an interval to save member IDs every 20 seconds thats wwill forever because just wait 3 minute and use it
    setInterval(saveMemberIds, 20000);
});

client.login('token'); // Replace with your bot token
