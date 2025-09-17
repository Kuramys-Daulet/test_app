
import React, { useState, useMemo } from 'react';
import type { TopologyType } from './types.ts';
import { TOPOLOGIES, TOPOLOGY_TYPES } from './data/topologyData.ts';
import Header from './components/Header.tsx';
import TopologySelector from './components/TopologySelector.tsx';
import TopologyCard from './components/TopologyCard.tsx';
import ComparisonTable from './components/ComparisonTable.tsx';
import Introduction from './components/Introduction.tsx';
import Conclusion from './components/Conclusion.tsx';

const App: React.FC = () => {
  const [selectedTopology, setSelectedTopology] = useState<TopologyType>('Bus');

  const currentTopologyData = useMemo(() => {
    return TOPOLOGIES.find(t => t.id === selectedTopology);
  }, [selectedTopology]);

  return (
    <div className="min-h-screen bg-slate-900 text-gray-200 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <main className="mt-8">
          <Introduction />
          
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-center text-cyan-400 mb-8">Топологиялардың негізгі түрлері</h2>
            <TopologySelector 
              types={TOPOLOGY_TYPES} 
              selected={selectedTopology} 
              onSelect={setSelectedTopology} 
            />
            
            <div className="mt-8">
              {currentTopologyData && <TopologyCard topology={currentTopologyData} />}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center text-cyan-400 mb-8">Салыстыру кестесі</h2>
            <ComparisonTable />
          </section>

          <Conclusion />
        </main>
      </div>
    </div>
  );
};

export default App;