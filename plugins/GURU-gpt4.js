
import displayLoadingScreen from '../lib/loading.js'
import fetch from 'node-fetch'
import {delay} from '@whiskeysockets/baileys'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  try {
    if (!text) throw `uhm..`
    m.react('🤖')
    //await displayLoadingScreen(conn, m.chat)


    const prompt = encodeURIComponent(text);
    let apiurl = `https://ultimetron.guruapi.tech/gpt4?prompt=${prompt}`

    const result = await fetch(apiurl);
    const response = await result.json();
    console.log(response)
    const textt = response.result.reply;
    await typewriterEffect(conn,m, m.chat , textt);
       
  } catch (error) {
    console.error(error);
    m.reply('_أُووبس! حدث خطأ ما أثناء إنشاء الصور. الرجاء معاودة المحاولة في وقت لاحق_\n instagram \n https://www.instagram.com/ovmar_1');
  }
}
handler.help = ['gemini <text>']
handler.tags = ['tools']
handler.command = /^(gpt4)$/i

export default handler

async function typewriterEffect(conn, quoted ,from, text) {
    let { key } = await conn.sendMessage(from, { text: 'Thinking...' } , {quoted:quoted})
  
    for (let i = 0; i < text.length; i++) {
      const noobText = text.slice(0, i + 1);
      await conn.relayMessage(from, {
        protocolMessage: {
          key: key,
          type: 14,
          editedMessage: {
            conversation: noobText
          }
        }
      }, {});
   
       await delay(100); // Adjust the delay time (in milliseconds) as needed
    }
  }
