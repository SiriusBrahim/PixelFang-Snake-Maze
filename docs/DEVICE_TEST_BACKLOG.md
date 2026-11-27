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


## Beşinci rapordan eklenen doğrulamalar

- [ ] Günlük görev yenilenmesi: Türkiye yerel saati gece yarısı ve UTC gün değişimi senaryolarını karşılaştır; beklenen politika doğrulansın (R4-F8).
- [ ] Mystery yem sesi: gerçek cihazda ilgili yem etkisinin doğru ses olayını tetiklediğini doğrula (R4-F6).
- [ ] Canvas performansı: bonus sayaç güncellenirken FPS, çizim sıklığı ve yumuşak hareketi gözlemle; mümkünse profiler kaydı al (R4-F11).
- [ ] Android immersive / edge-to-edge: hedef SDK 36 cihazında status/navigation bar, safe-area ve geri dönüş davranışını doğrula (R4-F12).
- [ ] Ekran yönü: portrait ve landscape davranışını; kontrol alanı, menü ve canvas yerleşimini doğrula (R4-F5).
- [ ] Modern tema: gerçek ekran görüntüleriyle Classic tema karşılaştırması, kontrast, taşma ve CSS override kaynaklı görsel regresyon kontrolü (R4-F13).

**Not:** Bu maddeler test kuyruğuna eklendi. Rapor arşivlenirken fiziksel Android cihaz testi yapılmadı.


## Dördüncü rapordan eklenen genel cihaz doğrulama alanları

- [ ] İlk açılış, mod seçimi, ölüm/Game Over ve hızlı restart akışları.
- [ ] Arka plan/ön plan, ekran kilidi, gelen arama ve uygulamaya geri dönüş.
- [ ] Safe-area, çentik, farklı ekran boyutları, portrait/landscape ve Android geri tuşu.
- [ ] Ses efektleri, müzik, titreşim ve ses API hatası.
- [ ] Reklam yükleme/consent hatası ve reklamın akışı bloke etmemesi.
- [ ] Uzun oturumda FPS, frame time, pil, ısınma ve bellek.
- [ ] Kayıt/restore, eski kayıt göçü ve bozuk kayıt kurtarma.
- [ ] Maze Editor harita kaydetme/yükleme ve yem erişilebilirliği.
- [ ] Klasik ve Modern 2027 temalarda tüm ekranların görsel tutarlılığı.
- [ ] İmzalı APK kurulumu ve uygulama güncellemesi sırasında mevcut kaydın korunması.

**Not:** Bunlar dördüncü raporun genel kontrol başlıklarıdır; beşinci raporun daha spesifik test maddeleriyle birleştirilerek takip edilmelidir. Bu arşiv güncellemesi sırasında gerçek cihaz testi yapılmadı.


## Altıncı rapordan eklenen / birleştirilen cihaz doğrulamaları

- [ ] İlk açılış ve ilk render/giriş gecikmesi; mod seçimi ve her modda Game Over/restart akışı.
- [ ] Arka plan/ön plan, ekran kilidi, gelen arama, ses odağı kaybı ve dönüşte sesin tekil/uygun davranması.
- [ ] Classic, D-Pad ve swipe girişleri; çoklu dokunuş ve küçük/büyük/çentikli ekranlarda HUD/dokunma hedefleri.
- [ ] Özel yemlerin süre/efekt/ses davranışı ve ölüm/restart/arka plan sonrası temizlenmesi.
- [ ] Reklam yüklenememesi, timeout, consent, kapatma ve earned-reward olmadan ödül verilmemesi.
- [ ] Uzun oturumda FPS, frame time, bellek, ısınma ve pil ölçümü.
- [ ] Kayıt/restore, eski kayıt, bozuk localStorage ve uygulama güncellemesinde verinin korunması.
- [ ] Debug APK ile imzalı Play AAB yapılandırma farkı; Google Play pre-launch report, crash ve ANR kontrolleri.

**Not:** Altıncı rapor bu testleri çalıştırdığını bildirmiyor; liste yalnızca bekleyen doğrulama planıdır. Kullanıcıdan hemen cihaz testi yapması istenmez.


## Yedinci rapordan birleştirilen cihaz doğrulamaları

- [ ] İlk açılış, ana menü, mod seçimi ve uygulamanın farklı Android sürümlerinde başlatılması.
- [ ] Maze, Classic, Time Attack ve Survival modlarının her birinde Game Over, Try Again ve New Game akışları.
- [ ] Hızlı ardışık yeniden başlatma ve modun korunması.
- [ ] Bozuk/eski kayıtla açılış, devam etme ve kayıt geri yükleme.
- [ ] Arka plana alma, geri dönme, ekran kilidi ve telefon görüşmesi sırasında ses/lifecycle davranışı.
- [ ] Klasik ve Modern temanın ana menü, oyun, Game Over, Ayarlar ve Kariyer ekranlarında tutarlılığı.
- [ ] Özel yemlerin süre, yön göstergesi ve efekt davranışı.
- [ ] Düşük donanımda FPS; uzun oturumda bellek, ısınma ve pil gözlemi.
- [ ] Reklam yüklenememesi ve kapanması halinde oyun akışının kesintisiz kalması.
- [ ] Android geri tuşu, farklı ekran boyutları ve çentikli ekranlarda güvenli alanlar.

**Not:** Bu maddeler test sonucu değildir. AndroidManifest.xml'in boş olduğu iddiası cihaz testiyle değil, önce kaynak dosya ve derleme çıktısıyla doğrulanmalıdır. Kullanıcıdan hemen cihaz testi yapması istenmez.

## Sekizinci rapordan eklenen cihaz / görsel doğrulamalar

- [ ] Haptics: yem, çarpışma ve bonus titreşimi; manifest izni ve kullanılan Capacitor API davranışı.
- [ ] Modern/Klasik tema: tüm ekranlar, kontrast, status bar, klavye ve diyaloglar.
- [ ] StatusBar: tema değişiminde arka plan rengi ve ikon stili doğru güncelleniyor mu?
- [ ] Clipboard: Maze Editor paylaşım kodu kopyalama başarılı/başarısız yolları; Android WebView davranışı.
- [ ] Bonus yem: modern profil (8) ve diğer profillerde spawn zamanı, zaman damgası, 5 saniyelik süre ve `bonusEatenFast` istatistiği.
- [ ] Dolu tahta: freeCells boş/null olduğunda reset/restore ve victory davranışı; yemin yılan üzerine düşmemesi.
- [ ] Ardışık olaylar: birden fazla toast tetiklendiğinde mesajların kaybolmaması.
- [ ] Lifecycle: visibilitychange sırasında oyun durumu ve checkpoint; listener tekrar kurulumu performansı ölçümü.

**Not:** Bunlar Rapor 08'in test önerileridir; arşivleme sırasında hiçbir gerçek cihaz veya görsel test çalıştırılmadı.
undefined

## Onuncu rapordan eklenen gerçek cihaz / performans testleri

- [ ] Game Over ekranında Try Again'e 10–20 kez hızlı basma; session/timer/listener sızıntısı veya crash.
- [ ] Time Attack dahil oyun sırasında arka plana geçiş, 5–10 dakika bekleme ve dönüş; süre, checkpoint ve ses davranışı.
- [ ] Modern 2027 tema OLED ekranında kontrast, okunabilirlik ve hareketli içerik izleri.
- [ ] Notch/punch-hole cihazlarda safe-area; HUD ve kontrol alanlarının sistem inset'leri altında kalmaması.
- [ ] Küçük telefon ve tabletlerde swipe threshold/deadzone; yanlış yön değişimi oranı.
- [ ] Zayıf/yok ağda AdMob/UMP consent ve rewarded yükleme; UI donmaması, doğru hata bildirimi ve earned-reward olmadan ödül verilmemesi.
- [ ] Smooth Motion açıkken 60Hz/120Hz cihazlarda FPS, frame-time, dropped frames ve yılan interpolasyonu.
- [ ] Uzun oturum ve particle yoğunluğu altında bellek, pil, ısınma ve Canvas performansı.
- [ ] Arka plana geçişte `flushStorage()` tamamlanması ve uygulama zorla kapatıldıktan sonra son checkpoint'in geri yüklenmesi.

**Not:** Bunlar Rapor 10'un önerdiği testlerdir; arşivleme sırasında hiçbir fiziksel cihaz veya profiler testi çalıştırılmadı.


## On birinci rapordan eklenen doğrulama işleri

- [ ] PR #7 HEAD için Android artifact workflow'unu debug signing secrets eklendikten sonra çalıştır; APK artifact ve SHA-256 sertifika fingerprint'ini doğrula.
- [ ] PR #7 `mergeable_state=unstable` nedenini required checks ve branch protection üzerinden teşhis et.
- [ ] Game Over ekranında hızlı Try Again spam; eski session timer'ları ve gecikmiş reklam callback'lerinin yeni oturumu etkilemediğini doğrula.
- [ ] Bozuk/yarım checkpoint ve V1/V2 migration senaryolarında kullanıcı verisi kurtarma/karantina davranışını test et.
- [ ] Arka plan/ön plan ve zorla kapatma sonrası checkpoint flush/restore davranışını test et.
- [ ] Classic/Modern temaların aynı ekranlarda görsel regresyon karşılaştırmasını yap; CSS substring selector çakışmalarını kontrol et.
- [ ] Canvas hareket/efekt yoğunluğunda 60/120Hz frame-time, dropped frame, pil ve bellek ölçümü yap.
- [ ] Ses/lifecycle testlerini farklı Android OS ve OEM WebView ortamlarında tekrarla.

**Not:** Bu testler Rapor 11'in önerdiği veya işaret ettiği kontrollerdir; arşivleme sırasında APK üretilmedi, gerçek cihaz/profiler testi yapılmadı.
