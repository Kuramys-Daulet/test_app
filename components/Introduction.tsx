import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section className="bg-slate-800/50 rounded-lg p-6 text-center">
      <h2 className="text-3xl font-bold text-cyan-400 mb-4">Желі топологиясы дегеніміз не?</h2>
      <p className="text-lg text-slate-300 max-w-4xl mx-auto mb-4">
        Қарапайым сөзбен айтқанда, <strong>желі топологиясы</strong> — бұл компьютерлер мен басқа құрылғылардың бір-бірімен қалай жалғанғанын көрсететін карта немесе сызба сияқты.
      </p>
      <div className="bg-slate-700 p-4 rounded-md italic border-l-4 border-cyan-500 max-w-3xl mx-auto">
        <p className="text-slate-200">
          "Қала салып жатырсыз деп елестетіңіз. Топология — бұл үйлердің (компьютерлердің) бір-бірімен қалай байланысатынын анықтайтын жолдардың жоспары."
        </p>
      </div>
      <p className="text-lg text-slate-300 max-w-4xl mx-auto mt-4">
        Бұл өте маңызды, себебі таңдалған "жол картасына" сіздің желіңіздің қаншалықты жылдам, сенімді және қымбат болатыны, сондай-ақ болашақта оны кеңейтудің қаншалықты оңай болатыны тікелей байланысты.
      </p>
    </section>
  );
};

export default Introduction;