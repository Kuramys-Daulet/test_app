import React, { useState, useEffect } from 'react';
import { PlayIcon } from '../icons/Icons';

const BusAnimation: React.FC = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [packetPosition, setPacketPosition] = useState(-10); // Start off-screen

    useEffect(() => {
        let animationFrameId: number;
        if (isAnimating) {
            const startTime = Date.now();
            const duration = 4000; // 4 seconds animation

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = elapsed / duration;
                
                if (progress < 1) {
                    setPacketPosition(progress * 110); // Move from -10% to 100%
                    animationFrameId = requestAnimationFrame(animate);
                } else {
                    setIsAnimating(false);
                    setPacketPosition(-10);
                }
            };
            animationFrameId = requestAnimationFrame(animate);
        }
        return () => cancelAnimationFrame(animationFrameId);
    }, [isAnimating]);

    return (
        <div className="w-full flex flex-col items-center justify-center space-y-4 h-full p-4">
            <div className="relative w-full max-w-sm h-32">
                {/* Bus Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-600 rounded-full" style={{ transform: 'translateY(-50%)' }}></div>
                {/* Terminators */}
                <div className="absolute top-1/2 left-0 w-2 h-4 bg-yellow-400 rounded-sm" style={{ transform: 'translate(-100%, -50%)' }}></div>
                <div className="absolute top-1/2 right-0 w-2 h-4 bg-yellow-400 rounded-sm" style={{ transform: 'translate(100%, -50%)' }}></div>

                {/* Nodes */}
                {[10, 35, 60, 85].map((pos, index) => (
                    <div key={index} className="absolute top-1/2" style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}>
                        <div className="absolute bottom-0 w-1 h-6 bg-slate-600"></div>
                        <div className="w-8 h-8 bg-slate-700 border-2 border-cyan-500 rounded-full flex items-center justify-center -translate-y-12">
                            <span className="text-xs font-bold">{index + 1}</span>
                        </div>
                    </div>
                ))}

                {/* Packet */}
                {isAnimating && (
                    <div className="absolute top-1/2 w-4 h-4 bg-lime-400 rounded-full shadow-lg shadow-lime-400/50" style={{ left: `${packetPosition}%`, transform: 'translate(-50%, -50%)' }}></div>
                )}
            </div>
            <button
                onClick={() => !isAnimating && setIsAnimating(true)}
                disabled={isAnimating}
                className="mt-4 flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 disabled:bg-slate-500 disabled:cursor-not-allowed transition-colors"
            >
                <PlayIcon className="w-5 h-5 mr-2"/>
                {isAnimating ? 'Жіберу...' : 'Анимацияны іске қосу'}
            </button>
            <p className="text-xs text-slate-400 mt-2">1-түйіннен келген пакет барлығына жіберіледі, бірақ, мысалы, 4-түйінге арналған.</p>
        </div>
    );
};

export default BusAnimation;