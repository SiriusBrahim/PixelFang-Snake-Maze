# PixelFang – Birleşik Geliştirme Yol Haritası

> **Durum:** Başlangıç taslağı – 26 Kasım 2026 tarihli ilk AI inceleme raporundan türetilmiştir. Bu listedeki maddeler henüz bu arşiv çalışması sırasında kaynak kod üzerinde yeniden doğrulanmadı. Raporun kendi sınıflandırması ile bağımsız doğrulama birbirinden ayrıdır.

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
