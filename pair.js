const { makeid } = require('./gen-id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const { default: makeWASocket, useMultiFileAuthState, delay, Browsers, makeCacheableSignalKeyStore, getAggregateVotesInPollMessage, DisconnectReason, WA_DEFAULT_EPHEMERAL, jidNormalizedUser, proto, getDevice, generateWAMessageFromContent, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, generateForwardMessageContent, downloadContentFromMessage, jidDecode } = require('@whiskeysockets/baileys')

const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
var items = ["Safari"];
function selectRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                },
                printQRInTerminal: false,
                generateHighQualityLinkPreview: true,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                syncFullHistory: false,
                browser: Browsers.macOS(randomItem)
            });
            if (!sock.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await sock.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {

    const {
                    connection,
                    lastDisconnect
                } = s;
                
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {


                        
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "WALLYJAYTECH-MD~" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `╔═══════════════════════════════════════════════╗
║ ωєℓ¢σмє тσ ωαℓℓуנαутє¢н вσт🤖🤖🤖
║✅✅✅✅✅✅✅✅✅✅                                          
║𝕎𝔸𝕃𝕃𝕐𝕁𝔸𝕐𝕋𝔼ℂℍ-𝕄𝔻 ℚℝ 𝕊ℂ𝔸ℕℕ𝔼𝔻 𝕊𝕌ℂℂ𝔼𝕊𝕊𝔽𝕌𝕃𝕃𝕐 
║████████████████████████████████████████████████
║
║         𝙍𝙚𝙖𝙙 𝙩𝙝𝙚 𝙢𝙚𝙨𝙨𝙨𝙖𝙜𝙚 𝙗𝙚𝙡𝙤𝙬  
║█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
╔════════════════════════════════════════════════╗ 
║   𝕐𝕆𝕌'ℝ𝔼 𝕆ℕ𝔼 𝕊𝕋𝔼ℙ 𝕋𝕆 𝔻𝔼ℙ𝕃𝕆𝕐𝕀ℕ𝔾
║   𝕎𝔸𝕃𝕃𝕐𝕁𝔸𝕐𝕋𝔼ℂℍ-𝕄𝔻 𝔹𝕆𝕋
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║❶ || ᴄʀᴇᴀᴛᴏʀ : ⋆⏤͟͞⃝🕊️ᴡᴀʟʟʏ ᴊᴀʏ ᴛᴇᴄʜ🕊️🍃࿐⃝
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║ ❷ || M̳̿͟͞Y̳̿͟͞ W̳̿͟͞H̳̿͟͞A̳̿͟͞T̳̿͟͞S̳̿͟͞A̳̿͟͞P̳̿͟͞P̳̿͟͞ G̳̿͟͞R̳̿͟͞O̳̿͟͞U̳̿͟͞P̳̿͟͞👇 
║ > https://chat.whatsapp.com/HF1NuB6nFBaIwdGWgeGtni 
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║❸ || 𝘾𝙤𝙣𝙩𝙖𝙘𝙩 𝙈𝙚👇 
║> https://wa.me/2348144317152
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║ *2024-2099 WALLY JAY TECH*
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  
║█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  
║                                             
║      ©✌𝓣𝓗𝓐𝓝𝓚𝓢 𝓕𝓞𝓡 𝓒𝓗𝓞𝓞𝓢𝓘𝓝𝓖 𝓤𝓢✌                 
╚═══════════════════════════════════════════════════╝`; 
                        await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "WALLYJAYTECH-MD-SESSION",
thumbnailUrl: "https://i.ibb.co/TLG3Mb4/photo-2024-11-01-16-00-22.jpg",
sourceUrl: "https://wa.me/2348144317152",
mediaType: 1,
renderLargerThumbnail: true
}  
}
},
{quoted:code })
                    } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });
                            let desc = `╔═══════════════════════════════════════════════╗
║ ωєℓ¢σмє тσ ωαℓℓуנαутє¢н вσт🤖🤖🤖
║✅✅✅✅✅✅✅✅✅✅                                          
║𝕎𝔸𝕃𝕃𝕐𝕁𝔸𝕐𝕋𝔼ℂℍ-𝕄𝔻 ℚℝ 𝕊ℂ𝔸ℕℕ𝔼𝔻 𝕊𝕌ℂℂ𝔼𝕊𝕊𝔽𝕌𝕃𝕃𝕐 
║████████████████████████████████████████████████
║
║         𝙍𝙚𝙖𝙙 𝙩𝙝𝙚 𝙢𝙚𝙨𝙨𝙨𝙖𝙜𝙚 𝙗𝙚𝙡𝙤𝙬  
║█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
╔════════════════════════════════════════════════╗ 
║   𝕐𝕆𝕌'ℝ𝔼 𝕆ℕ𝔼 𝕊𝕋𝔼ℙ 𝕋𝕆 𝔻𝔼ℙ𝕃𝕆𝕐𝕀ℕ𝔾
║   𝕎𝔸𝕃𝕃𝕐𝕁𝔸𝕐𝕋𝔼ℂℍ-𝕄𝔻 𝔹𝕆𝕋
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║❶ || ᴄʀᴇᴀᴛᴏʀ : ⋆⏤͟͞⃝🕊️ᴡᴀʟʟʏ ᴊᴀʏ ᴛᴇᴄʜ🕊️🍃࿐⃝
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║ ❷ || M̳̿͟͞Y̳̿͟͞ W̳̿͟͞H̳̿͟͞A̳̿͟͞T̳̿͟͞S̳̿͟͞A̳̿͟͞P̳̿͟͞P̳̿͟͞ G̳̿͟͞R̳̿͟͞O̳̿͟͞U̳̿͟͞P̳̿͟͞👇 
║ > https://chat.whatsapp.com/HF1NuB6nFBaIwdGWgeGtni 
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║❸ || 𝘾𝙤𝙣𝙩𝙖𝙘𝙩 𝙈𝙚👇 
║> https://wa.me/2348144317152
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║ *2024-2099 WALLY JAY TECH*
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  
║█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  
║                                             
║      ©✌𝓣𝓗𝓐𝓝𝓚𝓢 𝓕𝓞𝓡 𝓒𝓗𝓞𝓞𝓢𝓘𝓝𝓖 𝓤𝓢✌                 
╚═══════════════════════════════════════════════════╝`;
                            await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "WALLYJAYTECH-MD-SESSION",
thumbnailUrl: "https://i.ibb.co/TLG3Mb4/photo-2024-11-01-16-00-22.jpgg",
sourceUrl: "https://wa.me/2348144317152",
mediaType: 2,
renderLargerThumbnail: true,
showAdAttribution: true
}  
}
},
{quoted:ddd })
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
   return await GIFTED_MD_PAIR_CODE();
});
setInterval(() => {
    console.log("☘️ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...");
    process.exit();
}, 180000); //30min*/
module.exports = router;
