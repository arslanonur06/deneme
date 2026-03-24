import type { Platform } from "./platforms";
import { platforms } from "./platforms";

export type ArticleFaqItem = {
  question: string;
  answer: string;
};

export type ArticleSection = {
  id: string;
  heading: string;
  level: 2 | 3;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: "slots" | "guides" | "reviews";
  publishedAt: string;
  updatedAt: string;
  readMinutes: number;
  keywords: string[];
  relatedSlugs: string[];
  sections: ArticleSection[];
  faq: ArticleFaqItem[];
  recommendedPlatformSlugs: string[];
};

const pickPlatforms = (...slugs: string[]): Platform[] =>
  slugs
    .map((s) => platforms.find((p) => p.slug === s))
    .filter((p): p is Platform => Boolean(p));

export const articles: Article[] = [
  {
    slug: "how-to-play-online-slots-beginners-guide",
    title:
      "Çevrim İçi Slot Nasıl Oynanır? Sakin ve Uygulanabilir Başlangıç Rehberi",
    description:
      "Çevrim içi slotların nasıl çalıştığını, RTP ve volatilitenin ne anlama geldiğini ve oyunu keyifli ve bütçeli tutacak alışkanlıkları öğrenin.",
    category: "guides",
    publishedAt: "2026-01-12",
    updatedAt: "2026-03-01",
    readMinutes: 9,
    keywords: [
      "online slot nasıl oynanır",
      "slot başlangıç rehberi",
      "slot volatilitesi açıklaması",
    ],
    relatedSlugs: [
      "european-roulette-strategy-basics",
      "best-platforms-for-low-deposit-play",
    ],
    recommendedPlatformSlugs: ["suratbet"],
    sections: [
      {
        id: "what-happens-on-each-spin",
        heading: "Her çevirmede teknik olarak ne olur?",
        level: 2,
        paragraphs: [
          "Modern çevrim içi slotlar, sertifikalı rastgele sayı üreteçleri (RNG) ile çalışır. Her çevirme birbirinden bağımsızdır; yani önceki sonuçlar bir sonrakini etkilemez.",
          "Deneyiminizi matematik (RTP ve volatilite), oyun kuralları (ödeme çizgileri veya küme mekaniği) ve ücretsiz çevirme veya çarpan gibi özellikler şekillendirir.",
        ],
      },
      {
        id: "rtp-and-volatility",
        heading: "RTP ve volatilite: sade bir dil",
        level: 2,
        paragraphs: [
          "RTP uzun vadeli bir istatistiksel ölçüdür; tek bir oturum için garanti değildir. %96 RTP, her seferinde kasanızın %96’sıyla ayrılacağınız anlamına gelmez.",
          "Volatilite, sonuçların ne kadar “dalgalı” hissedilebileceğini tarif eder. Yüksek volatilite genelde daha seyrek ama daha büyük vuruşlara; düşük volatilite ise genelde daha düzenli, küçük sonuçlara yol açar.",
        ],
      },
      {
        id: "bankroll-and-session-plan",
        heading: "Bütçenize saygılı basit bir oturum planı",
        level: 2,
        paragraphs: [
          "Oynamadan önce sabit bir eğlence bütçesi belirleyin ve süreyi takip edin. Kısa molalar yorgunluğu fark etmenize ve ani kararları azaltmanıza yardımcı olur.",
          "Bonus kullanıyorsanız çevrim şartlarını ve hangi oyunlarda geçerli olduğunu okuyun. Kampanyalar faydalı olabilir; netlik genelde büyük rakamlardan daha önemlidir.",
        ],
      },
      {
        id: "choosing-where-to-play",
        heading: "Nerede oynayacağınızı bilinçli seçmek",
        level: 2,
        paragraphs: [
          "Şeffaf şartlara, görünür sorumlu oyun kontrollerine ve hızlı ulaşabileceğiniz desteğe sahip lisanslı işletmeleri tercih edin.",
          "Minimum yatırım, çekim süreleri ve doğrulama adımlarını karşılaştırın. İlk günden anlaşılır hissedilen bir platform genelde sonradan sürpriz çıkarmaz.",
        ],
      },
    ],
    faq: [
      {
        question: "Zamanlama veya örüntülerle sonuçları etkileyebilir miyim?",
        answer:
          "Hayır. Lisanslı oyunlar, sonuçların zamanlama ile tahmin veya manipüle edilemeyeceği şekilde tasarlanır. Slotları sabit bir maliyet tavanı olan eğlence gibi görün.",
      },
      {
        question: "Daha yüksek RTP her zaman daha mı iyidir?",
        answer:
          "RTP; volatilite, kurallar ve sizin zevkinizle birlikte değerlendirilmelidir. Benzer RTP’ye sahip iki oyun, volatilite ve özelliklere göre çok farklı hissedilebilir.",
      },
      {
        question: "Hoş geldin bonusunu kabul etmeden önce neye kontrol etmeliyim?",
        answer:
          "Çevrim şartları, son kullanma tarihleri, uygun oyunlar ve bonus aktifken maksimum bahis kurallarını inceleyin. Bir şey belirsizse yatırmadan önce destekten netleştirin.",
      },
    ],
  },
  {
    slug: "european-roulette-strategy-basics",
    title:
      "Avrupa Ruleti Strateji Temelleri (Beklenti, Efsane Değil)",
    description:
      "Kasa avantajını, yaygın bahis türlerini ve neden ‘sistemlerin’ oyunun matematiksel üstünlüğünü ortadan kaldıramayacağını anlayın.",
    category: "guides",
    publishedAt: "2026-02-04",
    updatedAt: "2026-03-05",
    readMinutes: 8,
    keywords: [
      "avrupa ruleti strateji",
      "rulet kasa avantajı",
      "rulet bahis türleri",
    ],
    relatedSlugs: [
      "how-to-play-online-slots-beginners-guide",
      "best-platforms-for-low-deposit-play",
    ],
    recommendedPlatformSlugs: ["suratbet"],
    sections: [
      {
        id: "single-zero-versus-double-zero",
        heading: "Tek sıfırlı ruletin neden önemli olduğu",
        level: 2,
        paragraphs: [
          "Avrupa ruleti tek sıfır kullanır. Amerikan ruleti ikinci bir sıfır cepli ekler; bu da çoğu bahiste kasa avantajını artırır.",
          "Bu rehber, işletmeler arasında adil karşılaştırma için yaygın referans olduğu için Avrupa tarzı çarklara odaklanır.",
        ],
      },
      {
        id: "inside-versus-outside-bets",
        heading: "İç bahisler ve dış bahisler",
        level: 2,
        paragraphs: [
          "Dış bahisler (kırmızı/siyah veya tek/çift gibi) daha sık kazanır ama daha az öder. İç bahisler (ör. düz sayı) daha seyrek kazanır ama daha fazla öder.",
          "Hiçbir bahis kombinasyonu uzun vadede üstünlük yaratmaz. Kasaya yönetimi yalnızca dalgalanmanın hissini değiştirir; beklenen değeri değiştirmez.",
        ],
      },
      {
        id: "systems-and-discipline",
        heading: "Sistemler, disiplin ve gerçek",
        level: 2,
        paragraphs: [
          "Progresif bahis sistemleri kısa vadede dramatik dalgalanmalara yol açabilir. Kasa avantajını tersine çevirmezler ve soğuk serilerde kaybı hızlandırabilirler.",
          "En sürdürülebilir yaklaşım disiplinli limitlerdir: saydığınız bir kayıp sınırı, süre sınırları ve oyunu ücretli eğlence olarak gören bir bakış açısı.",
        ],
      },
    ],
    faq: [
      {
        question: "Rulet beceri oyunu mudur?",
        answer:
          "Bahisleri ve miktarları siz seçersiniz; adil bir çarkta sonuçlar rastgeledir. Beceri çoğunlukla kasa yönetiminde ve olasılıkları anlamada görülür—sonuç tahmininde değil.",
      },
      {
        question: "Fransız ruleti matematiği değiştirir mi?",
        answer:
          "Bazı Fransız kuralları, sıfır geldiğinde belirli eşit para bahislerinde iade mekanizmaları sunar. Masanızdaki tam kural setini doğrulayın—etkili kasa avantajını etkiler.",
      },
    ],
  },
  {
    slug: "best-platforms-for-low-deposit-play",
    title:
      "Düşük Yatırımla Oyun İçin Platformlar: Önce Ne Karşılaştırmalı?",
    description:
      "Küçük minimum yatırım isteyen; ücretler, kimlik doğrulama ve çekimler konusunda netliği feda etmeyen oyuncular için karşılaştırmaya uygun bir kontrol listesi.",
    category: "reviews",
    publishedAt: "2026-02-18",
    updatedAt: "2026-03-08",
    readMinutes: 7,
    keywords: [
      "düşük yatırım casino",
      "minimum depozito karşılaştırma",
      "küçük depozito platformları",
    ],
    relatedSlugs: ["how-to-play-online-slots-beginners-guide"],
    recommendedPlatformSlugs: ["suratbet"],
    sections: [
      {
        id: "minimum-deposit-is-not-the-whole-story",
        heading: "Minimum yatırım tek başına hikâye değil",
        level: 2,
        paragraphs: [
          "Düşük giriş eşiği arayüzü keşfetmeyi kolaylaştırır; fakat çekim minimumları, ödeme kanalları ve doğrulama gereklilikleri en az o kadar önemlidir.",
          "Tercih ettiğiniz yöntem için ücretlerin açıkça dokümante edilip edilmediğine bakın. Gizli sürtünme çoğu zaman yatırırken değil, nakit çekerken ortaya çıkar.",
        ],
      },
      {
        id: "what-we-compare-on-our-hub",
        heading: "Karşılaştırma sayfamızda neleri ele alıyoruz",
        level: 2,
        paragraphs: [
          "Genel karşılaştırma tablomuz; kampanya dili, yayımlanan minimum yatırımlar ve politika şeffaflığı ile arayüz sinyallerine dayalı muhafazakâr bir editoryal puana odaklanır.",
          "Puanlar sonuç garantisi veya hizmet kalitesi taahhüdü değildir. Oynamadan önce yargı yetkinizdeki lisansı mutlaka doğrulayın.",
        ],
      },
    ],
    faq: [
      {
        question:
          "Aynı minimum yatırıma sahip iki platform neden farklı hissettirir?",
        answer:
          "Bonus kuralları, oyun kapsamı, kimlik kontrolleri ve ödeme hızları değişir. Minimum yatırım giriş noktasını söyler—tüm operasyonel deneyimi değil.",
      },
      {
        question: "Ortaklık bağlantıları sıralamalarımızı değiştirir mi?",
        answer:
          "Ticari ilişkiler olabilir; yine de listeler araştırma için kullanılabilir kalmalıdır. Bölgenizde lisansını doğrulayabileğiniz ve şartlarını anlayabileceğiniz işletmelere öncelik verin.",
      },
    ],
  },
  {
    slug: "understanding-slot-features-wilds-scatters-and-bonus-rounds",
    title:
      "Slot Özellikleri: Wild, Scatter ve Bonus Turları",
    description:
      "Yaygın semboller ve özellikler üzerine slot odaklı bir açıklama—ödeme tablolarını daha güvenle okuyabilmeniz için.",
    category: "slots",
    publishedAt: "2026-03-02",
    updatedAt: "2026-03-10",
    readMinutes: 6,
    keywords: [
      "slot wild sembol",
      "scatter sembol açıklaması",
      "bonus turu slot",
    ],
    relatedSlugs: ["how-to-play-online-slots-beginners-guide"],
    recommendedPlatformSlugs: ["suratbet"],
    sections: [
      {
        id: "wild-symbols",
        heading: "Wild semboller: yerine geçme ve sınırlar",
        level: 2,
        paragraphs: [
          "Wild’lar tipik olarak standart sembollerin yerine geçerek kazanan kombinasyonları tamamlar. Wild’ların kendi başına ödeme yapıp yapmadığı ve tüm makaralarda bulunup bulunmadığı oyuna göre değişir.",
          "Her zaman oyun içi ödeme tablosunu açın: wild’ların hangi sembollerin yerine geçebileceğini ve jackpot’ların wild ile dışlanıp dışlanmadığını yazar.",
        ],
      },
      {
        id: "scatters-and-triggers",
        heading: "Scatter’lar ve özellik tetikleri",
        level: 2,
        paragraphs: [
          "Scatter’lar genelde ızgarada herhangi bir yerde ödeme yapabilir ve tek çevirmede yeteri kadar düştüğünde ücretsiz çevirme veya bonus turlarını açabilir.",
          "Bazı başlıklar alternatif tetikler kullanır (toplama çubukları, rastgele özellikler). Kaynak gerçek ödeme tablosudur—başka oyunlardan varsayımlar yanıltıcıdır.",
        ],
      },
      {
        id: "bonus-rounds-variance",
        heading: "Bonus turları ve volatilite sıçramaları",
        level: 2,
        paragraphs: [
          "Özellik turları, oyunun ödeme potansiyelinin büyük bir kısmını nadir olaylarda yoğunlaştırabilir. Bu da temel oyunu sakin, bonusları ise patlayıcı hissettirebilir.",
          "Daha sakin oturumlar istiyorsanız düşük volatilite olarak pazarlanan oyunları arayın veya bölgenizde izinliyse—demo modları deneyin.",
        ],
      },
    ],
    faq: [
      {
        question: "Bonus satın alımı RTP’yi değiştirir mi?",
        answer:
          "Bazı yargı bölgelerinde bonus satın alımı kısıtlanır; izin verilen yerlerde ödeme tablosu veya yardım dosyası satın alımın nasıl çalıştığını ve RTP’nin moda göre değişip değişmediğini anlatmalıdır. Emin değilseniz desteğe sorun veya özelliği kullanmayın.",
      },
      {
        question: "Özellikler uzun süre gelmezse ‘hak edilmiş’ midir?",
        answer:
          "Hayır. Lisanslı slotlarda sonuçlar ‘sıra’ modeliyle işlemez. Seriler rastgele oluşur ve her iki yönde de uzun sürebilir.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}

export function getArticlesByCategory(
  category: Article["category"],
): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getFeaturedArticles(limit = 3): Article[] {
  return [...articles]
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
    )
    .slice(0, limit);
}

export function getArticleRecommendedPlatforms(article: Article): Platform[] {
  return pickPlatforms(...article.recommendedPlatformSlugs);
}
