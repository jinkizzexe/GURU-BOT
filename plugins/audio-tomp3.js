import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
   * let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `قم باإرسال الفيديو وقم بالرد عليه بهاذا الأمر  :\n\n*${usedPrefix + command}* \n instagram \n https://www.instagram.com/ovmar_1`*/
    let media = await q.download?.()
    if (!media) throw 'خطأ في التحويل الى مقطع صوتي'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw 'خطأ في التحويل'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3']
handler.tags = ['fun']
handler.command = /^to(mp3|a(udio)?)$/i

export default handler
