export default function Hero() {
  return (
    <section className="bg-[#3d0088] py-24 md:py-32">
      <div className="mx-auto max-w-[1140px] px-4 text-center">
        <img
          src="/images/logo-groow.svg"
          alt="GROOW"
          className="mx-auto mb-10 max-w-[180px] w-full"
        />
        <h1 className="font-[family-name:var(--font-heading)] font-bold uppercase leading-[0.9]">
          <span className="block text-7xl md:text-9xl text-white">TikTok</span>
          <span className="block text-7xl md:text-9xl text-[#57fd05]">Ads</span>
          <span className="block text-4xl md:text-6xl text-[#75ffe5] mt-2">
            na Slovensku
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white font-[family-name:var(--font-body)]">
          Budujte svoju značku na TikToku
        </p>

        <a
          href="#contact"
          className="mt-10 inline-block rounded-full bg-white px-10 py-4 text-base font-bold text-black transition-opacity hover:opacity-90"
        >
          ZAREGISTROVAŤ SA
        </a>
      </div>
    </section>
  );
}
