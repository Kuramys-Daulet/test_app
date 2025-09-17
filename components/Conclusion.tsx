import React from 'react';

const Conclusion: React.FC = () => {
  return (
    <section className="mt-16 bg-slate-800/50 rounded-lg p-6 text-center">
      <h2 className="text-3xl font-bold text-cyan-400 mb-4">Қорытынды</h2>
      <p className="text-lg text-slate-300 max-w-4xl mx-auto">
        Барлық жағдайға сәйкес келетін "ең үздік" топология жоқ екенін түсіну маңызды. Олардың әрқайсысының өз артықшылықтары мен кемшіліктері бар.
      </p>
      <div className="mt-4 bg-slate-700 p-4 rounded-md italic border-l-4 border-cyan-500 max-w-3xl mx-auto">
        <p className="text-slate-200">
          Топологияны таңдау — бұл нақты міндеттерге, бюджетке, сенімділік талаптарына және желіні дамыту жоспарларына байланысты <strong>келісім</strong>.
        </p>
      </div>
    </section>
  );
};

export default Conclusion;