const members = [
  {
    name: "Marcel Milo",
    role: "Head of TikTok ads digital strategy",
    img: "/images/team-marcel.webp",
  },
  {
    name: "Patrik Koleňák",
    role: "TikTok Ads technical support specialist",
    img: "/images/team-patrik.webp",
  },
  {
    name: "Daniela Štalmachová",
    role: "TikTok Ads specialist",
    img: "/images/team-daniela.webp",
  },
  {
    name: "Gabriela Brezániová",
    role: "TikTok Ads specialist",
    img: "/images/team-gabriela.webp",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#3d0088] py-16">
      <div className="max-w-[1140px] mx-auto px-4">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-center text-[#75ffe5]">
          GROOW DIGITAL expertný TikTok team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {members.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-40 h-40 rounded-full object-cover aspect-square mx-auto"
              />
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mt-4">
                {member.name}
              </h3>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#75ffe5] mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
