import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['212601291320', 'OMAR', true],
 // ['6281255369012', 'Ash', true], 
  [''] 
] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['212601291320','212601291320'] 
global.prems = ['212601291320', '212601291320', '212601291320']
global.allowed = ['212601291320', '212601291320', '212601291320']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'L3ZWA'
global.premium = 'true'
global.packname = 'OMAR' 
global.author = 'L3ZWA' 
global.menuvid = 'https://i.imgur.com/wOBpQCo.mp4'
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/ovmar_1\n' 
global.dygp = ''
global.fgsc = 'https://github.comjinkixzzexe/GURU-BOT' 
global.fgyt = 'https://youtube.com/@Asliguru'
global.fgpyp = 'https://youtube.com/@Asliguru'
global.fglog = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg' 
global.thumb = fs.readFileSync('./Assets/Gurulogo.jpg')


//global.wait = '*⌛ _ستاتي بوت غادي يصيفط ليك الملف ديالك ماتنساش دير فولو في الانستجرام_*\n‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎‎‎ ‎ ‎‎ ‎ ‎ ‎ ‎     *https://www.instagram.com/ovmar_1*'
global.wait = '_*سوف يتم تلبية طلبك*_ \n 𝘐𝘯𝘴𝘵𝘢𝘨𝘳𝘢𝘮 \n \n _https://www.instagram.com/ovmar_1_'
//global.wait = '_*♲︎︎︎ سكوزا سوف يرسل الملف الخاص الأن لا تنسى دعمنا على انستجرام*_ \n *INSTGRAM* \n *_https://www.instagram.com/ovmar_1_* \n *Whatsapp Gp* \n _*https://chat.whatsapp.com/ByIauCfwCFeE1ozctmwbS5*_'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' 

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
