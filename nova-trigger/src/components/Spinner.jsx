import { Motion } from 'framer-motion';

export default function Spinner() {
  return (
    <Motion.div
      className="w-6 h-6 border-4 border-secondary border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, ease: 'linear', duration: 1 }}
    />
  );
}
