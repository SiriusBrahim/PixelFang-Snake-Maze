# PixelFang – Birleşik Geliştirme Yol Haritası

> **Durum:** Birleşik doğrulama ve geliştirme taslağı – 26 ve 27 Kasım 2026 tarihli iki AI raporundan türetilmiştir. Bu arşiv güncellemesi sırasında raporlardaki kod iddiaları bağımsız olarak yeniden doğrulanmamıştır. Raporların kendi sınıflandırması ile bağımsız doğrulama birbirinden ayrıdır.

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
