import React, { useState } from 'react';
import { PlayIcon } from '../icons/Icons';

const nodes = [
    { id: 1, top: '0%', left: '50%' },
    { id: 2, top: '30%', left: '95%' },
    { id: 3, top: '80%', left: '80%' },
    { id: 4, top: '80%', left: '20%' },
    { id: 5, top: '30%', left: '5%' },
];

const StarAnimation: React.FC = () => {
    const [animationStep, setAnimationStep] = useState(0);

    const runAnimation = () => {
        if (animationStep !== 0) return;
        setAnimationStep(1); // Node 5 to Hub
        setTimeout(() => setAnimationStep(2), 1500); // Hub to Node 2
        setTimeout(() => setAnimationStep(0), 3000); // Reset
    };
    
    const getPacketStyle = (): React.CSSProperties => {
        const baseStyle: React.CSSProperties = {
            position: 'absolute',
            width: '1rem',
            height: '1rem',
            backgroundColor: '#a3e635',
            borderRadius: '50%',
            boxShadow: '0 0 10px #a3e635',
            transition: 'all 1.5s ease-in-out',
            zIndex: 20,
        };

        switch (animationStep) {
            case 1: // From node 5 to hub
                return { ...baseStyle, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
            case 2: // From hub to node 2
                return { ...baseStyle, top: '30%', left: '95%', transform: 'translate(-50%, -50%)' };
            default: // Start at node 5
                return { ...baseStyle, top: '30%', left: '5%', transform: 'translate(-50%, -50%)' };
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center space-y-4 h-full p-4">
            <div className="relative w-64 h-64">
                {/* Hub */}
                <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-slate-700 border-2 border-yellow-400 rounded-lg flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-10">
                    <span className="text-xs font-bold">ХАБ</span>
                </div>

                {/* Nodes and Lines */}
                {nodes.map(node => (
                    <React.Fragment key={node.id}>
                        <div
                            className="absolute bg-slate-700 w-10 h-10 border-2 border-cyan-500 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                            style={{ top: node.top, left: node.left }}
                        >
                            <span className="text-sm font-bold">{node.id}</span>
                        </div>
                        <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 0 }}>
                            <line x1="50%" y1="50%" x2={node.left} y2={node.top} stroke="#475569" strokeWidth="2" />
                        </svg>
                    </React.Fragment>
                ))}
                
                {/* Packet */}
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
            <p className="text-xs text-slate-400 mt-2 text-center">5-түйіннен келген пакет хабқа барады, содан кейін 2-түйінге қайта бағытталады.</p>
        </div>
    );
};

export default StarAnimation;