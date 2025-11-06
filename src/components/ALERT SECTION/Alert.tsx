
const Alert = ({ message, type }: { message: string; type: 'warning' | 'error' | 'normal' }) => {
  const colorMap = {
    normal: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    error: 'bg-red-100 text-red-700',
  };

  return (
    <div className={`p-3 my-2 rounded shadow ${colorMap[type]}`}>
      {message}
    </div>
  );
};

export default Alert;
