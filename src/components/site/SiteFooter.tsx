import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/spire-mark.png.asset.json";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white/80 mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="" width={44} height={44} className="h-11 w-11" />
            <div>
              <div className="text-white font-bold text-lg tracking-tight">Spire Proposals</div>
              <div className="text-xs uppercase tracking-[0.18em] text-gold">Proposals · Presentations · Solutions</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm text-white/70 leading-relaxed">
            Helping small businesses win federal and municipal contracts through expert proposal strategy,
            persuasive presentations, and pragmatic solutions.
          </p>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold tracking-wide uppercase">Site</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold tracking-wide uppercase">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="mailto:info@spireproposals.com" className="hover:text-gold transition-colors">info@spireproposals.com</a></li>
            <li className="text-white/60">Serving federal and municipal clients nationwide.</li>
          </ul>
          <h4 className="text-white text-sm font-semibold tracking-wide uppercase mt-6">Legal</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/60">
          <div>© {year} Spire Proposals. All rights reserved.</div>
          <a href="https://murryconsultancy.com" target="_blank" rel="noopener noreferrer">Murry Consultancy, LLC</a>
          <div>If it's worth doing, it's worth doing right.</div>
        </div>
      </div>
    </footer>
  );
}
