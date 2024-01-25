import fetch from 'node-fetch';
import displayLoadingScreen from '../lib/loading.js';
let handler = async (m, { conn, text }) => {
    if (!text) {
        console.log('الإسم غير صحيح جرب مرة اخرى \n instagram \n https://www.instagram.com/ovmar_1.');
        throw `*أكتب إسم الأغنية* \n instagram \n https://www.instagram.com/ovmar_1`;
    }
  m.react('🎶')
  await displayLoadingScreen(conn, m.chat);
  let pp = 'https://wallpapercave.com/wp/wp7932387.jpg'
    const query = encodeURIComponent(text);
    let res = `https://guruapi.tech/api/spotifydl?url=${query}`
   // let spotify = await (await fetch(res)).buffer()
    let doc = {
        audio: {
          url: res
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "l3zwa.mp3",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            title: "↺ |◁   II   ▷|   ♡",
            body: `Now playing: ${text}`,
            thumbnailUrl: pp,
            sourceUrl: null,
            mediaType: 1,
            renderLargerThumbnail: false
          }
        }
    };
    
    await conn.sendMessage(m.chat, doc, { quoted: m });
}
handler.help = ['spotify'];
handler.tags = ['downloader'];
handler.command = /^(spotify|song)$/i;

export default handler;
