import React, { useState } from "react";

type ExpanderProps = {
  collapseText?: string;
  expandText?: string;
  children: React.ReactNode;
};

const Expander = ({ collapseText, expandText, children }: ExpanderProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <button
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        onClick={handleToggle}
      >
        {isExpanded ? collapseText ?? "Collapse" : expandText ?? "Expand"}
      </button>
      {isExpanded && children}
    </div>
  );
};

export default Expander;
