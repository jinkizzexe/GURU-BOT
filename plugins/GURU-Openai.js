import fetch from 'node-fetch';

let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `𝘓3𝘡𝘞𝘈 𝘉𝘖𝘛 \𝘯 *يرجى تقديم بعض النص أو اقتباس رسالة للحصول على رد*.`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  try {
    m.react(rwait)
    const { key } = await conn.sendMessage(m.chat, {
      image: { url: 'https://i.imgur.com/uuFuEtO.jpg' },
      caption: 'جاري انشاء النص... \n Instagram \n https://www.instagram.com/ovmar_1'
    }, {quoted: m})
    conn.sendPresenceUpdate('composing', m.chat);
    const prompt = encodeURIComponent(text);

    const guru1 = `${gurubot}/chatgpt?text=${prompt}`;
    
    try {
      let response = await fetch(guru1);
      let data = await response.json();
      let result = data.result;

      if (!result) {
        
        throw new Error('No valid JSON response from the first API');
      }

      await conn.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
            imageMessage: { caption: result }
          }
        }
      }, {});
      m.react(done);
    } catch (error) {
      console.error('Error from the first API:', error);

  
      const model = 'llama';
      const senderNumber = m.sender.replace(/[^0-9]/g, ''); 
      const session = `GURU_BOT_${senderNumber}`;
      const guru2 = `https://ultimetron.guruapi.tech/gpt3?prompt=${prompt}`;
      
      let response = await fetch(guru2);
      let data = await response.json();
      let result = data.completion;

      await conn.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
            imageMessage: { caption: result }
          }
        }
      }, {});
      m.react(done);
    }

  } catch (error) {
    console.error('Error:', error);
    throw `*ERROR*`;
  }
};
handler.help = ['chatgpt']
handler.tags = ['AI']
handler.command = ['bro', 'chatgpt', 'ai', 'gpt'];

export default handler;
