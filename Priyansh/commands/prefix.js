module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "given prefix detail",
  commandCategory: "Dành cho Admin",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;
  //if (senderID == global.data.botID) return;
  if ((this.config.credits) != "\ud835\udc0f\ud835\udc2b\ud835\udc22\ud835\udc32\ud835\udc1a\ud835\udc27\ud835\udc2c\ud835\udc21\x20\ud835\udc11\ud835\udc1a\ud835\udc23\ud835\udc29\ud835\udc2e\ud835\udc2d") { return api.sendMessage(`\x41\x67\x61\x69\x6e\x20\x63\x68\x61\x6e\x67\x65\x20\x63\x72\x65\x64\x69\x74\x20\x74\x6f\x20\ud835\udc0f\ud835\udc2b\ud835\udc22\ud835\udc32\ud835\udc1a\ud835\udc27\ud835\udc2c\ud835\udc21\x20\ud835\udc11\ud835\udc1a\ud835\udc23\ud835\udc29\ud835\udc2e\ud835\udc2d`, threadID, messageID)}
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  var arr = ["mpre","mprefix","prefix", "dấu lệnh", "prefix của bot là gì","daulenh", "duong", "what prefix", "freefix", "what is the prefix", "bot dead", "bots dead", "where prefix", "what is bot", "what prefix bot", "*" ,"how use bot", "@","bot not working","+","where prefix","prefx","prfix","prifx","perfix",".","/"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
const prefix = threadSetting.PREFIX || global.config.PREFIX;
      if (data.PREFIX == null) {
        return out(`𝐘𝐄 𝐑𝐀𝐇𝐀 𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗 ⇉ [ ${prefix} ]\n●============================================================●𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐒𝐡𝐚𝐚𝐧 𝐁𝐨𝐭 😇👈\n=𝐎𝐰𝐧𝐞𝐫 ➻    🌹 𝐒𝐡𝐚𝐚𝐧 🌹\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 𝐥𝐢𝐧𝐤 😊👈 𝐒𝐡𝐚𝐚𝐧 :- ☞ https://www.facebook.com/profile.php?id=100016828397863&mibextid=ZbWKwL\n●============================================================●👋𝐅𝐎𝐑 𝐀𝐍𝐘 𝐊𝐈𝐍𝐆 𝐎𝐅𝐅 𝐇𝐄𝐋𝐏 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐎𝐍 𝐈𝐍𝐒𝐓𝐀 𝐈𝐃●============================================================● https://www.instagram.com/shankhank__345?igsh=MXVneXZ6bzR4bHhvcg==`)
      }
      else return out('️️️️️️️️️️️️️️️️️️️️️️️️️️️𝐘𝐄 𝐑𝐀𝐇𝐀 𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗 ⇉ [ ${prefix} ]  \n============================================================●𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐒𝐡𝐚𝐚𝐧 𝐁𝐨𝐭 😇👈\n=𝐎𝐰𝐧𝐞𝐫 ➻    🌹 𝐒𝐡𝐚𝐚𝐧\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 𝐥𝐢𝐧𝐤 😊👈 𝐒𝐡𝐚𝐚𝐧 :- ☞ https://www.facebook.com/profile.php?id=100016828397863&mibextid=ZbWKwL\n●============================================================●👋𝐅𝐎𝐑 𝐀𝐍𝐘 𝐊𝐈𝐍𝐆 𝐎𝐅𝐅 𝐇𝐄𝐋𝐏 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐎𝐍 𝐈𝐍𝐒𝐓𝐀 𝐈𝐃●============================================================● https://www.instagram.com/shankhank345?igsh=MXVneXZ6bzR4bHhvcg==' + data.PREFIX)
    }

  });
}; is

module.exports.run = async({ event, api }) => {
    return api.sendMessage("error", event.threadID)
}
