import React from 'react';

interface RuleProps {
  id: string;
  description: string;
  severity: 'normal' | 'warning' | 'error';
  timestamp: string;
}

const severityStyles = {
  normal: 'bg-green-100 text-green-800 border-green-400',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-400',
  error: 'bg-red-100 text-red-800 border-red-400',
};

const Rule: React.FC<RuleProps> = ({ id, description, severity, timestamp }) => {
  return (
    <div className={`border-l-4 p-3 rounded shadow ${severityStyles[severity]} mb-2`}>
      <div className="text-sm font-mono text-gray-600 mb-1">{timestamp}</div>
      <div className="font-semibold">Rule {id} Triggered</div>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Rule;
