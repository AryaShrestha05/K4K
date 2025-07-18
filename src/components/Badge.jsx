import React from 'react';
import * as LucideIcons from 'lucide-react';

const Badge = ({ badge }) => {
  const Icon = LucideIcons[badge.icon] || LucideIcons.Award;
  return (
    <div className={`flex items-center gap-4 p-4 rounded-xl border ${badge.earned ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
      <div className={`w-12 h-12 flex items-center justify-center rounded-full ${badge.color}`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <div>
        <h4 className="font-bold text-gray-800">{badge.title}</h4>
        <p className="text-sm text-gray-600">{badge.description}</p>
        {badge.earned && <span className="text-xs text-green-600 font-semibold">Earnedd</span>}
      </div>
    </div>
  );
};

export default Badge; 