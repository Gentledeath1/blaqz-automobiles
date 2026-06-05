import Logo from "../assets/blaqLogo.jpg";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <img
              src={Logo}
              alt="Blaqz Automobiles"
              className="h-16 w-auto object-contain   mb-6"
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Premium automobiles carefully selected for drivers who value
              excellence, prestige and performance.
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6">
              Quick Links
            </p>
            <div className="flex flex-col gap-4">
              {["Inventory", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6">
              Get In Touch
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/2349131390328"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                WhatsApp Us
              </a>
              <a
                href="https://instagram.com/blaqz_autos"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com/@blaqz_automobiles"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/20">
            © 2025 Blaqz Automobiles. All rights reserved.
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/20">
            Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
