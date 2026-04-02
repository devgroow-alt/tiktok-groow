"use client";

export default function FaqSection() {
  const faqs = [
    {
      question: "Aký rozpočet potrebujem na inzerciu?",
      answer:
        "Momentálne TikTok vyžaduje minimálny denný budget 20€. Takže minimum čo potrebujete na inzerciu je 600€ na mesiac.",
    },
    {
      question: "Ako viem využiť TikTok ads pre moju firmu?",
      answer:
        "Existuje mnoho spôsobov, ako môžete využiť TikTok pre svoju firmu. Môžete vytvárať obsah, ktorý zapája vašu cieľovú skupinu, spolupracovať s influencermi alebo investovať do kvalitného audio a video obsahu.",
    },
    {
      question:
        "Potrebujem mať vybudovaný profil na TikToku aby som mohol spúšťať reklamy?",
      answer:
        "Na spustenie kampane nepotrebujete organický profil na TikToku a tiež nepotrebujete svoj reklamný účet prepájať s osobným profilom.",
    },
    {
      question: "Čo nemôžem propagovať?",
      answer:
        "TikTok má obmedzenia pre určité kategórie ako medicínske produkty, doplnky stravy, finančné služby, spodné prádlo a kozmetiku. Zakázaný je obsah propagujúci tabak, drogy, zbrane, hazard a podobne.",
    },
  ];

  return (
    <section className="bg-[#3d0088] py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#75ffe5] text-center mb-8">
          Často kladené otázky
        </h2>

        <div>
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="border-b border-[#75ffe5]/30 group"
            >
              <summary className="flex justify-between items-center py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-white pr-4">
                  {faq.question}
                </span>
                <span className="text-[#75ffe5] text-2xl flex-shrink-0 group-open:hidden">
                  +
                </span>
                <span className="text-[#75ffe5] text-2xl flex-shrink-0 hidden group-open:inline">
                  −
                </span>
              </summary>
              <p className="pb-4 text-white/80 font-[family-name:var(--font-body)]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
