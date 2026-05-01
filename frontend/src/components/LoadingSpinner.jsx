export const LoadingSpinner = ({ text = "Loading..." }) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <div className="relative w-12 h-12">
        <div
          className="absolute inset-0 rounded-full border-[3px] border-gray-200"
        />
        <div
          className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[#0088CC]"
          style={{ animation: "spin 0.8s linear infinite" }}
        />
      </div>
      <p className="text-sm text-[#64748B] font-medium">{text}</p>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
