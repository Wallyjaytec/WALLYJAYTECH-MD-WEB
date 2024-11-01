
const express = require("express");
const app = express();





const pino = require("pino");
let { toBuffer } = require("qrcode");
const path = require('path');
const fs = require("fs-extra");
const { Boom } = require("@hapi/boom");
const PORT = process.env.PORT ||  5000
const MESSAGE = process.env.MESSAGE ||  `
╔═══════════════════════
ωєℓ¢σмє тσ ωαℓℓуנαутє¢н вσт🤖🤖🤖 ════════════════════╗
✅✅✅✅✅✅✅✅✅✅                                          
𝕎𝔸𝕃𝕃𝕐𝕁𝔸𝕐𝕋𝔼ℂℍ-𝕄𝔻 ℚℝ 𝕊ℂ𝔸ℕℕ𝔼𝔻 𝕊𝕌ℂℂ𝔼𝕊𝕊𝔽𝕌𝕃𝕃𝕐 
 ██████████████████████████████████████ 
 ║
 ║ 𝙍𝙚𝙖𝙙 𝙩𝙝𝙚 𝙢𝙚𝙨𝙨𝙨𝙖𝙜𝙚 𝙗𝙚𝙡𝙤𝙬  
 █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ╔════════════════════════════════╗ 
 ║
 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ❶ || 𝘾𝙧𝙚𝙖𝙩𝙤𝙧= 👑 𝙀𝙎 𝙏𝙀𝘼𝙈𝙎 𝙏𝙀𝘾𝙃 👑
 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ❷ || 𝙈𝙮 𝙬𝙝𝙖𝙩𝙨𝙖𝙥𝙥 𝘾𝙝𝙖𝙣𝙣𝙚𝙡👇 
 > https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y 
 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ❸ || 𝘾𝙤𝙣𝙩𝙖𝙘𝙩 𝙈𝙚👇 
 > https://wa.me/2349037524605
 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 *2024-2099 ᴘᴀꜱᴄʜᴀʟ ᴊᴇ*
 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ║                                             
 ║ © 𝙏𝙝𝙖𝙣𝙠𝙨 𝙛𝙤𝙧 𝙘𝙝𝙤𝙤𝙨𝙨𝙞𝙣𝙜 𝙀𝙎 𝙏𝙀𝘼𝙈𝙎-𝙑2                 
 ╚═══════════════════════════════════════════╝
`











if (fs.existsSync('./auth_info_baileys')) {
    fs.emptyDirSync(__dirname + '/auth_info_baileys');
  };
  
  app.use("/", async(req, res) => {

  const { default: WallyjaytechWASocket, useMultiFileAuthState, Browsers, delay,DisconnectReason, makeInMemoryStore, } = require("@whiskeysockets/baileys");
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
  async function WALLYJAYTECH() {
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys')
    try {
      let Smd =WallyjaytechWASocket({ 
        printQRInTerminal: false,
        logger: pino({ level: "silent" }), 
        browser: Browsers.baileys("Desktop"),
        auth: state 
        });


      Smd.ev.on("connection.update", async (s) => {
        const { connection, lastDisconnect, qr } = s;
        if (qr) { res.end(await toBuffer(qr)); }


        if (connection == "open"){
          await delay(3000);
          let user = Smd.user.id;


//===========================================================================================
//===============================  SESSION ID    ===========================================
//===========================================================================================

          let CREDS = fs.readFileSync(__dirname + '/auth_info_baileys/creds.json')
          var Scan_Id = Buffer.from(CREDS).toString('base64')
         // res.json({status:true,Scan_Id })
          console.log(`
====================  SESSION ID  ==========================                   
SESSION-ID ==> ${Scan_Id}
-------------------   SESSION CLOSED   -----------------------
`)


          let msgsss = await Smd.sendMessage(user, { text:  Scan_Id });
          await Smd.sendMessage(user, { text: MESSAGE } , { quoted : msgsss });
          await delay(1000);
          try{ await fs.emptyDirSync(__dirname+'/auth_info_baileys'); }catch(e){}


        }

        Smd.ev.on('creds.update', saveCreds)

        if (connection === "close") {            
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            // console.log("Reason : ",DisconnectReason[reason])
            if (reason === DisconnectReason.connectionClosed) {
              console.log("Connection closed!")
             // WALLYJAYTECH().catch(err => console.log(err));
            } else if (reason === DisconnectReason.connectionLost) {
                console.log("Connection Lost from Server!")
            //  WALLYJAYTECH().catch(err => console.log(err));
            } else if (reason === DisconnectReason.restartRequired) {
                console.log("Restart Required, Restarting...")
              WALLYJAYTECH().catch(err => console.log(err));
            } else if (reason === DisconnectReason.timedOut) {
                console.log("Connection TimedOut!")
             // WALLYJAYTECH().catch(err => console.log(err));
            }  else {
                console.log('Connection closed with bot. Please run again.');
                console.log(reason)
              //process.exit(0)
            }
          }



      });
    } catch (err) {
        console.log(err);
       await fs.emptyDirSync(__dirname+'/auth_info_baileys'); 
    }
  }








  WALLYJAYTECH().catch(async(err) => {
    console.log(err)
    await fs.emptyDirSync(__dirname+'/auth_info_baileys'); 


    //// MADE BY WALLYJAYTECH 

});


  })


app.listen(PORT, () => console.log(`App listened on port http://localhost:${PORT}`));
