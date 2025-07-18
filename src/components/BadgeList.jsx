import React from 'react';
import { Trophy } from 'lucide-react';
import Badge from './Badge';

const BadgeList = ({ badges }) => (
  <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 mt-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
      <Trophy className="w-6 h-6 text-yellow-500" />
      Your Badges
    </h2>
    <div className="grid md:grid-cols-2 gap-4">
      {badges.map((badge) => (
        <Badge key={badge.id} badge={badge} />
      ))}
    </div>
  </div>
);

export default BadgeList; 