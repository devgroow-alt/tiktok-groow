export default function CtaBanner() {
  return (
    <section className="bg-[#57fd05] py-16">
      <div className="mx-auto max-w-[1140px] px-4 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#0e383b] uppercase">
          Začnite inzerovať na TikToku medzi prvými
        </h2>

        <a
          href="#contact"
          className="mt-8 inline-block rounded-full border border-[#402266] px-10 py-4 text-base font-bold text-[#57fd05] transition-opacity hover:opacity-90"
          style={{
            backgroundImage: "linear-gradient(#3d0088, #260055)",
          }}
        >
          Kontaktujte nás!
        </a>
      </div>
    </section>
  );
}
