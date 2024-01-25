
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `أرسال إسم الإنستجرام\n\n📌Example: ${usedPrefix + command} OVMAR_1` 
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *L3ZWA* 
▢ *🔖Number:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥followers:* ${res.followersH}
▢ *🫂following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}

▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`

     await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)
     
}
handler.help = ['igstalk']
handler.tags = ['downloader']
handler.command = ['igstalk'] 

export default handler
