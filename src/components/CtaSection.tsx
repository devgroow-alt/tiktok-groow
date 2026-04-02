export default function CtaSection() {
  return (
    <section className="bg-[#57fd05] py-16">
      <div className="max-w-[1140px] mx-auto px-4 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[#0e383b] mb-4">
          Ste pripravení?
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[#0e383b] mb-8">
          Zaregistrujte sa teraz a zostaňme v kontakte
        </p>
        <a
          href="#contact"
          className="inline-block rounded-full border border-[#402266] px-8 py-3 font-bold text-[#57fd05] transition hover:opacity-90"
          style={{ background: "linear-gradient(#3d0088, #260055)" }}
        >
          ZAREGISTUJTE SA
        </a>
      </div>
    </section>
  );
}
