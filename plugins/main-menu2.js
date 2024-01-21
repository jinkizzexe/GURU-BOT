import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Asia/Kolkata').format('HH')
let wib = moment.tz('Asia/Kolkata').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = './Assets/Gurulogo.jpg'
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let totaluser = Object.values(global.db.data.users).length 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let greeting = ucapan()
let quote = quotes[Math.floor(Math.random() * quotes.length)];

let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
 ${name}, ${greeting}!

 ${quote}

┏━💼 _User Info:_ 💼━┓
┃ 👾  *User Tag:* ${taguser} 
┃ 🎩  *Name:* ${name} 
┃ 🦸  *Master Mind:* ${author} 
┃ 💎  *Diamonds:* ${diamond} 
┃ 🏆  *Rank:* ${role}
┃ 🎮  *XP:* ${exp} 
┗━━━━━━━━━━━┛

┏━━⏰ _Today's Sauce!_ ⏰━┓
┃ 📆  *Today's Date:* ${date} 
┃ ⏲️  *Current Time:* ${wib} 
┗━━━━━━━━━━━━━┛

┏━━🤖 _BOT STATUS:_🤖━━┓
┃ 🤡  *Bot Name:* ${botname} 
┃ 💻  *Platform:* Linux 
┃ 📣  *Prefix:* ${usedPrefix} 
┃ 🕓  *Uptime:* ${uptime}
┃ 💌  *Database:* ${rtotalreg} of ${totaluser} 
┃ 📚  *Total Users:* ${totaluser} ┗━━━━━━━━━━━━━┛



    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, null, rpyt)
    m.react(done)

}o
handler.help = ['main']
handler.tags = ['group']
handler.command = ['menu2', 'help2'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
    
    function ucapan() {
      const time = moment.tz('Asia/Kolkata').format('HH')
      let res = "_*♲︎︎︎ سكوزا بوت ثم التطوير والتعديل بواسطة عمر قم بدعمنا والإنظمام الى مجموعتنا*_ \n *INSTGRAM* \n *_https://www.instagram.com/ovmar_1_* \n *Whatsapp Gp* \n _*https://chat.whatsapp.com/ByIauCfwCFeE1ozctmwbS5*_"
      if (time >= 4) {
        res = "_*♲︎︎︎ سكوزا بوت ثم التطوير والتعديل بواسطة عمر قم بدعمنا والإنظمام الى مجموعتنا*_ \n *INSTGRAM* \n *_https://www.instagram.com/ovmar_1_*  \n *Whatsapp Gp*  \n _*https://chat.whatsapp.com/ByIauCfwCFeE1ozctmwbS5*_"
      }
      if (time >= 10) {
        res = "_*♲︎︎︎ سكوزا بوت ثم التطوير والتعديل بواسطة عمر قم بدعمنا والإنظمام الى مجموعتنا*_ \n *INSTGRAM* \n *_https://www.instagram.com/ovmar_1_*  \n *Whatsapp Gp*  \n _*https://chat.whatsapp.com/ByIauCfwCFeE1ozctmwbS5*_"
      }
      if (time >= 15) {
        res = "_*♲︎︎︎ سكوزا بوت ثم التطوير والتعديل بواسطة عمر قم بدعمنا والإنظمام الى مجموعتنا*_ \n *INSTGRAM* \n *_https://www.instagram.com/ovmar_1_*  \n *Whatsapp Gp*  \n _*https://chat.whatsapp.com/ByIauCfwCFeE1ozctmwbS5*_"
      }
      if (time >= 18) {
        res = "_*♲︎︎︎ سكوزا بوت ثم التطوير والتعديل بواسطة عمر قم بدعمنا والإنظمام الى مجموعتنا*_ \n *INSTGRAM* \n *_https://www.instagram.com/ovmar_1_*  \n *Whatsapp Gp*  \n _*https://chat.whatsapp.com/ByIauCfwCFeE1ozctmwbS5*_"
      }
      return res
    }
    const quotes = [
       "_*♲︎︎︎ سكوزا بوت ثم التطوير والتعديل بواسطة عمر قم بدعمنا والإنظمام الى مجموعتنا*_ \n *INSTGRAM* \n *_https://www.instagram.com/ovmar_1_*  \n *Whatsapp Gp*  \n _*https://chat.whatsapp.com/ByIauCfwCFeE1ozctmwbS5*_"
];
