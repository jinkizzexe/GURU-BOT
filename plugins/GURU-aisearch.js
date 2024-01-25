import fetch from 'node-fetch';
import displayLoadingScreen from '../lib/loading.js'

const endpoint = 'https://v2-guru-indratensei.cloud.okteto.net/perplexity?query=';

let handler = async (m, { text, conn, usedPrefix, command }) => {
  try {
    if (!text && !(m.quoted && m.quoted.text)) {
      throw `يرجى تقديم بعض النص أو اقتباس رسالة للحصول على رد \n instagram \n https://www.instagram.com/ovmar_1.`;
    }

    if (!text && m.quoted && m.quoted.text) {
      text = m.quoted.text;
    } else if (text && m.quoted && m.quoted.text) {
      text = `${text} ${m.quoted.text}`;
      if (m.quoted.text.includes('.aisearch')) {
        text = text.replace('.aisearch', ''); // 
      }
    }
    await displayLoadingScreen(conn, m.chat)
    conn.sendPresenceUpdate('composing', m.chat);
    let emsg = await conn.sendMessage(m.chat, {text: 'Thinking...'})
    const prompt = encodeURIComponent(text);

    const response = await fetch(endpoint + prompt);

    if (!response.ok) {
      throw `تم تلقي استجابة خطأ من الخادم\n instagram \n https://www.instagram.com/ovmar_1: ${response.status} - ${response.statusText}`;
    }

    const data = await response.json();
    const result = data.response.trim(); 
    await conn.relayMessage(m.chat, {
        protocolMessage: {
          key: emsg.key,
          type: 14,
          editedMessage: {
            conversation: result 
          }
        }
      }, {})
  } catch (error) {
    console.error('Error:', error);
    m.reply(`حدث خطأ أثناء معالجة طلبك. الرجاء معاودة المحاولة في وقت لاحق. \n instagram \n https://www.instagram.com/ovmar_1.`);
  }
};
handler.help = ['aisearch']
handler.tags = ['AI']
handler.command = ['aisearch', 'ai2']; 


export default handler;
