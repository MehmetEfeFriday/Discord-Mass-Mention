# Discord-Mass-Mention

This Node.js application is designed to automate the process of sending messages to multiple Discord channels using selfbot functionality.

## Features

- Send messages to multiple Discord channels with customizable intervals.
- Use multiple user IDs in each message for efficient tagging.
- Support for multiple tokens for increased throughput.

## Usage

1. **Setup Your Environment:**
   - Ensure you have Node.js installed on your system.
   - Clone this repository to your local machine.

2. **Configuration:**
   - Customize the following parameters in the `index.js` file according to your requirements:
     - `amount`: Number of user IDs to use in each message.
     - `guildid`: Your Discord guild ID. Only one guild ID can be specified.
     - `channelids`: Array of your Discord channel IDs. Recommended to have at least 2 and maximum of 3 channel IDs.
     - `interval`: Timeout between each message, in milliseconds.
     - `messages.txt`: Create a file named `messages.txt` and add your messages, each on a separate line.
     - `tokens.txt`: Create a file named `tokens.txt` and add your Discord bot tokens, each on a separate line.

3. **Run the Application:**
   - Open a terminal in the project directory.
   - Run `npm install` to install the required dependencies.
   - Run `node index.js` to start the application.

## Important Notes

- Make sure to use this application responsibly and in accordance with Discord's Terms of Service.
- Avoid excessive usage to prevent your account from getting banned.
- Use of selfbots may be against Discord's Terms of Service and can result in account termination if misused.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
