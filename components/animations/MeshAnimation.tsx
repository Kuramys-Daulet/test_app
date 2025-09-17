
import React, { useState } from 'react';
import { PlayIcon } from '../icons/Icons.tsx';

const nodes = [
    { id: 1, top: '10%', left: '10%' },
    { id: 2, top: '10%', left: '90%' },
    { id: 3, top: '50%', left: '50%' },
    { id: 4, top: '90%', left: '10%' },
    { id: 5, top: '90%', left: '90%' },
];

const MeshAnimation: React.FC = () => {
    const [animationStep, setAnimationStep] = useState(0);

    const runAnimation = () => {
        if (animationStep !== 0) return;
        setAnimationStep(1); // Node 1 to 5 (direct)
        setTimeout(() => setAnimationStep(2), 2000); // Node 1 to 4 to 5 (indirect)
        setTimeout(() => setAnimationStep(0), 4000); // Reset
    };

    const getPacketStyle = (): React.CSSProperties => {
        const baseStyle: React.CSSProperties = {
            position: 'absolute',
            width: '1rem',
            height: '1rem',
            borderRadius: '50%',
            transition: 'all 2s ease-in-out',
            zIndex: 20,
        };
        switch (animationStep) {
            case 1: // Node 1 to 5 direct
                return { ...baseStyle, top: '90%', left: '90%', backgroundColor: '#a3e635', boxShadow: '0 0 10px #a3e635' };
            case 2: // Path 1 -> 4 -> 5
                return { ...baseStyle, top: '90%', left: '90%', backgroundColor: '#f97316', boxShadow: '0 0 10px #f97316', transition: 'all 2s linear' };
            default: // Start at node 1
                return { ...baseStyle, top: '10%', left: '10%', backgroundColor: '#a3e635', boxShadow: '0 0 10px #a3e635' };
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center space-y-4 h-full p-4">
            <div className="relative w-64 h-64">
                {/* Lines */}
                <svg className="absolute top-0 left-0 w-full h-full z-0" >
                    {nodes.map((startNode, i) =>
                        nodes.slice(i + 1).map(endNode => (
                            <line key={`${startNode.id}-${endNode.id}`} x1={startNode.left} y1={startNode.top} x2={endNode.left} y2={endNode.top} stroke="#475569" strokeWidth="2" />
                        ))
                    )}
                </svg>

                {/* Nodes */}
                {nodes.map(node => (
                    <div key={node.id}
                        className="absolute bg-slate-700 w-10 h-10 border-2 border-cyan-500 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-10"
                        style={{ top: node.top, left: node.left }}>
                        <span className="text-sm font-bold">{node.id}</span>
                    </div>
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
            <p className="text-xs text-slate-400 mt-2 text-center max-w-xs">1-түйіннен 5-түйінге дейін. Алдымен тікелей жол көрсетіледі, егер ол қолжетімсіз болса, балама жол көрсетіледі.</p>
        </div>
    );
};

export default MeshAnimation;