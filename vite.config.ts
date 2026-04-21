import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "node:fs";
import { componentTagger } from "lovable-tagger";
import { references } from "./src/data/reportData";

/** Writes public/source-library.json for digital library / “AI Kit” downloads (dev + build). */
function sourceLibraryJsonPlugin(): Plugin {
  return {
    name: "source-library-json",
    buildStart() {
      const outPath = path.resolve(__dirname, "public/source-library.json");
      const payload = {
        generated: new Date().toISOString(),
        title: "Enterprise AI Adoption Report — source index",
        description:
          "Bibliographic metadata for all numbered references. Public URLs are included where available; full-text redistribution of paywalled publisher PDFs is not included.",
        count: references.length,
        references: [...references].sort((a, b) => a.id - b.id),
      };
      fs.writeFileSync(outPath, JSON.stringify(payload, null, 2), "utf8");
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    sourceLibraryJsonPlugin(),
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
