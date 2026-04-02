export default function WhenTikTok() {
  const items = [
    <>Ak chcete <strong>zvýšiť návštevnosť</strong> svojej webovej stránky</>,
    <><strong>Podporiť konverzie</strong> na webe, napríklad nákupy</>,
    <>Ak chcete <strong>generovať potenciálnych zákazníkov</strong> a získavať ich kontakty</>,
    <>Ak <strong>promujete</strong> svoju <strong>mobilnú aplikáciu</strong> pre iOS albeo Android</>,
  ];

  return (
    <section className="bg-[#3d0088] py-16">
      <div className="max-w-[1140px] mx-auto px-4">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#75ffe5] mb-10">
          Kedy je reklama na TikToku pre Vás vhodná?
        </h2>

        <ul className="space-y-5">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="text-[#57fd05] text-2xl font-bold leading-7 shrink-0">
                ✓
              </span>
              <span className="font-[family-name:var(--font-body)] text-white text-base md:text-lg">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
