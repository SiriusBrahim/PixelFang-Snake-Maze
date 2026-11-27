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
