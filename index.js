const {
WAConnection: _WAConnection, MessageType, Presence, MessageOptions, Mimetype, WALocationMessage, WA_MESSAGE_STUB_TYPES, WA_DEFAULT_EPHEMERAL,WA_MESSAGE_STUB_TYPE, ReconnectMode,ProxyAgent, GroupSettingChange, waChatKey, mentionedJid, processTime
} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const jimp = require('jimp')
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/myfunctions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
//************************************************************\\  
//SIMPLE
const { help } = require('./commado/help')
const mess = JSON.parse(fs.readFileSync('./commado/mess.json'));
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const { fakeimg, f,fake,x, xteamApi } = setting

//************************************************************\\ 
//FUNCTION!
selfnya = true
offline = false
multi = true
nopref = false
prefa = '-'

//************************************************************\\  
module.exports = conn = async (conn,mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
global.blocked
global.prefix
m = simple.smsg(conn, mek)
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')      
const type = Object.keys(mek.message)[0]        
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
//PREFIX MULTI AND NO PREFIX!
        if (multi){
        var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
        } else {
        if (nopref){
        prefix = ''
        } else {
        prefix = prefa
}}
body  = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ""
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const commando = body.slice(1).trim().split(/ +/).shift().toLowerCase()	
const args = body.trim().split(/ +/).slice(1)
const arg = budy.slice(command.length + 2, budy.length)
const q = args.join(' ')
const isCmd = body.startsWith(prefix)
const botNumber = conn.user.jid
const botNumberss = conn.user.jid + '@c.us'
const isGroup = from.endsWith('@g.us')
let sender = isGroup ? mek.participant : mek.key.remoteJid
const totalchat = await conn.chats.all()
const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const conts = mek.key.fromMe ? conn.user.jid : conn.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? conn.user.name : conts.notify || conts.vname || conts.name || '-'
//************************************************************\\
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedPesan = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedMessage = type === 'extendedTextMessage'
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')


// FUNCTION EVAL 
function jsonformat(string) {
return JSON.stringify(string, null, 2)
}
//********************[FUNCTION RUNTIME]********************\\
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

return `[𝗥𝗨𝗡 𝗧𝗜𝗠𝗘]\n• ${pad(hours)} Jam \n• ${pad(minutes)} Menit \n• ${pad(seconds)} Detik`
}
//**********************[FUNCTION JAM]**********************\\
    function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " hari, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " jam, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " menit, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " detik") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
//************************************************************\\  
const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
const reply = (teks) => {
        conn.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
        conn.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
        (id == null || id == undefined || id == false) ? conn.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : conn.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
}
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
conn.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}   
//************************[FAKE REPLY]************************\\
const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./media/thumb.jpeg')}}}
const freply = { key: { fromMe: false, participant: '0@s.whatsapp.net' ,}, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync(`media/fake.jpeg`)} } }
const fonce = {
key:{
fromMe: false,
participant:'0@s.whatsapp.net',
}, 
"imageMessage": { 
"mimetype": "image/jpeg",
"jpegThumbnail": fakeimg,
"scansSidecar": "W5GqyCt/SB+HZRNuz5wBlyCNIxCF/Xg+edurupMjWrtQhMwyu7LmTQ==",
"scanLengths": [
3667,
19378,
12342,
16060
],
"midQualityFileSha256": "gUeM8GWF23VMvVy8gvF7vzVsWiDnK2GVI1zO3mpLF9s=",
"viewOnce": true
}}
const imgreply = (teks) => {
conn.sendMessage(from, teks, text, {quoted:freply})}

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
// {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
// {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
conn.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}

		
//*********************[TAMPILAN LOG]**********************\\
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
if (!mek.key.fromMe && selfnya === true) return
//***************************[EVAL]***************************\\
if (!mek.key.fromMe) return 
if (budy.startsWith('>')){
try {
return conn.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}}

//************************[COMMADO]************************\\
switch(command || commando) {
case'help': case'menu':
conn.sendMessage(from, help(f), text, {quoted: freply})
break

case 'runtime':
runtime = process.uptime()
teks = `${kyun(runtime)}`
imgreply(`${teks}`)
break

case 'group': case 'grup':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.GropAdmin);
if (args[0] === 'open') {
conn.groupSettingChange(from, GroupSettingChange.messageSend, false)
imgreply(`*MEMBUKA GROUP*`)
} else if (args[0] === 'close') {
conn.groupSettingChange(from, GroupSettingChange.messageSend, true)
imgreply(`*MENUTUP GROUP*`)
} else if (!q) {
sendButMessage(
from,
`MODE SETING GROUP!!`,
`Silahkan pilih salah satu`,
 [
 {
buttonId: `group open`,
buttonText: {
displayText: `open`,
},
type: 1,
},
{
buttonId: `group close`,
buttonText: {
displayText: `close`,
},
type: 1,
},
]
);
}
break;

case 'kick':
if (!isGroup) return reply(mess.OnlyGrup);
if (!isBotGroupAdmins) return imgreply(mess.BotAdmin)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.GropAdmin);
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
imgreply('reply pesan orang yg ingin di kick!')
} else if (isQuotedMsg) { 
conn.groupRemove(from, [m.quoted.sender])
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`reply pesan orang yang ingin di kick!`)}
break

case'add': case'balik':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.GropAdmin);
if (isQuotedMsg && args.length < 2) {
conn.groupAdd(from, [m.quoted.sender])
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else if (args.length < 3 && !isNaN(args[1])){
conn.groupAdd(from, [args[1] + '@s.whatsapp.net'])
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply()}
break

case 'listadmin':
if (!isGroup) return reply(mess.OnlyGrup)
teks = `LIST ADMIN!\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break

case 'tagall':
if (!isGroup) return reply(mess.only.group)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `+ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)}
mentions(teks, members_id, true)
break

case 'hidetag':
if (!mek.key.fromMe && !isGroupAdmins) return reply("Only Admin")
if (!isGroup) return reply(mess.OnlyGrup)
var value = args.join(' ')
var group = await conn.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var optionshidetagg = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: fkontak
}
conn.sendMessage(from, optionshidetagg, text, {quoted: fkontak})
break

case 'sticker': case 'stiker': case 's': case 'sg': case 's':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
conn.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
conn.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
break               
            
           
case 'setprefix':
if (!mek.key.fromMe)return reply("Khusus Owner");
fg = args.join(' ')
if (args[0] == "multi") {
multi = true
imgreply(`Berhasil mengubah prefix ke ${fg}`)
} else if (args[0] == "nopref") {
multi = false
nopref = true
imgreply(`Berhasil mengubah prefix ke ${fg}`)
} else if (!fg) {
sendButMessage(
from,
`MODE SET PREFIX!`,
`Silahkan pilih salah satu`,
 [
 {
buttonId: `setprefix multi`,
buttonText: {
displayText: `multi`,
},
type: 1,
},
{
buttonId: `setprefix nopref`,
buttonText: {
displayText: `no prefix`,
},
type: 1,
},
]
);
}
break;

case 'public':
if (!mek.key.fromMe) return 
if (selfnya === false) return	
selfnya = false
imgreply("*PUBLIC MODE!*")
break

case 'self':
if (!mek.key.fromMe) return 
if (selfnya === true) return
uptime = process.uptime()
selfnya = true
imgreply("*SELF MODE!*")
break

case 'clearall':
if (!mek.key.fromMe) return reply('Kamu siapa?')
anu = await conn.chats.all()
conn.setMaxListeners(25)
for (let _ of anu) {
conn.deleteChat(_.jid)
}
reply('Sukses delete all chat :)')
break

case 'bc':
if (!mek.key.fromMe) return reply('Kamu siapa?')
if (args.length < 1) return reply('.......')
anu = await conn.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
conn.sendMessage(_.jid, buff, image, {caption: `[ Ini Broadcast ]\n\n${body.slice(4)}`})
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ Ini Broadcast ]\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break

case 'toimg':
if (!isQuotedSticker) return reply('reply stickernya ngab')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
buffer = fs.readFileSync(ran)
conn.sendMessage(from, buffer, image, {quoted: mek, caption: 'NIH KAK'})
fs.unlinkSync(ran)
})
break

case 'play':
if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
var srch = args.join('')
 aramas = await yts(srch);
aramat = aramas.all 
var mulaikah = aramat[0].url							
 try {
yta(mulaikah)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
 if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
 const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
 sendMediaURL(from, thumb, captions)
 await sendMediaURL(from, dl_link).catch(() => reply('error'))
 })                
 })
 } catch (err) {
 reply(mess.error.api)
}
break  

case 'video':
if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
var srch = args.join('')
aramas = await yts(srch);
aramat = aramas.all 
var mulaikah = aramat[0].url                            
try {
ytv(mulaikah)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
 if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply('error'))
})                
})
} catch (err) {
reply(mess.error.api)
}
break

case 'term':
if (!q) return
exec(q, (err, stdout) => {
if (err) return imgreply(`SELF-BOT:~ ${err}`)
if (stdout) {
imgreply(stdout)
}
})
break   

case 'setfakeimg':
if (!mek.key.fromMe) return reply('only owner')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
delb = await conn.downloadMediaMessage(boij)
fs.writeFileSync(`./media/fake.jpeg`, delb)
imgreply('Sukses')
} else {
reply(`Kirim gambar dengan caption ${prefix}sethumb`)
}
break
	
case 'setthumb':
if (!mek.key.fromMe) return reply('bukan owner')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
delb = await conn.downloadMediaMessage(boij)
fs.writeFileSync(`./media/thumb.jpeg`, delb)
fakestatus('Sukses')
} else {
reply(`Kirim gambar dengan caption ${prefix}sethumb`)
}
break	

case'ping': case'speed':
const ruun = process.uptime()
const tiiiimestamp = speed();
const latensiiii = speed() - tiiiimestamp
var groups = conn.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
anu = `${x} Speed : ${latensiiii.toFixed(4)} Second
${x} private chat : ${privat.length}
${x} group chat : ${groups.length}`
imgreply(anu)
break

case 'upswteks':
if (!mek.key.fromMe) return reply('only owner')
if (!q) return imgreply('Isi teksnya!')
conn.sendMessage('status@broadcast', `${q}`, extendedText)
imgreply(`done up story teks ${q}`)
break

case 'upswimage':
if (!mek.key.fromMe) return reply('Mau Ngapain')
if (isQuotedImage) {
const babi = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
anjg = await conn.downloadMediaMessage(babi)
conn.sendMessage('status@broadcast', anjg, image, { caption: `${q}` })
bur = `done up story Image dengan Caption: ${q}`
conn.sendMessage(from, bur, text, { quoted: freply })
} else {
reply('Reply gambarnya!')
}
break

case 'upswvideo':
if (!mek.key.fromMe) return reply('only owner')
if (isQuotedVideo) {
const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
cihcih = await conn.downloadMediaMessage(swsw)
conn.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
bur = `Sukses Upload Story Video dengan Caption: ${q}`
conn.sendMessage(from, bur, text, { quoted: freply })
} else {
reply('reply videonya!')
}
break
case 'detikvn':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
hah = fs.readFileSync(media)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
fs.unlinkSync(media)
break

case 'detikvideo':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
hah = fs.readFileSync(media)
conn.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
fs.unlinkSync(media)
break

case 'sharelock':
if (args.length < 1) return reply(`Contoh : sharelock sz|self`)
lan = `${args.join(' ')}`
send = lan.split("|")[0];
lok = lan.split("|")[1];
conn.sendMessage(from, {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:send,address:lok}, MessageType.location)
break

case 'tts':
if (args.length < 1) return reply(`Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kudasai`)
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return conn.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
var bby = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
bby.length > 300
? reply('Teks nya terlalu panjang kak')
: gtts.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(dla.stikga())
conn.sendMessage(from, buff, audio, { duration: 999999999, ptt: true, quoted: mek })
fs.unlinkSync(rano)
})
})
break

case 'setpp':
conn.updatePresence(from, Presence.composing)
if (!isQuotedImage) return reply('Reply imagenya!')
if (!isOwner) return reply('only owner')
enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediau = await conn.downloadAndSaveMediaMessage(enmediau)
await conn.updateProfilePicture(botNumber, mediau)
conn.sendMessage(from,'success',text)
break

case 'leave':
if (!isGroup) return reply('only grub kak')
if (!mek.key.fromMe) return  reply('owner only')
conn.updatePresence(from, Presence.composing)
conn.groupLeave(from)
break

case 'tomp4':
if (!isQuotedSticker) return reply('Reply stiker nya')
reply(mess.wait)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bapakmu = await conn.downloadAndSaveMediaMessage(ger)
webp2mp4File(owgi).then(res=>{
sendMediaURL(from,res.result)
})
}else {
reply('Reply Stickernya!')
}
fs.unlinkSync(bapakmu)
break

case 'colong':
if (!isQuotedSticker) return reply('only stiker')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `sz`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `self`
require('./lib/fetcher.js').createExif(satu, dua)
require('./lib/fetcher.js').modStick(media, conn, mek, from)
break

case 'sc':
case 'source':
case 'script':
case 'sourcecode':
reply(`Sorce code : https://github.com/adulalhy/SZBase`)
break 



				



}
} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s' + e)
        }
	// console.log(e)
	}
}



        
