const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const express = require('express');
const app = express();

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { args: ['--no-sandbox','--disable-setuid-sandbox'] }
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
    console.log(qr);
});

client.on('ready', () => {
    console.log('S-ACADEMY BOT خدام!');
});

client.on('message', async msg => {
    let t = msg.body.toLowerCase();
    if(t.includes('بغيت') || t.includes('كورس') || t.includes('bghit') || t.includes('49')){
        await msg.reply(`مرحبا فـ S-ACADEMY 🎓\n\n✅ كورس رقمي كامل\n💰 49 درهم فقط\n📥 كتاخدو فوري\n\n1- خلص Wafacash: 06xxxx\n2- صيفط الروسي هنا\n3- الروبو يصيفط لك الرابط أوتوماتيك 🤖`);
    }
    else if(msg.hasMedia){
        await msg.reply(`توصلت بالروسي ✅\n\nهاهو رابط الكورس:\nhttps://drive.google.com/xxx\n\nشكرا 🙏`);
    }
});

client.initialize();
app.get('/', (req,res)=> res.send('BOT ON'));
app.listen(process.env.PORT || 3000);
