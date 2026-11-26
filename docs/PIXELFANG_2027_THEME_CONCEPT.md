# PixelFang 2027 — Klasik ve Modern Tema Konsept Planı

**Durum:** Tasarım konsepti / kullanıcı onayı bekliyor  
**Kapsam:** Görsel tasarım ve tema mimarisi planı. Bu belge kod değişikliği veya uygulama taahhüdü değildir.  
**İlgili backlog:** PF-A24

## 1. Mevcut uygulama incelemesi

İnceleme, PR #5'in açık geliştirme dalındaki kaynak üzerinden yapıldı.

Mevcut ekran ve görsel bileşen envanteri:

| Alan | Mevcut bileşen(ler) | Tema kapsamı |
|---|---|---|
| Ana menü ve marka | `MenuScreen`, `BrandLockup` | Tam |
| Mod seçimi / özel harita seçimi | `ModeSelect` | Tam |
| Oyun ekranı ve HUD | `GameScreen` | Tam |
| Oyun tahtası, yılan, engeller ve yemler | `SnakeCanvas` | Tam |
| Dokunmatik kontroller | `Controls` | Tam |
| Duraklatma | `PauseScreen` | Tam |
| Oyun sonu / zafer / süre dolumu | `GameOverScreen`, `RankProgress` | Tam |
| Ayarlar ve renk özelleştirme | `SettingsModal` | Tam |
| Kariyer ve istatistikler | `CareerModal` | Tam |
| Günlük görevler | `QuestPanel` | Tam |
| Başarım bildirimleri | `AchievementIcon`, `Toast` | Tam |
| Labirent editörü | `MazeEditorScreen` | Tam |
| Genel sayfa, yazı tipleri ve hareket | `index.css`, `main.tsx` | Tam |

### Mevcut teknik bulgular

- Arayüzün önemli bölümü doğrudan Tailwind sınıfları ve sabit renk değerleri kullanıyor. Örneğin LCD yeşili (#C7F0D8), koyu gri (#3A3F44), retro font sınıfları ve klasik kenarlıklar birden fazla bileşene dağılmış durumda.
- Oyun dünyası `SnakeCanvas` üzerinden çiziliyor ve `ThemeColors` ile harita, ızgara, yılan, engel, yem ve parçacık renklerini alabiliyor. Bu, iki tema için iyi bir başlangıç noktası.
- Ayarlar içinde mevcut özel renk düzenleme ve 10 adet renk preset'i bulunuyor. Bu özellik tema seçimiyle karıştırılmamalı ve kaybolmamalı.
- `DifficultyProfile = 'modern' | 'retro'` oyun zorluk/davranış profili anlamında kullanılıyor; bu yeni arayüz temasıyla aynı kavram değildir. Yeni tema tipi ayrı isimlendirilmelidir (ör. `AppTheme = 'classic' | 'modern'`).
- Oyun ekranı, menüler ve modallar aynı tasarım dilini henüz merkezi bir token sisteminden almıyor. Tema desteği eklenirken sabit renklerin merkezi token/config katmanına taşınması gerekir.
- Canvas çizimi ile DOM arayüzü aynı tema seçimini tüketmeli; yalnızca CSS değiştirerek oyun dünyasının teması değişmiş sayılmaz.

## 2. Görsel yön

İki tema aynı marka ve oyun kimliğini paylaşır; ancak farklı görsel dilleri vardır.

### Klasik — Refined Arcade LCD

**Amaç:** Mevcut PixelFang/Nokia LCD karakterini korumak; daha tutarlı, okunabilir ve cilalı hâle getirmek. Eski görünümü taklit etmek yerine bilinçli bir retro arcade deneyimi sunmak.

- Soluk LCD yeşili / zeytin tonları, koyu mürekkep rengi ve sınırlı vurgu renkleri.
- Piksel esintili başlık fontu; gövde metninde okunabilir mono font.
- Daha belirgin panel sınırları, kontrollü köşeler ve fiziksel tuş hissi.
- Oyun tahtasında açık LCD yüzeyi, okunabilir hücre ızgarası ve koyu engeller.
- Yılan segmentleri net ve bloklu; baş/gövde ayrımı belirgin.
- Normal ve özel yemler piksel/arcade ikonografisiyle kolay ayırt edilir.
- Kısa, net ve düşük maliyetli animasyonlar; isteğe bağlı LCD scanline etkisi.

**Başlangıç paleti (tasarım önerisi, kesin değil):**

| Token | Öneri |
|---|---|
| App background | `#C7F0D8` |
| Primary surface | `#B5E2C8` |
| Elevated surface | `#D9F4E2` |
| Primary text | `#26352D` |
| Secondary text | `#52665A` |
| Strong accent | `#355C43` |
| Board | `#C7F0D8` |
| Grid | `#A2C5B1` |

### Modern — Premium Organic Tech

**Amaç:** 2027'ye uygun, rafine ve akıcı bir arayüz; aşırı neon/cyberpunk kalabalığı olmadan güçlü kontrast ve premium oyun hissi.

- Derin grafit/lacivert zemin, katmanlı koyu yüzeyler ve sınırlı cam efekti.
- Turkuaz ve elektrik yeşili vurgular; renkler yalnızca anlamlı etkileşimlerde kullanılır.
- Sans-serif başlık/gövde tipografisi; skor gibi sayısal alanlarda tabular numerals.
- Daha geniş nefes alanı, yumuşak köşeler ve ince sınırlar.
- Oyun tahtasında koyu mavi-grafit yüzey, ince ama görünür ızgara ve yüksek kontrastlı engeller.
- Yılan gövdesinde pürüzsüz segment birleşimleri; başta net yön algısı. Glow yalnızca ölçülü vurgu olarak kullanılır.
- Normal/özel yemlerde modern, hacimli ama oyun tahtasında okunabilir semboller.
- Yumuşak geçişler ve kısa mikro etkileşimler; gereksiz sürekli parıltı yok.

**Başlangıç paleti (tasarım önerisi, kesin değil):**

| Token | Öneri |
|---|---|
| App background | `#0D141B` |
| Primary surface | `#151F29` |
| Elevated surface | `#1D2B37` |
| Primary text | `#EDF5F5` |
| Secondary text | `#9CB0B8` |
| Strong accent | `#A8F06A` |
| Secondary accent | `#55D6C2` |
| Board | `#101D27` |
| Grid | `#29404A` |

## 3. Oyun dünyası — iki temada da değişecek

Tema değişimi menü ve kartlarla sınırlı değildir. Aşağıdaki görsel varlıkların her iki tema için ayrı değerleri ve gerektiğinde ayrı çizim stilleri olacaktır:

| Oyun öğesi | Klasik | Modern |
|---|---|---|
| Harita zemini | LCD yeşili, düz/mat | Derin grafit-mavi, hafif yüzey derinliği |
| Hücre ızgarası | Belirgin, düşük kontrastlı LCD çizgileri | İnce, net, düşük parazitli çizgiler |
| Duvar/engel | Koyu blok/piksel görünümü | Katmanlı, geometrik ve yüksek kontrastlı blok |
| Yılan başı | Piksel karakterli, yönü net | Pürüzsüz, hafif hacimli, yönü net |
| Yılan gövdesi | Ayrık/segmentli arcade formu | Akıcı birleşimli segmentler |
| Normal yem | Klasik piksel sembolü | Temiz, parlak ama küçük ve okunaklı nesne |
| Bonus/özel yem | Renk kodlu arcade sembolleri | Ayrı materyal/ışık karakteri olan semboller |
| Parçacıklar | Kısa, kare/piksel ağırlıklı | Az sayıda, yumuşak ve ölçülü parçacık |

Renk, şekil, materyal ve animasyon farkları oyun durumunu veya çarpışma geometrisini değiştirmemelidir. Çizimler aynı grid koordinatlarını kullanır.

## 4. Arayüz ve ekran kuralları

Her iki tema şu alanları kapsar: ana menü, marka/wordmark, mod kartları, özel harita seçimi, oyun HUD'u, dokunmatik kontroller, duraklatma, Game Over, zafer, süre dolumu, ayarlar, renk düzenleyici, kariyer, istatistikler, görevler, başarımlar, bildirimler ve labirent editörü.

- Klasik tema: belirgin sınırlar, retro hiyerarşi, fiziksel/arcade kontrol hissi.
- Modern tema: sade paneller, kontrollü katman, çağdaş tipografi, daha yumuşak etkileşimler.
- Her iki temada da bilgi mimarisi ve işlevler aynı kalır.
- Butonların dokunma alanları, metin kontrastı ve safe-area boşlukları tema değişse de korunur.

## 5. Önerilen tema mimarisi

1. Yeni UI tema tipi, mevcut `DifficultyProfile` türünden ayrı tutulur.
2. Merkezi `ThemeDefinition` / token nesnesi DOM ve Canvas için ortak kaynak olur.
3. Token grupları: renkler, tipografi, ölçüler, radius, border, elevation/shadow, ikon stili ve motion.
4. Canvas için ayrı ama aynı tanımdan türetilen oyun-dünyası token'ları bulunur.
5. Tema tercihi cihazda kalıcı saklanır ve başlangıçta yüklenir.
6. Tema değişimi aktif oyunu, checkpoint'i, skorları, özel labirentleri veya oyun kurallarını resetlemez.
7. Tema seçimi yalnızca sunum katmanını değiştirir; reducer/game state ve kayıt şeması tema değerleriyle kirletilmez.

### Mevcut özel renk ayarlarıyla birlikte çalışma

Önerilen öncelik:

- Klasik/Modern seçimi bütün uygulamanın temel görsel sistemini belirler.
- Mevcut özel renk düzenleyici korunur; seçili temanın oyun dünyası renklerini (harita/yılan/yem/engel vb.) kullanıcı tarafından geçersiz kılabilir.
- Kullanıcı tema değiştirdiğinde özel renklerin otomatik taşınıp taşınmayacağı tasarım onayında kararlaştırılmalıdır. Güvenli varsayılan öneri: özel renkler ayrı bir kullanıcı profili olarak saklansın; oyuncu isterse “temanın varsayılan renklerine dön” seçeneğiyle sıfırlasın.
- Mevcut renk preset'leri silinmez. Bunlar Klasik/Modern arayüz teması değil, oyun dünyası için “renk paletleri” veya “özel görünüm preset'leri” olarak yeniden adlandırılabilir.
- Mevcut `usedCustomTheme`, `usedPresetThemes` ve ilgili başarımların davranışı korunmalı; tema seçiminin bu başarımları yanlışlıkla açmaması sağlanmalı.

## 6. Tasarım konsepti ve kullanıcı onayı

İlk karşılaştırmalı konsept dört ekranı gösterir:
- Klasik ana menü
- Modern ana menü
- Klasik oyun ekranı (harita, yılan, yem, HUD ve kontroller dahil)
- Modern oyun ekranı (aynı oyun durumu ve düzenle karşılaştırılabilir)

İkinci karşılaştırmalı konsept ekran kapsamını genişletir:
- Klasik ve Modern ana menü
- Klasik ve Modern mod seçimi
- Klasik ve Modern oyun ekranı
- Klasik ve Modern ayarlar
- Klasik ve Modern duraklatma
- Klasik ve Modern oyun sonu

Bu görseller ürün seviyesinde piksel hassasiyetli ekran spesifikasyonu değil, görsel yön ve hiyerarşi konseptidir. Uygulama aşamasında mevcut gerçek ekran akışları ve bileşenleriyle birebir eşleştirilecek; eksik ekranlar (zafer, günlük görevler, başarımlar, kariyer, labirent editörü ve diğer modallar) aynı token sistemiyle ayrıca tasarlanacaktır.

Konseptteki örnek renkler ve bileşenler ilk yönlendirmedir. Nihai tasarım ve kod olarak kabul edilmez.

## 7. Uygulama sırası

1. Kullanıcı konsept ve tasarım yönünü onaylar / düzeltir.
2. Nihai token ve oyun varlığı tabloları kesinleştirilir.
3. Tema altyapısı ve kalıcı tercih uygulanır.
4. Genel arayüz bileşenleri iki temaya taşınır.
5. Canvas oyun dünyası iki tema için uygulanır.
6. Ekran ekran görsel regresyon ve erişilebilirlik kontrolleri yapılır.
7. CI, test ve Android build doğrulanır.
8. Emülatör/gerçek cihaz kontrolleri ayrı kanıt olarak raporlanır.

## 8. Korunacak davranış ve teknik kısıtlar

- Android package ID değişmez: `com.aiwhishpers.snakemaze2026`.
- Oyun kuralları, grid ölçüleri, çarpışmalar, BFS, hareket hızı ve mod dengesi değişmez.
- Tema tercihi checkpoint içine oyun durumu olarak yazılmaz; uygulama tercihi olarak ayrı saklanır.
- Tema geçişi checkpoint restore ve eski kayıt uyumluluğunu etkilemez.
- Reduced-motion, düşük güçlü cihaz performansı, 60/120 Hz davranışı ve Canvas RAF optimizasyonları korunur.
- Tema eklemek için oyun motoru veya reducer yeniden yazılmaz.

## 9. Onay bekleyen kararlar

- [ ] Klasik konseptin LCD yeşil/monokrom arcade yönü onaylanıyor mu?
- [ ] Modern konseptin koyu grafit, turkuaz ve elektrik yeşili premium yönü onaylanıyor mu?
- [ ] Özel oyun renkleri tema değişince korunmalı mı, yoksa seçilen temanın varsayılan oyun renklerine mi dönmeli?
- [ ] İlk açılışta varsayılan tema Klasik mi, Modern mi olmalı?

**Kodlama durumu:** Başlanmadı. Kullanıcı iki temalı UI/UX yönünü onayladı ve tam ekran tasarımının hazırlanmasını istedi. PR #5 hâlâ açık/taslak olduğundan uygulama koduna geçiş beklemede. İkinci konsept ana menü, mod seçimi, oyun, ayarlar, duraklatma ve oyun sonu ekranlarını kapsar.
