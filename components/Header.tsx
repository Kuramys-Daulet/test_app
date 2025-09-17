import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center border-b-2 border-cyan-500 pb-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
        Интерактивті нұсқаулық:{' '}
        <span className="text-cyan-400">желі топологиялары</span>
      </h1>
      <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
        Күрделі техникалық тұжырымдамаларды көрнекі анимациялармен қарапайым және түсінікті тілде түсіндіреміз.
      </p>
    </header>
  );
};

export default Header;