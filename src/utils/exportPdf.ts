import html2pdf from "html2pdf.js";

export const exportToPdf = async (element?: HTMLElement | null) => {
  const target = element || document.querySelector(".print-content");
  if (!target) return;

  // Add a class to force print-friendly styles before capture
  document.body.classList.add("exporting-pdf");

  // Wait for styles to apply and animations to settle
  await new Promise((r) => setTimeout(r, 500));

  const opt = {
    margin: [8, 5, 8, 5] as [number, number, number, number],
    filename: "Enterprise-AI-Adoption-Report-2025.pdf",
    image: { type: "jpeg", quality: 0.95 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      letterRendering: true,
      scrollY: 0,
      windowWidth: 900,
      logging: false,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait" as const,
    },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  };

  try {
    await html2pdf().set(opt).from(target).save();
  } catch (error) {
    console.error("PDF export failed:", error);
  } finally {
    document.body.classList.remove("exporting-pdf");
  }
};
