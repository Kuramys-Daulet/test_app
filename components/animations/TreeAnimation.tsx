
import React, { useState } from 'react';
import { PlayIcon } from '../icons/Icons.tsx';

const positions: { [key: string]: { top: string, left: string } } = {
  root: { top: '10%', left: '50%' },
  hub1: { top: '40%', left: '25%' },
  hub2: { top: '40%', left: '75%' },
  node1_1: { top: '70%', left: '10%' },
  node1_2: { top: '70%', left: '40%' },
  node2_1: { top: '70%', left: '60%' },
  node2_2: { top: '70%', left: '90%' },
};

const lines = [
  { from: 'root', to: 'hub1' },
  { from: 'root', to: 'hub2' },
  { from: 'hub1', to: 'node1_1' },
  { from: 'hub1', to: 'node1_2' },
  { from: 'hub2', to: 'node2_1' },
  { from: 'hub2', to: 'node2_2' },
];

const TreeAnimation: React.FC = () => {
    const [animationStep, setAnimationStep] = useState(0);

    const runAnimation = () => {
        if (animationStep !== 0) return;
        setAnimationStep(1); // 1_2 to hub1
        setTimeout(() => setAnimationStep(2), 1000); // hub1 to root
        setTimeout(() => setAnimationStep(3), 2000); // root to hub2
        setTimeout(() => setAnimationStep(4), 3000); // hub2 to 2_1
        setTimeout(() => setAnimationStep(0), 4000); // reset
    };

    const getPacketStyle = (): React.CSSProperties => {
        const baseStyle: React.CSSProperties = {
            position: 'absolute',
            width: '0.8rem',
            height: '0.8rem',
            backgroundColor: '#a3e635',
            borderRadius: '50%',
            boxShadow: '0 0 10px #a3e635',
            transition: 'all 1s ease-in-out',
            zIndex: 20,
            transform: 'translate(-50%, -50%)',
        };

        switch (animationStep) {
            case 1: return { ...baseStyle, ...positions.hub1 };
            case 2: return { ...baseStyle, ...positions.root };
            case 3: return { ...baseStyle, ...positions.hub2 };
            case 4: return { ...baseStyle, ...positions.node2_1 };
            default: return { ...baseStyle, ...positions.node1_2 };
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center space-y-4 h-full p-4">
            <div className="relative w-72 h-72">
                 <svg className="absolute top-0 left-0 w-full h-full z-0">
                    {lines.map((line, i) => (
                        <line key={i} x1={positions[line.from].left} y1={positions[line.from].top} x2={positions[line.to].left} y2={positions[line.to].top} stroke="#475569" strokeWidth="2" />
                    ))}
                </svg>

                {Object.entries(positions).map(([key, pos]) => (
                    <div key={key}
                         className={`absolute border-2 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-10 ${key.includes('node') ? 'w-8 h-8 bg-slate-700 border-cyan-500' : 'w-10 h-10 bg-slate-600 border-yellow-400'}`}
                         style={pos}>
                        <span className="text-xs font-bold">
                            {key.includes('node') ? `ДК` : key.includes('hub') ? 'HUB' : 'ROOT'}
                        </span>
                    </div>
                ))}
                
                <div style={getPacketStyle()}></div>
            </div>
            <button
                onClick={runAnimation}
                disabled={animationStep !== 0}
                className="mt-4 flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 disabled:bg-slate-500 disabled:cursor-not-allowed transition-colors"
            >
                <PlayIcon className="w-5 h-5 mr-2"/>
                {animationStep !== 0 ? 'Жіберу...' : 'Анимацияны іске қосу'}
            </button>
            <p className="text-xs text-slate-400 mt-2 text-center">ДК-дан (сол жақта) келген пакет иерархия бойынша ROOT-қа көтеріліп, содан кейін ДК-ға (оң жақта) түседі.</p>
        </div>
    );
};

export default TreeAnimation;