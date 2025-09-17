import React from 'react';

const HybridAnimation: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-4">
            <h4 className="text-lg font-bold text-cyan-400 mb-4">Мысал: Жұлдыз-Шина</h4>
            <div className="relative w-full max-w-md h-64">
                {/* Bus */}
                <div className="absolute top-1/2 left-0 w-full h-1.5 bg-slate-600 rounded-full -translate-y-1/2"></div>
                
                {/* Star 1 */}
                <div className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2">
                    <div className="w-10 h-10 bg-slate-700 border-2 border-yellow-400 rounded-md flex items-center justify-center text-xs font-bold">ХАБ</div>
                    <svg className="absolute w-32 h-32 -top-14 -left-14 opacity-50">
                        <line x1="50%" y1="50%" x2="10%" y2="10%" stroke="#475569" strokeWidth="2" />
                        <line x1="50%" y1="50%" x2="90%" y2="10%" stroke="#475569" strokeWidth="2" />
                        <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="#475569" strokeWidth="2" />
                    </svg>
                    <div className="absolute w-6 h-6 bg-cyan-500 rounded-full top-[-35px] left-[-35px]"></div>
                    <div className="absolute w-6 h-6 bg-cyan-500 rounded-full top-[-35px] right-[-35px]"></div>
                    <div className="absolute w-6 h-6 bg-cyan-500 rounded-full bottom-[-35px] left-1/2 -translate-x-1/2"></div>
                </div>

                {/* Star 2 */}
                 <div className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2">
                    <div className="w-10 h-10 bg-slate-700 border-2 border-yellow-400 rounded-md flex items-center justify-center text-xs font-bold">ХАБ</div>
                    <svg className="absolute w-32 h-32 -top-14 -left-14 opacity-50">
                        <line x1="50%" y1="50%" x2="10%" y2="10%" stroke="#475569" strokeWidth="2" />
                        <line x1="50%" y1="50%" x2="90%" y2="10%" stroke="#475569" strokeWidth="2" />
                        <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="#475569" strokeWidth="2" />
                    </svg>
                    <div className="absolute w-6 h-6 bg-cyan-500 rounded-full top-[-35px] left-[-35px]"></div>
                    <div className="absolute w-6 h-6 bg-cyan-500 rounded-full top-[-35px] right-[-35px]"></div>
                    <div className="absolute w-6 h-6 bg-cyan-500 rounded-full bottom-[-35px] left-1/2 -translate-x-1/2"></div>
                </div>

            </div>
            <p className="text-xs text-slate-400 mt-8 text-center">Бұл екі "Жұлдыз" желісінің ортақ "Шинамен" жалғанғанын<br />көрсететін статикалық сызба.</p>
        </div>
    );
};

export default HybridAnimation;