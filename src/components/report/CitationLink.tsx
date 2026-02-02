import { references } from "@/data/reportData";

interface CitationLinkProps {
  id: number;
}

const CitationLink = ({ id }: CitationLinkProps) => {
  const ref = references.find((r) => r.id === id);
  
  const handleClick = () => {
    const element = document.getElementById("references");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <sup
      onClick={handleClick}
      className="citation-link text-xs ml-0.5 cursor-pointer"
      title={ref ? `${ref.source}: ${ref.description}` : `Reference ${id}`}
    >
      [{id}]
    </sup>
  );
};

export default CitationLink;
