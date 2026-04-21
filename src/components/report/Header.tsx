import { motion } from "framer-motion";
import { ChevronDown, Download, FileText, FileType2 } from "lucide-react";
import llpaLogo from "@/assets/llpa-logo-white.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Each download is shipped as a static file in `public/` so this is a plain
// anchor-based flow — no client-side conversion, no Puppeteer-in-browser.
// Regenerate via: `npm run build && node generate-pdf.mjs` followed by the
// pdf2docx conversion documented in the README.
const downloads = [
  {
    label: "PDF",
    note: "Read-only, print-ready layout",
    href: "/Enterprise-AI-Adoption-Report-2025.pdf",
    filename: "Enterprise-AI-Adoption-Report-2025.pdf",
    icon: FileType2,
  },
  {
    label: "Word",
    note: "Editable .docx with native Word styles, hyperlinks, and tables",
    href: "/Enterprise-AI-Adoption-Report-2025.docx",
    filename: "Enterprise-AI-Adoption-Report-2025.docx",
    icon: FileText,
  },
] as const;

const Header = () => {
  return (
    <>
      <a
        href="#executive-summary"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-white focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium focus:shadow-lg"
      >
        Skip to main content
      </a>
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
        <div className="container">
          <div className="flex items-center justify-between h-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <img src={llpaLogo} alt="LLPA" className="h-7" />
              <span className="text-slate-500 text-sm hidden sm:inline">|</span>
              <span className="font-body text-sm font-medium text-white/90 hidden sm:inline">
                Enterprise AI Adoption Report 2025
              </span>
            </motion.div>

            <motion.nav
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
              aria-label="Main navigation"
            >
              <a
                href="#executive-summary"
                className="font-body text-sm text-slate-400 hover:text-white transition-colors"
              >
                Summary
              </a>
              <a
                href="#methodology"
                className="font-body text-sm text-slate-400 hover:text-white transition-colors hidden md:block"
              >
                Methodology
              </a>
              <a
                href="#section-1"
                className="font-body text-sm text-slate-400 hover:text-white transition-colors hidden lg:block"
              >
                Findings
              </a>
              <a
                href="#references"
                className="font-body text-sm text-slate-400 hover:text-white transition-colors hidden md:block"
              >
                References
              </a>

              <DropdownMenu>
                <DropdownMenuTrigger
                  className="
                    group inline-flex items-center gap-2 px-5 py-2
                    font-body text-sm font-medium text-white
                    bg-llpa-blue hover:bg-llpa-blue/90
                    rounded-lg shadow-sm hover:shadow-md
                    transition-all duration-200
                    focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-white/50 focus-visible:ring-offset-2
                    focus-visible:ring-offset-slate-900
                    data-[state=open]:bg-llpa-blue/90
                    data-[state=open]:shadow-md
                  "
                >
                  <Download
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                  <span className="whitespace-nowrap">Download Report</span>
                  <ChevronDown
                    className="h-3.5 w-3.5 opacity-70 transition-transform group-data-[state=open]:rotate-180"
                    aria-hidden="true"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  sideOffset={8}
                  className="
                    w-80 p-1.5 rounded-xl border border-border/60
                    shadow-xl shadow-slate-900/10 bg-card
                  "
                >
                  <DropdownMenuLabel
                    className="
                      px-3 pt-2 pb-1.5
                      text-[10px] uppercase tracking-[0.18em]
                      text-llpa-blue font-semibold
                    "
                  >
                    Report formats
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-border/60" />
                  {downloads.map((d) => {
                    const Icon = d.icon;
                    return (
                      <DropdownMenuItem
                        key={d.filename}
                        asChild
                        className="
                          cursor-pointer py-2.5 px-3 rounded-lg
                          focus:bg-llpa-blue/5 focus:text-foreground
                          transition-colors
                        "
                      >
                        <a
                          href={d.href}
                          download={d.filename}
                          className="flex items-start gap-3"
                        >
                          <span
                            className="
                              flex h-9 w-9 shrink-0 items-center justify-center
                              rounded-lg bg-llpa-blue/10 text-llpa-blue
                              group-hover:bg-llpa-blue/15
                              mt-0.5
                            "
                          >
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span className="flex-1 min-w-0">
                            <span className="block text-sm font-semibold text-foreground">
                              {d.label}
                            </span>
                            <span className="block text-xs text-muted-foreground leading-snug mt-0.5">
                              {d.note}
                            </span>
                          </span>
                        </a>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
