import { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}

const ExpandableText = ({ children, maxChar }: Props) => {
  
  let limit = maxChar || 100;
  const [displayText, setDisplayText] = useState(children.slice(0, limit));

  const isExpanded = displayText.length !== limit;
  const handleToggle = () => {
    isExpanded
      ? setDisplayText(children.slice(0, limit))
      : setDisplayText(children);
  };

  return (
    <>
      <span>{displayText}</span>
      {!isExpanded && <span>...</span>}
      <button onClick={handleToggle}>{isExpanded ? "Less" : "More"}</button>
    </>
  );
};

export default ExpandableText;
