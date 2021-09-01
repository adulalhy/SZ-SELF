const {
    WAConnection:_WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const { banner, start, success } = require('./lib/myfunctions')
const { color } = require('./lib/color')

require('./index.js')
nocache('./index.js', module => console.log(`${module} now updated!`))

const starts = async (conn = new WAConnection()) => {
    conn.logger.level = 'warn'
    console.log(banner.string)
    conn.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' SCAN QR TO CONNECT'))
    })

    fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
    conn.on('connecting', () => {
        start('2', 'menghubungkan...')
    })
    conn.on('open', () => {
        success('2', 'tersambung kak')
    })
    await conn.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(conn.base64EncodedAuthInfo(), null, '\t'))

    conn.on('chat-update', async (message) => {
        require('./index.js')(conn, message)
    })
}

/************************************
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now ready to run!')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/*************************************
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()