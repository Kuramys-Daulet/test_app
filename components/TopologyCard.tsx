
import React from 'react';
import type { Topology } from '../types.ts';
import { CheckCircleIcon, XCircleIcon } from './icons/Icons.tsx';

interface TopologyCardProps {
  topology: Topology;
}

const TopologyCard: React.FC<TopologyCardProps> = ({ topology }) => {
  const { 
    name, 
    description, 
    dataTransmission, 
    advantages, 
    disadvantages, 
    analogy, 
    AnimationComponent 
  } = topology;

  const createMarkup = (text: string) => {
    return { __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-cyan-400 font-semibold">$1</strong>') };
  };

  return (
    <div className="bg-slate-800 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out">
      <div className="p-6 md:p-8">
        <h3 className="text-3xl font-bold text-white mb-4">{name}</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Text Info */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg text-cyan-400 mb-2">Бұл қалай жұмыс істейді?</h4>
              <p className="text-slate-300" dangerouslySetInnerHTML={createMarkup(description)} />
            </div>
            
            <div>
              <h4 className="font-semibold text-lg text-cyan-400 mb-2">Деректерді беру принципі</h4>
              <p className="text-slate-300" dangerouslySetInnerHTML={createMarkup(dataTransmission)} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg text-green-400 mb-2">Артықшылықтары</h4>
                <ul className="space-y-2">
                  {advantages.map((adv, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-slate-300" dangerouslySetInnerHTML={createMarkup(adv)} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-red-400 mb-2">Кемшіліктері</h4>
                <ul className="space-y-2">
                  {disadvantages.map((dis, index) => (
                    <li key={index} className="flex items-start">
                      <XCircleIcon className="w-5 h-5 text-red-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-slate-300" dangerouslySetInnerHTML={createMarkup(dis)} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

             <div>
                <h4 className="font-semibold text-lg text-cyan-400 mb-2">Өмірден алынған аналогия</h4>
                <div className="bg-slate-700/50 p-3 rounded-md italic border-l-4 border-cyan-500">
                    <p className="text-slate-200">{analogy}</p>
                </div>
            </div>

          </div>

          {/* Right Column: Animation */}
          <div className="bg-slate-900 rounded-lg p-4 flex flex-col items-center justify-center min-h-[300px] lg:min-h-[400px]">
            <AnimationComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopologyCard;