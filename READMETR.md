# Discord Kitlesel Mansiyon
Bu Node.js betiği, kendi botlarınızı kullanarak Discord'da toplu bahsetmeler göndermenizi sağlar. Her mesajda kullanılacak kullanıcı kimliği sayısını özelleştirebilir, hedeflenecek lonca kimliğini ve kanal kimliklerini belirleyebilir, her mesaj arasındaki aralığı ayarlayabilir ve farklı hesaplar aracılığıyla mesaj göndermek için birden fazla belirteç sağlayabilirsiniz.

## bir yıldız ekle çünkü neden olmasın
because why not xd 
Öncelikle bu ve bunun benzeri kodları 200 dollar gibi paralara satan bazende insanları dolandıran oruspu çocuğu [vast](https://github.com/imvast) gibi kişilere karşılık için 6 ay önce yazmıştım ama bilgisayarım bozulduğu için yayınlayamamıştım ama şimdi öylecesine yayınlıyorum xd
Vast sahte spamlarla eski github hesabımı kapatmıştı.
Kanıtlarıyla githuba bunları göndersemde olumlu bir sonuç alamamıştım artık burdan devam ediyorum.
Bu projeye daha fazla devam etmeyeceğim çünkü umrumda değil.
Şuan Brawl Stars da tekrardan keyi birşekilde kendim bulup çok iyi şeyler yapmayı düşünüyorum zer0_bot da yaptığım hatayı yapmayacağım. herneyse devam edelim

## Özellikler
Bu kod, bir Discord sunucusundaki herkese ping atmanıza ve reklam vermenize olanak tanır. Verimli kullanım için birden fazla jetonu destekler.

## Gereksinimler
- Node.js
- Discord bot token(lar)ı
- Bahsedilecek üye kimliklerinin listesi scrape.js ile listeyi alabilirsiniz unutmayın asla %100 alamazsınız çok uzun süreler lazım ilgili dokümantasyon:
-https://github.com/aiko-chan-ai/discord.js-selfbot-v13/blob/2.15.1/Document/FetchGuildMember.md
-https://arandomnewaccount.gitlab.io/discord-unofficial-docs/lazy_guilds.html

## Konfigürasyon
- `miktar`: Her mesajda kullanılacak kullanıcı kimliği sayısı.
- `guildid`: Eylemleri gerçekleştirmek istediğiniz Discord sunucusunun kimliği.
- `channelids`: Mesaj göndermek istediğiniz kanalların kimlikleri. Kanal kimliklerini ekleyerek veya kaldırarak bunu özelleştirebilirsiniz.
- `interval`: Her mesaj arasındaki zaman aşımı.
- `tokens`: Discord bot hesapları için belirteçler. Verimli kullanım için birden fazla belirteç belirtebilirsiniz.

## Nasıl Kullanılır
1. Depoyu klonlayın: `git clone https://github.com/MehmetEfeFriday/Discord-Mass-Mention`
2. Bağımlılıkları yükleyin: `npm install`
3. bot.js` dosyasındaki yapılandırmayı gereksinimlerinize göre özelleştirin.
4. Mesajlar ve belirteçler için metin dosyaları oluşturun (sırasıyla `messages.txt` ve `tokens.txt`) ve bunları gerekli verilerle doldurun.
5. scrape.js için `npm i discord.js-selfbot-v13@2.15.1` komutunu çalıştırın (sadece bu sürümde çalışır)
6. Member idleri almak için scrape.js dosyasını çalıştırın
7. Kodu çalıştırın: `node bot.js`

## Teşekkürler
Bu projeyi Discum ve discord.js-selfbot-v13 olmasaydı yapamazdım gerçekten çok teşekkürler.

## Bana Bir Kahve Al
Bu kodu faydalı bulduysanız ve geliştirilmesini desteklemek istiyorsanız, kripto para birimi aracılığıyla bağışta bulunabilirsiniz:
- BTC: [1GVwrLEMBmA6wCWnvgDLwqLv8HhryRioDs]
- USDT: [TE65qTLAx73kQ4LjbQYiWnXWBNK6GwKNXM]
- TON: [UQDHzwnAoZ3ZY86PX7oF4b37pikY6boM1RO7okLuO3nfwgqt]
