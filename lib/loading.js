export default async function displayLoadingScreen(conn, from) {
    const loadingStages = [
      "سوف يتم تحميل طلبك ..\n \n _*سوف يتم تلبية طلبك*_ \n 𝘐𝘯𝘴𝘵𝘢𝘨𝘳𝘢𝘮 \n  _https://www.instagram.com/ovmar_1_  𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘎𝘗 \n _https://chat.whatsapp.com/ByIauCfwCFeE1ozctmwbS5 :_,",
      //"ʟᴏᴀᴅɪɴɢ 《 ████▒▒▒▒▒▒▒▒》30%,",
    //  "ʟᴏᴀᴅɪɴɢ 《 ███████▒▒▒▒▒》50%,",
     // "ʟᴏᴀᴅɪɴɢ 《 ██████████▒▒》80%,",
     // "ʟᴏᴀᴅɪɴɢ 《 ████████████》100%,",
      //"ʟᴏᴀᴅɪɴɢ ᴄᴏᴍᴘʟᴇᴛᴇ"
    ];
  
    try {
      const { key } = await conn.sendMessage(from, { text: 'ʟᴏᴀᴅɪɴɢ...' });
  
      for (let i = 0; i < loadingStages.length; i++) {
        await conn.relayMessage(from, {
          protocolMessage: {
            key: key,
            type: 14,
            editedMessage: {
              conversation: loadingStages[i]
            }
          }
        }, {});
      }
    } catch (error) {
      console.error('Error displaying loading screen:', error);
    }
  }
  
