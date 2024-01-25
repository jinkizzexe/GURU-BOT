import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) throw `**إعطاء نص لتحويله الى Qr Code* \n instagram \n https://www.instagram.com/ovmar_1*`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', 'هاهو رمز Qr \n instagram \n https://www.instagram.com/ovmar_1', m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <text>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i
export default handler
