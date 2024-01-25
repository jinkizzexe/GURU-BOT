import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `𝘓3𝘡𝘞𝘈 𝘉𝘖𝘛 *هاذا الأمر خاص باٳنشاء الصور*\n\n*مثــال*\n*◉ ${usedPrefix + command} Beautiful anime girl*\n*◉ ${usedPrefix + command} Elon Musk in pink output*`;

  try {
    m.reply('*الرجاء الانتظار، جارٍ إنشاء الصور...* \n Instagram \n https://www.instagram.com/ovmar_1');

    const endpoint = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);
    
    if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'image.png', null, m);
    } else {
      throw '*Image generation failed*';
    }
  } catch {
    throw '*_L3ZWA BOT_ \n *أُووبس! حدث خطأ ما أثناء إنشاء الصور. الرجاء معاودة المحاولة في وقت لاحق**';
  }
};

handler.help = ['dalle'];
handler.tags = ['AI'];
handler.command = ['dalle', 'gen', 'imagine', 'openai2'];
export default handler;
