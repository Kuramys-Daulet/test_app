import React from 'react';

const tableData = [
  { topology: 'Шина', cost: 'Төмен', reliability: 'Төмен', scalability: 'Қиын', troubleshooting: 'Қиын' },
  { topology: 'Жұлдыз', cost: 'Орташа', reliability: 'Жоғары', scalability: 'Оңай', troubleshooting: 'Оңай' },
  { topology: 'Сақина', cost: 'Орташа', reliability: 'Төмен', scalability: 'Қиын', troubleshooting: 'Қиын' },
  { topology: 'Тор', cost: 'Жоғары', reliability: 'Жоғары', scalability: 'Қиын', troubleshooting: 'Қиын' },
];

const ComparisonTable: React.FC = () => {
  return (
    <div className="overflow-x-auto bg-slate-800 rounded-lg p-4 shadow-lg">
      <table className="min-w-full text-sm text-left text-slate-300">
        <thead className="text-xs text-cyan-400 uppercase bg-slate-700/50">
          <tr>
            <th scope="col" className="px-6 py-3 rounded-l-lg">Топология</th>
            <th scope="col" className="px-6 py-3">Орнату құны</th>
            <th scope="col" className="px-6 py-3">Сенімділік</th>
            <th scope="col" className="px-6 py-3">Кеңейтілуі</th>
            <th scope="col" className="px-6 py-3 rounded-r-lg">Ақауларды жою күрделілігі</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="border-b border-slate-700 hover:bg-slate-700/50">
              <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                {row.topology}
              </th>
              <td className="px-6 py-4">{row.cost}</td>
              <td className="px-6 py-4">{row.reliability}</td>
              <td className="px-6 py-4">{row.scalability}</td>
              <td className="px-6 py-4">{row.troubleshooting}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;