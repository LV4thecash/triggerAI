export default function Notification({ status }) {
  if (!status) return null;
  const color = status === 'success' ? 'text-[#00FF7F]' : 'text-[#FF4444]';
  const message = status === 'success' ? 'Success!' : 'Failed to trigger';
  return (
    <div className={`mt-6 text-center text-lg ${color}`}>{message}</div>
  );
}
