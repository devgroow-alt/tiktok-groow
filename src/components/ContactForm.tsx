"use client";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-white py-16">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column - Form */}
          <div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#0e383b] font-medium mb-1"
                >
                  Meno a priezvisko
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 rounded-lg p-3 text-base outline-none focus:border-[#57fd05] focus:ring-1 focus:ring-[#57fd05]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#0e383b] font-medium mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 text-base outline-none focus:border-[#57fd05] focus:ring-1 focus:ring-[#57fd05]"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-[#0e383b] font-medium mb-1"
                >
                  Telefónne číslo
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-300 rounded-lg p-3 text-base outline-none focus:border-[#57fd05] focus:ring-1 focus:ring-[#57fd05]"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-[#0e383b] font-medium mb-1"
                >
                  Názov firmy
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full border border-gray-300 rounded-lg p-3 text-base outline-none focus:border-[#57fd05] focus:ring-1 focus:ring-[#57fd05]"
                />
              </div>

              {/* Honeypot */}
              <input
                type="text"
                name="confirm-existence"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <button
                type="submit"
                className="rounded-full border border-[#402266] px-8 py-3 font-bold text-[#57fd05] transition hover:opacity-90"
                style={{ background: "linear-gradient(#3d0088, #260055)" }}
              >
                Odoslať
              </button>
            </form>
          </div>

          {/* Right column - Info */}
          <div className="flex flex-col justify-center">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#0e383b] mb-3">
              Zanechajte svoj kontakt
            </h2>
            <p className="text-[#0e383b] mb-6">
              Čo sa bude diať po odoslaní kontaktu?
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-[#57fd05] flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[#0e383b] font-[family-name:var(--font-body)]">
                  Dostanete potvrdzujúci e-mail
                </span>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-[#57fd05] flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[#0e383b] font-[family-name:var(--font-body)]">
                  Náš špecialista vás bude kontaktovať
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
