<h1 align="center"> WALLYJAYTECH-MD WEB BASED MULTIDEVICE QR </h1>

  <html>
   <body>
  <p align="center">  
  <a aria-label="FORK" href="https://github.com/wallyjaytechh/WALLYJAYTECH-MD/fork" target="_blank">
    <img alt="License: GPL-3" src="https://img.shields.io/github/stars/wallyjaytechh/WALLYJAYTECH-MD-QR?style=social" target="_blank" />
  </a>
  <a aria-label="WALLYJAYTECH_MD is free to use" href="https://youtube.com/@wallyjaytechy" target="_blank">
    <img alt="wallyjaytechh" src="https://img.shields.io/youtube/channel/subscribers/UCXGqfhaa_pZYaLlIwbQb8KQ" target="_blank" />
  </a>
    <p align="center"><img src="https://profile-counter.glitch.me/{smd-web-qr}/count.svg" alt="wallyjaytechh :: Visitor's Count" /></p>

     
  </body>
</html>


## Deployment Methods
---
1.  Fork the repo
    <br>
<a href='https://github.com/wallyjaytechh/WALLYJAYTECH-MD/fork' target="_blank"><img alt='Fork repo' src='https://img.shields.io/badge/Fork Repo-100000?style=for-the-badge&logo=scan&logoColor=white&labelColor=black&color=black'/></a>

2.   Heroku Deploy
    <br>
<a href='https://dashboard.heroku.com/new?template=https://github.com/wallyjaytechh/WALLYJAYTECH-MD-QR/' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/-DEPLOY-black?style=for-the-badge&logo=heroku&logoColor=white'/></a>

3.   Replit Deploy
    <br>
    <a href='https://repl.it/github/wallyjaytechh/WALLYJAYTECH-MD-QR' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/-DEPLOY-black?style=for-the-badge&logo=replit&logoColor=white'/></a>

4.  Render Deploy
    <br>
<a href='https://dashboard.render.com' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/DEPLOY -h?color=black&style=for-the-badge&logo=render' width="96.35" height="28"/></a></p>

```
RENDER PROCESS:
    1: Click "NEW".
    2: Select "Web Service".
    3: Click "Build and deploy from a Git repository".
    4: Now Choose this forked git repo from list.
    5: And JUST CLICK "Connect". 
```




- Dependencies
```sh
    "@hapi/boom": "^10.0.1",
    "@whiskeysockets/baileys": "6.5.0",      
    "pino": "^8.1.0",
    "express": "^4.18.2",
    "qrcode": "latest"
```


- WASocket Options
```js
    let Smd =WallyjaytechWASocket({ 
        printQRInTerminal: false,   // make it false if you're using web
        logger: pino({ level: "silent" }),     // make it silent to prevent baileys buffering
        browser: Browsers.baileys("Desktop"),  // awailable browsers : ubuntu, macOS, baileys.
        auth: state 
    });
```



- Getting Session in BASE64
```js
    let CREDS = fs.readFileSync(__dirname + '/auth_info_baileys/creds.json')
    var Scan_Id = Buffer.from(CREDS).toString('base64')    // converting into Base64 ---- IMPLEMENT ACCOEDING TO YOUR NEED
    // res.json({status:true,Scan_Id })
```




- Environment variable
```js
    const PORT = process.env.PORT ||  5000
    const MESSAGE = process.env.MESSAGE || "Don't Provide your session id to someone!" 
    //   Set Confirmation Message According to your need! 
```













## MADE WITH ❤️
![Wallyjaytechh](https://i.ibb.co/TLG3Mb4/photo-2024-11-01-16-00-22.jpg)
