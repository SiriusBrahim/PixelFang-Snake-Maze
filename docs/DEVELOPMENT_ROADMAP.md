# PixelFang – Birleşik Geliştirme Yol Haritası

> **Durum:** Birleşik doğrulama ve geliştirme taslağı – 26–27 Kasım 2026 tarihli altı AI raporundan derlenmiştir. Her raporun kaynak erişimi farklıdır; altıncı rapor README/genel GitHub bilgileriyle sınırlıdır. Arşiv güncellemesi sırasında yeni kod iddiası bağımsız olarak doğrulanmamıştır. Rapor sınıflandırması ile bağımsız doğrulama birbirinden ayrıdır.

## Yönetim ilkeleri

1. Önce güncel branch/commit ve dosya içeriği kontrol edilir; rapor tarihindeki durum güncel kabul edilmez.
2. Bir iş tamamlandı olarak işaretlenmeden önce kod/CI kanıtı aranır. Android davranışı için cihaz testi gerekir.
3. Aynı kök nedene ait rapor maddeleri tek issue altında birleştirilir; kaynak rapor referansları korunur.
4. PR #7 açık ve draft kalır; kullanıcı açıkça istemedikçe merge/close yapılmaz.
5. Gerçek cihaz testleri kullanıcı tarafından yapılana kadar bekleyen işler olarak kalır.
6. Rapor arşivi dokümantasyon dalında tutulur; uygulama kodu değişiklikleriyle karıştırılmaz.

## İlk rapordan gelen öncelikli doğrulama kuyruğu

| ID | İddia / iş | İlk rapordaki öncelik | Bu arşivdeki durum | Sonraki doğrulama |
|---|---|---:|---|---|
| R1-D1 | PR #7 özel renkler / hazır temalar regresyonu | P0 | Doğrulanmadı | PR #7 güncel head'de `App.tsx`, tema ve Settings akışını incele |
| R1-D2 | `storage.getNumber` fallback davranışı | P0 | Doğrulanmadı | `storage.ts` ve yüksek skor göç testlerini incele |
| R1-D3 | Canvas rAF sürekli tam çizim yapıyor | P1 | Doğrulanmadı | `SnakeCanvas.tsx` ve parçacık yaşam döngüsünü incele |
| R1-D4 | Bonus sayacı App genelinde sık render tetikliyor | P1 | Doğrulanmadı | App state ve bileşen render sınırlarını profille |
| R1-D5 | AndroidManifest VIBRATE izni | P0 | Doğrulanmadı | Manifest ve kullanılan Capacitor haptics API'sini kontrol et |
| R1-D7 | `ui_theme` anahtarı STORAGE_KEYS dışında | P1 | Doğrulanmadı | Storage anahtar kataloğu ve tüm kullanımları incele |
| R1-D8 | Time Attack tick tabanlı süre hesabı | P1 | Doğrulanmadı | Timer kaynağı, elapsed-time hesabı ve testleri incele |
| R1-D9 | App / post-game akışında entegrasyon testi eksikliği | P1 | Doğrulanmadı | Test envanteri ve finishGame akışını incele |
| R1-D10 | Crash reporting / analitik yokluğu | P1 | Karar + doğrulama bekliyor | Mevcut bağımlılıkları, gizlilik ve ürün gereksinimlerini değerlendir |

## Öncelik grupları

### P0 – Yayın öncesi engelleyiciler
- [ ] R1-D1: Tema / özel renk regresyonunu doğrula ve gerekiyorsa düzelt.
- [ ] R1-D2: Sayısal storage fallback davranışını doğrula ve gerekiyorsa düzelt.
- [ ] R1-D5: Haptics iznini ve gerçek Android API gereksinimini doğrula.
- [ ] PR #7 Android signing secret'larının durumu ve APK artifact üretimi yeniden kontrol edilmeli. Secret değerleri hiçbir dokümana yazılmamalı.
- [ ] PR #7 merge kararı yalnızca kullanıcı onayıyla verilmeli.

### P1 – Stabilizasyon ve performans
- [ ] R1-D3: Koşullu rAF ihtiyacını ölçümle doğrula; optimizasyon öncesi/sonrası performans kıyasla.
- [ ] R1-D4: Bonus sayaç render maliyetini ölç ve gerekirse izole et.
- [ ] R1-D7: Storage anahtar kataloğunu tutarlı hâle getir.
- [ ] R1-D8: Time Attack süresini gerçek geçen zamana göre doğrula.
- [ ] R1-D9: Oyun sonu orkestrasyonu için hedefli entegrasyon/regresyon testleri değerlendir.
- [ ] R1-D10: Crash reporting kararı ve gizlilik etkisi kullanıcı onayına sunulmalı.

### P2 – UX ve oyun dengesi
- [ ] Özel yemler için ilk karşılaşma açıklaması.
- [ ] Modern 2027 tema görsel incelemesi; klasik tema regresyon karşılaştırması.
- [ ] Terminal sesleri / güvenli alan / Survival mod kimliği.

### P3–P5 – İçerik, farklılaştırma ve yayın
- [ ] Bölüm tabanlı labirent, günlük meydan okuma, haftalık görevler.
- [ ] Prosedürel labirent üretimi ve hayalet rekor yarışı.
- [ ] Kozmetik yılan görünümleri ve paylaşılabilir sonuç kartları.
- [ ] İmzalı AAB, mağaza vitrini ve ödüllü reklam / reklamsız satın alma kararları.

## Kaynak

- [2026-11-26 ilk AI denetim raporu](reviews/2026-11-26-ai-review-01.md)


## İkinci rapordan gelen doğrulama kuyruğu

| ID | İddia / iş | İkinci rapordaki öncelik | İlk raporla ilişkisi | Bu arşivdeki durum | Sonraki doğrulama |
|---|---|---:|---|---|---|
| PF-01 / R2-F1 | Bonus yem spawn aralığı ile sayaç/temizleme mantığı uyuşmuyor | P1 | İlk raporun bonus bar render maliyeti (R1-D4) ile ilişkili ama farklı kök neden iddiası | Doğrulanmadı | Profil değerini, reducer spawn koşulunu ve App zamanlayıcısını birlikte incele; test ekle |
| PF-02 / R2-F2 | Game Over sonrası rekor/checkpoint kalıcılığı iptal edilebilir timeout içinde | P1 | İlk raporun post-game orkestrasyonu/test kapsamı (R1-D9) ile örtüşüyor; yeni veri kaybı senaryosu | Doğrulanmadı | finishGame, timeout cleanup, session-id ve clearSavedGame sırasını incele; hata/iptal testleri ekle |
| PF-03 / R2-F5 | Android versionName 1.0, package sürümü 1.0.1 | P1 | Yeni bulgu | Doğrulanmadı | Gradle, package.json ve sürüm üretim akışını karşılaştır |
| PF-06 / R2-F4 | Survival, Maze'den yalnızca parametrelerle ayrılıyor | P2 | İlk rapordaki Survival kimliği önerisiyle ortak | Kod iddiası bağımsız doğrulanmadı; ürün kararı gerekli | gameModes, reducer ve game-rules belgelerini karşılaştır |
| PF-07 / R2-F3 | Kuyruk ilerleyince açılabilecek hücreler varken erken victory | P2 | Yeni tasarım/oyun kuralı sorusu | Doğrulanmadı; karar gerekli | freeCells/victory koşulunu, mevcut testleri ve istenen kuralı incele |
| PF-08 / R2-F5 | Android allowBackup ile veri güvenliği belgesi uyumu | P2 | Yeni yapılandırma/gizlilik başlığı | Doğrulanmadı; karar gerekli | Manifest, Preferences kapsamı ve data-safety dokümanını karşılaştır |
| R2-ADS-01 | Reklam gösterilemediğinde interstitial eşiği tüketiliyor olabilir | P2 adayı | Yeni, kapsamı dar | Doğrulanmadı | ads.ts sayaç sıfırlama ve reklam callback sırasını incele |

## İki raporun ortak / ayrışan değerlendirmeleri

- **Ortak:** PR #7'nin Game Over akışı, oturum kimliği koruması ve reducer doğrulaması güçlü görülüyor; Android cihaz testi ve imzalı APK hâlâ bekliyor.
- **Ortak:** Survival modunun kimliği zayıf bulunuyor.
- **Ortak:** Game Over sonrası işleri ve kayıt/yan etki akışını hedefli testlerle güçlendirme ihtiyacı var.
- **Farklı teknik iddialar:** İlk rapor Canvas RAF'ın sürekli çalıştığını ileri sürüyor; ikinci rapor RAF'ın yalnızca hareket/efekt sırasında çalıştığını söylüyor. İkinci rapor Canvas kodunu incelemediğini de belirtiyor. Bu nedenle R1-D3 açık doğrulama kuyruğunda kalmalı; iki rapor arasında hüküm verilmemeli.
- **İlişkili ama aynı olmayan bonus bulguları:** İlk rapor 50 ms sayaç nedeniyle App genelinde re-render maliyetini; ikinci rapor bonusun spawn aralığı ve kalan süre ref'i uyumsuzluğunu iddia ediyor. Ayrı test ve kök neden analizi gerekir.
- **İnceleme kapsamı:** İkinci rapor UI, tema, Canvas, Editor ve pazar alanlarını incelemediği için ilk rapordaki bu başlıkları ne doğrular ne de çürütür.

## İkinci rapordan gelen uygulama önerileri

### P1 – Önce doğrula
- [ ] PF-01: Bonus yem spawn aralığı ve sayaç uyumunu incele; hata varsa düzelt ve profil bazlı test ekle.
- [ ] PF-02: Game Over sonrası rekor/checkpoint kalıcılığını timeout iptali ve hata izolasyonu açısından incele.
- [ ] PF-03: Android versionName / package sürüm tutarlılığını düzelt veya otomatik kontrol ekle.
- [ ] PF-04: Android debug secret'ları ve APK imza doğrulaması (kullanıcı tarafından sağlanması gereken secret'lar).

### P2 – Karar ve tasarım
- [ ] PF-06: Survival için Maze'den ölçülebilir biçimde farklı bir kural tasarla.
- [ ] PF-07: Gövde kaynaklı erişilemez hücrelerde victory davranışını kararlaştır ve testle sabitle.
- [ ] PF-08: allowBackup ayarını veri güvenliği ve kullanıcı beklentisiyle uyumlu hâle getir.
- [ ] R2-ADS-01: Başarısız reklam gösteriminde sayaç davranışını doğrula.

## Kaynaklar

- [2026-11-26 ilk AI denetim raporu](reviews/2026-11-26-ai-review-01.md)
- [2026-11-27 ikinci bağımsız teknik denetim](reviews/2026-11-27-ai-review-02.md)


## Üçüncü rapordan gelen başlıklar (2026-11-27)

**İnceleme kapsamı sınırlaması:** Üçüncü inceleyici depo alt dizinlerine ve PR dosya diff'lerine erişemediğini; yalnızca kök sayfa, README ve PR #7 özet/commit geçmişini okuyabildiğini açıkça bildiriyor. Bu nedenle raporun kaynak kodu düzeyinde yeni bir doğrulama sağladığı varsayılmamalıdır. Raporun kendi “doğrulandı” etiketleri arşivde bağımsız kanıt statüsüne yükseltilmemiştir.

| ID | Üçüncü rapordaki bulgu/öneri | Öncelik | Önceki raporlarla ilişkisi | Arşiv durumu |
|---|---|---:|---|---|
| R3-01 | Android debug signing secret'ları eksik, imzalı APK üretilemiyor | P0 | İlk iki raporla ortak | Bilinen bekleyen iş; secret'lar kullanıcı tarafından sağlanmalı |
| R3-02 | PR #7 Game Over düzeltmeleri main'de değil | P0 | İlk iki raporla ortak | PR #7 açık/draft; merge yalnızca kullanıcı kararı |
| R3-03 | Fiziksel Android testleri eksik | P0/P1 | İlk iki raporla ortak | Kullanıcının cihaz testleri ertelenmiş durumda; otomatik test sayılmaz |
| R3-04 | Beş dosyada max-lines uyarısı | P1 | İlk raporla ortak | CI çıktısıyla mevcut olduğu daha önce raporlandı; yeniden lint çalıştırılmadı |
| R3-05 | Viewport pinch-zoom kısıtlaması erişilebilirliği etkiliyor | P2 | Yeni vurgu; README iddiası | Kod/UX doğrulaması bekliyor |
| R3-06 | Android localStorage kota/temizleme riski | P1 adayı | İkinci raporun allowBackup/veri güvenliği başlığıyla ilişkili ama farklı | Şüpheli; cihaz/SDK ve storage kodu incelemesi bekliyor |
| R3-07 | Donanım geri tuşu Pause/çıkış akışı | P1 | İkinci rapor cihaz yaşam döngüsü kapsamıyla ilişkili | Kod ve cihaz davranışı doğrulaması bekliyor |
| R3-08 | UMP/AdMob başlatma gecikmesi ve ağ hatası | P1 | Önceki raporların reklam doğrulamasıyla ilişkili | Asenkron başlatma/timeout incelemesi bekliyor |
| R3-09 | Günlük seed labirent, hayalet yarışı, kozmetik ve skor kartı | P3–P4 | Önceki raporların içerik önerileriyle örtüşüyor | Ürün kapsamı / öncelik kararı |
| R3-10 | Normal/Büyük yazı boyutu, kontrol mikro rehberi, yem ikon rehberi | P2 | Yeni UX/erişilebilirlik önerileri | Ürün kararı ve tasarım incelemesi |

### Üç raporun ortaklaşan noktaları
- PR #7 Game Over düzeltmeleri, main'e alınmamış olması nedeniyle yayın öncesi kritik bağımlılık olarak görülüyor.
- Android signing secret'ları ve imzalı test APK'sı hâlâ bekliyor.
- Fiziksel Android cihaz testleri tamamlanmış değil.
- Modern 2027/Klasik tema görsel kontrolü ve Android yaşam döngüsü doğrulaması bekliyor.
- Survival modunun farklılaştırılması ilk iki raporda ortak; üçüncü rapor bu başlığı yeni bir kod kanıtıyla değerlendirmiyor.

### Üçüncü raporun kapsam nedeniyle kanıtlayamadıkları
- Kaynak dosya/satır düzeyinde Game Over, Canvas, storage, ads, Android manifest veya backButton davranışı.
- Tema görselleri, Canvas performansı, gerçek dokunmatik davranış, UMP/AdMob cihaz davranışı.
- Rapordaki “doğrulandı” ifadeleri, erişim kapsamı sınırlaması nedeniyle doğrudan kaynak kod denetimi olarak yorumlanmamalı.

### Yeni doğrulama işleri
- [ ] R3-05: Viewport meta ve canvas touch-action kapsamını incele; uygulama içi yazı boyutu çözümünün erişilebilirlik etkisini değerlendir.
- [ ] R3-06: localStorage yazma/silme hata yönetimini, Capacitor depolama seçeneklerini ve migration stratejisini incele.
- [ ] R3-07: Capacitor backButton listener'ının ekran/oyun durumlarına göre davranışını incele.
- [ ] R3-08: AdMob/UMP init zincirini ağ yokluğu ve timeout senaryolarında incele.
- [ ] R3-04: Beş max-lines dosyasını güncel PR #7 head'de yeniden ölç; uyarı sayısını ve dosya listesini kanıtla.

## Kaynaklar

- [2026-11-26 ilk AI denetim raporu](reviews/2026-11-26-ai-review-01.md)
- [2026-11-27 ikinci bağımsız teknik denetim](reviews/2026-11-27-ai-review-02.md)
- [2026-11-27 üçüncü kapsamlı proje denetimi](reviews/2026-11-27-ai-review-03.md)


## Beşinci rapordan gelen doğrulama kuyruğu (2026-11-27)

**Kapsam notu:** Beşinci inceleyici Canvas, tema/CSS, kontroller, menüler, Maze Editor, görev/başarım, MainActivity ve release yapılandırmasını okuduğunu; sandbox'ta test, tsc, ESLint ve audit çalıştırdığını bildiriyor. Görsel ekran görüntüsü, Actions sayfaları, repository secrets ve fiziksel cihaz davranışı incelenmemiş. Aşağıdaki maddeler raporun bulgularıdır; bu arşiv güncellemesinde tarafımızdan yeniden doğrulanmadı.

| ID | İddia / iş | Rapor önceliği | Önceki raporlarla ilişkisi | Arşiv durumu | Sonraki doğrulama |
|---|---|---:|---|---|---|
| R5-F1 / PF-01 | Bonus yem spawn aralığı (profil) ile App sayaç aralığı uyuşmuyor; özel yem skor sıçramaları da spawn eşiğini atlatabilir | P1 | İkinci rapor PF-01 ile aynı ana başlık; yeni rapor özel yem skor sıçraması ve bonus ezilmesi senaryoları ekliyor | Tek birleşik issue; bağımsız doğrulama bekliyor | Reducer spawn kuralı, App sayaç başlangıcı/temizleme ve tüm özel yem skor etkileri için profil bazlı test |
| R5-F2 / PF-02 | Game Over kalıcılığı iptal edilebilir timeout içinde; tek try/catch adımları birbirine bağlıyor | P2 / yol haritasında P1 | İkinci rapor PF-02 ile örtüşüyor | Tek birleşik issue; şüpheli | finishGame, cleanup, session-id, checkpoint ve her yan etki hata izolasyonu testleri |
| R5-F3 | Kuyruk hareketiyle açılabilecek hücrelere rağmen erken victory | P2 | İkinci rapor F3 ile aynı tasarım sorusu | Tek karar maddesi | freeCells/victory kuralı ve mevcut testlerle doğrula |
| R5-F4 | Survival ve Maze farkı esasen hız parametreleri | P2 | İlk üç rapordaki Survival kimliği önerileriyle ortak | Ürün kararı + kod doğrulaması | gameModes, reducer ve game-rules belgelerini karşılaştır |
| R5-F5 | Gradle versionName 1.0 / package sürümü 1.0.1; allowBackup=true; orientation kilidi yok | P2 | İkinci raporun Android sürüm ve backup başlığıyla örtüşüyor | Birleşik Android yapılandırma işi | Gradle/package sürüm kaynağı, manifest, veri yedekleme kapsamı ve yön davranışı |
| R5-F6 | Mystery yem sesi ölü kod | P3 | Yeni iddia | Doğrulama bekliyor | applyFoodEffect dönüşleri, ses dispatch ve test |
| R5-F8 | Günlük görevler UTC `toISOString()` gün sınırına bağlı; Türkiye'de 03:00 yenileme | P2 | Yeni iddia | Doğrulama bekliyor | Yerel gün anahtarı ve saat dilimi testleri; ürün beklentisi |
| R5-F9 | Rewarded reklam yalnızca teşekkür/konfeti; oynanış ödülü yok | P3 | Önceki reklam modeli kararlarıyla ilişkili | Ürün kararı | handleSupportRewarded ve ödül/monetizasyon tasarımı |
| R5-F10 | Time Attack tick tabanlı zaman ölçümü gerçek zamandan sapabilir | P3 | İlk rapor R1-D8 ile aynı alan | Birleşik timer doğrulaması | Monotonik saat ile elapsed-time karşılaştırma testi |
| R5-F11 | Bonus sayacı güncellemesi Canvas çizimini sık tetikliyor; yumuşak hareket/ölçek sorunları olabilir | P3 | İlk rapor R1-D3/D4 ve ikinci raporun RAF değerlendirmesiyle ilişkili | Ölçüm ve kod doğrulaması bekliyor | SnakeCanvas render bağımlılıkları, RAF ve FPS profili |
| R5-F12 | MainActivity eski system UI API'si ve SDK 36 edge-to-edge davranışı | P2 | Önceki raporların cihaz yaşam döngüsü/immersive kapsamını genişletiyor | Kod + cihaz doğrulaması | MainActivity ve hedef SDK davranışı |
| R5-F13 | index.css içinde 18 attribute selector ve 111 !important; Modern tema override katmanı kırılgan | P3 | İlk raporun tema/özel renk endişesiyle ilişkili | Görsel ve kod doğrulaması bekliyor | CSS override envanteri, tema regresyonu ve ekran görüntüsü karşılaştırması |
| R5-F14 | Dil düğmesi hedef boyutu, splash/status-bar kullanımı ve service worker kapsamı | P3 adayı | Yeni küçük notlar | Ölçüm / gereksinim doğrulaması | Dokunma hedefini ölç; native yapılandırma ve PWA/Capacitor ayrımını doğrula |

### Beşinci raporun ortak ve yeni katkıları

- **Önceki raporlarla ortak:** Bonus yem spawn/sayaç problemi (PF-01), Game Over sonrası kalıcılık (PF-02), erken victory, Survival kimliği, Android sürüm/backup ayarları, Time Attack timer, Canvas performansı ve cihaz testleri.
- **Yeni veya daha ayrıntılı başlıklar:** Mystery yem sesinin erişilemez kod olması (F6), günlük görev UTC gün sınırı (F8), rewarded reklamın gerçek ödül vermemesi (F9), MainActivity immersive API (F12), Modern tema CSS override yoğunluğu (F13).
- **Önemli ayrım:** Beşinci rapor Canvas kodunu incelediğini bildiriyor ve 50 ms bonus sayaç güncellemesinin Canvas çizimini tetikleyebileceğini söylüyor. İkinci rapor Canvas dosyasını incelemediği için “RAF yalnızca hareket/efektte” değerlendirmesi bu bulguyu çürütmez. İlk raporun sürekli RAF iddiası da güncel kod ve ölçümle ayrıca kontrol edilmeli.
- **Kanıt seviyesi:** Beşinci rapor yerel test/tsc/ESLint/audit çalıştırdığını bildiriyor; Actions erişimi yok. Bu sonuçlar ajan beyanıdır, bu arşiv güncellemesinde tekrar çalıştırılmadı. Görsel ve cihaz testleri yapılmadı.

### Beşinci rapordan önerilen iş paketi

1. **Önce PF-01 ve PF-02'yi kod/test ile doğrula.** İkinci ve beşinci raporun ortak bulguları oldukları için en yüksek inceleme getirisine sahipler.
2. **PF-03 sürüm tutarlılığı** ve **R5-F8 görev saat dilimi** başlıklarını küçük, bağımsız kontroller olarak ele al.
3. **Canvas/tema/immersive** konularında kod incelemesini performans ölçümü ve gerçek cihaz kanıtından ayır.
4. **Survival, erken victory, allowBackup ve reklam ödülü** için teknik bulguları ürün kararlarından ayrı tut.
5. Cihaz testleri kullanıcı tarafından yapılana kadar bekleyen listede kalmalı; bu rapor cihaz testi yapıldığı anlamına gelmez.

## Kaynaklar

- [2026-11-27 beşinci arşivlenmiş AI denetim raporu](reviews/2026-11-27-ai-review-05.md)


## Dördüncü rapordan gelen ön denetim başlıkları (2026-11-27)

**Kanıt sınırı:** Dördüncü rapor, kendi metninde GitHub sayfalarından içerik çıkaramadığını ve dosya/satır bazlı kod doğrulaması yapamadığını belirtiyor. Bu nedenle aşağıdaki maddeler teknik hata olarak değil, inceleme kuyruğu ve genel risk çerçevesi olarak kaydedilmiştir. Beşinci raporun kaynak koduna dayalı iddialarıyla karıştırılmamalıdır.

| ID | Dördüncü rapor başlığı | Öncelik | Durum / sonraki işlem |
|---|---|---:|---|
| R4-PRE-01 | PR #7 toplam diff'i ve PR #5/#6'dan devralınan değişikliklerin doğrulanması | P0 | PR diff/commit kanıtı ile incelenmeli; PR #7 açık/draft kalmalı |
| R4-PRE-02 | Game Over, hızlı restart, mod doğrulama ve eski oturum işlemleri | P0 | Mevcut PR #7 düzeltmeleri tekrar yazılmadan güncel kod ve test kanıtı kontrol edilmeli |
| R4-PRE-03 | Bozuk kayıt, geri yükleme ve veri kurtarma | P0 | Şema/migration testleri ve veri kaybı senaryoları incelenmeli |
| R4-PRE-04 | Android lifecycle, ses/titreşim, safe-area ve geri tuşu | P1 | Otomatik test ile cihaz testi ayrılmalı; cihaz maddeleri backlog'da kalmalı |
| R4-PRE-05 | Canvas/FPS/pil ve büyük harita performansı | P1 | Ölçüm olmadan sorun kesinleştirilmemeli |
| R4-PRE-06 | Klasik/Modern 2027 tema tutarlılığı ve özel yem UX | P2 | Kod denetimi ve görsel inceleme ayrı yürütülmeli |
| R4-PRE-07 | Labirent çözülebilirliği, oyun modu farkları ve içerik ilerlemesi | P2–P3 | Önce mevcut sistemler doğrulanmalı; yeni özellikler teknik borçtan ayrı tutulmalı |
| R4-PRE-08 | Reklam modeli, kozmetik gelir ve Google Play hazırlığı | P3–P5 | Ürün kararı; temel oynanış ödeme duvarına konmamalı |

Dördüncü raporun ilk uygulama önerisi P0 doğrulama paketidir: PR #7 toplam değişikliklerinin kontrolü, Game Over/restart ve mod akışı, bozuk kayıt güvenliği. Bu öneri mevcut PR #7 işlerinin yeniden uygulanması anlamına gelmez; yalnızca doğrulama ve kalan boşlukları belirleme işidir.

## Dördüncü rapor kaynak kaydı

- [2026-11-27 dördüncü kapsamlı proje denetimi](reviews/2026-11-27-ai-review-04.md)


## Altıncı rapordan gelen README-temelli doğrulama kuyruğu (2026-11-27)

**Kanıt sınırı:** Altıncı rapor, kaynak dosyaları, PR #7 diff/commit'leri, test içerikleri ve CI günlüklerini inceleyemediğini açıkça belirtiyor. Aşağıdaki maddeler yeni kod bulguları değil; README kapsamını ve önceki raporlardaki riskleri yeniden kontrol etme başlıklarıdır.

| ID | Altıncı rapordaki başlık | Rapor önceliği | Önceki kayıtlarla ilişkisi | Arşivdeki işlem |
|---|---|---:|---|---|
| R6-PRE-01 | PR #7 diff/commit/test/CI incelemesi | P0 | PR #7 önceki denetimlerde incelendi; mevcut düzeltmeler bu rapor nedeniyle yeniden yapılmayacak | Yalnızca güncel HEAD ve mevcut kanıtla eşleştir; raporun erişemediği alanları not et |
| R6-PRE-02 | Bozuk/eski kayıt, şema doğrulama ve kurtarma | P0 | PR #7 runtime doğrulama ve checkpoint v3 / eski sürüm uyumluluğu kapsamıyla örtüşür | Var olan doğrulama ve migration testleriyle karşılaştır; eksik test varsa ekle, baştan yazma |
| R6-PRE-03 | Game Over/restart/async oturum yarışı | P0 | PR #7 event wrapper, terminal lock, session ID ve cleanup korumalarıyla örtüşür | Var olan korumaları yeniden uygulama; yalnızca kapsanmayan regresyon senaryolarını doğrula |
| R6-PRE-04 | Modun başlatma/kayıt/resume/restart boyunca korunması | P0 | PR #7 mode validation ve invalid stored mode fallback ile örtüşür | Mevcut test kapsamını karşılaştır; eksik giriş noktası varsa hedefli test |
| R6-PRE-05 | Reklam hata izolasyonu ve timeout | P0 | Önceki raporlarda reklam/UMP hata akışı şüpheleri bulunuyor | Ads init/show callback zinciri ve timeout/fallback kodunu incele; kanıt olmadan hata ilan etme |
| R6-PRE-06 | Android lifecycle ve ses odağı | P1 | R1/R3/R4/R5 cihaz yaşam döngüsü kapsamıyla örtüşür | Kod incelemesi ile cihaz testini ayır; cihaz işleri backlog'da |
| R6-PRE-07 | Canvas FPS/frame time/bellek/pil ölçümü | P1 | R1-D3/D4 ve R5-F11 ile ilişkili | Önce ölçüm; ölçüm olmadan optimizasyon veya sürekli render iddiası yok |
| R6-PRE-08 | Labirent fuzz/BFS erişilebilirlik ve reducer/motor entegrasyon testleri | P1 | Mevcut BFS ve test paketiyle ilişkili; rapor test envanterini doğrulayamamış | Güncel test listesini kontrol et; yalnızca eksik property/integration senaryolarını ekle |
| R6-PRE-09 | İmzalı Play AAB ve signing secret hazırlığı | P1 | PR #7 debug signing secret'larından ayrı Play release signing akışı | Debug secret ve Play AAB secret'larını karıştırma; workflow/secret durumunu ayrı doğrula |
| R6-PRE-10 | Onboarding, özel yem geri bildirimi, tema ve dokunma hedefleri | P2 | R3/R4/R5 UX ve tema başlıklarıyla örtüşür | Mevcut UI kapsamını ve görsel kanıtı incele; yeni tasarım kararlarını ayır |
| R6-PRE-11 | Günlük challenge, kampanya, kozmetik, hayalet rekor, akıllı labirent, dinamik zorluk | P3–P4 | Önceki raporların ürün fırsatlarıyla büyük ölçüde örtüşür | Stabilizasyon sonrasına bırak; yeni özellikleri teknik borç gibi sunma |
| R6-PRE-12 | Play Store varlıkları, reklam politikası, reklamsız sürüm ve crash analitiği | P5 | Önceki monetizasyon/yayın kararlarıyla örtüşür | Ürün kararı ve yayın hazırlığı; mevcut oynanışın önüne alınmasın |

### Altıncı raporun ilk paketine ilişkin uygulama notu

Rapor P0-1…P0-5'i ilk paket olarak öneriyor. Ancak P0-1…P0-4'ün ana konuları PR #7'nin önceki incelemelerinde ve mevcut PR kapsamındaki korumalarda zaten ele alındı. Bu nedenle bunlar yeniden geliştirme işi değil, mevcut kod/test kanıtıyla eşleştirme işidir. P0-5 reklam hata izolasyonu ise ayrı bir kod incelemesi gerektirir. Raporun “README'de yalnızca reducer/utility testleri var” çıkarımı da güncel test dosyaları ve CI kanıtıyla karşılaştırılmadan gerçek test kapsamı olarak kabul edilmemelidir.

### Altıncı raporun katkı ve sınır özeti

- README üzerinden modlar, yem türleri, temalar, kariyer/başarım, PWA/Android ve reklam kapsamını tek envanterde toplar.
- BFS/labirent, özel yem UX, reklam hata izolasyonu, localStorage veri güvenliği ve Play AAB hazırlığını tekrar gündeme getirir.
- Kaynak kodu, satır referansları, PR diff'i, test sonuçları, CI günlükleri ve görsel ekranlar doğrulanmadığı için yeni doğrulanmış hata üretmez.
- Raporun AAB için saydığı `ANDROID_KEYSTORE_*` secret'ları, PR #7 debug APK için gereken `ANDROID_DEBUG_*` secret'larından ayrıdır.

## Altıncı rapor kaynağı

- [2026-11-27 altıncı kapsamlı proje denetimi](reviews/2026-11-27-ai-review-06.md)


## Yedinci rapordan gelen doğrulama ve planlama başlıkları (2026-11-27)

**Kanıt sınırı:** Rapor 07, main ve PR #7 diff'ini incelediğini beyan ediyor. Ancak bu arşivleme sırasında kod/manifest/CI yeniden açılıp doğrulanmadı. Aşağıdaki iddialar rapor kaynaklıdır; teyit edilmeden doğrulanmış hata veya yeni geliştirme işi sayılmamalıdır.

| ID | Başlık | Rapor önceliği | Önceki kayıtlarla ilişkisi | Yapılacak işlem |
|---|---|---:|---|---|
| R7-01 | AndroidManifest.xml boş iddiası | P0 | Önceki raporlarda doğrulanmamış yeni iddia | Dosyanın GitHub ham içeriğini, cap sync çıktısını ve assembleDebug sonucunu kontrol et; boş olduğu doğrulanmadan değiştirme |
| R7-02 | PR #7 main'e merge edilmediği için main'de düzeltmelerin bulunmaması | P0 | PR #7'nin açık/draft kalması yönündeki mevcut karar ile uyumlu | Main/PR diff farkı olarak tut; merge kararı kullanıcı onayı ve mevcut test sürecine bağlı |
| R7-03 | GameOverScreen geçersiz mode erişimi | P0 | Önceki raporlarda mode guard bulunduğu not edilmişti | Güncel PR #7 dosyasını ve geçersiz mode testini karşılaştır; doğrulanırsa hedefli düzeltme |
| R7-04 | Atomik kayıt ve savedGame testleri | P1 | PR #7 checkpoint v3 ve runtime validation kapsamıyla örtüşür | PR'da mevcut korumaları tekrar yazma; main/PR farkı ve test kapsama boşluğu kontrolü |
| R7-05 | Beş ESLint max-lines uyarısı | P2 | Önceki CI raporlarıyla uyumlu | Refactor öncesi uyarı veren dosya/kuralları güncel CI'dan doğrula; düşük riskli parçalara böl |
| R7-06 | Reklam hata izolasyonu | P1 | R2/R5/R6 reklam callback ve fallback başlıklarıyla örtüşür | Ads init/load/show hata yolları ve timeout davranışını kod/test ile incele |
| R7-07 | Modern tema görsel regresyonu | P2 | Önceki tema ve görsel doğrulama backlog'u | Ekran bazlı görsel kontrol; cihaz testleri bekleyen iş olarak kalır |
| R7-08 | Tutorial / ilk üç hamle yönlendirmesi | P2 | Önceki UX önerileriyle ilişkili | Ürün kapsamı kararı; stabilizasyon öncesi zorunlu değil |
| R7-09 | FPS, frame time, bellek ve pil profiling | P2 | R5-F11 ve R6-PRE-07 ile örtüşür | Önce ölçüm, sonra optimizasyon; 60 FPS hedefini cihaz sınıfına göre değerlendir |
| R7-10 | Günlük challenge, kozmetik, yerel skor tablosu, replay, hareketli engel ve bölüm modu | P3–P4 | Önceki ürün fırsatlarıyla büyük ölçüde örtüşür | Stabilizasyon sonrası ürün planı; mevcut teknik borç olarak sınıflandırma |
| R7-11 | Play Store varlıkları, IAP, crash analytics | P5 | Önceki yayın/monetizasyon kararlarıyla ilişkili | Kullanıcı kararı, gizlilik ve yayın hazırlığı gerektirir |

### Rapor 07'nin ilk paketine ilişkin karar notu

P0-1 (manifest) ve P0-3 (GameOverScreen) raporda yeni kritik iddialar olarak öne çıkıyor; ancak henüz bağımsız doğrulanmadılar. P0-2 PR #7'nin merge edilmesi anlamına gelir ve mevcut kullanıcı talimatı olmadan yapılmayacaktır. P0-4 debug signing secret'ları kullanıcı tarafından sağlanmadığı için APK çıktısı üretildiği varsayılamaz. PR #7'de zaten bulunan checkpoint/session/mode korumaları yeniden geliştirme işi olarak açılmayacak.

### Rapor 07 cihaz doğrulama listesi

Raporun I bölümündeki cihaz senaryoları mevcut DEVICE_TEST_BACKLOG ile birleştirilmiştir. Kullanıcıdan hemen test yapması istenmez; cihaz testi yapılana kadar doğrulanmamış olarak kalırlar.

## Yedinci rapor kaynağı

- [2026-11-27 yedinci kapsamlı proje denetimi](reviews/2026-11-27-ai-review-07.md)

## Sekizinci rapordan gelen doğrulama kuyruğu (2026-11-27)

**Kapsam notu:** Rapor 08, main ile PR #7 HEAD arasındaki 80 commit/33 dosyayı kod akışı üzerinden incelediğini bildiriyor. Aşağıdaki maddeler rapor iddialarıdır; bu arşiv güncellemesinde kaynak kod veya CI üzerinden bağımsız doğrulanmadı.

| ID | İddia / iş | Rapor önceliği | Önceki raporlarla ilişkisi | Arşiv durumu / sonraki adım |
|---|---|---:|---|---|
| R8-T1 | AndroidManifest'te VIBRATE izni yok | P0-adjacent | R1-D5 ve R3/R7 Android izin başlıklarıyla ilişkili | Manifest ve gerçek cihazda haptics doğrulaması; izin ekleme kararı bundan sonra |
| R8-T2 / PF-01 | Reducer bonus aralığı profil bazlı (modern 8), App zamanlama kontrolü sabit 10 | P2 | R2-F1/R5-F1 bonus spawn/sayaç bulgusuyla aynı ana issue | Reducer event payload, App ref ve başarı istatistiği için profil bazlı test |
| R8-T3 | App.tsx yaklaşık 47KB; session/persistence/lifecycle/reklam ayrıştırılmalı | P1 | Önceki max-lines ve bakım maliyeti başlıklarıyla ilişkili | Davranış değiştirmeyen hook çıkarımı; güncel lint ve test kanıtı |
| R8-T4 | visibilitychange listener tick başına yeniden kuruluyor | P2 | Lifecycle/performance kuyruklarıyla ilişkili | Effect bağımlılıkları ve callback/ref kullanımı kodda doğrulansın |
| R8-T5 | Tek toast state ardışık mesajları kaybettirebilir | P2 | Yeni UX iddiası | Kuyruk davranışı ve ardışık olay testi |
| R8-T6 | Clipboard başarısız olsa da Maze Editor başarı mesajı gösterilebilir | P2 | Maze Editor cihaz uyumluluğuyla ilişkili | Clipboard success/failure UI testi |
| R8-T7 | StatusBar sabit rengi Modern tema ile çatışabilir | P2 | R7/R5 tema görsel doğrulamasıyla ilişkili | Native status bar ve tema geçişi doğrulaması |
| R8-T8 | Tahta dolu durumda fallback yem yılan üzerine gelebilir | P2 | Erken victory / dolu tahta tartışmalarıyla ilişkili | freeCells null/reset köşe senaryosu testi |
| R8-T9 | Bölüm/kilometre taşı ilerleme eğrisi eksik | P3 | Bölüm tabanlı içerik önerileriyle örtüşür | Ürün/oyun tasarımı kararı |
| R8-PROD-01 | Mod farklılaşması zayıf; Survival/Classic/Time Attack kimliği | P2/P3 | PF-06 ve önceki ürün kararlarıyla örtüşür | DEC-08/20 ile birlikte ele al |
| R8-REL-01 | Signing secrets ve gerçek cihaz doğrulaması bekliyor | P0/P5 | Önceki raporlarla ortak | Mevcut bekleyen yayın/cihaz işleri; yeni bir kod hatası değil |
| R8-REL-02 | Repo lisansı yok iddiası | P5 | Önceki yayın hazırlığıyla ilişkili | Güncel repo lisans metadata/dosyasını kontrol et; lisans seçimi kullanıcı kararı |

### Sekizinci raporun ürün önerileri

- **P2:** Özel yem telegrafı ve ilk karşılaşma ipuçları; wrap kuralının oyuncuya açıklanması.
- **P3:** Bölüm tabanlı labirent, Survival'a daralan alan/engel dalgaları, seed'li günlük meydan okuma.
- **P4:** Kişisel rekor hayaleti, kozmetik kaplamalar, skor paylaşım kartı, dinamik zorluk.

### Rapor 08'in ilk uygulama paketi (rapor önerisi)

1. R-01: Dört Android debug signing secret'ı ekle ve workflow'u yeniden çalıştır.
2. R-04/R8-T2: Bonus spawn aralığı ve zaman damgası tutarsızlığını doğrula/düzelt.
3. R-05: Klasik ve Modern temalarda görsel doğrulama.
4. R-02: APK hazır olduktan sonra cihaz testleri.

Bu sıralama öneridir; secrets değerleri hiçbir dokümana yazılmaz ve PR #7 kullanıcı onayı olmadan değiştirilmez.

### Önceki raporlarla birleştirme notları

- R8-T2, PF-01/R2-F1/R5-F1 ile tek bonus spawn/sayaç issue'su olarak izlenmeli; rapor 08 yeni bağımsız doğrulama sayılmaz.
- R8-T1, R1-D5 ve R7 manifest iddiasıyla ilişkili; manifest dosyasının içeriği ve gerçek haptics davranışı ayrı ayrı doğrulanmalı.
- R8-T3, önceki max-lines/tek dosya bakım borcu başlıklarıyla birleştirilebilir; davranış değiştiren refactor önerilmemeli.
- R8-T4, R8-T5, R8-T6 ve R8-T7 yeni spesifik kontrol başlıklarıdır; kaynak/test kanıtı olmadan doğrulanmış issue statüsüne yükseltilmemeli.
- R8-T8, erken victory ve dolu tahta kuralı ile aynı test alanında değerlendirilmeli; ürün davranışı kararı ayrıca tutulmalı.

## Kaynak

- [2026-11-27 sekizinci AI denetim raporu](reviews/2026-11-27-ai-review-08.md)


## Dokuzuncu rapordan gelen doğrulama kuyruğu (2026-11-27)

**Kapsam notu:** Rapor 09, main'i 49 commit ve PR #7 HEAD'ini `27b05512` olarak tanımlıyor. Arşivleme sırasında kaynak kod veya CI yeniden incelenmedi. Rapor metni bazı kod parçaları, cihaz testi satırları ve son cümle bakımından kesik geldi; eksikler tahminle tamamlanmadı.

| ID | İddia / iş | Öncelik | Önceki raporlarla ilişki | Sonraki doğrulama |
|---|---|---:|---|---|
| R9-01 | Corrupt LocalStorage JSON için safeParse/migration/fallback eksik olabilir | P0 | Rapor 06/07/08 storage güvenilirliği başlıklarıyla örtüşür; PR #7 checkpoint v3 ve savedGame doğrulamasıyla çelişebilir | Güncel storage.ts, savedGame.ts ve tüm parse çağrılarını incele; bozuk JSON ve legacy migration testleri çalıştır |
| R9-02 | Mode validation inherited key'ler: `toString`, `__proto__`, `constructor` | P0 | Önceki PR #7 incelemelerinde `isGameMode`/own-property koruması bulunduğu bildirilmişti | Gerçek validator ve regression testlerini incele; zaten güvenliyse yeni iş açma |
| R9-03 | Timer/RAF cleanup ve eski oturumun yeni oyuna sızması | P0 | Rapor 08 session-id koruması; Rapor 05/07 deferred-work incelemeleri | GameLoop/useEffect cleanup, session id, timeout/interval/RAF iptalini kaynakta doğrula; restart stress testi |
| R9-04 | Android AdMob metadata yapılandırmasının cap sync sonrası sırası | P1 | Yeni yapılandırma sırası iddiası | package scripts, cap sync ve configure script çağrı sırasını doğrula |
| R9-05 | Package ID yazımı `com.aiwhishpers.snakemaze2026` korunmalı | P1/karar | Mevcut paket kimliği; typo düzeltmesi geriye dönük uyumluluğu bozabilir | Play Console uygulama kaydı ve native/config tüm appId eşleşmelerini doğrula; izinsiz değiştirme |
| R9-06 | Maze 2x2 engeller için kenar tamponu | P2 | Rapor 08 wrap/engel davranışı kararıyla ilişkili | Spawn algoritması ve wrap geçişleri; portal kapanma testi |
| R9-07 | 25x25+ haritada Canvas FPS/allocation benchmark | P1 | Rapor 08 Canvas ölçüm önerisi | Gerçek cihazda ve kontrollü benchmark ortamında ölç; hedefleri ölçüm öncesi kesin kabul kriteri sayma |
| R9-08 | Modern tema ile Classic tema görsel regresyonu | P2 | Rapor 07/08 tema görsel doğrulama bekliyor | Ekran görüntüsü karşılaştırma seti |
| R9-09 | Rewarded continue / kozmetik / günlük seed / Ghost Snake | P3–P4 | Önceki raporların retention/monetization önerileriyle örtüşür | Ürün önceliği ve reklam UX kararı; teknik iş olarak otomatik açma |

**Çelişki kontrolü:** R9-01'in “LocalStorage JSON parse crash” iddiası, PR #7'deki kayıt doğrulama ve atomik checkpoint açıklamalarıyla doğrudan karşılaştırılmalıdır. R9-02'nin inherited key iddiası da önceki raporlarda `isGameMode`/hasOwnProperty korumasının bulunduğu beyanıyla çelişebilir. Bu iki madde mevcut kod incelenmeden doğrulanmış hata sayılamaz.

 
## Onuncu rapordan gelen doğrulama ve plan başlıkları (2026-11-27)

| ID | İddia / iş | Rapor önceliği | Önceki raporlarla ilişki | Arşiv durumu / sonraki adım |
|---|---|---:|---|---|
| R10-01 | `App.tsx` 1300+ satır God Component; tick başına geniş render maliyeti | P1 | R1-D4 bonus sayaç render maliyeti ve R5/R8 Canvas performans kaygılarıyla ilişkili, ancak aynı bulgu değil | **Ölçülmemiş risk.** Önce React Profiler ile App/GameScreen/SnakeCanvas render sayısı ve commit süresi ölç; sonra küçük, hedefli ayrıştırma |
| R10-02 | Smooth Motion sırasında React TICK ve Canvas interpolation senkronizasyonu jank yaratabilir | P1 | R1-D3/R5-F11/R8 Canvas benchmark/R9 büyük harita performansıyla ilişkili | **Ölçülmemiş risk.** 60/120Hz cihazlarda frame-time ve dropped-frame ölç; ölçüm olmadan game loop mimarisini baştan yazma |
| R10-03 | `queueNativeWrite` kuyruğu ve arka plan `flushStorage()` bağlantısı | P1 | PF-02 Game Over kalıcılığı ve R9 corrupt-save/migration iddialarından ayrı ama storage güvenilirliğiyle ilişkili | App lifecycle hook'unu, flush çağrısını ve hata yollarını kaynakta doğrula; process kill senaryosu cihaz testi |
| R10-04 | Capacitor listener cleanup async race | P1 | R5/R7/R9 lifecycle/listener cleanup başlıklarıyla örtüşür | soundManager/ads listener kurulum-kaldırma akışını ve async cleanup'ı kaynakta doğrula; cihaz testi |
| R10-05 | Swipe threshold 25px sabit değeri farklı ekranlarda yanlış yön oluşturabilir | P2 | Kontrol/erişilebilirlik testleriyle ilişkili | Önce farklı viewport'larda yanlış yön oranını ölç; ayar slider'ı ancak ihtiyaç kanıtlanırsa ürün kararı |
| R10-06 | AdMob/UMP ağ hataları UI'ı bloke edebilir | P0/P1 | R3-08 ve önceki reklam/lifecycle testleriyle örtüşür | Init/consent/rewarded zincirinde timeout, offline ve earned-reward akışlarını test et |
| R10-07 | UMP consent (P0-3 ve P5-2 tekrar) | P0/P5 | Aynı ürün/teknik alan iki ayrı roadmap satırında | Tek kabul kriterleri setine birleştir; Google Play hedef ülkeleri ve güncel SDK/policy gereksinimlerini doğrula |
| R10-08 | Daily Maze, Ghost Player, kozmetik, AI Director, kariyer ve topluluk labirentleri | P2–P4 | Önceki retention/monetization önerileriyle büyük ölçüde örtüşür | Yeni issue açma; mevcut ürün kararları ve stabilizasyon sonrasına bırak |

### Rapor 10 için önerilen uygulama sırası

1. **Önce CI artifact:** Dört `ANDROID_DEBUG_*` secret kullanıcı tarafından GitHub Actions Secrets'a eklenmeden debug APK üretildiği varsayılmamalı. Secret değerleri dokümana yazılmaz.
2. **Önce ölç, sonra optimize et:** App.tsx render maliyeti ve Canvas frame-time profiler/benchmark ile ölçülmeden React context veya rAF mimarisi refactor'ı yapılmamalı.
3. **Storage/lifecycle doğrulaması:** appStateChange → flushStorage → native write zincirini kaynak ve gerçek cihaz testleriyle doğrula.
4. **Reklam testleri:** UMP consent, offline/slow network, rewarded earned callback ve UI non-blocking davranışı tek senaryo setinde test et.
5. **Ürün özellikleri:** Daily Maze/Ghost/Cosmetics/AI Director gibi P3/P4 işleri stabilizasyon ve yayın engelleri kapanmadan başlatma.

**Teknik doğruluk notu:** Checkpoint v3 atomik yazma riskini azaltır fakat işletim sistemi process kill koşullarında “sıfır veri kaybı” garantisi değildir. BFS erişilebilirlik kontrolü de yalnızca kontrol ettiği harita/durum varsayımları kapsamında garanti sağlar; tüm oynanış koşulları için %100 oynanabilirlik olarak genellenmemelidir. Rapor 10'un “Canvas loop ayrıştırma kodlandı” envanter notu ile P1-2'deki ayrıştırma önerisi çelişkili/belirsizdir; güncel kod incelenmeden iş tamamlandı sayılmaz.

 
## On birinci rapordan gelen işler ve çapraz doğrulamalar (2026-11-27)

| ID | İş / bulgu | Öncelik | Önceki raporlarla ilişki | Durum / sonraki adım |
|---|---|---:|---|---|
| R11-01 | Android debug signing secrets ve artifact üretimi | P0 | Önceki raporların tamamında yayın engeli | Dört `ANDROID_DEBUG_*` secret kullanıcı tarafından güvenli şekilde tanımlanmalı; workflow çalıştırılıp APK ve SHA-256 fingerprint doğrulanmalı |
| R11-02 | `mergeable_state=unstable` nedeni | P1 | PR #7 CI ve draft durumu | Başarısız Android check'i, branch protection ve required checks ayrı ayrı incelenmeli; yalnız rapor ifadesinden kök neden çıkarılmamalı |
| R11-03 | Game Over spam / hızlı restart | P0 cihaz QA | R2/R5/R7/R9/R10 cihaz testleriyle örtüşür | 10–50 hızlı Try Again, eski timer/session ve reklam callback'leri ile birlikte test |
| R11-04 | Snapshot reddi sonrası kurtarma/karantina UX'i | P1 | R9 bozuk kayıt şüphesi ve R11 test kanıtı iddiası | Parser testleri ile App recovery path'i ayrı incelenmeli; geçersiz kayıt sessizce silinmeden önce güvenli yedek/karantina stratejisi |
| R11-05 | CSS `[class*=...]` seçicileri | P2 | R5-F13 ve tema görsel doğrulama işleriyle örtüşür | Yeni utility sınıflarıyla çakışma ve Classic/Modern ekran görüntüsü regresyon testi |
| R11-06 | Checkpoint v3 / WebView flush / process kill | P1 cihaz QA | R10-03 ve önceki storage güvenilirliği maddeleri | Atomik checkpoint'i sıfır veri kaybı garantisi sayma; arka plan, flush, process kill ve restore senaryolarını ölç |
| R11-07 | Canvas optimizasyonu kazancı | P1 ölçüm | R10-02 ve R5/R8/R9 performans bulguları | Kod optimizasyonu ile gerçek FPS/pil kazanımını ayır; 60/120Hz cihazlarda frame-time benchmark |
| R11-08 | Paket kimliği korunması | Release guard | Önceki raporlarla uyumlu | `com.aiwhishpers.snakemaze2026` kullanıcı kararı olmadan değiştirilmemeli |

### Rapor 11 sonrası önerilen sıralama

1. Önce signing secrets ve Android artifact hattı; secret değerleri rapora/commite konulmaz.
2. `unstable` mergeability durumunun required checks/branch protection açısından nedenini teşhis et.
3. APK ile Game Over spam, lifecycle/audio, checkpoint restore ve tema görsel testlerini yap.
4. Geçersiz kayıtların reddedilmesi ile kullanıcı verisinin güvenli kurtarılması arasındaki UX kararını ver.
5. CSS ve Canvas performans iddialarını görsel regresyon ve profiler verisiyle doğrula.

**Sınır:** Rapor 11'in MCP kaynak kontrolleri arşivleme sırasında yeniden yürütülmedi. Bu nedenle tabloda rapor bulguları ile bizim bağımsız doğruladığımız durumlar birbirinden ayrılmıştır.
