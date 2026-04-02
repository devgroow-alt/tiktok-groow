const logos = [
  "/images/logo-01.svg",
  "/images/logo-02.svg",
  "/images/logo-03.png",
  "/images/logo-04.png",
  "/images/logo-05.svg",
  "/images/logo-06.svg",
  "/images/logo-07.png",
  "/images/logo-08.png",
  "/images/logo-09.svg",
  "/images/logo-10.png",
  "/images/logo-11.png",
  "/images/logo-12.svg",
];

export default function ClientLogos() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-[1140px] mx-auto px-4">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-center text-[#75ffe5]">
          Naši klienti
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {logos.map((src) => (
            <div key={src} className="flex items-center justify-center p-4">
              <img
                src={src}
                alt=""
                className="object-contain max-h-20 mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
