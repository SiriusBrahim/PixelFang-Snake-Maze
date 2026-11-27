# PixelFang – Doğrulanmış Bulgular

> Bu dosya yalnızca güncel kaynak kodu, CI veya cihaz testiyle bağımsız biçimde doğrulanan bulguları içerir. İlk AI raporundaki iddialar bu dosyaya otomatik aktarılmaz.

## Doğrulama kuyruğu

İlk rapordan gelen ve bağımsız kontrol bekleyen bulgular:
- Tema / özel renk regresyonu — [R1-D1](DEVELOPMENT_ROADMAP.md#ilk-rapordan-gelen-öncelikli-doğrulama-kuyruğu)
- `storage.getNumber` fallback — R1-D2
- Canvas rAF — R1-D3
- Bonus sayaç render maliyeti — R1-D4
- Android VIBRATE izni — R1-D5
- Storage anahtar kataloğu — R1-D7
- Time Attack zaman hesabı — R1-D8
- Entegrasyon test kapsamı — R1-D9

Henüz bu arşiv oluşturma işlemi kapsamında bu maddeler için kaynak kod incelemesi yapılmadı. Doğrulama tamamlandıkça her maddeye dosya/satır, commit ve test kanıtı eklenecek.


## İkinci rapordan gelen doğrulama kuyruğu

Aşağıdaki maddeler ikinci raporda kodla doğrulandığı belirtilmiş olsa da bu arşiv güncellemesinde bağımsız olarak kontrol edilmedi; bu nedenle doğrulanmış bulgular listesine alınmadı:

- Bonus yem spawn aralığı / sayaç uyumsuzluğu — PF-01 / R2-F1.
- Game Over sonrası kalıcılık işlemlerinin iptal edilebilir timeout içinde olması — PF-02 / R2-F2.
- Erken victory koşulu — R2-F3 (tasarım kararı da içeriyor).
- Survival modunun Maze'den esaslı biçimde ayrışmaması — R2-F4.
- Android versionName / package sürüm tutarsızlığı ve allowBackup davranışı — R2-F5.
- Reklam başarısız olduğunda sayaç eşiğinin tüketilmesi — R2-ADS-01.

Her madde güncel branch/commit, dosya/satır ve uygun test kanıtı ile doğrulanmadan bu bölümde "doğrulandı" statüsüne yükseltilmemelidir.


## Üçüncü rapordan gelen doğrulama kuyruğu

Üçüncü rapor erişim kapsamının depo kökü, README ve PR #7 özet/commit geçmişiyle sınırlı olduğunu bildiriyor. Bu nedenle aşağıdaki başlıklar kaynak kodla bağımsız doğrulanmış kabul edilmez:

- Viewport pinch-zoom kısıtlaması ve erişilebilirlik etkisi — R3-05.
- Android WebView localStorage kota/temizleme ve veri kaybı riski — R3-06.
- Android donanım geri tuşu / Pause / çıkış davranışı — R3-07.
- AdMob/UMP asenkron başlatma, timeout ve ağ hatası davranışı — R3-08.
- Beş dosyadaki ESLint max-lines uyarılarının güncel dosya listesi ve sayısı — R3-04; CI çıktısıyla yeniden doğrulanmalı.

Üçüncü raporun PR #7 Game Over, signing ve cihaz testi değerlendirmeleri önceki raporlarla aynı başlıklardadır; bunlar yeni bağımsız kod doğrulaması sayılmaz. Her bulgu güncel branch/commit, dosya/satır ve uygun test kanıtıyla kontrol edilmelidir.


## Beşinci rapordan gelen doğrulama kuyruğu

Beşinci inceleyici aşağıdaki maddeleri kodla doğruladığını veya şüpheli/ölçülmemiş bulduğunu bildiriyor. Bu arşivleme sırasında kaynak kodu yeniden okunmadı ve testler tekrar çalıştırılmadı; dolayısıyla hiçbiri bu dosyada doğrulanmış bulgu statüsüne yükseltilmedi.

- Bonus yem profil aralığı / App sayaç uyuşmazlığı ve özel yem skor sıçramaları — R4-F1 / PF-01.
- Game Over sonrası kalıcılığın iptal edilebilir timeout içinde olması ve tek try/catch zinciri — R4-F2 / PF-02.
- Erken victory koşulu — R4-F3.
- Survival/Maze kural farkının sınırlı olması — R4-F4.
- Android versionName/package sürüm uyuşmazlığı, allowBackup ve orientation — R4-F5.
- Mystery yem ses dispatch'inin erişilemez olması — R4-F6.
- Günlük görevlerin UTC gün sınırı — R4-F8.
- Rewarded reklamın oynanış ödülü vermemesi — R4-F9.
- Time Attack tick tabanlı süre sapması — R4-F10.
- Bonus sayacı kaynaklı Canvas render maliyeti ve animasyon/ölçek iddiaları — R4-F11.
- MainActivity eski system UI API'si / SDK 36 edge-to-edge davranışı — R4-F12.
- Modern tema CSS override yoğunluğu — R4-F13.
- Dil düğmesi dokunma hedefi ve splash/status-bar yapılandırması — R4-F14.

**Doğrulama koşulu:** Her madde için güncel PR #7 branch/commit, dosya/satır, hedefli otomatik test veya ölçüm; Android/UX davranışları için gerektiğinde gerçek cihaz kanıtı eklenmelidir. Raporun kendi “kodla doğrulandı” etiketi tek başına yeterli değildir.


## Dördüncü rapordan gelen ön denetim kuyruğu

Dördüncü rapor, kendi açıklamasına göre kaynak kodu ve PR diff'ini doğrulayamadığı için aşağıdaki maddeler genel doğrulama başlıklarıdır; kodla doğrulanmış hata olarak değerlendirilmemelidir:

- PR #7 toplam diff'i ve PR #5/#6'dan devralınan değişiklikler.
- Game Over, yeni oyun/tekrar deneme, mod doğrulaması ve eski oturumdan gelen gecikmiş işlemler.
- Bozuk kayıt, kayıt sürüm uyumluluğu ve kurtarma davranışı.
- Android lifecycle, ses/titreşim, safe-area, geri tuşu ve ekran yönü.
- Canvas çizim maliyeti, FPS, pil ve bellek.
- Klasik/Modern 2027 tema tutarlılığı ve özel yemlerin anlaşılabilirliği.
- Labirent çözülebilirliği, modların gerçek kural farkları ve Maze Editor.
- Reklam hata izolasyonu, izinler, bağımlılık/lisans ve Google Play hazırlığı.

Bu başlıklar, beşinci rapordaki daha spesifik iddialarla eşleştirilerek yinelenen işler birleştirilmeli. Herhangi bir madde güncel kaynak, dosya/satır ve test kanıtı olmadan doğrulanmış bulgu statüsüne yükseltilmemelidir.


## Altıncı rapordan gelen kapsam notu (2026-11-27)

Altıncı rapor README ve erişilebilen genel GitHub bilgileri üzerinden hazırlanmıştır; raporun kendi beyanına göre kaynak kodu, PR #7 diff'i, test içerikleri ve CI günlükleri incelenememiştir. Bu nedenle aşağıdaki alanlar doğrulanmış hata değil, önceki kuyruklarla eşleştirilecek kontrol başlıklarıdır:

- PR #7 diff/commit/test/CI kapsamı — R6-PRE-01.
- Bozuk/eski kayıt ve şema dayanıklılığı — R6-PRE-02; PR #7 checkpoint v3 ve runtime validation ile karşılaştırılmalı.
- Game Over/restart/async oturum yarışı — R6-PRE-03; PR #7 session-id/terminal-lock/cleanup korumaları tekrar uygulanmamalı.
- Oyun modu doğrulaması — R6-PRE-04; PR #7 fallback ve mode validation testleriyle karşılaştırılmalı.
- Reklam hata izolasyonu/timeout — R6-PRE-05.
- Android lifecycle/ses odağı — R6-PRE-06.
- Canvas performans ölçümü — R6-PRE-07.
- Labirent fuzz/BFS ve reducer-motor entegrasyon testleri — R6-PRE-08.
- İmzalı Play AAB secret/workflow — R6-PRE-09.
- UX/tema/özel yem ve yeni ürün fikirleri — R6-PRE-10…R6-PRE-12.

Bu raporun “README'de reducer/utility testleri belirtiliyor” ifadesi, mevcut test sayısını veya kapsamını tek başına kanıtlamaz. Hiçbir madde güncel kaynak, CI/test veya cihaz kanıtı olmadan doğrulanmış bulgular bölümüne taşınmamalıdır.


## Yedinci rapordan gelen doğrulama bekleyen iddialar (2026-11-27)

Rapor 07 main ve PR #7 diff'ini incelediğini beyan ediyor; aşağıdaki maddeler bu arşiv güncellemesinde yeniden doğrulanmadı. Bu nedenle henüz doğrulanmış hata olarak işaretlenmemelidir:

- **R7-01 – AndroidManifest.xml boş:** Ham içerik 0 satır döndü iddiası. GitHub dosya içeriği, Capacitor sync ve Android assemble çıktısı ile doğrula.
- **R7-03 – GameOverScreen geçersiz mod çökmesi:** Önceki incelemelerde mode guard bulunduğu belirtilmişti. Güncel kod ve geçersiz mode testiyle uzlaştır.
- **R7-04 – Main'de atomik olmayan kayıt:** PR #7 checkpoint v3 düzeltmesiyle main/PR farkı olarak ele al; PR içindeki işi yeniden açma.
- **R7-05 – Beş max-lines uyarısı:** Güncel CI uyarı veren dosya/kurallarını teyit et.
- **R7-06 – Reklam hata izolasyonu:** Load/init/show hata yolları ve timeout için kod/test kanıtı gerekli.
- **R7-07 – Modern tema görsel tutarlılığı:** Görsel ve cihaz doğrulaması bekliyor.
- **R7-09 – Canvas performansı:** FPS/frame-time/bellek/pil ölçümü yapılmadan performans sorunu veya çözümü kesinleştirilmemeli.

Raporun PR #7 merge edilmediği ve debug secret'larının eksik olduğu ifadeleri, önceki arşivde kayıtlı PR durumu ve secret durumu ile uyumludur. Bunlar kod hatası değil, entegrasyon/yayın engeli durumlarıdır.

## Rapor 08 — bağımsız doğrulama bekleyen iddialar (2026-11-27)

Aşağıdaki maddeler rapor 08'de kod akışıyla doğrulandığı belirtilen iddialardır; bu dokümantasyon güncellemesinde kaynak kod/CI/cihaz üzerinden yeniden doğrulanmadı. Bu nedenle **doğrulanmış hata listesine alınmamış, bekleyen inceleme maddeleri** olarak tutulur.

| ID | İddia | Gerekli kanıt |
|---|---|---|
| R8-T1 | AndroidManifest'te VIBRATE izni bulunmaması | Güncel manifest içeriği, Capacitor haptics kullanımı ve cihaz testi |
| R8-T2 / PF-01 | Bonus spawn aralığının reducer profili ile App sabit 10 kontrolü arasında uyuşmaması | Reducer/App kod akışı, modern/retro profil testleri, bonus istatistik testi |
| R8-T3 | App.tsx boyutu ve sorumluluk yoğunluğu | Güncel dosya boyutu, lint çıktısı; refactor yapılacaksa davranış eşdeğerliği testleri |
| R8-T4 | visibilitychange listener'ın TICK başına yeniden kurulması | Effect bağımlılıkları, callback/ref akışı ve profiler |
| R8-T5 | Toast mesajlarının ardışık olaylarda kaybolması | enqueueToast uygulaması ve ardışık toast testi |
| R8-T6 | Clipboard başarısızlığında yanıltıcı başarı mesajı | MazeEditorScreen clipboard success/failure yolları ve WebView testi |
| R8-T7 | Sabit StatusBar renginin Modern temayla çatışması | capacitor config, native StatusBar API ve iki tema ekran görüntüleri |
| R8-T8 | Dolu tahta/reset fallback'inde yemin yılan üzerine düşmesi | freeCells null senaryosu ve reducer testi |
| R8-REL-02 | Lisans dosyası/metadata eksikliği | Güncel repository root ve GitHub license metadata |

R8-T2, daha önceki PF-01/R2-F1/R5-F1 kayıtlarıyla birleştirilmelidir; ayrı bir bonus hatası açılmamalıdır.


## Dokuzuncu rapordan eklenen karar / kimlik notları

- **Package ID:** `com.aiwhishpers.snakemaze2026` yazımı raporda typo benzeri görünse de mevcut Play Console kaydıyla eşleşiyorsa değiştirilmemelidir. Önce package/appId tutarlılığı doğrulanmalı; kullanıcı onayı olmadan değişiklik yok.
- **Rewarded continue:** Ölüm sonrası tek seferlik devam hakkı önerisi, mevcut rewarded reklam politikasına ek ürün kararıdır; temel oynanış paywall arkasına alınmamalı. DEC-04/13/19 ile birlikte ele alınmalı.
- **Maze paylaşımı:** Custom maze export/share kapsamı; şimdilik yerel kalması önerisi, kullanıcı kararı bekler.
- **Modern tema:** Premium design system kapsamı, DEC-30/33 ile birleştirilmeli; görsel inceleme olmadan varsayılan tema kararı verilmemeli.
