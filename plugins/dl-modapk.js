import { download } from 'aptoide-scraper';

let handler = async (m, { conn, usedPrefix: prefix, command, text }) => {
  try {
    if (command === 'تطبيق') {
      if (!text) throw `🎯Please Provide The *Apk* Name You Want To Download.`;

      await conn.reply(m.chat, global.wait, m);
      let data = await download(text);

      if (data.size.replace(' MB', '') > 200) {
        return await conn.sendMessage(m.chat, { text: '*⚠️The File Is Too Large.*' }, { quoted: m });
      }

      if (data.size.includes('GB')) {
        return await conn.sendMessage(m.chat, { text: '*⚠️The File Is Too Large.*' }, { quoted: m });
      }

      await conn.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      );
    }
  } catch {
    throw `*❌ لم أجد التطبيق الذي في الرابط حاول مجددا.*`;
  }
};

handler.command = /^apk$/i;
export default handler;
  
