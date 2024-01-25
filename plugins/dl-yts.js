import axios from 'axios';

let handler = async (m, { conn, text }) => {
  if (!text) throw 'أكتب مالذي تريد البحث عنه في اليوتوب \n instagram \n https://www.instagram.com/ovmar_1?';

  try {
    const query = encodeURIComponent(text);
    const response = await axios.get(`https://weeb-api.vercel.app/ytsearch?query=${query}`);
    const results = response.data;

    if (results.length === 0) {
      throw 'أسف البحث الذي تريده غير موجود \n instagram \n https://www.instagram.com/ovmar_1.';
    }

    const firstResult = results[0];

    const message = `
乂 ${firstResult.title}
乂 *Link* : ${firstResult.url}
乂 *Duration* : ${firstResult.timestamp}
乂 *Published :* ${firstResult.ago}
乂 *Views:* ${firstResult.views}

    `;

    conn.sendFile(m.chat, firstResult.thumbnail, 'yts.jpeg', message, m);
  } catch (error) {
    console.error(error);
    throw 'خطأ \n instagram \n https://www.instagram.com/ovmar_1.';
  }
};

handler.help = ['ytsearch'];
handler.tags = ['downloader'];
handler.command = ['ytsearch', 'yts'];

export default handler;
