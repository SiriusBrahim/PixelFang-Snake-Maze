# PixelFang – İnceleme Kararları

Bu dosyada AI raporlarının tek başına karar veremeyeceği ürün ve mimari tercihleri izlenir. Karar verilene kadar maddeler öneri olarak kalır.

| ID | Konu | İlk rapordaki seçenek / soru | Durum |
|---|---|---|---|
| DEC-01 | Özel renkler ve 2027 temalar | Özel renkleri temaya entegre etmek mi, geçici olarak arayüzden kaldırmak mı? | Kullanıcı kararı bekliyor |
| DEC-02 | Duvar davranışı | Duvar sarma korunacak mı; ayrıca katı duvar modu eklenecek mi? | Kullanıcı kararı bekliyor |
| DEC-03 | Crash reporting | Sağlayıcı seçimi ve gizlilik dokümanı etkisi | Araştırma + kullanıcı onayı bekliyor |
| DEC-04 | Gelir modeli | Ödüllü reklam karşılığı devam hakkı mı, skor çarpanı mı; reklamsız satın alma? | Kullanıcı kararı bekliyor |
| DEC-05 | Skor güvenliği | Lider tablo/ödül sistemi planlanırsa yerel skor doğrulaması nasıl yapılmalı? | Ürün kapsamı netleşmeli |
| DEC-06 | PR #7 | Draft'tan çıkarma ve merge zamanlaması | Yalnızca kullanıcı onayıyla |
| DEC-07 | PR #4 | Açık PR'ın PR #7 ile çakışma riski; yeniden bazlama veya kapatma | Güncel durum kontrolü + kullanıcı kararı |


## İkinci rapordan eklenen kararlar

| ID | Konu | Seçenek / soru | Durum |
|---|---|---|---|
| DEC-08 | Survival kimliği | Maze'den farklı bir kural (hareketli engel, küçülen alan vb.) eklensin mi? | Kullanıcı kararı bekliyor |
| DEC-09 | Erken zafer | Kuyruk ilerleyince açılabilecek hücreler varken victory ilan edilsin mi? | Mevcut davranışın doğrulanması ve kullanıcı kararı bekliyor |
| DEC-10 | Android yedekleme | `allowBackup=true` kalsın mı; oyun kaydı ve reklam sayaçları Android yedeğine girsin mi? | Veri güvenliği belgesiyle birlikte karar bekliyor |
| DEC-11 | Bonus yem kuralı | Profil bazlı spawn aralığı tüm modlarda aynı mı olmalı; bonus sıklığı oyun dengesini nasıl etkilemeli? | Önce kod doğrulaması, sonra gerekirse kullanıcı kararı |
| DEC-12 | Sürüm numarası | Gradle ve package sürümleri tek kaynaktan mı yönetilmeli? | Teknik doğrulama bekliyor |


## Üçüncü rapordan eklenen kararlar

| ID | Konu | Seçenek / soru | Durum |
|---|---|---|---|
| DEC-13 | Reklam modeli | Yalnızca isteğe bağlı ödüllü revive mi; her 3–4 Game Over'da interstitial + reklamsız satın alma mı? | Kullanıcı kararı bekliyor |
| DEC-14 | Günlük seed / hayalet | Sunucusuz yerel hayalet mi; ileride Firebase/Cloudflare küresel skor tablosu mu? | Ürün kapsamı kararı bekliyor |
| DEC-15 | Varsayılan tema | İlk açılış Modern 2027 mi, Klasik Nokia LCD mi? | Kullanıcı kararı bekliyor |
| DEC-16 | Erişilebilirlik | Pinch-zoom kısıtlaması korunup uygulama içi Normal/Büyük yazı boyutu mu eklensin; yoksa menülerde sistem zoom'u da desteklensin mi? | UX/kod doğrulaması ve kullanıcı kararı bekliyor |
| DEC-17 | İlk kullanım rehberi | Kontrol mikro rehberi ve Poison/Mystery yem lejantı ilk açılışta mı, isteğe bağlı yardım alanında mı sunulsun? | Ürün kararı bekliyor |


## Beşinci rapordan eklenen karar / politika başlıkları

| ID | Konu | Seçenek / soru | Durum |
|---|---|---|---|
| DEC-18 | Günlük görev yenilenme saati | Görevler Türkiye yerel gece yarısında mı, UTC gün değişiminde mi yenilensin? | Önce mevcut davranış doğrulanmalı; ardından ürün kararı |
| DEC-19 | Rewarded reklam ödülü | Reklam karşılığı yalnızca teşekkür/konfeti mi; ek can, revive veya kozmetik gibi gerçek bir ödül mü verilsin? | Kullanıcı kararı bekliyor |
| DEC-20 | Survival modu | Mod yalnızca hız parametreleriyle mi ayrışmalı, yoksa daralan alan/hareketli engel gibi kendine özgü kural mı olmalı? | DEC-08 ile birleştirilecek; tek karar kaydı |
| DEC-21 | Erken victory | Kuyruk ilerleyince açılabilecek hücreler varken zafer ilan edilsin mi? | DEC-09 ile birleştirilecek; önce mevcut kural doğrulansın |
| DEC-22 | Android yedekleme | `allowBackup` açık kalırsa hangi oyun verileri Android yedeğine dahil edilmeli? | DEC-10 ile birleştirilecek; gizlilik/veri beklentisi kararı |
| DEC-23 | Ekran yönü | Portrait zorunlu mu, landscape desteklenmeli mi? | Cihaz/UX incelemesi ve kullanıcı kararı bekliyor |
| DEC-24 | Splash/status bar yapılandırması | JS tarafında kullanılmayan yapılandırmalar native kullanım için tutulmalı mı, kaldırılmalı mı? | Önce native referanslar kontrol edilmeli |
| DEC-25 | Modern tema mimarisi | CSS override katmanı kademeli olarak bileşen/token seviyesine taşınsın mı? | Kod ve görsel regresyon incelemesi sonrası karar |


## Dördüncü rapordan eklenen genel ürün kararları

| ID | Konu | Seçenek / soru | Durum |
|---|---|---|---|
| DEC-26 | Stabilizasyon kapsamı | PR #7 dışındaki teknik borçlar ayrı bir stabilizasyon PR'ında mı ele alınmalı? | Kullanıcı kararı bekliyor; PR #7 kapsamı izinsiz değiştirilmemeli |
| DEC-27 | Gelir modeli önceliği | Reklamsız sürüm, isteğe bağlı ödüllü reklam veya kozmetik satıştan hangisi önce gelmeli? | Kullanıcı kararı bekliyor |
| DEC-28 | Yeni modlar | Mevcut modların sağlamlığı doğrulanmadan yeni mod geliştirilmeli mi? | Önce mevcut mod doğrulaması |
| DEC-29 | Veri kurtarma politikası | Bozuk kayıt otomatik silinmeli mi, yedeklenip kurtarılmaya mı çalışılmalı? | Veri kaybını önleyen yaklaşım tercih edilmeli; politika onayı bekliyor |
| DEC-30 | Modern 2027 tasarım kapsamı | Tema yalnızca renk paleti mi, yoksa tüm ekranları kapsayan bütünsel UI dili mi olmalı? | Kullanıcı kararı / görsel inceleme bekliyor |
| DEC-31 | Yayın öncesi cihaz matrisi | Google Play öncesinde hangi minimum Android cihaz/ekran seti doğrulanmalı? | Kullanıcı kararı bekliyor |


## Altıncı raporla yeniden gündeme gelen kararlar / netleştirmeler

Altıncı raporun ürün önerileri büyük ölçüde mevcut DEC kayıtlarıyla örtüşür; yeni ve mükerrer karar numarası açılmamıştır. İlgili eşleştirmeler:

- Reklam yoğunluğu, rewarded ödülü, reklamsız sürüm ve kozmetik paketleri: DEC-04, DEC-13 ve DEC-19.
- Skor tablosu/sosyal özellik ve sunucu tarafı doğrulama: DEC-05.
- Günlük meydan okuma, hayalet rekor, kampanya ve akıllı labirent: DEC-14 ve mevcut içerik yol haritası.
- Onboarding, kontrol mikro rehberi ve yem lejantı: DEC-17.
- Pinch-zoom / erişilebilirlik: DEC-16.
- PR #7 kapsamı ve merge kararı: DEC-06.

**Teknik ayrım:** Altıncı raporun Play AAB için saydığı `ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`, `ANDROID_KEY_PASSWORD` secret'ları, PR #7 debug APK imzalama için bekleyen `ANDROID_DEBUG_*` secret'larından ayrı tutulmalıdır. Bu bir ürün kararı değil, release yapılandırması doğrulamasıdır.


## Yedinci raporla gündeme gelen kararlar / netleştirmeler

- **PR #7 merge stratejisi:** Tek entegrasyon PR'ı olarak mı kalacak, yoksa kritik düzeltmeler ayrılacak mı? Kullanıcı onayı olmadan PR #7 merge/close/draft durumu değiştirilmez. Mevcut talimat: PR #7 açık ve draft kalmalı.
- **Modern 2027 kapsamı:** Renk paletiyle sınırlı mı, yoksa tipografi ve bileşen tasarımı da değişecek mi? Karar bekliyor.
- **Gelir modeli:** AdMob yoğunluğu, kozmetik IAP ve reklamsız sürüm; önceki DEC kayıtlarıyla birlikte ele alınmalı.
- **Yeni mod/içerik:** Günlük challenge, hikâye modu, hayalet replay ve hareketli engeller; stabilizasyon sonrası ürün kararı.
- **Crash analytics:** Crashlytics/eşdeğeri entegrasyonu gizlilik politikası ve veri işleme kararı gerektirir.
- **Cihaz testi sorumluluğu:** Test matrisi, cihazlar ve zamanlama ayrıca belirlenmeli; şu an backlog olarak tutulur.
- **Manifest ve GameOverScreen iddiaları:** Kod doğrulaması olmadan karar/uygulama maddesine çevrilmemeli.

## Sekizinci rapordan eklenen karar başlıkları

| ID | Konu | Seçenek / soru | Durum |
|---|---|---|---|
| DEC-32 | Wrap davranışı | Tüm modlarda wrap korunacak mı; Classic'e duvarın ölümcül olduğu varyant eklensin mi? | Kullanıcı kararı bekliyor |
| DEC-33 | Varsayılan tema | Görsel doğrulama sonrası Modern 2027 varsayılan olsun mu? | Görsel inceleme + kullanıcı kararı bekliyor |
| DEC-34 | Ekran yönü | Portrait kilidi mi, serbest yön mü? | Cihaz/UX kanıtı ve kullanıcı kararı bekliyor |
| DEC-35 | Lisans | MIT lisansı mı, başka lisans mı? | Güncel lisans durumunu doğrula; kullanıcı kararı bekliyor |
| DEC-36 | Müzik varsayılanı | Arka plan müziği kapalı mı, açık mı başlasın? | Kullanıcı kararı bekliyor |
| DEC-37 | Difficulty profili açıklaması | Retro/Modern profiller oyuncuya nasıl anlatılsın? | UX/ürün kararı bekliyor |
| DEC-38 | Survival/Classic/Time Attack kimliği | Modlara özgü kurallar ve farklılaşma seviyesi ne olmalı? | DEC-08/20 ve roadmap ile birlikte ele alınmalı |

Rapor 08'in PR #5/#6 kapatma ve PR #7 review-ready önerileri yeni otomatik işlem değildir. PR #7 açık ve draft kalmalı; durum değişikliği yalnızca açık kullanıcı talimatıyla yapılır.


## Dokuzuncu rapordan eklenen cihaz / performans testleri

- [ ] Game Over → Try Again hızlı 10 ardışık çift tıklama; crash, donma veya mod karışması.
- [ ] Ölüm anında arka plana alma ve dönüşte Game Over durumunun korunması.
- [ ] Oyun sırasında ekran kilidi; 5 saniye sonra dönüşte BGM/lifecycle davranışı.
- [ ] Android geri tuşu: oyun → Pause → geri → ana menü; çift geri çıkış davranışı.
- [ ] Farklı ekran boyutları, çentik ve safe-area; Canvas taşması.
- [ ] Maze custom map ve çözülemez harita yükleme; kilitlenme/softlock.
- [ ] 15 dakika oyun; pil, ısınma ve titreşim.
- [ ] Modern 2027 temanın tüm ekranları.
- [ ] Büyük harita (25x25+) ve uzun yılanla FPS/frame-time/allocation ölçümü.
- [ ] Wrapping + kenara yakın 2x2 engel spawn'ında portal kapanması.

**Not:** Rapor 09'un I bölümü kullanıcı mesajında kesildiğinden, eksik cihaz test maddeleri bu listeye tahminle eklenmedi. Hiçbir gerçek cihaz testi arşivleme sırasında yapılmadı.


## Onuncu rapordan eklenen karar başlıkları

| ID | Konu | Seçenek / soru | Durum |
|---|---|---|---|
| DEC-39 | Canvas 2D / WebGL | Mevcut Canvas 2D'yi profiler/benchmark ile sınırlarına kadar kullanmak mı, PixiJS/WebGL'e geçmek mi? | Ölçüm sonuçları ve ürün kapsamı sonrası karar |
| DEC-40 | Reklam sıklığı | Interstitial yalnızca Game Over'da mı, belirli oyun sayısı eşiğinde mi; rewarded kozmetik/continue ödülü kabul edilebilir mi? | DEC-04/13/19 ile birleştirilerek tek reklam politikası kararı |
| DEC-41 | Ghost / leaderboard backend | Kişisel lokal ghost yeterli mi, yoksa Firebase/Supabase gibi backend ile global skor/ghost mu? | Maliyet, bakım, gizlilik ve ürün kapsamı kararı |
| DEC-42 | Maze Editor paylaşımı | Harita kodu harici platformlarda mı paylaşılmalı, oyun içi Community/Market alanı mı kurulmalı? | Önce harici paylaşımın kapsamı; topluluk backend'i ayrı ürün kararı |

**Teknik önkoşul:** Canvas 2D/WebGL kararı performans ölçümü olmadan verilmemeli. Reklam politikası UMP consent/earned-reward teknik doğrulamasından ayrı bir ürün kararıdır.
