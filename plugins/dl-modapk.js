import { download } from 'aptoide-scraper';

let handler = async (m, { conn, usedPrefix: prefix, command, text }) => {
  try {
    if (command === 'apk') {
      if (!text) throw `_*👾 سكوزا بوت يحتاج الى  إسم التطبيق الذي تريده*_ n\ *INSTAGRAM* n\ *https://www.instagram.com/ovmar_1* n\ *Whatsapp Gp* n\ *https://chat.whatsapp.com/ByIauCfwCFeE1ozctmwbS5 !*`;

      await conn.reply(m.chat, global.wait, m);
      let data = await download(text);

      if (data.size.replace(' MB', '') > 200) {
        return await conn.sendMessage(m.chat, { text: '_*سكوزا بوت يقول ان التطبيق كبير لإرساله ( سمح ليا )*_ n\ *INSTAGRAM* n\ *https://www.instagram.com/ovmar_1* n\ *Whatsapp Gp* n\ *https://chat.whatsapp.com/ByIauCfwCFeE1ozctmwbS5 !*' }, { quoted: m });
      }

      if (data.size.includes('GB')) {
        return await conn.sendMessage(m.chat, { text: '_*سكوزا بوت يقول ان التطبيق كبير لإرساله ( سمح ليا )*_ n\ *INSTAGRAM* n\ *https://www.instagram.com/ovmar_1* n\ *Whatsapp Gp* n\ *https://chat.whatsapp.com/ByIauCfwCFeE1ozctmwbS5 !*' }, { quoted: m });
      }

      await conn.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      )
    }
  } catch {
    throw `_*👾 سكوزا بوت يحتاج الى  إسم التطبيق الذي تريده*_ n\ *INSTAGRAM* n\ *https://www.instagram.com/ovmar_1* n\ *Whatsapp Gp* n\ *https://chat.whatsapp.com/ByIauCfwCFeE1ozctmwbS5 !*`;
  }
};

handler.help = ['apk']
handler.tags = ['downloader']
handler.command = /^apk$/i;
export default handler;
