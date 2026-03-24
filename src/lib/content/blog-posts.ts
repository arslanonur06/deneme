export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  readMinutes: number;
  /** Kısa paragraflar; blog tonu, uzun rehber değil. */
  paragraphs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "deneme-bonuslari-nasil-alinir",
    title: "Deneme bonusları nasıl alınır?",
    excerpt:
      "Üyelik, doğrulama ve kampanya sayfası üzerinden deneme tekliflerini güvenli şekilde nasıl değerlendireceğinize dair kısa bir özet.",
    publishedAt: "2026-03-15",
    updatedAt: "2026-03-20",
    readMinutes: 2,
    paragraphs: [
      "Deneme bonusu genelde yeni üyelere veya belirli bir kampanya dönemine özel sunulur. İlk adım, işletmenin resmi sitesinde “kampanyalar” veya “bonuslar” bölümünü okumaktır; orada kimlerin yararlanabileceği, ülke kısıtı ve son kullanma tarihi yazar.",
      "Çoğu senaryoda hesap açma, e-posta veya telefon doğrulama ve gerekirse kimlik doğrulama (KYC) adımları tamamlandıktan sonra bonus otomatik tanımlanır veya “bonus talep et” düğmesine basmanız istenir. Bonusu kabul etmeden önce çevrim şartı, uygun oyunlar ve maksimum bahis kurallarını mutlaka okuyun.",
      "Şüphe halinde canlı desteğe yazın ve ekran görüntüsü alın. Unutmayın: bonus bir “kazanma garantisi” değildir; bütçenizi aşmayın.",
    ],
  },
  {
    slug: "hos-geldin-bonusu-cevrim-sarti-nedir",
    title: "Hoş geldin bonusunda çevrim şartı ne demek?",
    excerpt:
      "Bonus tutarını çekebilmeniz için oyunlarda belirli bir hacimde bahis yapmanız istenmesi—kısa açıklama.",
    publishedAt: "2026-03-14",
    updatedAt: "2026-03-18",
    readMinutes: 2,
    paragraphs: [
      "Çevrim (wagering) şartı, bonus veya ondan gelen kazancı çekebilmeniz için toplamda kaç kat bahis yapmanız gerektiğini gösterir. Örneğin 100 ₺ bonus ve 35x çevrim varsa, genelde 3.500 ₺ tutarında uygun bahis hacmi hedeflenir—kesin formül her sitede farklıdır, mutlaka şartnamede yazdığı gibi hesaplayın.",
      "Bazı oyunlar çevrime %100 katkı sağlarken bazıları daha düşük oranla sayılır veya hiç sayılmaz. Bu yüzden “hangi oyunlar sayılıyor?” sorusunun cevabı kritiktir.",
    ],
  },
  {
    slug: "bonus-kullanirken-maksimum-bahis-kurali",
    title: "Bonus kullanırken neden “maksimum bahis” kuralı var?",
    excerpt:
      "Aktif bonus sırasında tek seferde yüksek bahis yasağı: amacı ve ihlal riski.",
    publishedAt: "2026-03-12",
    updatedAt: "2026-03-17",
    readMinutes: 1,
    paragraphs: [
      "İşletmeler, bonus kötüye kullanımını sınırlamak için aktif bonusdayken tek bahiste üst sınır koyar. Bu limiti aşmak bonusu ve ilgili kazançları iptal ettirebilir.",
      "Limit genelde bonus şartlarında net yazılır; mobil ve masaüstünde farklı görünen arayüzlerde bile aynı kural geçerlidir. Şüphede kalmayın, desteğe sorun.",
    ],
  },
  {
    slug: "free-spin-deneme-cevirmeleri",
    title: "Free spin / deneme çevirmeleri nasıl işler?",
    excerpt:
      "Ücretsiz dönüşlerin kazancına uygulanan kurallar ve süre sınırları.",
    publishedAt: "2026-03-10",
    updatedAt: "2026-03-16",
    readMinutes: 2,
    paragraphs: [
      "Free spinler belirli bir oyunda veya seçili oyunlarda kullanılır; dönüş başına değer sabit olur. Kazanç genelde bonus bakiyesine eklenir ve ayrı bir çevrim şartına tabi olabilir.",
      "Kullanılmayan spinler süre dolduğunda silinebilir. Kampanya sayfasındaki bitiş tarihini not edin.",
    ],
  },
  {
    slug: "bonus-iptal-edilir-mi",
    title: "Bonusu iptal etmek mümkün mü?",
    excerpt:
      "Çevrim bitmeden bonusdan vazgeçme ve ana paraya dönüş hakkında kısa notlar.",
    publishedAt: "2026-03-08",
    updatedAt: "2026-03-15",
    readMinutes: 1,
    paragraphs: [
      "Birçok platformda aktif bonusu iptal etme seçeneği vardır; iptal ederseniz bonus bakiyesi ve ondan doğan kazançlar silinir, ana para bakiyeniz (varsa ve kurallara uygunsa) kalır.",
      "İptal etmeden önce şartları okuyun; bazı durumlarda yalnızca destek üzerinden iptal yapılabilir.",
    ],
  },
  {
    slug: "kyc-dogrulama-ve-bonus-cekimi",
    title: "KYC doğrulaması bonus çekimini neden etkiler?",
    excerpt:
      "Kimlik doğrulama tamamlanmadan çekim veya bonus kazancı ödemesi neden bekletilir?",
    publishedAt: "2026-03-06",
    updatedAt: "2026-03-14",
    readMinutes: 2,
    paragraphs: [
      "Lisanslı işletmeler kara para aklama ve yaş doğrulama için KYC ister. Belge yükleme onaylanmadan çekim talepleri bekleyebilir veya bonus kazancı askıda kalabilir.",
      "Belgeleri net fotoğrafla yükleyin; adres ile kimlikteki bilgilerin tutarlı olması süreci hızlandırır.",
    ],
  },
  {
    slug: "dusuk-yatirimla-bonus-karsilastirmasi",
    title: "Düşük yatırımla bonus alırken nelere bakmalı?",
    excerpt:
      "Minimum depozito cazip görünse bile çekim tabanı ve ücretleri kontrol edin.",
    publishedAt: "2026-03-04",
    updatedAt: "2026-03-12",
    readMinutes: 2,
    paragraphs: [
      "Küçük bir ilk yatırım bonusu açabilir; fakat çekim için minimum tutar veya ücretler bütçenizi zorlayabilir. Karşılaştırma tablosunda hem yatırım hem çekim sütunlarını birlikte düşünün.",
      "Ödeme yöntemi bazlı farklı kurallar olabilir; bazı yöntemler bonusa dahil olmayabilir.",
    ],
  },
  {
    slug: "kayip-iadesi-bonusu-nedir",
    title: "Kayıp iadesi (cashback) bonusu nedir?",
    excerpt:
      "Net kayıp üzerinden yüzde iade gibi kampanyaların kısa özeti.",
    publishedAt: "2026-03-02",
    updatedAt: "2026-03-10",
    readMinutes: 2,
    paragraphs: [
      "Cashback genelde belirli bir dönemdeki net kaybın bir yüzdesini geri verir; “net” tanımı sitede açıklanır (örneğin bonus hariç gerçek para kaybı).",
      "İade bazen bonus olarak gelir ve yine çevrim ister; bazen nakit gibi çekilebilir—kampanya metnine göre değişir.",
    ],
  },
  {
    slug: "mobil-uygulamada-bonus-talebi",
    title: "Mobil uygulamada bonus talebi masaüstünden farklı mı?",
    excerpt:
      "Aynı hesap, aynı kurallar; dikkat edilmesi gereken küçük farklar.",
    publishedAt: "2026-02-28",
    updatedAt: "2026-03-08",
    readMinutes: 1,
    paragraphs: [
      "Genelde kampanya koşulları hesaba bağlıdır, cihaza değil. Yine de bazı işletmeler uygulamaya özel promosyon sunar; bunu yalnızca resmi duyuruda doğrulayın.",
      "Bildirimlerle gelen “sınırlı süre” tekliflerinde bitiş saatini ve saat dilimini kontrol edin.",
    ],
  },
  {
    slug: "bonus-ve-sorumlu-oyun-limitleri",
    title: "Bonus alırken yatırım limiti koymak neden önemli?",
    excerpt:
      "Kampanya heyecanında bütçe ve süre sınırı: kısa hatırlatma.",
    publishedAt: "2026-02-25",
    updatedAt: "2026-03-05",
    readMinutes: 1,
    paragraphs: [
      "Bonuslar oyun süresini uzatabilir; bu da harcamanın kontrolden çıkmasına yol açabilir. İşletmenin sunduğu günlük/haftalık yatırım veya kayıp limitlerini açmayı düşünün.",
      "Kayıpları telafi etmek için bütçeyi artırmak risklidir; önce ara verin.",
    ],
  },
  {
    slug: "vip-ve-sadakat-bonuslari",
    title: "VIP ve sadakat bonusları nasıl işler?",
    excerpt:
      "Puan toplama, seviye atlama ve kişiye özel teklifler—genel çerçeve.",
    publishedAt: "2026-03-19",
    updatedAt: "2026-03-21",
    readMinutes: 2,
    paragraphs: [
      "Sadakat programları genelde bahis veya çevirim hacmine göre puan verir; puanlar seviye açar veya marketten ödül olarak kullanılır. Kurallar işletmeye göre çok değişir.",
      "VIP statüsü bazen davetiye ile, bazen belirli bir hacim sonrası otomatik tanımlanır. Kişisel bonus tekliflerinde yine çevrim ve süre şartlarını okuyun.",
    ],
  },
  {
    slug: "arkadasini-getir-referans-bonusu",
    title: "Arkadaşını getir (referans) bonusu nedir?",
    excerpt:
      "Davet linki, doğrulama ve ödül koşulları hakkında kısa not.",
    publishedAt: "2026-03-19",
    updatedAt: "2026-03-21",
    readMinutes: 2,
    paragraphs: [
      "Referans bonusunda davet ettiğiniz kişinin hesap açıp yatırım yapması veya belirli bir çevrimi tamamlaması istenebilir. Ödül hem size hem arkadaşınıza farklı kademelerle verilebilir.",
      "Sahte hesap veya aynı kişiden çoklu kayıt kurallara aykırıdır ve bonus iptaliyle sonuçlanır. Davet metnini resmi şartlarla karşılaştırın.",
    ],
  },
  {
    slug: "dogum-gunu-ve-ozel-gun-bonuslari",
    title: "Doğum günü ve özel gün bonusları",
    excerpt:
      "Kimlik doğrulaması, tarih eşleşmesi ve talep süreleri.",
    publishedAt: "2026-03-18",
    updatedAt: "2026-03-20",
    readMinutes: 1,
    paragraphs: [
      "Bazı platformlar doğum tarihinizi doğruladıktan sonra ücretsiz dönüş veya küçük bonus verir; talep genelde belirli günler içinde yapılmalıdır.",
      "Tarih yanlış girilmişse düzeltme KYC ile mümkün olabilir; bonus kötüye kullanım şüphesinde ek kontrol istenebilir.",
    ],
  },
  {
    slug: "haftalik-yeniden-yukleme-bonusu",
    title: "Haftalık yeniden yükleme (reload) bonusu",
    excerpt:
      "Belirli günlerde yapılan yatırımlara ek yüzde—dikkat edilecekler.",
    publishedAt: "2026-03-18",
    updatedAt: "2026-03-20",
    readMinutes: 2,
    paragraphs: [
      "Reload bonusu genelde Pazartesi–Perşembe gibi gün veya saat aralığına bağlanır. Minimum yatırım ve maksimum bonus tavanı netleştirin.",
      "Bazı kampanyalar yalnızca belirli ödeme yöntemleriyle uyumludur; kripto hariç tutulabilir veya tam tersi.",
    ],
  },
  {
    slug: "slot-turnuvalari-nasil-katilinir",
    title: "Slot turnuvalarına nasıl katılınır?",
    excerpt:
      "Liderlik tablosu, puanlama ve ödül dağıtımı—kısa özet.",
    publishedAt: "2026-03-17",
    updatedAt: "2026-03-19",
    readMinutes: 2,
    paragraphs: [
      "Turnuvalarda genelde seçili oyunlarda gerçek para bahisleri puan üretir; kazanç çarpanı veya bahis tutarına göre sıralama yapılır. Ücretsiz katılım veya giriş ücretli modeller olabilir.",
      "Ödüller çoğu zaman bonus bakiyesi veya nakit olarak açıklanır; ikisinde de çevrim farkı olabilir. Tablo bitiş saatini kaçırmayın.",
    ],
  },
  {
    slug: "canli-casino-bonuslari-dikkat",
    title: "Canlı casino bonuslarında nelere dikkat edilmeli?",
    excerpt:
      "Katkı oranları ve masa oyunu kısıtları.",
    publishedAt: "2026-03-17",
    updatedAt: "2026-03-19",
    readMinutes: 2,
    paragraphs: [
      "Canlı rulet veya blackjack’te bonus çevrimine katkı %10–20 gibi düşük olabilir veya hiç sayılmayabilir. Şartnamede “canlı casino” satırını arayın.",
      "Düşük ev avantajlı bahisler (ör. rulette çok geniş kapsamlı bahis) bonus kötüye kullanım sayılarak dışlanabilir.",
    ],
  },
  {
    slug: "bahis-bozdurma-ve-bonus-etkisi",
    title: "Bahis bozdurma (cash out) bonusu etkiler mi?",
    excerpt:
      "Erken kapatılan kuponların çevrime ve bonusa yansıması.",
    publishedAt: "2026-03-16",
    updatedAt: "2026-03-18",
    readMinutes: 1,
    paragraphs: [
      "Bazı işletmeler cash out edilen bahislerin çevrime kısmi veya sıfır katkı verdiğini yazar. Spor bonuslarında bu satırı özellikle okuyun.",
      "Tamamlanmamış veya iade edilen bahisler bonus ilerlemenizi yavaşlatabilir.",
    ],
  },
  {
    slug: "oran-yukseltme-kampanyalari",
    title: "Oran yükseltme kampanyaları güvenilir mi?",
    excerpt:
      "Yükseltilmiş oranların şartları ve maksimum bahis limitleri.",
    publishedAt: "2026-03-16",
    updatedAt: "2026-03-18",
    readMinutes: 2,
    paragraphs: [
      "Boosted odds teklifleri genelde belirli maç veya pazarlara sınırlıdır; tek bahis veya maksimum yatırım tavanı olabilir.",
      "Kampanya “nakit ödeme” mi “bonus” mu netleştirin; ikinci durumda çevrim gelebilir.",
    ],
  },
  {
    slug: "kombine-bahis-bonuslari",
    title: "Kombine (akümülatör) bahis bonusları",
    excerpt:
      "Ek yüzde için minimum seçim sayısı ve oran eşiği.",
    publishedAt: "2026-03-15",
    updatedAt: "2026-03-17",
    readMinutes: 2,
    paragraphs: [
      "Akümülatör bonusları genelde en az 3–5 seçim ve her biri için minimum oran ister. Sistem bahisleri veya bozdurma kampanya dışı bırakılabilir.",
      "Bir seçim iptal olursa bonus oranı düşebilir; kurallar bunu anlatır.",
    ],
  },
  {
    slug: "ilk-yatirim-ve-ikinci-yatirim-farki",
    title: "İlk yatırım ile ikinci yatırım bonusu farkı",
    excerpt:
      "Yüzdeler, tavanlar ve çevrim farklarına dair kısa karşılaştırma.",
    publishedAt: "2026-03-15",
    updatedAt: "2026-03-17",
    readMinutes: 2,
    paragraphs: [
      "İlk yatırım teklifi genelde en yüksek yüzdeyi sunar; sonraki yüklemelerde reload bonusları daha düşük tavanlı olabilir.",
      "Aynı anda birden fazla hoş geldin kampanyasından yararlanmak genelde yasaktır; hesap başına tek hoş geldin kuralına dikkat edin.",
    ],
  },
  {
    slug: "bonus-kotuye-kullanim-nedir",
    title: "Bonus kötüye kullanım (abuse) nedir?",
    excerpt:
      "Hesap kapatma ve kazanç iptali riskleri.",
    publishedAt: "2026-03-14",
    updatedAt: "2026-03-16",
    readMinutes: 2,
    paragraphs: [
      "Kural dışı stratejiler (ör. düşük riskli bahisle çevrim doldurma, çoklu hesap, yanlış kimlik) bonus kötüye kullanım sayılabilir.",
      "İşletme şartlarda bu kavramı tanımlar; ihlal durumunda bonus ve kazanç silinebilir. Şeffaf oynayın ve şartlara uyun.",
    ],
  },
  {
    slug: "sms-ve-e-posta-dogrulama-bonus",
    title: "SMS ve e-posta doğrulaması bonusa neden şart?",
    excerpt:
      "Hesap güvenliği ve tek kullanıcı politikası.",
    publishedAt: "2026-03-14",
    updatedAt: "2026-03-16",
    readMinutes: 1,
    paragraphs: [
      "Doğrulama, hesabın size ait olduğunu ve tekrar kayıtları azaltmayı amaçlar. Bonus tanımlanmadan önce SMS onayı istenmesi yaygındır.",
      "Numara veya e-posta değişiminde yeniden doğrulama ve kısa süreli bonus askısı olabilir.",
    ],
  },
  {
    slug: "cekim-suresi-neden-uzayabilir",
    title: "Çekim süresi neden uzayabilir?",
    excerpt:
      "İlk çekim, belge isteme ve manuel kontrol.",
    publishedAt: "2026-03-13",
    updatedAt: "2026-03-15",
    readMinutes: 2,
    paragraphs: [
      "İlk çekimde veya yüksek tutarda ek belge veya manuel onay süreci devreye girebilir. Bonuslu kazançlarda çevrimin tamamlanması beklenir.",
      "Hafta sonu veya tatilde ödeme işleyicilerinin çalışma saatleri gecikmeyi uzatabilir.",
    ],
  },
  {
    slug: "kripto-yatirim-ve-bonus-uyumu",
    title: "Kripto yatırımda bonus uyumu",
    excerpt:
      "USDT, BTC ile yatırımda kampanyaya dahil olup olmama.",
    publishedAt: "2026-03-13",
    updatedAt: "2026-03-15",
    readMinutes: 2,
    paragraphs: [
      "Bazı kampanyalar yalnızca fiat veya yalnızca kripto yatırımları kapsar. Şartnamede “uygun ödeme yöntemleri” satırına bakın.",
      "Blockchain onay süresi yatırımın geç sayılmasına yol açabilir; kampanya bitiş saatini kaçırmamak için erken işlem yapın.",
    ],
  },
  {
    slug: "anlik-odeme-yontemleri-ve-bonus",
    title: "Anlık ödeme yöntemleri bonusla uyumlu mu?",
    excerpt:
      "Cüzdan ve kart ile yatırım farkları.",
    publishedAt: "2026-03-12",
    updatedAt: "2026-03-14",
    readMinutes: 2,
    paragraphs: [
      "E-cüzdan veya anlık havale yöntemleri çoğu zaman bonusa dahildir; bazı promosyonlar belirli bankaları hariç tutar.",
      "Üçüncü taraf hesaplarla yatırım yasaklanmış olabilir; yalnızca kendi adınıza hesap kullanın.",
    ],
  },
  {
    slug: "bonus-suresi-doldu-ne-olur",
    title: "Bonus süresi dolunca ne olur?",
    excerpt:
      "Son kullanma tarihi ve kalan çevrim.",
    publishedAt: "2026-03-12",
    updatedAt: "2026-03-14",
    readMinutes: 1,
    paragraphs: [
      "Süre dolduğunda kullanılmayan bonus bakiyesi ve tamamlanmamış çevrim genelde sıfırlanır; ana para kurallara göre kalabilir.",
      "Uzatma genelde yoktur; özel durumlarda destek inisiyatifindedir—beklentiyi düşük tutun.",
    ],
  },
  {
    slug: "coklu-hesap-ve-bonus-iptali",
    title: "Çoklu hesap neden bonus iptaline yol açar?",
    excerpt:
      "Tek kişi–tek hesap ilkesi ve IP cihaz kontrolleri.",
    publishedAt: "2026-03-11",
    updatedAt: "2026-03-13",
    readMinutes: 2,
    paragraphs: [
      "Aynı kişinin birden fazla hesap açması hoş geldin bonusunu kötüye kullanma olarak görülür. İşletmeler cihaz, IP ve ödeme bilgisiyle eşleştirme yapabilir.",
      "Hane halkı istisnası nadiren destek onayıyla mümkün olabilir; önceden yazılı onay alın.",
    ],
  },
  {
    slug: "spor-bonusu-ile-casino-bonusu-karisir-mi",
    title: "Spor bonusu ile casino bonusu karışır mı?",
    excerpt:
      "Ayrı bakiyeler ve öncelik kuralları.",
    publishedAt: "2026-03-11",
    updatedAt: "2026-03-13",
    readMinutes: 2,
    paragraphs: [
      "Birçok platformda spor ve casino bonusları farklı bakiyelerde tutulur; biri aktifken diğerine geçiş kurallara bağlıdır.",
      "Aynı yatırımla iki bonus talep etmek genelde mümkün değildir; sırayı planlayın.",
    ],
  },
  {
    slug: "destek-ile-bonus-anlasmazligi",
    title: "Bonus anlaşmazlığında destekle nasıl iletişim kurulur?",
    excerpt:
      "Ekran görüntüsü, ticket numarası ve şartname referansı.",
    publishedAt: "2026-03-10",
    updatedAt: "2026-03-12",
    readMinutes: 2,
    paragraphs: [
      "Önce kampanya kodunu ve şartname versiyonunu kaydedin. Sohbet geçmişini veya e-postayı saklayın; ticket numarası alın.",
      "Net ve kibar iletişim süreci hızlandırır; haklı olduğunuzu düşünseniz bile kuralları birlikte referans gösterin.",
    ],
  },
  {
    slug: "yuksek-oran-ve-bonus-uyumu",
    title: "Yüksek oranlı bahisler bonus çevrimine sayılır mı?",
    excerpt:
      "Aşırı düşük riskli veya örtülü arbitraj sayılan bahislerin kampanya dışı bırakılması.",
    publishedAt: "2026-03-09",
    updatedAt: "2026-03-11",
    readMinutes: 2,
    paragraphs: [
      "Bazı işletmeler çok düşük olasılıklı veya belirli pazarlarda (ör. aşırı favori) yapılan bahisleri çevrime dahil etmez veya kısmi sayar.",
      "Şartnamede “minimum oran” ve “yasaklı bahis türleri” bölümünü arayın; canlı bahiste oran değişimi kuponu etkileyebilir.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function getLatestBlogPosts(limit = 6): BlogPost[] {
  return [...blogPosts]
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
    )
    .slice(0, limit);
}
