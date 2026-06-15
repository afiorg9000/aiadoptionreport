interface MarketProfileCitationProps {
  text: string;
  className?: string;
}

const MarketProfileCitation = ({ text, className }: MarketProfileCitationProps) => {
  const parseTextWithCitations = (input: string) => {
    const normalized = input.replace(/\[\^(\d+)\]/g, "[$1]");
    const parts = normalized.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[\d+\])/g);

    return parts.map((part, index) => {
      const citeMatch = part.match(/^\[(\d+)\]$/);
      if (citeMatch) {
        const refId = citeMatch[1];
        return (
          <a
            key={index}
            href={`#mp-ref-${refId}`}
            className="text-llpa-blue hover:text-llpa-blue/80 cursor-pointer font-medium text-[10px] align-super no-underline mx-0.5"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(`mp-ref-${refId}`);
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "center" });
                element.classList.add("bg-llpa-blue/20");
                setTimeout(() => element.classList.remove("bg-llpa-blue/20"), 2000);
              }
            }}
          >
            [{refId}]
          </a>
        );
      }

      const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
      if (boldMatch) {
        return (
          <strong key={index} className="font-semibold text-foreground">
            {boldMatch[1]}
          </strong>
        );
      }

      const italicMatch = part.match(/^\*([^*]+)\*$/);
      if (italicMatch) {
        return (
          <em key={index} className="italic">
            {italicMatch[1]}
          </em>
        );
      }

      if (!part) return null;
      return <span key={index}>{part}</span>;
    });
  };

  return <span className={className}>{parseTextWithCitations(text)}</span>;
};

export default MarketProfileCitation;
