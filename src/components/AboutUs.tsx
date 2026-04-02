export default function AboutUs() {
  return (
    <section className="bg-[#3d0088] py-16">
      <div className="max-w-[1140px] mx-auto px-4 text-center">
        <img
          src="/images/groow-icon.webp"
          alt="GROOW Digital"
          className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6"
        />

        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#75ffe5] mb-6">
          Agentúra GROOW DIGITAL
        </h2>

        <p className="font-[family-name:var(--font-body)] text-white text-base md:text-lg max-w-3xl mx-auto">
          Sme kombináciou performance a mediálnej agentúry. Boli sme pri
          spustení TikTok Ads na Slovensku a patríme medzi prvých oficiálnych
          partnerov TikToku v regióne. A túto príležitosť prinášame aj vám.
        </p>
      </div>
    </section>
  );
}
