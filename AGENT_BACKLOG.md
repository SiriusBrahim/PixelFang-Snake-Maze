# Pixelfang — Agent Backlog

> Bu dosya, daha sonra toplu olarak çalışacak kodlama ajanının yaşayan görev listesidir. Her yeni inceleme/geliştirme sonrasında güncellenecektir. Tamamlanma yalnızca kanıtla işaretlenir.

## Güncel teknik durum — 25.11.2026

- PR #5: [Android stability PR](https://github.com/SiriusBrahim/PixelFang-Snake-Maze/pull/5) açık ve draft.
- PR #5 head: `deacd3fc7a538186efba450f456a46cf998955a0`.
- Güncel head CI run [`45658889161`](https://github.com/SiriusBrahim/PixelFang-Snake-Maze/actions/runs/45658889161) başarılı: 110 test/15 dosya, lint ve build geçti.
- Güncel head Android run [`45658889143`](https://github.com/SiriusBrahim/PixelFang-Snake-Maze/actions/runs/45658889143) başarılı: Capacitor sync, validation ve debug APK build/upload adımları geçti.
- Güncel head debug APK artifact ID `15043169802`, boyut 9.620.295 bayt (~9,62 MB), SHA-256 `3d50fba9a4b35db824c742ab36ae91cbb4f5e5ef6898b33f093b90173e7433a3`; artifact 23.02.2027 tarihine kadar saklanıyor.
- Signed Play AAB adımları secret/üretim yapılandırması gerektirdiği için bu koşuda atlandı.
- Gerçek Android cihaz doğrulaması henüz yapılmadı. Ses lifecycle, 60/120 Hz, safe-area/HUD, özel yiyecek görsel doğrulaması ve v1/v2 kayıt geri yükleme kontrolleri bekliyor.
- Ajan, PR #5'te zaten kodlanmış işleri yeniden uygulamayacak; yalnızca backlog'daki kalan doğrulama/eksik işleri ele alacak.

## Çalışma kuralları

- Ajan çalışması, mevcut teknik çalışma PR #5 (`fix/android-stability-audio-canvas-bfs`) sonuçlandırıldıktan sonra başlayacak.
- Ajan işe başlamadan önce PR #5'in son hâlini ve bu dosyayı okuyacak; mevcut değişiklikleri geri almayacak veya üzerine yazmayacak.
- Aynı dosyalarda eş zamanlı geliştirme yapılmayacak. Çakışan dosyalarda işler sıralı yürütülecek.
- Mümkünse değişiklikler ayrı ve anlamlı commit'lere bölünecek; büyük kapsamlı işler ayrı PR olabilir.
- Test/cihaz kanıtı olmadan görev tamamlandı sayılmayacak.
- Durumlar ayrı raporlanacak: Kodlandı / CI doğrulandı / Emülatör doğrulandı / Gerçek cihaz doğrulandı.
- Android package ID değiştirilmeyecek: `com.aiwhishpers.snakemaze2026`.
- Var olan özellikler önce incelenecek; çalışan kod gereksiz yere yeniden yazılmayacak.

## P0–P1 — Android kararlılığı ve temel oynanış

### PF-A01 — Safe-area ve HUD cihaz doğrulaması
- [ ] Çentik/kamera deliği, sistem çubukları ve gesture navigation alanlarını kontrol et.
- [ ] Farklı ekran oranlarında skor, duraklatma, HUD ve oyun alanını doğrula.
- [ ] Küçük/büyük ekranlarda taşma ve kesilme olmadığını kanıtla.
- **Kabul:** Kritik HUD öğeleri sistem alanlarının altında kalmaz veya kesilmez.
- **Mevcut durum:** Kodda safe-area düzenlemeleri var; gerçek cihaz/emülatör teyidi bekliyor.

### PF-A02 — Engel olmayan ipucu bandı
- [ ] İpucunun oyun alanını/kontrolleri kapatmadığını doğrula.
- [ ] Küçük ekranlarda taşma, okunabilirlik ve gösterim süresini kontrol et.
- [ ] İpucu görünürken oyun etkileşimini test et.
- **Kabul:** İpucu hareketi veya kritik HUD öğelerini engellemez.

### PF-A03 — Kayıt ve sürüm geçişi
- [x] v1 kayıt ayrıştırma ve v1 → güncel sürüm varsayılanları için otomatik test.
- [x] v2 kayıt yükleme; mod, yiyecek türü, zorluk, süre ve bonus timer restore testi.
- [x] Bozuk/eksik koordinat, yön, sürüm, çakışan hücre ve süre verisinde güvenli geri dönüş testleri.
- [ ] Android cihazda mevcut v1/v2 kayıtlarıyla gerçek devam etme testi.
- **Kabul:** Eski kayıtlar açılır; hatalı veri uygulamayı çökertmez.
- **Mevcut durum:** `savedGame.ts` doğrulayıcı/ayrıştırıcı eklendi ve App restore akışı bu yardımcıyı kullanıyor; güncel head CI ve Android debug APK build başarılı; cihaz testi ayrıca gerekli.

### PF-A04 — Ses yaşam döngüsü
- [ ] Ana ekrana dönme, uygulama değiştirme, ekran kilitleme ve gelen arama senaryoları.
- [ ] Arka plandan dönüşte sesin otomatik başlamadığını doğrula.
- [ ] Sesin yalnızca açık kullanıcı etkileşimiyle yeniden açıldığını doğrula.
- **Kabul:** Arka planda ses çalmaz; foreground'a dönüşte kendiliğinden başlamaz.
- **Mevcut durum:** PR #5'te lifecycle korumaları eklendi; cihaz senaryoları bekliyor.

### PF-A05 — 60/120 Hz ve Canvas performansı
- [ ] 60 Hz ve 120 Hz ekranlarda hareket hızını karşılaştır.
- [ ] Uzun oturumda FPS/jank ve CPU/pil davranışını incele.
- [ ] Arka plana geçiş/dönüşte RAF döngüsünü doğrula.
- **Kabul:** Oyun hızı yenileme hızından bağımsız; arka planda gereksiz animasyon çalışmaz.

### PF-A06 — Özel yiyecek yön göstergesi
- [ ] UP/DOWN/LEFT/RIGHT yönlerini gerçek oyun akışında görsel olarak doğrula.
- [ ] Yiyecek yeniden doğduğunda göstergenin hedefini kontrol et.
- [ ] Engel/yılan gövdesi nedeniyle erişilemeyen hücrelerin hedef olmadığını doğrula.
- **Kabul:** Gösterge doğru yönlendirir ve erişilemeyen hedefe işaret etmez.
- **Mevcut durum:** Yön hesaplama ve temel testler var; görsel/oynanış doğrulaması bekliyor. Var olan hint UI tekrar yazılmayacak.

### PF-A17 — Native lifecycle listener cleanup yarışı
- [ ] `App.tsx` içindeki asenkron Capacitor import/listener kayıt akışını incele.
- [ ] Effect cleanup, import/listener kayıtları tamamlanmadan çalışırsa sonradan eklenen listener'ların sızmadığını garanti et.
- [ ] Kısmi listener kayıt hatasında daha önce eklenmiş listener'ları temizle.
- [ ] Ekran/dependency değişimlerinde yinelenen listener kalmadığını test et.
- **Kabul:** Effect dispose edildikten sonra listener kaydı tamamlanırsa listener'lar hemen kaldırılır; kısmi hata sızıntı bırakmaz.
- **Mevcut durum:** PR #5'e `disposed` koruması, listener kayıtları sonrası dispose kontrolü ve kısmi kayıt hatasında temizlik eklendi. Güncel head CI ve Android debug APK build başarılı; gerçek Android lifecycle doğrulaması ayrıca gerekli.

### PF-A18 — Erişilebilir yiyecek regresyon testini güçlendir
- [x] Kapalı cep gerçekten erişilemez mi, BFS ile açıkça doğrula.
- [x] Erişilemeyen hücrenin yiyecek olarak seçilmediğini çoklu deterministik seed ile doğrula.
- [x] Ulaşılabilir hücre kalmaması, ancak kapalı cepte boş hücre kalması durumunda victory davranışını doğrula.
- **Kabul:** Test, erişilemeyen hücreye yiyecek doğma regresyonunu deterministik yakalar.
- **Mevcut durum:** PR #5'te kapalı cep assertion'ı, 20 deterministik seed ve yalnızca erişilemeyen boş hücre kaldığında victory testi eklendi. Güncel head CI başarılı.

## P2 — Marka ve görsel kalite

### PF-A07 — Marka/görsel tutarlılık
- [ ] Renk, tipografi, ikon ve buton dilini incele.
- [ ] Menü, oyun, duraklatma ve sonuç ekranlarında görsel bütünlüğü sağla.
- [ ] Farklı ekran yoğunluklarında okunabilirliği doğrula.
- **Kabul:** Tutarlı görsel dil; mevcut işlevlerde regresyon yok.

### PF-A08 — Logo ve wordmark
- [x] Ölçeklenebilir Pixelfang logosu ve uygulama içi wordmark varyantı hazırla.
- [ ] Açık/koyu zeminlerde ve farklı boyutlarda okunabilirliği doğrula.
- **Kabul:** Oyun temasına uygun, farklı boyutlarda net marka varlıkları.
- **Mevcut durum:** `public/brand/pixelfang-horizontal.svg`, `pixelfang-stacked.svg`, `public/icons/pixelfang.svg` ve `BrandLockup` bileşeni mevcut; görsel kalite/ölçek kontrolü bekliyor.

### PF-A09 — Android ikonları ve splash
- [x] Adaptive icon foreground/background.
- [x] Monochrome icon.
- [x] 512×512 mağaza ikonu.
- [x] Splash görselleri ve Android kaynaklarına entegrasyon.
- [ ] Gerçek cihaz launcher/splash görünümü kontrolü.
- **Kabul:** Doğru format/boyutlar; ikon kırpılmaz, splash doğru görünür.
- **Mevcut durum:** Native adaptive/monochrome kaynakları ve `public/icons/pixelfang-512.png` mevcut; yalnızca cihaz görünümü doğrulaması bekliyor.

## P3 — Oyun modları ve editör

### PF-A10 — Oyun modları uçtan uca
- [x] Dört modun (Maze, Classic, Time Attack, Survival) çekirdek başlangıç/oynanış/süre/engel/puan kuralları reducer testleriyle doğrulandı.
- [x] Modlar arası engel, özel yiyecek, hız ve zaman kuralı izolasyonu için testler mevcut.
- [ ] Menü giriş/geri dönüş, yeniden başlatma ve devam etme akışlarını Android cihazda doğrula.
- **Kabul:** Modlar kendi kurallarına uygun; durum sızıntısı yok.
- **Mevcut durum:** Çekirdek kurallar ve otomatik testler mevcut; UI/device uçtan uca doğrulaması bekliyor.

### PF-A11 — Özel yiyecek geri bildirimi
- [x] Tür bazında skor, hız, büyüme/küçülme ve ses event mantığı için reducer/food testleri mevcut.
- [x] Reduced-motion altında kuyruklanmış parçacık/pulse efektlerinin temizlenmesi ve Canvas RAF davranışı için test eklendi.
- [ ] Yön ipucu, animasyon ve seslerin gerçek Android cihazda görsel/işitsel doğrulamasını yap.
- **Kabul:** Anlaşılır geri bildirim; erişilebilirlik ve oyun mantığıyla uyumlu davranış.
- **Mevcut durum:** Oyun mantığı otomatik testli; görsel/işitsel cihaz kontrolü bekliyor.

### PF-A12 — Labirent Editörü
- [x] Labirent oluşturma/düzenleme; duvar ve engel ekleme/silme.
- [x] Geçersiz yerleşimleri engelleme ve oynanabilirlik kontrolü.
- [x] Kaydetme, yükleme, düzenlemeye devam etme ve silme akışı eklendi.
- [ ] Düzenlenen labirentte gerçek oyun akışını cihazda doğrula.
- **Kabul:** Labirent bozulmadan saklanır; oynanamaz düzenler oyun başlamadan tespit edilir.
- **Mevcut durum:** PR #5'te kayıtlı labirent seçme/yükleme, mevcut kaydı güncelleme ve silme UI'ı ile update/delete testleri eklendi; güncel head CI ve Android debug APK build başarılı.

## P4 — Yayın ve uzun vadeli özellikler

### PF-A13 — AdMob ve yayın akışı
- [x] Test/üretim reklam kimliklerini ayır; debug varsayılanı Google demo birimleri.
- [x] Web tarafında reklam/reward no-op ve sahte ödül engeli mevcut.
- [x] UMP consent, rewarded earned event ve interstitial 3/4/5 oyun eşiği için otomatik testler mevcut.
- [ ] Üretim kimliklerini Play release secret/config ile doğrula.
- [ ] Reklam sıklığı ve oyun akışına etkisini gerçek cihazda incele.
- [ ] Release signing/AAB ve mağaza gizlilik gerekliliklerini tamamla.
- **Kabul:** Debug/test derlemesi gerçek reklam göstermez; release yapılandırması açık ve doğrulanabilir.
- **Mevcut durum:** Test güvenliği ve temel reklam akışı kod/test seviyesinde mevcut; Play release secrets ve cihaz/mağaza kontrolü bekliyor.

### PF-A14 — Günlük görevler
- [x] Görev üretimi, ilerleme ve tamamlanma takibi.
- [x] Bozuk/tekrarlı/uyumsuz kayıtlı görevleri güvenli biçimde yenileme ve geçerli ilerlemeyi yeniden yükleme testleri eklendi.
- [ ] Gün değişimi/saat sınırı ve gerçek cihazda uygulama yeniden başlatma doğrulaması.
- **Kabul:** Görevler tutarlı yenilenir; ilerleme kaybolmaz.
- **Mevcut durum:** Günlük görev mantığı zaten vardı; PR #5'te persisted quest schema doğrulaması ve iki regresyon testi eklendi; güncel head CI ve Android debug APK build başarılı.

### PF-A15 — Başarımlar
- [x] Başarım koşulları ve tetikleme noktaları.
- [x] Bilinmeyen ID'leri reddetme ve tekrar açılmayı/tekrarlı bildirimi engelleme testleri eklendi.
- [x] Kalıcı kayıt ve kullanıcı arayüzü mevcut.
- [ ] Gerçek cihazda toast/oturum davranışını doğrula.
- **Kabul:** Başarımlar doğru koşulda bir kez açılır ve kalıcıdır.
- **Mevcut durum:** PR #5'te `unlock` yalnızca tanımlı achievement ID'lerini kabul ediyor; idempotency testleri eklendi; güncel head CI ve Android debug APK build başarılı.

### PF-A16 — Liderlik tablosu
- [ ] Çevrimiçi/çevrimdışı mimari önerisi.
- [ ] Skor doğrulama, hile ve tekrar gönderim risklerini değerlendir.
- [ ] Gizlilik/kullanıcı kimliği yaklaşımını tanımla.
- [ ] Uygulama ve test planı hazırla.
- **Kabul:** Güvenli tasarım kararı verilmeden canlıya alınmaz.

### PF-A19 — Bağımlılık güvenliği ve GitHub Actions runtime güncellemesi
- [ ] CI `npm ci` çıktısında raporlanan 7 orta seviye güvenlik uyarısının tam `npm audit` kaynağını ve etkilenen bağımlılık zincirini çıkar.
- [ ] Güvenli, geriye uyumlu güncellemeleri belirle; körlemesine `npm audit fix` çalıştırma.
- [ ] GitHub Actions loglarında görülen Node.js 20 → 24 runtime uyarısı için kullanılan action sürümlerini resmi uyumlulukla kontrol et.
- [ ] Güncellemeleri ayrı commit/PR ile uygula; test/lint/build ve Android APK doğrulamasını çalıştır.
- **Kabul:** Orta seviye bulguların kaynağı belgelenmiş ve güvenli olanlar giderilmiş; workflow action'ları desteklenen runtime ile uyumlu.
- **Mevcut durum:** Son CI logunda 7 moderate npm audit bulgusu ve bazı action'lar için Node 20 deprecation uyarısı görüldü; ayrıntılı audit ve güncelleme bekliyor.

## Ajan teslim raporu

Her görevde raporla:
1. Değiştirilen dosyalar ve teknik açıklama.
2. Çalıştırılan testler ve gerçek sonuçları.
3. CI bağlantısı/çıktısı.
4. Emülatör/gerçek cihaz kanıtı (varsa).
5. Açık riskler ve kullanıcı/cihaz erişimi gerektiren işler.
6. Durumun hangi kanıta dayanarak güncellendiği.

## Güncelleme ilkesi

Bu dosya yaşayan backlog'dur. PR #5 ve sonraki incelemelerde tamamlanan, kısmen tamamlanan, yeni ortaya çıkan veya kapsam dışına alınan işler güncellenecek. PR #5'te zaten uygulanmış değişiklikler ajana yeniden yaptırılmayacak; yalnızca eksik doğrulama ve kalan işler atanacak.
