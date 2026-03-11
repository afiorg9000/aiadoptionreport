import html2pdf from "html2pdf.js";

export const exportToPdf = async () => {
  const element = document.querySelector("main");
  if (!element) return;

  const opt = {
    margin: [10, 10, 10, 10],
    filename: "Enterprise-AI-Adoption-2025.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      letterRendering: true,
      scrollY: 0,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  };

  try {
    await html2pdf().set(opt).from(element).save();
  } catch (error) {
    console.error("PDF export failed:", error);
  }
};
