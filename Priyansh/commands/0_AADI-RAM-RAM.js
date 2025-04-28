const fs = require("fs");
module.exports.config = {
	name: "KHANA",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "AADI BABU",
	description: "THIS BOT IS MR AADI SHARMA",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Allah") ||
     react.includes("Allah Hu Akbar") || react.includes("Allah Hu Akbar") || react.includes("Allah Hu Akbar") ||
react.includes("Allah hu Akbar") ||
react.includes("ALLAH HU AKBAR")) {
		var msg = {
				body: `☟  ========== ☟ ==========  ☟                                                         ●===========================●                              𝐎𝐰𝐧𝐞𝐫 ➻  ────  ⟬ 𝐆A͜͡𝐍𝐆𝐒𝐓E͜͡𝐑 ⟭⸙⟬ دیـﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻـول ⟭__🥰  𝐌𝐀𝐈𝐍 𝐓𝐎 𝐌𝐔𝐒𝐀𝐋𝐌𝐀𝐍 𝐇𝐔 𝐒𝐀𝐑𝐄 𝐌𝐈𝐋 𝐊𝐑 𝐁𝐎𝐋𝐎 𝐀𝐋𝐋𝐀𝐇 𝐇𝐔𝐀𝐊𝐁𝐀𝐑 😍 ❤️`,attachment: fs.createReadStream(__dirname + `/noprefix/#ram_#ramlalaa_#ayodhya_#siyaram_in_2024___Ram_photos,_Shree_ram_photos,_Shri_ram_photo(360P).mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
