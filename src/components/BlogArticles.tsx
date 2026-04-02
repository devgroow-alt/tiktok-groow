const articles = [
  {
    img: "/images/article-1.webp",
    link: "https://www.groow.sk/tiktok-ads-konecne-vstupuju-aj-na-slovensky-trh/",
  },
  {
    img: "/images/article-2.webp",
    link: "https://www.groow.sk/prvy-tyzden-tiktok-reklamy-na-slovensku/",
  },
  {
    img: "/images/article-3.webp",
    link: "https://www.groow.sk/prva-spustena-tiktok-reklama-u-nas/",
  },
  {
    img: "/images/article-4.webp",
    link: "https://www.groow.sk/tiktok-formaty/",
  },
];

export default function BlogArticles() {
  return (
    <section className="bg-[#3d0088] py-16">
      <div className="max-w-[1140px] mx-auto px-4">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-center text-[#75ffe5]">
          Zistite o TikTok Ads viac
        </h2>
        <p className="font-[family-name:var(--font-body)] text-white text-center mt-4">
          Pozrite si rozhovor pre Ecommerce Bridge
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {articles.map((article) => (
            <a
              key={article.link}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden hover:opacity-80 transition"
            >
              <img
                src={article.img}
                alt=""
                className="w-full rounded-lg"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
