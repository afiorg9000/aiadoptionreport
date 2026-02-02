interface MarketProfileCitationProps {
  text: string;
}

const MarketProfileCitation = ({ text }: MarketProfileCitationProps) => {
  // Parse text and convert [number] citations to clickable links
  const parseTextWithCitations = (text: string) => {
    const parts = text.split(/(\[\d+\])/g);
    
    return parts.map((part, index) => {
      const match = part.match(/\[(\d+)\]/);
      if (match) {
        const refId = match[1];
        return (
          <a
            key={index}
            href={`#mp-ref-${refId}`}
            className="text-llpa-blue hover:text-llpa-blue/80 cursor-pointer font-medium text-[10px] align-super"
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
      return <span key={index}>{part}</span>;
    });
  };

  return <>{parseTextWithCitations(text)}</>;
};

export default MarketProfileCitation;
