import { useState } from 'react';
import { Motion, AnimatePresence } from 'framer-motion';
import Spinner from './Spinner';
import Notification from './Notification';
import HistoryModal from './HistoryModal';
import { triggerReport } from '../services/ApiService';
import { addHistory } from '../storage/StorageService';

export default function Popup() {
  const [reportName, setReportName] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [showHistory, setShowHistory] = useState(false);

  const handleTrigger = async () => {
    setLoading(true);
    setStatus('');
    const success = await triggerReport(reportName);
    setLoading(false);
    setStatus(success ? 'success' : 'error');
    addHistory({ reportName, timestamp: Date.now(), status: success ? 'success' : 'error' });
  };

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-[400px] h-[600px] p-8 rounded-2xl bg-background flex flex-col justify-between"
    >
      <div>
        <div className="flex flex-col items-center mt-6">
          <img src="./public/icons/icon128.png" alt="logo" className="w-20" />
          <h1 className="mt-4 text-xl font-semibold">NOVA TRIGGER</h1>
        </div>
        <input
          type="text"
          value={reportName}
          onChange={(e) => setReportName(e.target.value)}
          placeholder="Enter Report Name (Optional)"
          className="w-full h-12 px-4 mt-8 rounded-xl border border-white/20 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary text-white font-orbitron text-base"
        />
        <Motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(138,43,226,1)' }}
          className="w-full h-16 mt-8 rounded-2xl text-lg font-semibold bg-gradient-to-br from-primary to-tertiary shadow-neon flex items-center justify-center"
          onClick={handleTrigger}
          disabled={loading}
        >
          {loading ? <Spinner /> : 'GENERATE REPORT'}
        </Motion.button>
        <Notification status={status} />
      </div>
      <div className="flex justify-end">
        <Motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px #00FFFF' }}
          className="w-24 h-10 text-sm text-secondary border border-secondary rounded-lg"
          onClick={() => setShowHistory(true)}
        >
          History
        </Motion.button>
      </div>
      <AnimatePresence>
        {showHistory && <HistoryModal onClose={() => setShowHistory(false)} />}
      </AnimatePresence>
    </Motion.div>
  );
}
