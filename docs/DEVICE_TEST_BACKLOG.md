# PixelFang – Gerçek Cihaz Test Bekleyenleri

> Bu liste otomatik testlerin yerine geçmez. Maddeler gerçek Android cihazda doğrulanana kadar bekleyen iş olarak kalır. İlk kaynak: [2026-11-26 AI denetim raporu](reviews/2026-11-26-ai-review-01.md).

- [ ] Game Over akışı: ölüm sonrası ekranın anında açılması; paylaş, yeniden dene ve menü kontrolleri.
- [ ] Hızlı tekrar deneme: Game Over ekranında art arda 10 kez deneme; mod/skor karışmaması.
- [ ] Ses yaşam döngüsü: arka plana geçişte sesin kesilmesi; dönüşte kullanıcı etkileşimine kadar sessiz kalması.
- [ ] Arka plan / ekran kilidi: pause ve checkpoint; devam etme sonrası doğru durum.
- [ ] Titreşim: ölüm ve bonus geri bildirimi; manifest ve eklenti davranışı.
- [ ] Ses/titreşim hata dayanıklılığı: izin veya API hatası oyun akışını bozmamalı.
- [ ] Kayıt geri yükleme: zorla kapatma sonrası doğru mod, skor ve harita.
- [ ] Eski kayıt göçü: önceki sürüm kaydından güncel sürüme geçiş.
- [ ] Bozuk kayıt: bozuk JSON uygulamayı çökertmemeli; güvenli kurtarma davranışı.
- [ ] Uzun oturum: en az 10 dakika FPS, ısınma ve pil gözlemi.
- [ ] Çentik / safe-area / immersive mode: hiçbir kontrol kesilmemeli.
- [ ] Android geri tuşu: modal → ekran → ana menü / çıkış davranışı.
- [ ] Tema incelemesi: Classic ve Modern 2027 tüm ekranlarda; kontrast ve okunabilirlik.
- [ ] Mod doğrulaması: Time Attack gerçek süresi, Survival eğrisi, Classic/Maze farkı.
- [ ] Labirent editörü: kaydet, güncelle, sil, dışa aktar ve başka cihazda içe aktar.
- [ ] Reklamlar: test ID ile rewarded/interstitial, consent ve hata izolasyonu.
- [ ] Hızlı yön değişimi: seri dokunuşlarda beklenmeyen ters dönüş olmaması.

**Not:** Kullanıcının gerçek cihaz testleri şu an beklemeye alınmıştır; bu liste yalnızca takip içindir ve testlerin yapıldığı anlamına gelmez.


## İkinci rapordan eklenen cihaz doğrulamaları

- [ ] 60 Hz ve 120 Hz ekranlarda yılan hareket hızının tutarlı olması.
- [ ] Yatay ekran yönünde yerleşim ve kontrollerin kullanılabilirliği.
- [ ] Gelen arama / uygulama kesintisi sonrası ses ve oyun yaşam döngüsü.
- [ ] APK güncelleme kurulumu; imza anahtarı ve mevcut yerel kayıtların korunması.
- [ ] Uzun oturumda FPS, pil ve ısınma gözlemi.
- [ ] Bonus yemlerin farklı zorluk profillerinde doğru zamanda görünmesi ve süre boyunca kalması (PF-01).
- [ ] Game Over sonrası rekorun ve checkpoint temizliğinin uygulama arka plana alındığında/kapatıldığında tutarlı kalması (PF-02).

**Not:** Bunlar da kullanıcı tarafından yapılacak gerçek cihaz testleridir; arşivleme sırasında çalıştırılmadılar.
