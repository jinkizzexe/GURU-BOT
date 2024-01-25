import { download } from 'aptoide-scraper';

let handler = async (m, { conn, usedPrefix: prefix, command, text }) => {
  try {
    if (command === 'modapk', 'apk', 'app') {
      if (!text) throw `𝘓3𝘻𝘸𝘢𝘢 𝘣𝘰𝘵 \n \n _*لم نتڪمن من التعرف على اسم او رابط التطبيق 🔎*_ \n 𝘐𝘯𝘴𝘵𝘢𝘨𝘳𝘢𝘮 \n  _https://www.instagram.com/ovmar_1_`;
      m.react(rwait)
      await conn.reply(m.chat, global.wait, m);
      let data = await download(text);

      if (data.size.replace(' MB', '') > 700) {
        return await conn.sendMessage(m.chat, { text: '𝘓3𝘻𝘸𝘢𝘢 𝘣𝘰𝘵 \n \n _*التطبيق ڪبير جدا 🚫*_ \n 𝘐𝘯𝘴𝘵𝘢𝘨𝘳𝘢𝘮 \n  _https://www.instagram.com/ovmar_1_ :' }, { quoted: m });
      }

      if (data.size.includes('GB')) {
        return await conn.sendMessage(m.chat, { text: '𝘓3𝘻𝘸𝘢𝘢 𝘣𝘰𝘵 \n \n _*التطبيق ڪبير جدا 🚫*_ \n 𝘐𝘯𝘴𝘵𝘢𝘨𝘳𝘢𝘮 \n  _https://www.instagram.com/ovmar_1_' }, { quoted: m });
      }

      await conn.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      )
    }
  m.react(done)
  } catch {
    throw `
    𝘓3𝘻𝘸𝘢𝘢 𝘣𝘰𝘵 \n \n _*لم نتڪمن من التعرف على اسم او رابط التطبيق 🔎*_ \n 𝘐𝘯𝘴𝘵𝘢𝘨𝘳𝘢𝘮 \n  _https://www.instagram.com/ovmar_1_`;
  }
};

handler.help = ['modapk', 'apk', 'app', 'تطبيق']
handler.tags = ['downloader']
handler.command = ['modapk', 'apk', 'app', 'تطبيق'];
export default handler;
