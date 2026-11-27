# PixelFang – Yapay Zekâ Denetim Arşivi

Bu dizin, PixelFang-Snake-Maze deposu için farklı yapay zekâlar ve inceleme araçları tarafından hazırlanmış proje denetimlerini saklar.

## İşleyiş

- Her rapor, geldiği tarih ve sıra numarasıyla ayrı bir Markdown dosyasında saklanır.
- Arşivlenen raporların özgün bulguları geriye dönük olarak değiştirilmez.
- Raporlardaki iddialar otomatik olarak doğrulanmış kabul edilmez.
- Yeni raporlar önceki raporlarla karşılaştırılır: ortak bulgular, çelişkiler, tekil öneriler, daha önce çözülmüş konular ve yeni riskler ayrıştırılır.
- Kodla doğrulanan bulgular `docs/VERIFIED_ISSUES.md` dosyasına; karar bekleyen konular `docs/REVIEW_DECISIONS.md` dosyasına aktarılır.
- Önceliklendirilmiş işler `docs/DEVELOPMENT_ROADMAP.md` dosyasında tutulur.
- Gerçek cihaz testleri `docs/DEVICE_TEST_BACKLOG.md` dosyasında izlenir.

## Rapor dizini

| Tarih | Rapor | İnceleme referansı | Durum |
|---|---|---|---|
| 2026-11-26 | [Kapsamlı Proje Denetimi, Teknik Analiz ve Geliştirme Yol Haritası](2026-11-26-ai-review-01.md) | main `8afe11d`, PR #7 `27b0551` | Arşivlendi; bulgular yeniden doğrulanmayı bekliyor |
| 2026-11-27 | [İkinci Bağımsız Teknik Denetim](2026-11-27-ai-review-02.md) | PR #7 `27b0551` | Arşivlendi; F1–F5 bağımsız doğrulama bekliyor |
| 2026-11-27 | [Üçüncü Kapsamlı Proje Denetimi](2026-11-27-ai-review-03.md) | Depo kökü, README ve PR özeti/commit geçmişi | Arşivlendi; kaynak erişimi sınırlı |
| 2026-11-27 | [Dördüncü Kapsamlı Proje Denetimi](2026-11-27-ai-review-04.md) | Raporun kendi beyanına göre depo/PR içeriği çıkarılamadı; README ve depo tanıtımı atıfları | Arşivlendi; ön denetim, kod/PR bulguları doğrulanamadı |
| 2026-11-27 | [Beşinci Kapsamlı AI Denetim Raporu](2026-11-27-ai-review-05.md) | PR #7 HEAD `27b0551`; kaynak kodu, yerel test/lint/build/audit beyanı | Arşivlendi; ajan kod incelemesi yaptığını bildiriyor, iddialar bağımsız doğrulama bekliyor |
| 2026-11-27 | [Altıncı Kapsamlı Proje Denetimi](2026-11-27-ai-review-06.md) | README ve erişilebilen genel GitHub bilgileri; kaynak kodu/PR diff/CI doğrulanamadı | Arşivlendi; README temelli ön denetim, kod bulgusu değildir |
| 2026-11-27 | [Yedinci Kapsamlı Proje Denetimi](2026-11-27-ai-review-07.md) | Rapor yazarı main ve PR #7 diff'ini incelediğini beyan ediyor; arşivleme sırasında yeniden doğrulanmadı | Arşivlendi; AndroidManifest/GameOverScreen iddiaları açık doğrulama bekliyor |

## Önemli ayrım

Raporun kendi içindeki “Doğrulandı” etiketi, raporu hazırlayan inceleyicinin değerlendirmesidir. Proje ana yol haritasına aktarılmadan önce güncel kaynak kodu, CI çıktısı veya gerçek cihaz testiyle ayrıca teyit edilmelidir.

## Dördüncü raporun kapsam notu

Dördüncü rapor, ilk mesajdaki GitHub bağlantısı yanlış olsa da rapor gövdesinde PixelFang-Snake-Maze deposunu, PR #7'yi ve PixelFang dosyalarına ait atıfları doğru gösteriyor. Kullanıcı, incelemeyi yapan ajanın gerçek depoya eriştiğini açıkladı. Bununla birlikte rapor metni kendi içinde GitHub sayfalarının içerik çıkarımına kapalı olduğunu ve kod/PR diff incelemesi yapılamadığını söylüyor. Bu nedenle rapor, kapsamı ve kanıt düzeyi korunarak ön denetim olarak arşivlenmiştir.

## Beşinci raporun kapsam notu

Beşinci rapor, önceki incelemelerde eksik kalan Canvas, temalar, kontroller, menüler, Maze Editor, görev/başarım, MainActivity ve release yapılandırmasını da incelediğini bildiriyor. Yerel test, TypeScript, ESLint ve audit çalıştırdığını söylüyor; ancak Actions sayfalarına ve repository secrets'a erişemediğini, görsel ekran görüntülerini incelemediğini ve fiziksel cihaz testi yapmadığını açıkça belirtiyor.

Önceki raporlarda geçen benzer başlıklar otomatik olarak yeni hata sayılmaz. Özellikle bonus yem (PF-01), Game Over kalıcılığı (PF-02), Survival kimliği, Android sürüm/yedekleme ayarları ve Canvas performansı için ortak kök nedenler birleştirilmeden önce kod ve test kanıtı aranmalıdır.


## Altıncı raporun kapsam notu

Altıncı rapor, kendi 16. sayfasındaki açıklamaya göre kaynak dosyaları, PR #7 diff'ini, commit'leri, test içeriklerini ve CI günlüklerini doğrulayamamıştır. README ve erişilebilen genel GitHub bilgileri üzerinden hazırlanmıştır. Bu nedenle özellik envanteri README'de tanımlanan kapsamı gösterir; teknik risk tabloları doğrulama başlığıdır, kanıtlanmış hata değildir. Raporun P0-1…P0-5 önerileri önceki PR #7 ve bozuk kayıt/restart incelemeleriyle önemli ölçüde örtüşür; mevcut düzeltmeler yeniden yapılacak iş olarak açılmamalı, yalnızca güncel kanıtla karşılaştırılmalıdır.


## Yedinci raporun çapraz doğrulama notu

Rapor 07, main ve PR #7 diff'ini kod akışı üzerinden incelediğini beyan ediyor. Arşivleme işlemi yalnızca raporun kaydedilmesini ve diğer plan belgeleriyle ilişkilendirilmesini kapsar; kaynak kod iddialarının yeniden denetlenmesi değildir. Özellikle AndroidManifest.xml'in boş olduğu ve GameOverScreen'de geçersiz mod erişiminin korumasız kaldığı iddiaları, önceki PR #7 incelemeleriyle karşılaştırılarak ayrıca doğrulanmalıdır. Raporun main branch'teki eksikler olarak sıraladığı savedGame/gameSession ve atomik kayıt başlıkları, PR #7 kapsamındaki mevcut düzeltmelerle karıştırılmamalıdır.
