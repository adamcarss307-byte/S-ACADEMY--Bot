const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { args: ['--no-sandbox','--disable-setuid-sandbox'] }
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
    console.log('سكاني QR بواتساب');
});

client.on('ready', () => {
    console.log('✅ البوط خدام!');
});

client.on('message', async msg => {
    let t = msg.body.toLowerCase();
    if(t.includes('سلام') || t.includes('بغيت') || t.includes('كورس')){
        await msg.reply('مرحبا فـ S-ACADEMY 🚀\nكورس ب 49 درهم\nكتب "خلص" باش نعطيك الرابط');
    }
    if(t.includes('خلص')){
        await msg.reply('رابط الخلاص: s-academy.com/pay');
    }
});

client.initialize();
