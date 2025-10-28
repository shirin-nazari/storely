import { useState } from 'react';

interface ExpandableTextProps {
  text: string;
  classname: string;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, classname }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="space-y-2">
      <p
        className={`${classname} transition-all duration-300 ${
          expanded ? '' : 'line-clamp-2'
        }`}
      >
        {text}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="border-none bg-none text-[#DC4123] text-sm hover:underline"
      >
        {expanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default ExpandableText;
