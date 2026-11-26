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
