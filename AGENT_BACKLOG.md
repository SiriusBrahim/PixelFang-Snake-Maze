# Pixelfang — Agent Backlog

> Bu dosya, daha sonra toplu olarak çalışacak kodlama ajanının yaşayan görev listesidir. Her yeni inceleme/geliştirme sonrasında güncellenecektir. Tamamlanma yalnızca kanıtla işaretlenir.

## Güncel teknik durum — 26.11.2026

- PR #5: [Android stability PR](https://github.com/SiriusBrahim/PixelFang-Snake-Maze/pull/5) açık ve draft.
- PR #5 head: `26757a5170c64cafbc10d183f50e23ecd53354f3` (ölüm sonrası kilit, canvas altı durum şeridi ayrımı ve Android versionCode artışı eklendi; CI başarılı, Android APK build sürüyor).
- Önceki head `deacd3f` CI run [`45658889161`](https://github.com/SiriusBrahim/PixelFang-Snake-Maze/actions/runs/45658889161) başarılı: 110 test/15 dosya, lint ve build geçti. Head `ad33ff8` CI run [`45666452196`](https://github.com/SiriusBrahim/PixelFang-Snake-Maze/actions/runs/45666452196) başarılı: duplicate snake cell regresyon testi dahil 110 test/15 dosya, lint/build geçti; Node 20 runtime uyarısı görülmedi. Head `491e158` CI run [`45666898446`](https://github.com/SiriusBrahim/PixelFang-Snake-Maze/actions/runs/45666898446) ve head `a421ca8` CI run [`45667685522`](https://github.com/SiriusBrahim/PixelFang-Snake-Maze/actions/runs/45667685522) başarılı: audit-fix aday lockfile ile test/lint/build geçti ve npm audit 0 bulgu raporladı. İkinci koşu `package-lock.json` güncellemesini PR dalına kalıcı commit etti (`dbea829`). Head `dfb999` CI run [`45667964453`](https://github.com/SiriusBrahim/PixelFang-Snake-Maze/actions/runs/45667964453) başarılı: npm audit 0 bulgu, 111 test/15 dosya, lint ve build geçti.
- Önceki head `deacd3f` Android run [`45658889143`](https://github.com/SiriusBrahim/PixelFang-Snake-Maze/actions/runs/45658889143) başarılı: Capacitor sync, validation ve debug APK build/upload adımları geçti. Head `491e158` Android run [`45666898424`](https://github.com/SiriusBrahim/PixelFang-Snake-Maze/actions/runs/45666898424) başarılı: debug APK 9.620.288 bayt (~9,62 MB), artifact ID `15046449691`. Head `6a8a8cf` Android run `45667318669` Maven Central HTTP 429 (Too Many Requests) nedeniyle Gradle dependency resolve aşamasında başarısız oldu; bu kod hatası değil, repository rate limit. Head `a421ca8` Android run [`45667685909`](https://github.com/SiriusBrahim/PixelFang-Snake-Maze/actions/runs/45667685909) başarılı; güncel head `dfb999` Android run [`45667964562`](https://github.com/SiriusBrahim/PixelFang-Snake-Maze/actions/runs/45667964562) da başarılı: debug APK build/upload tamamlandı, artifact ID `15048078312`, boyut 9.620.284 bayt (~9,62 MB), ZIP SHA-256 `457c80d1bbc4014ae7868bc4bda72e4e304a3e3b834c0d495859ccbe04a09a2d`.
- Güncel head debug APK artifact ID `15048078312`, boyut 9.620.284 bayt (~9,62 MB), artifact ZIP SHA-256 `457c80d1bbc4014ae7868bc4bda72e4e304a3e3b834c0d495859ccbe04a09a2d`; artifact 23.02.2027 tarihine kadar saklanıyor.
- Signed Play AAB adımları secret/üretim yapılandırması gerektirdiği için bu koşuda atlandı.
- Gerçek Android cihaz doğrulaması henüz yapılmadı. Ses lifecycle, 60/120 Hz, safe-area/HUD, özel yiyecek görsel doğrulaması ve v1/v2 kayıt geri yükleme kontrolleri bekliyor. Güncel head CI 111 test/15 dosya ve npm audit 0 bulgu ile başarılı; Android debug APK artifact ID `15048078312`.
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
- [x] Bozuk/eksik koordinat, yön, sürüm, çakışan hücre, yinelenen yılan hücresi ve süre verisinde güvenli geri dönüş testleri.
- [ ] Android cihazda mevcut v1/v2 kayıtlarıyla gerçek devam etme testi.
- **Kabul:** Eski kayıtlar açılır; hatalı veri uygulamayı çökertmez.
- **Mevcut durum:** `savedGame.ts` doğrulayıcı/ayrıştırıcı eklendi ve App restore akışı bu yardımcıyı kullanıyor; son eklemede aynı koordinatı iki kez içeren yılan kayıtları da reddediliyor. Bu son eklemenin CI doğrulaması bekleniyor; cihaz testi ayrıca gerekli.

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
- [x] CI `npm ci` çıktısında raporlanan 7 orta seviye güvenlik uyarısının tam `npm audit` kaynağını ve etkilenen bağımlılık zincirini çıkar.
- [x] Güvenli, geriye uyumlu güncellemeleri belirle; kontrollü `npm audit fix --package-lock-only --ignore-scripts` ile aday lockfile üret ve CI testleriyle doğrula.
- [x] GitHub Actions loglarında görülen Node.js 20 → 24 runtime uyarısı için kullanılan action sürümlerini resmi uyumlulukla kontrol et.
- [x] Güncellenmiş lockfile'ı ayrı commit ile PR dalına uygula; test/lint/build ve audit doğrulamasını çalıştır.
- **Kabul:** Orta seviye bulguların kaynağı belgelenmiş ve güvenli olanlar giderilmiş; workflow action'ları desteklenen runtime ile uyumlu.
- **Mevcut durum:** CI audit raporu 7 moderate bulgu gösterdi: `typescript-eslint` ve onun `@typescript-eslint/*` alt paketleri 8.72.2; savunmasız `minimatch` kopyası `@typescript-eslint/typescript-estree` altında 10.2.6. `minimatch` GHSA-g3hv-75wg-m249 için etkilenen aralık `>=7.0.0 <11.0.1`, düzeltilmiş sürüm `11.0.1+`. `typescript-eslint` 8.74.0 upstream sürümü `minimatch ^11.0.1` kullanıyor; mevcut `^8.72.2` aralığı bu sürüme izin veriyor. Tüm yedi bulguda npm `fixAvailable: true` bildirdi. Güvenli çözüm `package-lock.json` içinde kalıcı olarak commit edildi (`dbea829`): `typescript-eslint` ve `@typescript-eslint/*` paketleri 8.74.0, `minimatch` 11.0.9. Güncel head `dfb999` CI run `45667964453` 0 audit bulgusu, 111 test/15 dosya, lint ve build başarısıyla tamamlandı. CI artık `npm audit --audit-level=moderate` ile güvenlik kapısı uyguluyor. Node 24 destekli action güncellemelerinden sonra hem güncel CI hem Android loglarında Node 20 runtime uyarısı görülmedi. `eslint@9.39.5` ayrıca deprecated uyarısı veriyor; bu güvenlik düzeltmesinden ayrı, ESLint 10 major geçişi olarak değerlendirilecek.

### PF-A20 — Ölüm sonrası oyun döngüsünün kilitlenmesi (yeni kullanıcı bildirimi)
- [x] Ölüm/collision terminal event'i üretildikten sonra interval'ın tekrar TICK göndermesiyle event'in yeniden üretilmesini önle.
- [x] Terminal event (collision/victory/time_up) sonrasında RESET/RESTORE dışında reducer state değişimini engelle.
- [x] Ölümden sonraki TICK ve yön girdisinin aynı terminal state'i koruduğunu test et.
- [x] CI test/lint/build doğrulamasını çalıştır.
- [ ] Gerçek Android cihazda ölme senaryosunu tekrar et; Game Over ekranı ve Tekrar Dene/Ana Menü aksiyonlarını doğrula.
- **Kabul:** Ölüm anında yalnızca bir terminal event işlenir; oyun döngüsü yeni hareket/event üretmez; Game Over ekranı açılır ve yeniden başlatma çalışır.
- **Mevcut durum:** `src/utils/gameReducer.ts` terminal event sonrasında oyun state'ini kilitliyor; `gameReducer.test.ts` regresyon testi eklendi. Güncel CI başarılı. Android APK build ve gerçek cihaz doğrulaması bekleniyor. İlk kullanıcı raporu, test cihazında ölüm sonrası donma; gerçek cihaz ayrıntısı henüz alınmadı.

### PF-A21 — Android APK mevcut kurulum üzerine güncellenemiyor
- [x] Android versionCode'u CI workflow run numarasından üret; her APK/AAB build'inde monoton artmasını sağla.
- [ ] Uygulama dağıtım kanalını netleştir: Play internal/closed testing kurulumu mu, önceki CI debug APK mı?
- [ ] Play'den yüklenen kurulum için aynı Play app-signing kimliğiyle Play Console internal/closed track üzerinden AAB güncellemesi üret ve doğrula.
- [ ] Sideload/debug APK dağıtımı devam edecekse sabit debug keystore'u GitHub Actions secret'larıyla yapılandır; her run'da yeni ephemeral debug signing key kullanılmasını engelle.
- [ ] Kurulu eski uygulamanın imzası bilinmiyorsa güncelleme testini önce aynı imza ile yap; farklı imza nedeniyle bir defalık kaldırıp yeniden kurulum gerekebileceğini açıkça belirt.
- **Kabul:** Desteklenen dağıtım yolunda mevcut kurulum kaldırılmadan yükseltilebilir; package ID `com.aiwhishpers.snakemaze2026` korunur; versionCode her sürümde artar.
- **Mevcut durum:** `android/app/build.gradle` artık `ANDROID_VERSION_CODE` ortam değişkenini okuyor; Android workflow debug APK ve signed AAB komutlarına `github.run_number` geçiriyor. CI testleri başarılı. İmza uyuşmazlığı hâlâ çözülmedi: PR workflow debug APK'sı varsayılan Gradle debug keystore ile imzalanıyor; her GitHub-hosted runner kendi anahtarını oluşturur. Play'den gelen APK ise Play app-signing key ile imzalanır. Play app signing key'e veya kalıcı debug keystore secret'ına erişim olmadan bu iki kurulumun APK üstüne yüklemesi garanti edilemez. Önceki debug anahtarının private key'i yoksa o eski APK üstüne update teknik olarak mümkün değildir.

### PF-A22 — Canvas altındaki boş durum alanı oyun tahtasının parçası gibi görünüyor
- [x] `lcd-screen` overlay/scanline efektini yalnızca gerçek SnakeCanvas çerçevesine uygula.
- [x] Bonus/time-attack durum şeridini canvas dışında, ayrı kontrastlı panel olarak göster.
- [x] Bonus veya zamanlayıcı yokken boş h-9 alanını tamamen kaldır.
- [x] Güncel CI test/lint/build doğrulamasını çalıştır.
- [ ] Gerçek Android cihazda farklı ekran yüksekliklerinde board/status ayrımını görsel olarak doğrula.
- **Kabul:** Oynanabilir ızgara sınırı açıkça algılanır; alt bilgi alanı grid'in devamı gibi görünmez; zamanlayıcı gerektiğinde ayrı bir HUD şerididir.
- **Mevcut durum:** `src/components/GameScreen.tsx` içindeki LCD efekti yalnızca gerçek canvas frame'ine taşındı. Alt zamanlayıcı ayrı, koyu/kontrastlı bir status paneline alındı ve boşken render edilmiyor. CI 112 test/15 dosya, lint/build ve npm audit (0 bulgu) başarılı. `26757a5` Android run `45858658573` versionCode Groovy DSL ifadesindeki `Value is null` hatasıyla başarısız oldu. `versionCode = (...)` açık ataması ve workflow step-level `ANDROID_VERSION_CODE` env değişkeni ile düzeltildi; yeni head `f88cf5a` için Android build tekrar çalışıyor. Cihaz görsel kontrolü bekleniyor.

### PF-A23 — Otomatik checkpoint ve kesintiden sonra devam
- [x] Ayrı alanlara yazılan çoklu kayıt yerine tek JSON checkpoint anahtarı kullan; yarım yazılmış eski/yeni alan kombinasyonuyla bozuk kayıt üretme.
- [x] Oyun reducer state'ini her anlamlı state değişiminde kısa debounce ile otomatik kaydet.
- [x] Android AppState/visibility/pagehide geçişlerinde checkpoint'i hemen yaz ve native Preferences kuyruğunu flush et.
- [x] Oyun modu, snake/obstacle/food/bonus, skor, hız, food type, time-attack kalan süresi ve bonus kalan süresini checkpoint'e dahil et.
- [x] Oturum istatistiklerini (yenen yiyecekler, bonuslar, özel yiyecek sayıları, kullanılan yönler, duvar/maze verileri, en uzun yılan, geçen süre) checkpoint'e dahil et.
- [x] Restore sırasında eski v1/v2 kayıtlarla geriye dönük uyumluluğu koru; v3 checkpoint'i doğrula.
- [x] Uygulama checkpoint yazdıktan sonra legacy flag yazılmadan kapanırsa da kayıtlı oyunu bul.
- [x] V3 checkpoint restore, session metadata ve bozuk checkpoint testlerini ekle.
- [ ] Gerçek Android cihazda oyun ortasında Home/uygulama değiştir, uygulamayı son uygulamalardan kapat ve OS tarafından öldürülme senaryolarını doğrula.
- [ ] Time Attack ve bonus food kalan sürelerinin geri dönüşte doğru kaldığını cihazda doğrula.
- **Kabul:** Uygulama beklenmedik kapansa bile son checkpoint'ten devam edilebilir; tamamlanmış oyun tekrar açılmaz; eski kayıtlar kaybolmaz.
- **Mevcut durum:** saved_checkpoint_v3 tek JSON kayıt alanı eklendi. App her oyun state değişiminde 350 ms debounce ile checkpoint yazıyor; Android arka plana geçerken hemen yazıp flushStorage() çağırıyor. Session istatistikleri ve elapsed time saklanıyor. Parser v1/v2 legacy kayıtları da kabul ediyor. savedGame.test.ts 2 yeni test ekledi. CI head c455e 114 test/15 dosya, lint/build ve audit başarılı; throttle düzeltmesi head ff8b153 için CI/Android çalışıyor. Önceki Android run 935baa7 SDK setup aşamasında başarısız oldu; mevcut run tekrar deneniyor. Gerçek cihaz doğrulaması bekliyor.

### PF-A24 — PixelFang 2027: Klasik ve Modern tam oyun temaları

**Amaç:** Oyuncunun Klasik ve Modern arasında seçim yapabildiği, oyunun tamamını kapsayan iki tutarlı görsel tema oluştur. Bu iş PR #5'teki Android kararlılık/checkpoint çalışmasından ayrı bir görsel yenileme işidir. PR #5 sonuçlandırılmadan tema kodlamasına başlanmayacak.

#### Tasarım ve kapsam
- [ ] Önce mevcut uygulamadaki tüm ekranların ve oyun içi görsel bileşenlerin envanterini çıkar: ana menü, mod seçimi, oyun HUD'u, duraklatma, Game Over, zafer, ayarlar, günlük görevler, başarımlar, labirent editörü ve diğer mevcut ekranlar.
- [ ] Klasik tema için ayrı bir görsel konsept hazırla: iyileştirilmiş klasik arcade dili; belirgin paneller/kenarlıklar, geleneksel oyun hissi, uygun tipografi, renk paleti, ikon ve animasyon yaklaşımı.
- [ ] Modern tema için ayrı bir görsel konsept hazırla: 2027'ye uygun pürüzsüz/premium arayüz; rafine yüzeyler, yumuşak köşeler, katman/derinlik, modern tipografi, kontrollü ışık/renk geçişleri ve zarif animasyonlar.
- [ ] Her iki tema için oyun dünyasının görsellerini de tasarla; tema yalnızca menü renklerini değiştiren bir skin olmayacak.
- [ ] Her iki temada harita/oyun tahtası zemini, hücre çizgileri, duvarlar/engeller, yılan gövdesi ve başı, normal yiyecekler, özel yiyecekler ve oyun içi efektler için ayrı renk ve çizim stilleri belirle. Gerekli görülen öğelerde yalnızca renk değişimiyle sınırlı kalma; şekil, materyal, gölge, parlama ve animasyon farklılıkları da tasarlanabilir.
- [ ] Her iki temanın ana menü + oyun ekranı + harita/yılan/yiyecek bileşenlerini içeren karşılaştırmalı görsel konsept/maketlerini hazırla. Kullanıcı onayı alınmadan kodlamaya geçme.
- [ ] Tema farklarını yalnızca palet değişimi olarak bırakma: tipografi, ikonografi, buton/kart şekilleri, paneller, gölgeler, HUD, ekran geçişleri ve etkileşim geri bildirimleri de temaya göre tanımlansın.
- [ ] Her iki tema tüm mevcut ekranları ve özellikleri eksiksiz desteklesin; tema seçimi oyun işlevlerini veya oyun dengesini değiştirmesin.

#### Tema seçimi ve teknik mimari
- [ ] Ayarlar içinde açıkça görülen Klasik / Modern tema seçimi ekle; seçim oyuncu tarafından istenildiği zaman değiştirilebilsin.
- [ ] Tema tercihini cihazda kalıcı sakla ve uygulama yeniden açıldığında aynı temayı yükle.
- [ ] Tek bir merkezi theme token/config altyapısı tasarla; renk, tipografi, ölçü, köşe, gölge, ikon ve motion değerleri merkezi tanımlansın. Bileşenlere dağılmış sabit renkler bırakma.
- [ ] UI bileşenleri ile Canvas/oyun dünyası çizim katmanının tema verisini tutarlı biçimde tüketmesini sağla. Canvas çizimlerinde tema değişince eski renklerin/cache değerlerinin kalmamasını güvenceye al.
- [ ] Tema değişimini kayıtlı oyun/checkpoint, skor, ayarlar, özel labirentler ve oyun ilerlemesinden bağımsız tut. Tema değişikliği oyun state'ini sıfırlamamalı veya kayıt formatını bozmaması.
- [ ] Uygulama açıkken tema değiştiğinde ekranlar ve oyun dünyası tutarlı biçimde güncellensin; gerekiyorsa oyun devam ederken güvenli geçiş davranışını tanımla.
- [ ] Animasyonlar performans bütçesine uygun olsun; reduced-motion tercihi, düşük güçlü Android cihazlar, 60/120 Hz ve Canvas RAF optimizasyonları korunsun.
- [ ] Renk kontrastı, metin okunabilirliği, dokunma hedefleri ve renk körlüğü açısından ayırt edilebilirlik kontrol edilsin.

#### Test ve kabul kriterleri
- [ ] Tema seçimi, kalıcı saklama ve uygulama yeniden açılışını test et.
- [ ] Her ekranın iki temada da eksiksiz render edildiğini ve temalar arasında geçişte eski stil kalıntısı olmadığını doğrula.
- [ ] Harita, yılan, normal/özel yiyecek ve efektlerin her iki temada doğru çizildiğini doğrula.
- [ ] Tema değişiminin aktif oyun, checkpoint restore, kayıtlı labirent ve oyun istatistiklerine etkisiz olduğunu test et.
- [ ] Küçük/büyük ekranlar, safe-area, farklı yoğunluklar, yatay/dikey düzen ve Android cihaz performansını kontrol et.
- [ ] Otomatik test, lint, production build ve Android build sonuçlarını kaydet; mümkünse emülatör ve gerçek cihaz ekran görüntüleriyle görsel regresyon kontrolü yap.
- **Kabul:** Oyuncu iki tam temadan birini seçebilir. Seçim tüm arayüzü ve oyun dünyasını (harita, yılan, yiyecekler dahil) değiştirir; iki tema da görsel olarak tutarlı, erişilebilir ve performanslıdır. Tema tercihi oyun mantığını, kayıtları veya checkpoint devamlılığını etkilemez.
- **Mevcut durum:** Planlama aşamasında. Kodlama başlamadı. İlk teslim tasarım envanteri ve iki temanın karşılaştırmalı görsel konseptleri; kullanıcı onayı tasarım aşamasının çıkış kriteridir.

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
