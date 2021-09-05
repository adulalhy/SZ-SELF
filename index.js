const {
WAConnection: _WAConnection, MessageType, Presence, MessageOptions, Mimetype, WALocationMessage, WA_MESSAGE_STUB_TYPES, WA_DEFAULT_EPHEMERAL,WA_MESSAGE_STUB_TYPE, ReconnectMode,ProxyAgent, GroupSettingChange, waChatKey, mentionedJid, processTime
} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const hx = require('hxz-api')
const translate = require("@vitalets/google-translate-api");
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

//DATABASE
_scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
 const antivo = JSON.parse(fs.readFileSync("./database/antiviewonce.json"));
 
//************************************************************\\ 
//FUNCTION!
selfnya = true
offline = false
multi = true
nopref = false
prefa = '-'

//************************************************************\\  
// STICKER CMD!
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};
const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};
const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};
const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};


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
body  = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
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
const groupMembers = isGroup ? groupMetadata.participants : "";
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const conts = mek.key.fromMe ? conn.user.jid : conn.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? conn.user.name : conts.notify || conts.vname || conts.name || '-'

const isAntiviewonce = isGroup ? antivo.includes(from) : false;

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedPesan = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedMessage = type === 'extendedTextMessage'
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
const isViewOnce = (type === 'viewOnceMessage')

// FUNCTION EVAL 
function jsonformat(string) {
return JSON.stringify(string, null, 2)
}
//ANTI VIEW ONCE MESSAGE!
const _0x189937=_0x4860;(function(_0xaea49,_0x4bad97){const _0x212b8d=_0x4860,_0x1004f0=_0xaea49();while(!![]){try{const _0x247b55=parseInt(_0x212b8d(0x13d))/0x1+-parseInt(_0x212b8d(0x130))/0x2+parseInt(_0x212b8d(0x139))/0x3+parseInt(_0x212b8d(0x13e))/0x4*(parseInt(_0x212b8d(0x12d))/0x5)+-parseInt(_0x212b8d(0x131))/0x6+-parseInt(_0x212b8d(0x134))/0x7+-parseInt(_0x212b8d(0x13f))/0x8*(-parseInt(_0x212b8d(0x135))/0x9);if(_0x247b55===_0x4bad97)break;else _0x1004f0['push'](_0x1004f0['shift']());}catch(_0x3ee6c9){_0x1004f0['push'](_0x1004f0['shift']());}}}(_0x4c32,0x53adc));if(!mek['key'][_0x189937(0x13c)]){if(isGroup&&isViewOnce&&isAntiviewonce){let typenya=mek['message'][_0x189937(0x12f)]['message']['videoMessage']?mek[_0x189937(0x138)][_0x189937(0x12f)]['message'][_0x189937(0x13b)]:mek['message'][_0x189937(0x12f)]['message'][_0x189937(0x137)];typenya[_0x189937(0x141)]=![],typenya[_0x189937(0x136)]=_0x189937(0x133)+sender[_0x189937(0x12e)]('@s.whatsapp.net','')+'\x20\x0a𝑪𝒂𝒑𝒕𝒊𝒐𝒏:\x20\x20'+(typenya[_0x189937(0x136)]===''?_0x189937(0x140):typenya[_0x189937(0x136)]);let peq=mek[_0x189937(0x138)][_0x189937(0x12f)][_0x189937(0x138)]['imageMessage']?{'key':{'fromMe':![],'participant':sender,'id':mek['key']['id']},'message':{'viewOnceMessage':{'message':{'imageMessage':{'viewOnce':!![]}}}}}:{'key':{'fromMe':![],'participant':sender,'id':mek['key']['id']},'message':{'viewOnceMessage':{'message':{'imageMessage':{'viewOnce':!![]}}}}},pe=await conn[_0x189937(0x132)](from,mek[_0x189937(0x138)][_0x189937(0x12f)][_0x189937(0x138)],{'quoted':peq,'contextInfo':{'mentionedJid':[sender]}});await conn[_0x189937(0x13a)](pe);}}function _0x4860(_0x5a5e8e,_0x267a58){const _0x4c3227=_0x4c32();return _0x4860=function(_0x486054,_0x209c01){_0x486054=_0x486054-0x12d;let _0x4e8741=_0x4c3227[_0x486054];return _0x4e8741;},_0x4860(_0x5a5e8e,_0x267a58);}function _0x4c32(){const _0x2b6214=['605309MQKwzJ','12FKcIMc','88EaQWrl','Ga\x20Dikasi\x20Caption','viewOnce','92990eqdLEp','replace','viewOnceMessage','1019072oDWOvT','4039326KJPZyQ','prepareMessageFromContent','𝑨𝒏𝒕𝒊\x20𝒗𝒊𝒆𝒘𝑶𝒏𝒄𝒆\x20𝑴𝒆𝒔𝒔𝒂𝒈𝒆\x0a\x0a𝑷𝒆𝒏𝒈𝒊𝒓𝒊𝒎\x20:\x20@','3380622Cfnxey','961236rBqMiM','caption','imageMessage','message','517512yOjWgt','relayWAMessage','videoMessage','fromMe'];_0x4c32=function(){return _0x2b6214;};return _0x4c32();}
//********************[FUNCTION RUNTIME]********************\\
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

return `[𝗥𝗨𝗡𝗧𝗜𝗠𝗘]\n• ${pad(hours)} Jam \n• ${pad(minutes)} Menit \n• ${pad(seconds)} Detik`
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
(function(_0x5117ec,_0x26e519){const _0x42f956=_0x293f,_0x33b3db=_0x5117ec();while(!![]){try{const _0x257020=parseInt(_0x42f956(0x126))/0x1*(parseInt(_0x42f956(0x127))/0x2)+parseInt(_0x42f956(0x129))/0x3+-parseInt(_0x42f956(0x12a))/0x4*(-parseInt(_0x42f956(0x12f))/0x5)+-parseInt(_0x42f956(0x122))/0x6*(-parseInt(_0x42f956(0x12e))/0x7)+parseInt(_0x42f956(0x130))/0x8*(parseInt(_0x42f956(0x124))/0x9)+parseInt(_0x42f956(0x125))/0xa+-parseInt(_0x42f956(0x128))/0xb*(parseInt(_0x42f956(0x123))/0xc);if(_0x257020===_0x26e519)break;else _0x33b3db['push'](_0x33b3db['shift']());}catch(_0x8a5d7a){_0x33b3db['push'](_0x33b3db['shift']());}}}(_0x46b8,0x96c7e));function _0x46b8(){const _0x43407e=['sendMessageFromContent','1238238UYpnZy','972hlAmEb','5369733XKbiyt','586170WSHVdo','538QsGEvX','586bGCjPm','301367FIUpcw','1944963Dvsfym','16820vIbFHW','8181929','./media/fake.jpeg','𝙨𝙚𝙖𝙯𝙮𝙘\x20𝙨𝙚𝙡𝙛','21LLVJlF','190kuVaVh','16GysJWJ'];_0x46b8=function(){return _0x43407e;};return _0x46b8();}function _0x293f(_0x49d31b,_0x3bd9bd){const _0x46b879=_0x46b8();return _0x293f=function(_0x293f58,_0x4f6bf0){_0x293f58=_0x293f58-0x122;let _0x297d7a=_0x46b879[_0x293f58];return _0x297d7a;},_0x293f(_0x49d31b,_0x3bd9bd);}const xx=_0x22606e=>{const _0x4a159c=_0x293f;conn[_0x4a159c(0x131)](from,{'listMessage':{'title':_0x4a159c(0x12d),'description':_0x22606e,'buttonText':''+time,'listType':0x2,'productListInfo':{'businessOwnerJid':'50766866666@s.whatsapp.net','headerImage':{'jpegThumbnail':fs['readFileSync'](_0x4a159c(0x12c))},'productSections':[{'title':'peler','products':[{'productId':'4867928553220540'},{'productId':_0x4a159c(0x12b)}]}]}}});};

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
conn.sendMessageFromContent = async(jid,message,options) => {
var option = {
contextInfo: {},
...options
}
var prepare = await conn.prepareMessageFromContent(jid,message,option)
await conn.relayWAMessage(prepare)
return prepare
}
//************************[FAKE REPLY]************************\\
const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./media/thumb.jpeg')}}}
const freply = { key: { fromMe: false, participant: '0@s.whatsapp.net' ,}, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync(`media/fake.jpeg`)} } }
const fonce = {
key:{ fromMe: false, participant:'0@s.whatsapp.net',
}, 
"message": {
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AuUQdkmfstqxEnJ3KOzmdlf5MMw3_5RIAK9bYsHLRIKw.enc",
"mimetype": "image/jpeg",
"fileSha256": "jEzgQNqi5+q92rv1Th5K8b3NEvSPQB0J7BmbRPx0HiM=",
"fileLength": "51447",
"height": 1000,
"width": 473,
"mediaKey": "IQgt/PfjOT0XHbhpZ/gDyPNNrm7U5/kSu53ciy3yIG0=",
"fileEncSha256": "W7GvAYfAlL9k+BV9f8DnrTFs9Dc6AElklFc2TgYProg=",
"directPath": "/v/t62.7118-24/32386816_958811167996836_8219158230940333191_n.enc?ccb=11-4&oh=d684c6546ecdb68b186f82c60e99b79d&oe=614C1D0B",
"mediaKeyTimestamp": "1629852836",
"jpegThumbnail": "/9j/4AAQSiiokZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAIgMBIgACEQEDEQH/xAAvAAEAAwEBAAAAAAAAAAAAAAAAAQIFAwQBAQEBAQEAAAAAAAAAAAAAAAABBAID/9oADAMBAAIQAxAAAAD11wp0c7s4Ct5gisx08LzXgqB053JrEAC9OhFZqAaEmqAQD//EACEQAAIABQUBAQAAAAAAAAAAAAABAhARFFISEyFRYiBh/9oACAEBAAE/AKoccPZVFUVXZrjyZuR5M3I8mbkeTNceT+kUqOFGn9+OOhqepFZoojgckcDnYvMs3kWPosfRY+z/xAAZEQACAwEAAAAAAAAAAAAAAAAAEwJRYTD/2gAIAQIBAT8Abg7B2clwoXChcKP/xAAUEQEAAAAAAAAAAAAAAAAAAAAw/9oACAEDAQE/AH//2Q==",
"scansSidecar": "W5GqyCt/SB+HZRNuz5wBlyCNIxCF/Xg+edurupMjWrtQhMwyu7LmTQ==",
"scanLengths": [
3667,
19378,
12342,
16060
],
"midQualityFileSha256": "gUeM8GWF23VMvVy8gvF7vzVsWiDnK2GVI1zO3mpLF9s=",
"viewOnce": true
}}}
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



switch(command || commando) {
case'scccc':
conn.sendMessage(from, 'github.com/adulalhy/SZ-SELF' ,text,{quoted :mek})
break
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

if (!mek.key.fromMe) return 
if (budy.startsWith('$')){
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`SZ-SELF:~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (!mek.key.fromMe) return
if (budy.startsWith('=>')){
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = jsonformat(sat)
if (sat == undefined){
bang = jsonformat(sul)
}
return reply(bang)
}
try {
reply(jsonformat(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
} 


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
quoted: mek
}
conn.sendMessage(from, optionshidetagg, text, {quoted: fonce})
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

case 'take':
if (!isQuotedSticker) return reply('only stiker')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `sz`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `self`
require('./lib/fetcher.js').createExif(satu, dua)
require('./lib/fetcher.js').modStick(media, conn, mek, from)
break
    
case "q":
if (!m.quoted) return reply("reply message!");
let qse = conn.serializeM(await m.getQuotedObj());
if (!qse.quoted)
return reply("the message you replied does not contain a reply!");
await qse.quoted.copyNForward(m.chat, true);
break;
        
case 'sider': 
if (!isGroup) return reply(mess.only.group)
if (!isQuotedMessage) return reply(`Reply pesan!`)
conn.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
.then((res) => {
let anu = []
let txt = `*di baca oleh*\n\n`
for (let i = 0; i < res.reads.length; i++){
anu.push(res.reads[i].jid)
txt += `${x} @${res.reads[i].jid.split("@")[0]}\n`
txt += `${x} Waktu : ${moment(`${res.reads[i].t}` * 1000).tz('Asia/Jakarta').format('HH:mm:ss')}\n\n`
}         
mentions(txt, anu, true)
})
 .catch((err) => reply('reply pesan bot!'))
 break
 
case 'addcmd': 
case 'setcmd':
if(!q) return reply('contoh .addcmd hidetag sz-self')
if (!mek.key.fromMe)return reply("Khusus Owner");
if (isQuotedSticker) {
if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
ffff = `SUCCES ADD KEY:\n${kodenya}\n${q}`
reply(ffff)
} else {
reply('tag stickenya')
}
break

case 'delcmd':
if (!mek.key.fromMe)return reply("Khusus Owner");
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
_scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
fft = `DONE DELETE KEY:\n${kodenya}`
reply(fft)
break
              
              
case 'listcmd':
if (!mek.key.fromMe)return
let teksnyee = `\`\`\` LIST STICKER CMD \`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n *ID :* ${i.id}\n *Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
break
              
              
case 'setnama':
if (!mek.key.fromMe) return
if (args.length < 1) return reply('Teksnya?')
anu = args.join(' ')
conn.updateProfileName(anu)
conn.sendMessage(from, 'Sukses',text , {quoted: freply})
break

case 'getpic':
if (!isGroup) return reply(mess.only.group)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
pictt = await conn.getProfilePicture(mentioned)
pict = await getBuffer(pictt)
conn.sendMessage(from, pict, image,{quoted: freply})
break
            
case "antiviewonce":
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
if (args[0] == "on") {
if (isAntiviewonce) return reply("Sudah aktif!!");
antivo.push(from);
fs.writeFileSync("./database/antiviewonce.json", JSON.stringify(antivo));
reply("Sukses mengaktifkan antiviewonce!");
} else if (args[0] == "off") {
let akuu = antivo.indexOf(from)
if (! isAntiviewonce) return reply('udah off')
antivo.splice(akuu, 1)
fs.writeFileSync("./database/antiviewonce.json", JSON.stringify(antivo));
reply("Sukses menonaktifkan!");
} else if (!q) {
sendButMessage(
from,
`MODE ANTIVIEWONCE`,
`Silahkan pilih salah satu`,
[
{
buttonId: `antiviewonce on`,
buttonText: {
displayText: `on`,
},
type: 1,
},
{
buttonId: `antiviewonce off`,
buttonText: {
displayText: `off`,
},
type: 1,
},
]
);
}
break;  
        
        
case 'inspect':
try {
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
if (!q) return reply('masukan link wa')
cos = args[0]
var net = cos.split('https://chat.whatsapp.com/')[1]
if (!net) return reply('pastikan itu link https://whatsapp.com/')
jids = []
let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await conn.query({ 
json: ["query", "invite",net],
expect200:true })
let par = `*Id* : ${id}

*Nama Grup* : ${subject}
*Dibuat oleh* : +${id.split('-')[0]}
*Pada* : ${formatDate(creation * 1000)}
*Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
for ( let y of participants) {
par += `${x} @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
}
jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
conn.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
} catch {
reply('Link error')
}
break


case 'pinterest':       
if(!q) return reply('gambar apa?')
reply(mess.wait)
let pin = await hx.pinterest(q)
let ac = pin[Math.floor(Math.random() * pin.length)]
let di = await getBuffer(ac)
await conn.sendMessage(from,di,image,{quoted: mek})
break
            
            
case 'playstore':
if(!q) return reply('lu nyari apa?')
let play = await hx.playstore(q)
let store = '「 *PLAY STORE* 」'
for (let i of play){
store += `\n
• *Nama* : ${i.name}
• *Link* : ${i.link}\n
• *Dev* : ${i.developer}
• *Link Dev* : ${i.link_dev}`
}
reply(store)
break
            
case 'rulesgroup':
ccu =`*Description group!*

${groupDesc}`
conn.sendMessage(from, ccu, text, {quoted:mek})
break

case 'readmore':
var kls = args.join(' ');
var has = kls.split("*")[0];
var kas = kls.split("*")[1];
if (args.length < 1) return reply(mess.blank);
conn.sendMessage(from,`${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}`,text, { quoted: mek });
break;

case 'jadian':
if (!isGroup) return reply('onlygroup')
jds = []
const jdii = groupMembers
const koss = groupMembers
const akuu = jdii[Math.floor(Math.random() * jdii.length)]
const diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `*Pencarian Jodoh Ditemukan, Ciee Yang Lagi Jadian!*\n@${akuu.jid.split('@')[0]}  ❤️ @${diaa.jid.split('@')[0]}`
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true)
		

break
case 'ganteng':
case 'beban':
case 'cantik':
case 'jelek':
case 'nggagur':
case 'hebat':
case 'wibu':
case 'pakboy':
case 'pakgirl':
case'sange':
case 'nolep':
case 'jahat':
case 'baik':
membr = []
const nus = groupMembers
const msl = groupMembers
const siapss = nus[Math.floor(Math.random() * nus.length)]
const sipss = pushname[Math.floor(Math.random() * msl.length)]
teks = `Yang paling ${command} disini Adalah : @${siapss.jid.split('@')[0]}`
membr.push(siapss.jid)
mentions(teks, membr, true)
break
            
case 'linkwa':
if(!q) return reply('cari group apa?')
hx.linkwa(q)
.then(result => {
let res = '*「 LINK WA 」*\n\n'
for (let i of result) {
res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break    

case 'translate':
if (args.length == 0) return reply(`Example: ${prefix + command} en apa`)
kode_negara = args[0]
args.shift()
teks = args.join(" ")
translate(`${teks}`,{to:`${kode_negara}`}).then( res => {
ini_txt = `*Terjemahannya* : \n${res.text}`
reply(ini_txt)
})
break    
      
case 'get':
if (!mek.key.fromMe) return
if(!q) return reply('linknya?')
fetch(`${args[0]}`).then(res => res.text())  
.then(bu =>{
imgreply(bu)
})   
break  

case 'igstory': 
if(!q) return reply('Usernamenya?')
hx.igstory(q)
.then(async result => {
for(let i of result.medias){
if(i.url.includes('mp4')){
let link = await getBuffer(i.url)
conn.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
} else {
let link = await getBuffer(i.url)
conn.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
}
}
});
     
break
case 'lirik':
if(!q) return reply('lagu apa?')
let song = await hx.lirik(q)
sendMediaURL(from,song.thumb,song.lirik)
break


case 'sticker': 
case 'stiker': 
case 's': 
case 'sg': 
case 's':
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `SZ`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `SELF`
if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
media = await conn.downloadAndSaveMediaMessage(encmedia)
await createExif(satu ,dua)
out = getRandom('.webp')
ffmpeg(media)
.on('error', (e) => {
console.log(e)
conn.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
fs.unlinkSync(media)
})
.on('end', () => {
_out = getRandom('.webp')
spawn('webpmux', ['-set','exif','./media/data.exif', out, '-o', _out])
.on('exit', () => {
conn.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek})
fs.unlinkSync(out)
fs.unlinkSync(_out)
fs.unlinkSync(media)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(out) 
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await conn.downloadAndSaveMediaMessage(encmedia)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `SZ`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `SELF`
await createExif(satu ,dua)
out = getRandom('.webp')
ffmpeg(media)
.on('error', (e) => {
console.log(e)
conn.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
fs.unlinkSync(media)
})
.on('end', () => {
_out = getRandom('.webp')
spawn('webpmux', ['-set','exif','./media/data.exif', out, '-o', _out])
.on('exit', () => {
conn.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek})
fs.unlinkSync(out)
fs.unlinkSync(_out)
fs.unlinkSync(media)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(out)       
 }
break



}
} catch (e) {
     e = String(e) 
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'pink'))
        }
	 //console.log(e)
	}
}


        
