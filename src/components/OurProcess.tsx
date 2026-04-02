export default function OurProcess() {
  const steps = [
    {
      number: "01",
      title: "First Touch",
      description:
        "Naplánujeme si s vami stretnutie, kde Vám pomôžeme špecifikovať vaše biznis ciele na základe vašich potrieb.",
    },
    {
      number: "02",
      title: "Research",
      description:
        "Preskúmame váš produkt, značku a cieľovú skupinu, a analyzujeme konkurenciu, aby sme identifikovali úspešné stratégie.",
    },
    {
      number: "03",
      title: "Set-up & Optimization",
      description:
        "Spustíme Vaše kampane a optimalizujeme ich pre čo najlepšie výsledky.",
    },
    {
      number: "04",
      title: "Reporting",
      description:
        "Pravidelne vás informujeme o výsledkoch a efektívnosti kampaní.",
    },
  ];

  return (
    <section className="bg-[#3d0088] py-16">
      <div className="max-w-[1140px] mx-auto px-4">
        <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[#75ffe5] uppercase mb-14">
          NÁŠ PROCES
        </h2>

        <div className="space-y-12">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="font-[family-name:var(--font-heading)] text-7xl md:text-8xl font-bold text-[#57fd05] leading-none block">
                {step.number}
              </span>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mt-2">
                {step.title}
              </h3>
              <p className="font-[family-name:var(--font-body)] text-white text-base md:text-lg mt-3 max-w-2xl">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
