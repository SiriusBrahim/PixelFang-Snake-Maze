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


## Üçüncü rapordan eklenen cihaz / erişilebilirlik doğrulamaları

- [ ] Android donanım geri tuşu: oyun aktifken Pause'a geçiş, ana menüde çıkış onayı ve modal kapanma sırası.
- [ ] WebView depolama: düşük depolama alanı, yazma kotası hatası ve uygulama zorla kapatıldıktan sonra kayıt bütünlüğü.
- [ ] AdMob/UMP: uçak modu, yavaş ağ ve ağ kesintisinde açılışın bloklanmaması; ödülün yalnızca earned-reward tamamlanınca verilmesi.
- [ ] Pinch-zoom / yazı boyutu: erişilebilirlik ölçeklendirmesi ve oyun canvas dokunmatik jestlerinin birbirini engellememesi.
- [ ] Tablet ve büyük ekran: Normal/Büyük yazı boyutu, menü kaydırma, safe-area ve kontrol yerleşimi.
- [ ] İlk kullanım rehberi: Zik-zak / D-Pad / Swipe mikro rehberi ve Poison/Mystery yem lejantının dokunmatik kullanımda anlaşılabilirliği.
- [ ] Paylaşılabilir skor kartı önerisi geliştirilirse Android paylaşım sheet'i ve dosya URI/izinleri.

**Not:** Bu maddeler test planına eklendi; hiçbir fiziksel cihaz testi bu dokümantasyon güncellemesi sırasında çalıştırılmadı.


## Dördüncü rapordan eklenen doğrulamalar

- [ ] Günlük görev yenilenmesi: Türkiye yerel saati gece yarısı ve UTC gün değişimi senaryolarını karşılaştır; beklenen politika doğrulansın (R4-F8).
- [ ] Mystery yem sesi: gerçek cihazda ilgili yem etkisinin doğru ses olayını tetiklediğini doğrula (R4-F6).
- [ ] Canvas performansı: bonus sayaç güncellenirken FPS, çizim sıklığı ve yumuşak hareketi gözlemle; mümkünse profiler kaydı al (R4-F11).
- [ ] Android immersive / edge-to-edge: hedef SDK 36 cihazında status/navigation bar, safe-area ve geri dönüş davranışını doğrula (R4-F12).
- [ ] Ekran yönü: portrait ve landscape davranışını; kontrol alanı, menü ve canvas yerleşimini doğrula (R4-F5).
- [ ] Modern tema: gerçek ekran görüntüleriyle Classic tema karşılaştırması, kontrast, taşma ve CSS override kaynaklı görsel regresyon kontrolü (R4-F13).

**Not:** Bu maddeler test kuyruğuna eklendi. Rapor arşivlenirken fiziksel Android cihaz testi yapılmadı.
