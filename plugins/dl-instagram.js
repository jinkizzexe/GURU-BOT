import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `قم باإرسال رابط انستجرام الذي تريد تحميله \n instagram \n https://www.instagram.com/ovmar_1`;
  m.reply(wait);

  let res;
  try {
    res = await fetch(`${gurubot}/igdlv1?url=${text}`);
  } catch (error) {
    throw `An error occurred: ${error.message}`;
  }

  let api_response = await res.json();

  if (!api_response || !api_response.data) {
    throw `الرابط غير صحيح \n instagram \n https://www.instagram.com/ovmar_1.`;
  }

  const mediaArray = api_response.data;

  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type;
    const mediaURL = mediaData.url_download;

    let cap = `هاهو الفيديو الخاص بك ${mediaType.toUpperCase()} >\n instagram \n https://www.instagram.com/ovmar_1<`;

    if (mediaType === 'video') {
      
      conn.sendFile(m.chat, mediaURL, 'instagram.mp4', cap, m);
    } else if (mediaType === 'image') {
      
      conn.sendFile(m.chat, mediaURL, 'instagram.jpg', cap, m);
    }
  }
};

handler.help = ['instagram'];
handler.tags = ['downloader'];
handler.command = /^(instagram|igdl|ig|insta)$/i;

export default handler;

