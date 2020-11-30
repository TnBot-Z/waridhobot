exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Command / Perintah :
   
𒋨⫸⫸ *1.PEMBUAT STICKER*
_${BotName} akan mengirimkan stickermu dengan caption #sticker!_
Perintah: #sticker
Contoh: kirim gambar dengan caption #sticker

𒋨⫸⫸ *2.NULIS OTOMATIS*
_${BotName} akan mengirimkan tulisan di buku sesuai yang kamu kirim!_
Perintah: #nulis [kata]
Contoh: #nulis tnbotz ganteng

𒋨⫸⫸ *3.INFO GEMPA*
_${BotName} akan mengirimkan tulisan di buku sesuai yang kamu kirim!_
Perintah: #gempa

𒋨⫸⫸ *4.FITUR PANTUN*
_${BotName} akan mengirimkan pantun secara random!_
Perintah: #pantun
Contoh: #pantun

𒋨⫸⫸ *5.DOWNLOADER YOUTUBE*
_${BotName} akan mengirimkan video downloader dari yt sesuai perintah kamu!_
Perintah: #yt [link]
Contoh: #yt https://youtu.be/blablabla

𒋨⫸⫸ *6.FITUR QUOTES*
_${BotName} akan mengirimkan katabijak secara random!_
Perintah: #quotes
Contoh: #quotes

𒋨⫸⫸ *7.PENGUBAH SUARA GOOGLE*
_${BotName} akan mengirimkan suara vn dari google sesuai perintah yang kamu kirim!_
Perintah: #ttsid [kata]
Contoh: #ttsid tnbotz ganteng

𒋨⫸⫸ *8.FITUR QURAN*
_${BotName} akan mengirimkan ayat-ayat quran secara random!_
Perintah: #quran
Contoh: #quran

𒋨⫸⫸ *9.INFORMASI BOT*
_${BotName} akan mengirimkan informasi tentang bot!_
Perintah: #info
Contoh: #info
𒋨⫸⫸ *10.FITUR SAY*
_${BotName} akan mengirimkan kata kata sesuai yang kamu kirim!_
Perintah: #say [kata]
Contoh: #say halo tnbotz ganteng

𒋨⫸⫸ *11.YOUTUBE MP3 DOWNLOADER*
_${BotName} akan mengirimkan lagu sesuai perintah yang kamu kirim!_
Perintah: #ytmp3 [link]
Contoh: #ytmp3 https://youtu.be/xxxx

𒋨⫸⫸ *12.INSTAGRAM VIDEO/FOTO DOWNLOADER*
_${BotName} akan mengirimkan video/foto ig sesuai perintah yang kamu kirim!_
Perintah: #ig [link]
Contoh: #ig https://instagram.com/xxxx

𒋨⫸⫸ *13.FACEBOOK VIDEO/FOTO DOWNLOADER*
_${BotName} akan mengirimkan video/foto fb sesuai perintah yang kamu kirim!_
Perintah: #fb [link]
Contoh: #fb https://facebook.com/xxxx

𒋨⫸⫸ *14.TWITTER VIDEO/FOTO DOWNLOADER*
_${BotName} akan mengirimkan video/foto twitter sesuai perintah yang kamu kirim!_
Perintah: #twt [link]
Contoh: #twt https://twitter.com/xxxx

𒋨⫸⫸ *15.WIKIPEDIA*
_${BotName} akan mengirimkan hasil dari wikipedia sesuai perintah yang kamu kirim!_
Perintah: #wiki [query]
Contoh: #wiki buku

♻️ JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
♻️ MAU DONASI? SILAHKAN KETIK #donate

📺 *Iklan* :

✅ Follow akun instagram admin ${instagramlu}

⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

♻️ Mau pasang iklan di *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️

✳️ Official Grub [1] : ${grupch1}

✳️ Official Grub [2] : ${grupch2}

  
🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}
