# PixelFang – Ana Geliştirme ve Yayına Hazırlık Planı

> **Plan sürümü:** 1.0 — 27 Kasım 2026  
> **Takip yöntemi:** Tamamlanan işler [x], bekleyen işler [ ] olarak işaretlenir. Bir iş ancak kod, test, CI veya cihaz kanıtı görüldüğünde tamamlandı sayılır.  
> **Kapsam:** En fazla 5 aşama. Bu dosya aktif ve kısa ana takip planıdır; raporların ayrıntılı teknik kuyruğu için [Birleşik Geliştirme Yol Haritası](DEVELOPMENT_ROADMAP.md) ve [Cihaz Test Listesi](DEVICE_TEST_BACKLOG.md) kullanılır.

## Çalışma kuralları

1. Aşamalar öncelik sırasıyla yürütülür; önceki aşamanın çıkış kriterleri karşılanmadan sonraki aşamaya geçilmez.
2. Kodda zaten bulunan özellikler yeniden geliştirilmez; yalnızca eksik doğrulama veya gerçek bir açık varsa iş açılır.
3. Her değişiklikten sonra ilgili testler çalıştırılır ve GitHub kanıtı kaydedilir.
4. Fiziksel cihaz gerektiren maddeler, cihaz testi gerçekten yapılana kadar beklemede kalır.
5. PR #7 açık ve draft kalır. Kullanıcı açıkça istemedikçe merge/close edilmez.
6. Android signing secret değerleri hiçbir kaynak dosyasına, rapora veya commit'e yazılmaz.
7. Uygulama paket kimliği com.aiwhishpers.snakemaze2026 kullanıcı kararı olmadan değiştirilmez.

## Aşama 1 — Kritik doğrulama ve Android APK hattı

**Amaç:** PR #7'nin entegrasyon durumunu açıklığa kavuşturmak, kritik kod risklerini doğrulamak ve imzalı debug APK üretimini mümkün kılmak.

### Mevcut durumda tamamlanmış olanlar
- [x] PR #7 kapsamında Game Over click-event hatasına karşı callback düzeltmesi ve mod doğrulama korumaları eklendi.
- [x] PR #7 kapsamında oyun oturumu / eski oturum yan etkileri için korumalar eklendi.
- [x] PR #7 kapsamında checkpoint v3 ve eski kayıt sürümleriyle uyumluluk çalışması eklendi.
- [x] Önceki CI doğrulamasında verify, 17 test dosyası / 126 test, TypeScript, lint, build ve audit başarılı raporlandı. Yeni değişikliklerden sonra yeniden çalıştırılacak.

### Bekleyen işler
- [ ] PR #7 için mergeable_state=unstable nedenini bul: başarısız check, required check ve branch protection durumlarını birbirinden ayır.
- [ ] Aşağıdaki dört debug signing secret'ını GitHub Actions Secrets'a güvenli şekilde tanımla: ANDROID_DEBUG_KEYSTORE_BASE64, ANDROID_DEBUG_KEYSTORE_PASSWORD, ANDROID_DEBUG_KEY_ALIAS, ANDROID_DEBUG_KEY_PASSWORD.
- [ ] Android workflow'unu yeniden çalıştır; debug APK artifact'inin üretildiğini doğrula.
- [ ] APK imzasını ve sertifika fingerprint'ini doğrula; SHA-256 dosya özeti al.
- [ ] Bonus yemek spawn aralığı, sayaç ve puan/istatistik akışındaki raporlanmış tutarsızlığı kaynak kod ve profil bazlı testlerle doğrula; hata varsa düzelt.
- [ ] Geçersiz/bozuk kayıt veya reddedilen snapshot durumunda mevcut kayıtların sessizce kaybolmadığını doğrula; gerekiyorsa güvenli kurtarma/karantina davranışı ekle.
- [ ] Kritik değişikliklerden sonra test, TypeScript, lint, build ve audit kontrollerini yeniden çalıştır.

**Aşama çıkış kriteri:** unstable nedeni açıklanmış; debug APK üretilmiş ve imzası doğrulanmış; kritik kayıt ve bonus akışları test kanıtıyla güvenceye alınmış olmalı. PR #7'nin merge kararı bu aşamanın otomatik sonucu değildir; ayrıca kullanıcı kararı gerekir.

## Aşama 2 — Android gerçek cihaz ve yaşam döngüsü testleri

**Amaç:** Otomatik testlerin kapsamadığı gerçek Android davranışını doğrulamak.

- [ ] Game Over, Try Again ve hızlı art arda yeniden başlatma senaryolarını test et.
- [ ] Oyun sürerken uygulamayı arka plana al, geri getir, ekranı kilitle/aç ve uygulamayı yeniden başlat.
- [ ] Checkpoint kaydetme, geri yükleme, WebView arka plan flush ve process-kill senaryolarını test et.
- [ ] Ses ve titreşimin arka plan/ön plan geçişlerinde doğru davrandığını doğrula.
- [ ] Android geri tuşu, ekran yönü, safe-area ve sistem çubuklarını kontrol et.
- [ ] Klasik ve Modern temaları gerçek ekran görüntüleriyle karşılaştır.
- [ ] AdMob/UMP akışını internet yok, yavaş bağlantı, izin/consent reddi ve reklam yükleme hatası senaryolarında test et.
- [ ] Farklı ekran yenileme hızlarında dokunmatik kontrol, FPS/frame-time ve uzun oturum davranışını ölç.

**Aşama çıkış kriteri:** Kritik oyun akışlarında çökme veya beklenmeyen kayıt kaybı bulunmamalı; yaşam döngüsü, ses, tema ve reklam davranışı cihaz kanıtıyla doğrulanmalı.

## Aşama 3 — Oyun mekaniği, performans ve teknik kalite

**Amaç:** Mevcut oynanışı tutarlılaştırmak ve ölçümle kanıtlanan teknik sorunları gidermek.

- [ ] Survival ve Maze modlarının oynanış farkını ürün kararıyla netleştir; gerekiyorsa Survival'a ayırt edici mekanik ekle.
- [ ] Bonus/özel yem üretimi, süre, puan ve istatistik hesaplarını uçtan uca test et.
- [ ] Time Attack süresini tick sayısına değil gerçek geçen zamana göre doğrula.
- [ ] Erken victory ve tahta dolması durumlarında istenen oyun kuralını belirle; testlerle sabitle.
- [ ] Canvas ve React render maliyetini profiler/benchmark ile ölç; yalnızca ölçümle doğrulanan darboğazları optimize et.
- [ ] App.tsx ve ilgili büyük bileşenlerde davranışı değiştirmeyen, testlerle korunan modülerleştirme yap.
- [ ] Storage/lifecycle flush, Capacitor listener cleanup ve reklam hata izolasyonunu kaynak kod ve testlerle doğrula.
- [ ] Maze Editor clipboard sonucu, toast bildirim kuyruğu, görev saat dilimi ve erişilebilirlik/dokunma hedefi bulgularını doğrula; gerekli düzeltmeleri yap.
- [ ] ESLint max-lines uyarılarını ve Android sürüm/manifest yapılandırmasını güncel CI ve kaynak üzerinden kontrol et.

**Aşama çıkış kriteri:** Oyun kuralları kararlı, performans darboğazları ölçülmüş, gerekli teknik borç hedefli biçimde azaltılmış ve regresyon testleri başarılı olmalı.

## Aşama 4 — Oynanış derinliği ve yeni özellikler

**Amaç:** Stabilizasyon tamamlandıktan sonra tekrar oynanabilirliği artıran özellikleri kontrollü biçimde eklemek.

Önerilen sıra:
- [ ] Seed tabanlı günlük labirent / günlük meydan okuma.
- [ ] Ghost Snake: kişisel rekorun veya önceki koşunun tekrar gösterimi.
- [ ] Survival'a özgü ilerleme, engel dalgaları veya daralan alan gibi ayırt edici mekanikler.
- [ ] Yeni engeller ve hareketli engel türleri.
- [ ] Yılan kozmetikleri ve özelleştirme.
- [ ] Harita paylaşım kodu ve topluluk labirentleri.
- [ ] Bölüm/görev modu ve yerel liderlik tablosu.

**Aşama çıkış kriteri:** Her yeni özellik için ürün amacı, kabul kriteri ve testler tanımlanmış; mevcut kayıt, performans ve oyun modlarıyla uyumu doğrulanmış olmalı. Bu aşamadaki öneriler otomatik olarak taahhüt edilmiş kapsam değildir; öncelik kullanıcı kararıyla belirlenir.

## Aşama 5 — Google Play yayın hazırlığı

**Amaç:** Oyunu mağaza yayınına hazır, imzalı ve sürdürülebilir bir ürüne dönüştürmek.

- [ ] Play Store release signing yapılandırmasını doğrula; debug imzasından ayrı tut.
- [ ] İmzalı AAB üret ve imza/uygulama kimliği doğrulamasını yap.
- [ ] versionCode / versionName ve uygulama sürüm kaynaklarını tutarlı hâle getir.
- [ ] Gizlilik politikası, Data safety, reklam/consent ve izin açıklamalarını güncel Google Play gerekliliklerine göre kontrol et.
- [ ] Uygulama ikonu, ekran görüntüleri, kısa/tam açıklama ve mağaza materyallerini hazırla.
- [ ] Kapalı test ve gerekli testçi sürecini tamamla; gelen hataları gider.
- [ ] Çökme raporlama/analitik ihtiyacını gizlilik ve bakım maliyetiyle birlikte değerlendir.
- [ ] Reklam sıklığını ve olası reklamsız satın alma modelini kullanıcı deneyimi açısından karara bağla.
- [ ] Yayın öncesi son regresyon ve cihaz testlerini tamamla.

**Aşama çıkış kriteri:** İmzalı AAB, mağaza materyalleri, politika beyanları ve test kanıtları hazır; bilinen kritik hata kalmamış olmalı.

---

## İlerleme özeti

| Aşama | Durum |
|---|---|
| 1. Kritik doğrulama ve Android APK | Devam edecek |
| 2. Gerçek cihaz testleri | Bekliyor |
| 3. Mekanik ve teknik kalite | Bekliyor |
| 4. Yeni özellikler | Bekliyor |
| 5. Google Play yayını | Bekliyor |

**Güncelleme kaydı:** Her tamamlanan işte ilgili kutu [x] yapılacak; gerekiyorsa kanıt (commit, PR, CI run, test sonucu veya cihaz testi notu) aynı maddenin altına eklenecek. Bir bulgu mevcut kodda zaten çözülmüşse yeniden geliştirme açılmayacak; doğrulama kanıtı eklenerek kapatılacak.

## İlgili belgeler

- [Birleşik Geliştirme Yol Haritası](DEVELOPMENT_ROADMAP.md) — 11 AI incelemesinin birleştirilmiş teknik bulguları ve kaynak raporları.
- [Cihaz Test Listesi](DEVICE_TEST_BACKLOG.md) — gerçek Android cihazda doğrulanması gereken senaryolar.
- [İnceleme kararları](REVIEW_DECISIONS.md) — ürün ve teknik karar bekleyen konular.
- [Doğrulanmış sorunlar](VERIFIED_ISSUES.md) — kanıt seviyesi ayrılmış sorun envanteri.
