
import React from 'react';
import type { TopologyType } from '../types.ts';

interface TopologySelectorProps {
  types: TopologyType[];
  selected: TopologyType;
  onSelect: (type: TopologyType) => void;
}

const TopologySelector: React.FC<TopologySelectorProps> = ({ types, selected, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
      {types.map((type) => (
        <button
          key={type}
          onClick={() => onSelect(type)}
          className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 transform ${
            selected === type
              ? 'bg-cyan-500 text-white shadow-lg scale-110'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white hover:scale-105'
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default TopologySelector;