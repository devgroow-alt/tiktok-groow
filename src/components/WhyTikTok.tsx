export default function WhyTikTok() {
  const stats = [
    {
      image: "/images/stat-1.png",
      text: "Mesačne aktívnych užívateľov na Slovensku",
    },
    {
      image: "/images/stat-2.png",
      text: "Počet užívateľov na Slovensku stále rastie",
    },
    {
      image: "/images/stat-3.png",
      text: "Polovica užívateľov má 25 a viac rokov",
    },
  ];

  return (
    <section className="bg-[#3d0088] py-20 md:py-28">
      <div className="mx-auto max-w-[1140px] px-4">
        <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[#75ffe5] text-center uppercase">
          Prečo TikTok Ads?
        </h2>

        <div className="mx-auto mt-10 max-w-3xl space-y-6 text-center font-[family-name:var(--font-body)] text-white text-base md:text-lg leading-relaxed">
          <p>
            TikTok je najpopulárnejšia sociálna sieť na svete. Platforma
            s&nbsp;obrovským potenciálom a&nbsp;masívnou, angažovanou
            používateľskou základňou.
          </p>
          <p>
            Je to ideálna platforma na oslovenie najimpulzívnejšej generácie
            v&nbsp;histórii a&nbsp;na to, aby ste získali ich pozornosť
            a&nbsp;premenili ju na zisk.
          </p>
          <p className="text-xl md:text-2xl font-bold text-[#75ffe5]">
            Neviete, kde začať? Sme tu pre vás.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.image}
              className="overflow-hidden rounded-lg bg-[#260055]"
            >
              <img
                src={stat.image}
                alt={stat.text}
                className="w-full object-cover"
              />
              <p className="p-5 text-center text-base text-white font-[family-name:var(--font-body)]">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
