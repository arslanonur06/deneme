/**
 * Türkiye’de sık aranan işletme adları hakkında bilgilendirici kısa sayfalar.
 * Ticari markalar üçüncü taraflara aittir; bu siteyle doğrudan bağlantı iddia edilmez.
 * Tüm dış CTA’lar yalnızca siteConfig.partner.affiliateUrl (Robinbet) adresine gider.
 */
export type OperatorSpotlight = {
  slug: string;
  brandName: string;
  title: string;
  metaDescription: string;
  publishedAt: string;
  updatedAt: string;
  readMinutes: number;
  paragraphs: string[];
};

export const operatorSpotlights: OperatorSpotlight[] = [
  {
    slug: "tipobet365",
    brandName: "Tipobet365",
    title: "Tipobet365 hakkında bilmeniz gerekenler",
    metaDescription:
      "Tipobet365 markasıyla ilgili genel bilgilendirme; güncel kampanyalar ve lisans için resmi kaynakları kontrol edin.",
    publishedAt: "2026-03-01",
    updatedAt: "2026-03-21",
    readMinutes: 2,
    paragraphs: [
      "Tipobet365 adı Türkiye’de çevrim içi bahis ve casino aramalarında sık anılır. Kullanıcılar genelde spor bahisleri, canlı bahis ve slot oyunlarına erişim arar; arayüz ve kampanyalar zaman içinde güncellenebilir.",
      "Her işletmede olduğu gibi hoş geldin ve yeniden yükleme bonusları, çevrim şartları ve ödeme yöntemleri değişkendir. Kayıt olmadan önce şartnameyi ve ülkenizdeki yasal durumu değerlendirin.",
      "Bu sayfa genel bilgi sunar; marka ile bu site arasında resmi bağ kurulduğu anlamına gelmez. Güncel teklif ve kurallar için yalnızca markanın resmi iletişim kanallarına güvenin.",
    ],
  },
  {
    slug: "bets10",
    brandName: "Bets10",
    title: "Bets10 markası ve kullanıcıların sık sordukları",
    metaDescription:
      "Bets10 ile ilgili tarafsız genel bilgiler; bonus ve lisans için resmi siteyi doğrulayın.",
    publishedAt: "2026-03-01",
    updatedAt: "2026-03-21",
    readMinutes: 2,
    paragraphs: [
      "Bets10, uzun süredir Türkçe içerik sunan çevrim içi bahis markalarından biri olarak bilinir. Spor, canlı casino ve promosyon çeşitliliği kullanıcı ilgisini çeker.",
      "Ödeme hızları ve doğrulama süreçleri kullanıcı yorumlarında değişir; objektif karar için şartları kendiniz okuyun. Bonuslarda maksimum bahis ve çevrim kuralları kritiktir.",
      "Buradaki metin yatırım tavsiyesi değildir. Lisans ve erişim koşulları bölgeye göre farklılık gösterebilir.",
    ],
  },
  {
    slug: "mobilbahis",
    brandName: "Mobilbahis",
    title: "Mobilbahis: mobil odaklı deneyim",
    metaDescription:
      "Mobilbahis markası hakkında kısa bilgilendirme; bonus ve güncel adres için resmi kaynağa bakın.",
    publishedAt: "2026-03-01",
    updatedAt: "2026-03-21",
    readMinutes: 2,
    paragraphs: [
      "İsimden de anlaşılacağı üzere marka mobil tarayıcı ve uygulama deneyimine vurgu yapar. Canlı bahis ve hızlı kupon oluşturma beklentisi yüksektir.",
      "Kampanyalar dönemseldir; deneme veya hoş geldin tekliflerinde çevrim ve süre sınırlarını atlamayın. Kimlik doğrulama ilk çekimde istenebilir.",
      "Marka ile ilgili güncel duyuruları yalnızca yetkili kanallardan takip edin; üçüncü taraf linklere temkinli yaklaşın.",
    ],
  },
  {
    slug: "casinomaxi",
    brandName: "CasinoMaxi",
    title: "CasinoMaxi ve casino oyunları odaklı kullanım",
    metaDescription:
      "CasinoMaxi hakkında genel çerçeve; slot ve canlı masa oyunları arayanlar için notlar.",
    publishedAt: "2026-03-02",
    updatedAt: "2026-03-21",
    readMinutes: 2,
    paragraphs: [
      "CasinoMaxi adı çoğunlukla slot, canlı krupiye ve masa oyunlarıyla anılır. Sağlayıcı çeşitliliği ve turnuvalar kullanıcı tercihlerini etkiler.",
      "Bonuslar genelde slot çevrimine daha yüksek katkı verir; canlı oyunlarda katkı oranı düşük olabilir. Şartnamede oyun listesini kontrol edin.",
      "Sorumlu oyun limitleri ve soğuma süreleri tüm markalar için geçerlidir; bütçenizi aşmayın.",
    ],
  },
  {
    slug: "jetbahis",
    brandName: "Jetbahis",
    title: "Jetbahis markasına dair kısa bakış",
    metaDescription:
      "Jetbahis ile ilgili genel bilgilendirici notlar; güncel kampanyalar resmi sitede.",
    publishedAt: "2026-03-02",
    updatedAt: "2026-03-21",
    readMinutes: 2,
    paragraphs: [
      "Jetbahis, Türkiye pazarında reklam ve arama hacmi bulunan markalardan biridir. Spor ve casino bölümlerinin birlikte sunulması yaygındır.",
      "Yatırım yöntemleri ve minimum tutarlar dönemsel güncellenir. Bonus talebinde ödeme yöntemi kısıtı olup olmadığını okuyun.",
      "Her zaman iki faktörlü doğrulama ve güçlü şifre kullanın; hesap güvenliği kullanıcı sorumluluğundadır.",
    ],
  },
  {
    slug: "betwoon",
    brandName: "Betwoon",
    title: "Betwoon hakkında bilgilendirici özet",
    metaDescription:
      "Betwoon markası için genel tanıtım metni; resmi şartları doğrulamadan işlem yapmayın.",
    publishedAt: "2026-03-02",
    updatedAt: "2026-03-21",
    readMinutes: 2,
    paragraphs: [
      "Betwoon, çevrim içi bahis ve casino hizmeti sunan markalardan biridir; kullanıcı arayüzü ve kampanya yapısı zamanla değişebilir.",
      "Kayıp iadesi veya günlük görev gibi promosyonlar çevrim şartı içerebilir. Kazanç üst sınırlarına dikkat edin.",
      "Şikâyet ve destek süreçleri markanın müşteri hizmetleri politikasına bağlıdır; kayıtlı iletişim tercih edin.",
    ],
  },
  {
    slug: "restbet",
    brandName: "Restbet",
    title: "Restbet markası ve dikkat edilecek noktalar",
    metaDescription:
      "Restbet ile ilgili kısa bilgilendirme; bonus ve ödeme kuralları için resmi metni okuyun.",
    publishedAt: "2026-03-03",
    updatedAt: "2026-03-21",
    readMinutes: 2,
    paragraphs: [
      "Restbet, bahis ve casino içeriklerini bir arada sunan platformlardan biridir. Kullanıcılar genelde kombine bahis ve slot bonuslarını karşılaştırır.",
      "Çekim taleplerinde hesap doğrulama ve kaynak kanıtı istenebilir; bu AML düzenlemeleriyle uyumluluk içindir.",
      "Kampanyaları sosyal medyadan değil, mümkünse doğrudan hesap panelinizdeki duyurulardan takip edin.",
    ],
  },
  {
    slug: "holiganbet",
    brandName: "Holiganbet",
    title: "Holiganbet: marka bilgisi ve kullanıcı beklentileri",
    metaDescription:
      "Holiganbet hakkında genel çerçeve; güncel adres ve kampanya için resmi kaynak şart.",
    publishedAt: "2026-03-03",
    updatedAt: "2026-03-21",
    readMinutes: 2,
    paragraphs: [
      "Holiganbet adı Türkiye’de çevrim içi bahis aramalarında sık geçer. Spor dalları kapsamı ve canlı yayın hakları işletmeye göre değişir.",
      "Bonus iptali ve hesap incelemesi şüpheli işlem tespitinde tetiklenebilir; kurallara uygun oynayın.",
      "Bu içerik sponsorlu değildir; markanın güncel lisans ve iletişim bilgisini kendi sitesinden doğrulayın.",
    ],
  },
  {
    slug: "jojobet",
    brandName: "Jojobet",
    title: "Jojobet ile ilgili kısa rehber notları",
    metaDescription:
      "Jojobet markasına dair tarafsız bilgilendirme; teklifler sık değişir.",
    publishedAt: "2026-03-03",
    updatedAt: "2026-03-21",
    readMinutes: 2,
    paragraphs: [
      "Jojobet, mobil ve masaüstü üzerinden bahis ve casino hizmeti sunar. Kullanıcı deneyimi ödeme entegrasyonlarına bağlıdır.",
      "Hoş geldin paketleri çoğu zaman çevrim ve süre şartı taşır; kabul etmeden önce matematiksel olarak sürdürülebilir olup olmadığını düşünün.",
      "Sorumlu oyun araçlarını (limit, kendini dışlama) aktif kullanmak uzun vadede güvenliği artırır.",
    ],
  },
  {
    slug: "betpas",
    brandName: "Betpas",
    title: "Betpas markası hakkında bilmeniz gerekenler",
    metaDescription:
      "Betpas için genel bilgilendirici metin; resmi kampanya koşullarına uyun.",
    publishedAt: "2026-03-04",
    updatedAt: "2026-03-21",
    readMinutes: 2,
    paragraphs: [
      "Betpas, Türkiye kullanıcıları arasında bilinen çevrim içi bahis markalarından biridir. Oranlar ve pazar derinliği rekabetin temelidir.",
      "Casino tarafında sağlayıcı sayısı ve RTP bilgileri oyun içi yardım dosyalarında bulunur.",
      "Hesap güvenliği için paylaşılan cihazlarda oturumu kapatmayı ve e-posta bildirimlerini açmayı unutmayın.",
    ],
  },
  {
    slug: "meritbet",
    brandName: "Meritbet",
    title: "Meritbet: kısa marka özeti",
    metaDescription:
      "Meritbet ile ilgili genel notlar; güncel bonus ve kurallar resmi sitede.",
    publishedAt: "2026-03-04",
    updatedAt: "2026-03-21",
    readMinutes: 2,
    paragraphs: [
      "Meritbet, spor ve casino ürünlerini birleştiren işletmelerden biridir. Kullanıcılar çoğunlukla hızlı kayıt ve ödeme seçeneklerine odaklanır.",
      "VIP veya sadakat programları davetiye veya hacim bazlı olabilir; şartları yazılı olarak isteyin.",
      "Yasal durum bölgenize göre değişir; yerel mevzuata uyumu siz değerlendirin.",
    ],
  },
  {
    slug: "pusulabet",
    brandName: "Pusulabet",
    title: "Pusulabet markasına giriş",
    metaDescription:
      "Pusulabet hakkında bilgilendirici içerik; teklifler sık güncellenir.",
    publishedAt: "2026-03-04",
    updatedAt: "2026-03-21",
    readMinutes: 2,
    paragraphs: [
      "Pusulabet, çevrim içi bahis pazarında adı geçen markalardan biridir. Kampanya başlıkları dikkat çekse de detaylar şartnamededir.",
      "Canlı destek yanıtları bağlayıcı değildir; kritik konularda yazılı şartları esas alın.",
      "Ödeme gecikmelerinde işlem referans numarasını saklayın.",
    ],
  },
  {
    slug: "nakitbahis",
    brandName: "Nakitbahis",
    title: "Nakitbahis ile ilgili pratik bilgiler",
    metaDescription:
      "Nakitbahis markası için genel tanıtım; sorumlu oyun ve şart okuma uyarısı.",
    publishedAt: "2026-03-05",
    updatedAt: "2026-03-21",
    readMinutes: 2,
    paragraphs: [
      "Nakitbahis adı, hızlı ödeme beklentisiyle anılır; gerçek süreler yöntem ve doğrulama durumuna göre değişir.",
      "Bonuslar genelde belirli yatırım kanallarıyla sınırlı olabilir; kripto ve fiat kuralları farklıdır.",
      "Şifre ve iki adımlı doğrulama hesabınızı yetkisiz erişime karşı korur.",
    ],
  },
  {
    slug: "betkom",
    brandName: "Betkom",
    title: "Betkom markası üzerine notlar",
    metaDescription:
      "Betkom için kısa bilgilendirme; güncel lisans ve iletişim bilgisini doğrulayın.",
    publishedAt: "2026-03-05",
    updatedAt: "2026-03-21",
    readMinutes: 2,
    paragraphs: [
      "Betkom, bahis ve casino ürünleri sunan markalardan biridir. Kullanıcı arayüzü ve kampanya takvimi dönemsel güncellenir.",
      "Kayıp bonusu veya cashback teklifleri net kayıp tanımına bağlıdır; bonus hariç mi hesaplanıyor kontrol edin.",
      "Reşit olmayanların oynaması yasaktır; yaş doğrulaması ciddiye alınmalıdır.",
    ],
  },
  {
    slug: "matbet",
    brandName: "Matbet",
    title: "Matbet hakkında genel bilgi",
    metaDescription:
      "Matbet markasına dair tarafsız özet; resmi şartlar önceliklidir.",
    publishedAt: "2026-03-05",
    updatedAt: "2026-03-21",
    readMinutes: 2,
    paragraphs: [
      "Matbet, Türkiye aramalarında görünürlüğü olan işletmelerden biridir. Spor bahisleri ve slot içerikleri bir arada sunulabilir.",
      "Turnuva ve jackpot etkinlikleri tarih ve saat dilimiyle sınırlıdır; katılım koşullarını okuyun.",
      "Üçüncü taraf incelemelerine körü körüne güvenmeyin; kendi araştırmanızı yapın.",
    ],
  },
  {
    slug: "bahigo",
    brandName: "Bahigo",
    title: "Bahigo markası ve kullanıcı odaklı ipuçları",
    metaDescription:
      "Bahigo ile ilgili kısa bilgilendirme; kampanyalar değişkendir.",
    publishedAt: "2026-03-06",
    updatedAt: "2026-03-21",
    readMinutes: 2,
    paragraphs: [
      "Bahigo, çevrim içi bahis pazarında uzun süredir anılan isimlerden biridir. Oran formatı ve bahis kuralları arayüzde açıklanmalıdır.",
      "Casino bonuslarında oyun kısıtları (ör. yüksek RTP slotlar hariç) sık görülür.",
      "Hesap güvenliği için şüpheli e-postalardaki linklere tıklamayın.",
    ],
  },
  {
    slug: "superbahis",
    brandName: "Süperbahis",
    title: "Süperbahis: marka hakkında kısa bilgilendirme",
    metaDescription:
      "Süperbahis ile ilgili genel çerçeve; güncel teklifler için resmi kaynak.",
    publishedAt: "2026-03-06",
    updatedAt: "2026-03-21",
    readMinutes: 2,
    paragraphs: [
      "Süperbahis adı Türkiye’de çevrim içi bahis kültüründe bilinen markalardan biridir. Ürün kapsamı ve kampanyalar zaman içinde değişebilir.",
      "Kombine ve sistem bahislerinde kurallar farklıdır; kupon onayı öncesi oran değişimlerine dikkat edin.",
      "Yerel yasalara uyum kullanıcı sorumluluğundadır.",
    ],
  },
  {
    slug: "youwin",
    brandName: "Youwin",
    title: "Youwin markasına dair özet bilgiler",
    metaDescription:
      "Youwin hakkında bilgilendirici metin; bonus şartlarını okuyun.",
    publishedAt: "2026-03-06",
    updatedAt: "2026-03-21",
    readMinutes: 2,
    paragraphs: [
      "Youwin, spor ve casino içeriklerini bir arada sunan platformlardan biridir. Kullanıcılar mobil deneyim ve ödeme çeşitliliğine bakar.",
      "Deneme bonusları sınırlı sürelidir; kullanılmayan haklar silinebilir.",
      "Çoklu hesap ve bonus suistimali hesap kapatma ile sonuçlanabilir.",
    ],
  },
  {
    slug: "trbet",
    brandName: "Trbet",
    title: "Trbet ile ilgili genel notlar",
    metaDescription:
      "Trbet markası için kısa tanıtım; güncel adres ve kampanya resmi sitede.",
    publishedAt: "2026-03-07",
    updatedAt: "2026-03-21",
    readMinutes: 2,
    paragraphs: [
      "Trbet adı yerel pazarda çevrim içi bahis aramalarında geçer. Ürün çeşitliliği ve müşteri desteği kullanıcı memnuniyetini etkiler.",
      "İlk çekimde ek doğrulama normaldir; belgeleri net ve güncel yükleyin.",
      "Sorumlu oyun: limit koymak ve soğuma süresi kullanmak zarar riskini azaltır.",
    ],
  },
];

export function getOperatorBySlug(slug: string): OperatorSpotlight | undefined {
  return operatorSpotlights.find((o) => o.slug === slug);
}

export function getAllOperatorSlugs(): string[] {
  return operatorSpotlights.map((o) => o.slug);
}
