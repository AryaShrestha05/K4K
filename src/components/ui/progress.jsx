import React from 'react';

export const Progress = ({ value, className = '' }) => (
  <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${className}`.trim()}>
    <div
      className="bg-purple-500 h-full transition-all duration-300"
      style={{ width: `${value}%`, minHeight: '8px' }}
    />
  </div>
); 