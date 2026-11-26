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

## Önemli ayrım

Raporun kendi içindeki "Doğrulandı" etiketi, raporu hazırlayan inceleyicinin değerlendirmesidir. Proje ana yol haritasına aktarılmadan önce güncel kaynak kodu, CI çıktısı veya gerçek cihaz testiyle ayrıca teyit edilmelidir.


## İkinci raporun yeni başlıkları

- Bonus yem profil aralığı / sayaç uyumu (PF-01).
- Game Over sonrası skor ve checkpoint kalıcılığı (PF-02).
- Android sürüm numarası tutarlılığı (PF-03).
- Survival modunun farklılaştırılması, erken zafer davranışı ve `allowBackup` kararı (PF-06–PF-08).
- İlk raporla ortak konular: cihaz doğrulaması, Android imzalama ve Survival kimliği. İkinci raporun Canvas değerlendirmesi ilk raporla aynı kapsamda değildir; ikinci inceleyici yalnızca hareket/efekt sırasında RAF çalıştığını bildirmiş, ilk rapor ise sürekli RAF riskini öne sürmüştür. Güncel kodda bağımsız kontrol edilmeden bu iki değerlendirmeden biri seçilmemelidir.
