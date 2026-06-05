import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/blaqLogo.jpg";

const links = [
  { label: "Inventory", href: "#inventory" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Request a Car", href: "#request" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* NAVBAR */}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#faf8f5]/95 backdrop-blur-xl" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="h-[90px] flex items-center justify-between border-b border-black/10">
            {/* LOGO */}

            <a href="/">
              <img
                src={Logo}
                alt="Blaqz Automobiles"
                className="h-16 w-auto rounded-md"
              />
            </a>

            {/* DESKTOP NAV */}

            <nav className="hidden lg:flex items-center gap-14">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.28em]
                    text-neutral-600
                    hover:text-black
                    transition-colors
                  "
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}

            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/2349131390328"
                target="_blank"
                rel="noreferrer"
                className="
hidden
lg:flex
items-center
justify-center
px-8
h-[48px]
border
border-black
uppercase
tracking-[0.18em]
text-[11px]
font-medium
hover:bg-black
hover:text-white
transition-all
duration-500
"
              >
                WhatsApp
              </a>

              {/* MOBILE BUTTON */}

              <button onClick={() => setMobileOpen(true)} className="lg:hidden">
                <Menu size={28} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* OVERLAY */}

      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* MOBILE MENU */}

      <aside
        className={`fixed top-0 right-0 h-screen w-full max-w-sm bg-[#faf8f5] z-50 transition-transform duration-500 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between px-8 py-8 border-b border-black/10">
            <span
              className="
                uppercase
                tracking-[0.25em]
                text-[14px]
              "
            >
              Menu
            </span>

            <button onClick={() => setMobileOpen(false)}>
              <X size={28} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex-1 px-8 pt-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="
                  block
                  py-6
                  border-b
                  border-black/10
                  uppercase
                  tracking-[0.18em]
                  text-sm
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="p-8">
            <a
              href="https://wa.me/2349131390328"
              target="_blank"
              rel="noreferrer"
              className="
                block
                text-center
                border
                border-black
                py-4
                uppercase
                tracking-[0.18em]
                text-[11px]
                hover:bg-black
hover:text-white
transition-all
duration-500
              "
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
