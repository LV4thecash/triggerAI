import { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { getHistory } from '../storage/StorageService';

export default function HistoryModal({ onClose }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getHistory().then(setHistory);
  }, []);

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 backdrop-blur-md bg-[rgba(15,15,27,0.85)] flex flex-col p-4 overflow-auto"
    >
      <div className="flex justify-end text-2xl cursor-pointer" onClick={onClose}>
        &times;
      </div>
      <div className="mt-4 space-y-2">
        {history.map((h, idx) => (
          <div key={idx} className="w-full p-4 border-b border-white/10 flex justify-between items-center text-base">
            <span>{h.reportName || 'Unnamed'}</span>
            <span>{new Date(h.timestamp).toLocaleString()}</span>
            <span>{h.status === 'success' ? '✅' : '❌'}</span>
          </div>
        ))}
      </div>
    </Motion.div>
  );
}
