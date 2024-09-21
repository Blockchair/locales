# locales
ec97e694e482afb49303693ce26e0a9abd058c06 Pazartesi 17 Eylül 00:00:00 2001
Gönderen: Sarsılmazxx02 <Recocankaya@gmail.com>
Tarih: Pzr, 8 Eyl 2024 00:22:01 +0000
Konu: [PATCH 1/2] =?UTF-8?q?##=20WebSocket=20API=20Ger=C3=A7ek=20zamanl?=
 =?UTF-8?q?=C4=B1=20blockchain=20verileri=20WebSocket=20API'miz=20geli?=
 =?UTF-8?q?=C5=9Ftiricilerin=20yeni=20i=C5=9Flemler=20ve=20bloklar=20hakk?=
 =?UTF-8?q?=C4=B1nda=20Ger=C3=A7ek=20Zamanl=C4=B1=20bildirimler=20almas?=
 =?UTF-8?q?=C4=B1n=C4=B1=20sa=C4=9Flar.=20Ba=C4=9Flant=C4=B1=20URL'si=20"w?=
 =?UTF-8?q?ss://ws.blockchain.info/inv"=20Soket=20a=C3=A7=C4=B1ld=C4=B1kta?=
 =?UTF-8?q?n=20sonra=20"op"=20mesaj=C4=B1=20g=C3=B6ndererek=20bir=20kanala?=
 =?UTF-8?q?=20abone=20olabilirsiniz.=20=C3=87=C4=B1nlama=20{?=
MIME-Sürüm: 1.0
İçerik Türü: text/plain; karakter kümesi=UTF-8
İçerik Aktarım Kodlaması: 8bit

  "op": "ping"

}
Onaylanmamış İşlemlere Abonelik
Tüm yeni bitcoin işlemleri için bildirimlere abone olun.
{

  "op": "onaylanmamış_sub"

}
Abonelikten çık
{

  "op": "onaylanmamış_iptal"

}
Bir Adrese Abone Olmak
belirli bir bitcoin adresi için yeni işlemler alın:
{

  "op": "addr_sub",

  "addr": "$bitcoin_adresi"

}
Abonelikten çık
{

  "op": "addr_unsub",

  "addr": "$bitcoin_adresi"

}
Yeni işlemle ilgili mesaj:
{

  "op": "utx",

  "X": {

    "kilit_zamanı": 0,

    "ver": 1,

    "boyut": 192,

    "girişler": [

      {

        "dizi": 4294967295,

        "önceki_çıkış": {

          "harcanmış": doğru,

          "tx_indeksi": 99005468,

          "tür": 0,

          "adres": "bc1q35cz8yfhr60q0qklea2nwxef20mq2me7gpkxhx",

          "değer": 65574000,

          "n": 0,

          "komut dosyası": "76a91477f4c9ee75e449a74c21a4decfb50519cbc245b388ac"

        },

        "komut dosyası": "483045022100e4ff962c292705f051c2c2fc519fa775a4d8955bce1a3e29884b2785277999ed02200b537ebd22a9f25fbbbcc9113c69c1389400703ef2 017d80959ef0f1d685756c012102618e08e0c8fd4c5fe539184a30fe35a2f5fccf7ad62054cad29360d871f8187d"

      }

    ],

    "zaman": 1440086763,

    "tx_indeksi": 99006637,

    "vin_sz": 1,

    "karma": "0857b9de1884eec314ecf67c040a2657b8e083e1f95e31d0b5ba3d328841fc7f",

    "vout_sz": 1,

    "ileten_tarafından": "127.0.0.1",

    "dışarı": [

      {

        "harcanmış": doğru,

        "tx_indeksi": 99006637,

        "tür": 0,

        "adres": "bc1q35cz8yfhr60q0qklea2nwxef20mq2me7gpkxhx",

        "değer": 65564000,

        "n": 0,

        "komut dosyası": "76a914640cfdf7b79d94d1c980133e3587bd6053f091f388ac"

      }

    ]

  }

}
Yeni Bloklara Abone Olmak
Yeni bir bloğun bulunduğunda bildirimler alın. Not: Zincir bölünürse belirli bir bloktan kurtulmak için birden fazla kayıt bulunur.
{

  "op": "bloklar_sub"

}
Abonelikten çık
{

  "op": "bloklar_abonelikten_çık"

}
Yeni Bloktaki Mesaj:
{

  "op": "blok",

  "X": {

    "txIndeksleri": [

      3187871,

      3187868

    ],

    "nTx": 0,

    "toplamBTCSent": 0,

    "tahminiBTCSent": 0,

    "ödül": 0,

    "boyut": 0,

    "blokIndeksi": 190460,

    "öncekiBlokİndeksi": 190457,

    "yükseklik": 170359,

    "karma": "00000000000006436073c07dfa188a8fa54fefadf571fd774863cda1b884b90f",

    "mrklRoot": "94e51495e0e8a0c3b78dac1220b2f35ceda8799b0a20cfa68601ed28126cfcc2",

    "sürüm": 1,

    "zaman": 1331301261,

    "acı": 436942092,

    "nonce": 758889471

  }

}
Hatalı OP'leri:
{

  "op": "ping_block"

}
En son blok ile yanıt verilir
{

  "op": "ping_tx"

}
En son işlemle yanıt verir. Herhangi bir adres abone olunursa, bu adresleri içeren en son işlemle yanıt verir.
En iyi kripto varlıklarını kripto paralar.

Türkçe
Blockchain, İşlemler, Adresler ve Blokları Ara

WebSocket API
Gerçek zamanlı blockchain verileri
WebSocket API'miz geliştiricilerin yeni işlemleri ve blokları hakkında Gerçek Zamanlı tavsiyeler izlenmesini sağlar.
Bağlantı URL'si
"wss://ws.blockchain.info/inv"
Soket açıldıktan sonra "op" mesajı göndererek bir kanala abone olabilirsiniz.
Çınlama
{

  "op": "ping"

}
Onaylanmamış İşlemlere Abonelik
Tüm yeni bitcoin işlemleri için bildirimlere abone olun.
{

  "op": "onaylanmamış_sub"

}
Abonelikten çık
{

  "op": "onaylanmamış_iptal"

}
Bir Adrese Abone Olmak
belirli bir bitcoin adresi için yeni işlemler alın:
{

  "op": "addr_sub",

  "addr": "$bitcoin_adresi"

}
Abonelikten çık
{

  "op": "addr_unsub",

  "addr": "$bitcoin_adresi"

}
Yeni işlemle ilgili mesaj:
{

  "op": "utx",

  "X": {

    "kilit_zamanı": 0,

    "ver": 1,

    "boyut": 192,

    "girişler": [

      {

        "dizi": 4294967295,

        "önceki_çıkış": {

          "harcanmış": doğru,

          "tx_indeksi": 99005468,

          "tür": 0,

          "adres": "bc1q35cz8yfhr60q0qklea2nwxef20mq2me7gpkxhx",

          "değer": 65574000,

          "n": 0,

          "komut dosyası": "76a91477f4c9ee75e449a74c21a4decfb50519cbc245b388ac"

        },

        "komut dosyası": "483045022100e4ff962c292705f051c2c2fc519fa775a4d8955bce1a3e29884b2785277999ed02200b537ebd22a9f25fbbbcc9113c69c1389400703ef2 017d80959ef0f1d685756c012102618e08e0c8fd4c5fe539184a30fe35a2f5fccf7ad62054cad29360d871f8187d"

      }

    ],

    "zaman": 1440086763,

    "tx_indeksi": 99006637,

    "vin_sz": 1,

    "karma": "0857b9de1884eec314ecf67c040a2657b8e083e1f95e31d0b5ba3d328841fc7f",

    "vout_sz": 1,

    "ileten_tarafından": "127.0.0.1",

    "dışarı": [

      {

        "harcanmış": doğru,

        "tx_indeksi": 99006637,

        "tür": 0,

        "adres": "bc1q35cz8yfhr60q0qklea2nwxef20mq2me7gpkxhx",

        "değer": 65564000,

        "n": 0,

        "komut dosyası": "76a914640cfdf7b79d94d1c980133e3587bd6053f091f388ac"

      }

    ]

  }

}
Yeni Bloklara Abone Olmak
Yeni bir bloğun bulunduğunda bildirimler alın. Not: Zincir bölünürse belirli bir bloktan kurtulmak için birden fazla kayıt bulunur.
{

  "op": "bloklar_sub"

}
Abonelikten çık
{

  "op": "bloklar_abonelikten_çık"

}
Yeni Bloktaki Mesaj:
{

  "op": "blok",

  "X": {

    "txIndeksleri": [

      3187871,

      3187868

    ],

    "nTx": 0,

    "toplamBTCSent": 0,

    "tahminiBTCSent": 0,

    "ödül": 0,

    "boyut": 0,

    "blokIndeksi": 190460,

    "öncekiBlokİndeksi": 190457,

    "yükseklik": 170359,

    "karma": "00000000000006436073c07dfa188a8fa54fefadf571fd774863cda1b884b90f",

    "mrklRoot": "94e51495e0e8a0c3b78dac1220b2f35ceda8799b0a20cfa68601ed28126cfcc2",

    "sürüm": 1,

    "zaman": 1331301261,

    "acı": 436942092,

    "nonce": 758889471

  }

}
Hatalı OP'leri:
{

  "op": "ping_block"

}
En son blok ile yanıt verilir
{

  "op": "ping_tx"

}
En son işlemle yanıt verir. Herhangi bir adres abone olunursa, bu adresleri içeren en son işlemle yanıt verir.
En iyi kripto varlıklarını kripto paralar.

cb438f54f8db6bec5f2cd5ea761743f3d4c74657 Pazartesi Eylül 17 00:00:00 2001
Gönderen: Sarsılmazxx02 <Recocankaya@gmail.com>
Tarih: Cum, 21 Eyl 2024 12:10:02 +0000
Konu: [PATCH 2/2] Kod alanınızdan dışa aktarılan bekleyen değişiklikler

---
 sss/checkWinner-.code-workspace | 8 ++++++++
 1 dosya değiştirildi, 8 ekleme(+)
 oluşturma modu 100644 faqs/checkWinner-.code-workspace

diff --git a/sss/checkWinner-.code-workspace b/sss/checkWinner-.code-workspace
yeni dosya modu 100644
dizin 0000000..bab1b7f
--- /dev/null
+++ b/sss/checkWinner-.code-workspace
@@ -0,0 +1,8 @@
+{
+ "klasörler": [
+ {
+ "yol": ".."
+ }
+ ],
+ "ayarlar": {}
+}
\ Dosyanın sonunda yeni satır yok
