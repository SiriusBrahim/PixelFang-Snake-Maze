# Pixelfang — Agent Backlog

> Bu dosya, daha sonra toplu olarak çalışacak kodlama ajanının yaşayan görev listesidir. Her yeni inceleme/geliştirme sonrasında güncellenecektir. Tamamlanma yalnızca kanıtla işaretlenir.

## Güncel teknik durum — 25.11.2026

- PR #5: [Android stability PR](https://github.com/SiriusBrahim/PixelFang-Snake-Maze/pull/5) açık ve draft.
- PR #5 head: `95d6aabca053f467f7e31e424ace91c8c4d38396`.
- CI test/lint/build başarılı.
- Android debug APK workflow'u başarılı; artifact: `pixelfang-snake-maze-debug-apk` (yaklaşık 9,2 MB), artifact ID `15038476847`.
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
- [ ] v1 kayıt yükleme ve v1 → güncel sürüm migrasyon testi.
- [ ] v2 kayıt yükleme/devam etme testi.
- [ ] Bozuk/eksik kayıt verisinde güvenli geri dönüş testi.
- **Kabul:** Eski kayıtlar açılır; hatalı veri uygulamayı çökertmez.
- **Mevcut durum:** Kod v1/v2 formatlarını destekliyor; gerçek restore/migrasyon kanıtı gerekli.

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

## P2 — Marka ve görsel kalite

### PF-A07 — Marka/görsel tutarlılık
- [ ] Renk, tipografi, ikon ve buton dilini incele.
- [ ] Menü, oyun, duraklatma ve sonuç ekranlarında görsel bütünlüğü sağla.
- [ ] Farklı ekran yoğunluklarında okunabilirliği doğrula.
- **Kabul:** Tutarlı görsel dil; mevcut işlevlerde regresyon yok.

### PF-A08 — Logo ve wordmark
- [ ] Ölçeklenebilir Pixelfang logosu ve uygulama içi wordmark varyantı hazırla.
- [ ] Açık/koyu zeminlerde ve farklı boyutlarda okunabilirliği doğrula.
- **Kabul:** Oyun temasına uygun, farklı boyutlarda net marka varlıkları.

### PF-A09 — Android ikonları ve splash
- [ ] Adaptive icon foreground/background.
- [ ] Monochrome icon.
- [ ] 512×512 mağaza ikonu.
- [ ] Splash görselleri ve Android kaynaklarına entegrasyon.
- [ ] Gerçek cihaz launcher/splash görünümü kontrolü.
- **Kabul:** Doğru format/boyutlar; ikon kırpılmaz, splash doğru görünür.

## P3 — Oyun modları ve editör

### PF-A10 — Oyun modları uçtan uca
- [ ] Her modun başlangıç, oynanış, kazanma/kaybetme ve yeniden başlatma akışını test et.
- [ ] Modlar arası kural/puan/engel izolasyonunu kontrol et.
- [ ] Menü giriş/geri dönüş akışlarını doğrula.
- **Kabul:** Modlar kendi kurallarına uygun; durum sızıntısı yok.

### PF-A11 — Özel yiyecek geri bildirimi
- [ ] Tür bazında görsel/işitsel geri bildirimleri doğrula.
- [ ] Yön ipucu, animasyon ve skor etkisinin tutarlılığını kontrol et.
- [ ] Reduced-motion davranışını test et.
- **Kabul:** Anlaşılır geri bildirim; erişilebilirlik ve oyun mantığıyla uyumlu davranış.

### PF-A12 — Labirent Editörü
- [ ] Labirent oluşturma/düzenleme; duvar ve engel ekleme/silme.
- [ ] Geçersiz yerleşimleri engelleme ve oynanabilirlik kontrolü.
- [ ] Kaydetme, yükleme ve düzenlemeye devam etme.
- [ ] Düzenlenen labirentte oynama testi.
- **Kabul:** Labirent bozulmadan saklanır; oynanamaz düzenler oyun başlamadan tespit edilir.

## P4 — Yayın ve uzun vadeli özellikler

### PF-A13 — AdMob ve yayın akışı
- [ ] Test/üretim reklam kimliklerini ayır.
- [ ] Üretim kimliklerini güvenli yapılandır.
- [ ] Reklam sıklığı ve oyun akışına etkisini incele.
- [ ] Release signing ve AAB workflow'unu gözden geçir.
- [ ] Gizlilik/izin ve mağaza gerekliliklerini kontrol et.
- **Kabul:** Debug/test derlemesi gerçek reklam göstermez; release yapılandırması açık ve doğrulanabilir.

### PF-A14 — Günlük görevler
- [ ] Görev üretimi, ilerleme ve tamamlanma takibi.
- [ ] Gün değişimi/saat sınırı davranışı.
- [ ] Uygulama yeniden başlatıldığında ilerlemenin korunması.
- **Kabul:** Görevler tutarlı yenilenir; ilerleme kaybolmaz.

### PF-A15 — Başarımlar
- [ ] Başarım koşulları ve tetikleme noktaları.
- [ ] Tekrarlı tetiklemeye karşı koruma.
- [ ] Kalıcı kayıt ve kullanıcı arayüzü.
- **Kabul:** Başarımlar doğru koşulda bir kez açılır ve kalıcıdır.

### PF-A16 — Liderlik tablosu
- [ ] Çevrimiçi/çevrimdışı mimari önerisi.
- [ ] Skor doğrulama, hile ve tekrar gönderim risklerini değerlendir.
- [ ] Gizlilik/kullanıcı kimliği yaklaşımını tanımla.
- [ ] Uygulama ve test planı hazırla.
- **Kabul:** Güvenli tasarım kararı verilmeden canlıya alınmaz.

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
