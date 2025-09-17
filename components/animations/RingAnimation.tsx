import React, { useState, useEffect } from 'react';
import { PlayIcon } from '../icons/Icons';

const positions = [
    { top: '50%', left: '0%', transform: 'translate(-50%, -50%)' },   // Left
    { top: '10%', left: '25%', transform: 'translate(-50%, -50%)' },  // Top-left
    { top: '10%', left: '75%', transform: 'translate(-50%, -50%)' },  // Top-right
    { top: '50%', left: '100%', transform: 'translate(-50%, -50%)' },  // Right
    { top: '90%', left: '75%', transform: 'translate(-50%, -50%)' },  // Bottom-right
    { top: '90%', left: '25%', transform: 'translate(-50%, -50%)' },  // Bottom-left
];

const RingAnimation: React.FC = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [packetIndex, setPacketIndex] = useState(0);

    useEffect(() => {
        // ТҮЗЕТУ: Браузермен үйлесімділік үшін `NodeJS.Timeout` орнына `number | undefined` қолданылды.
        // Браузер орталарында `setInterval` `number` мәнін қайтарады, ал `isAnimating` false болғанда
        // айнымалы `undefined` болуы мүмкін.
        let intervalId: number | undefined;
        if (isAnimating) {
            setPacketIndex(0);
            intervalId = setInterval(() => {
                setPacketIndex(prevIndex => {
                    const nextIndex = prevIndex + 1;
                    if (nextIndex >= positions.length) {
                        clearInterval(intervalId);
                        setIsAnimating(false);
                        return 0;
                    }
                    return nextIndex;
                });
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isAnimating]);
    
    return (
        <div className="w-full flex flex-col items-center justify-center space-y-4 h-full p-4">
            <div className="relative w-64 h-64">
                {/* Ring path */}
                <div className="absolute top-1/2 left-1/2 w-[90%] h-[90%] border-2 border-slate-600 rounded-full" style={{transform: 'translate(-50%, -50%)'}}></div>

                {/* Nodes */}
                {positions.map((pos, index) => (
                    <div
                        key={index}
                        className="absolute bg-slate-700 w-10 h-10 border-2 border-cyan-500 rounded-full flex items-center justify-center"
                        style={pos}
                    >
                        <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                ))}
                
                {/* Packet */}
                <div 
                    className="absolute w-4 h-4 bg-lime-400 rounded-full shadow-lg shadow-lime-400/50 transition-all duration-700 ease-in-out"
                    style={isAnimating ? positions[packetIndex] : positions[0]}
                ></div>

            </div>
             <button
                onClick={() => !isAnimating && setIsAnimating(true)}
                disabled={isAnimating}
                className="mt-4 flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 disabled:bg-slate-500 disabled:cursor-not-allowed transition-colors"
            >
                <PlayIcon className="w-5 h-5 mr-2"/>
                {isAnimating ? 'Жіберу...' : 'Анимацияны іске қосу'}
            </button>
            <p className="text-xs text-slate-400 mt-2 text-center">1-түйіннен келген пакет барлық түйіндер арқылы өтіп, сақина бойымен 4-түйінге дейін барады.</p>
        </div>
    );
};

export default RingAnimation;