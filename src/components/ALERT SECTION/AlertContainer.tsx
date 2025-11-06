import { useEffect, useState } from 'react';

type AlertStatus = 'normal' | 'warning' | 'error';

interface AlertLog {
  status: AlertStatus;
  message: string;
  timestamp: string;
  ruleId: string;
  ruleDescription: string;
}

const alertSequence: AlertLog[] = [
  {
    status: 'normal',
    message: '✅ All transactions life cycle in place',
    ruleId: '01',
    ruleDescription: 'Transaction lifecycle successfully completed.',
    timestamp: '',
  },
  {
    status: 'warning',
    message: '⚠️ High No3ds time detected',
    ruleId: '14',
    ruleDescription: 'High volume of No3DS transactions detected.',
    timestamp: '',
  },
  {
    status: 'normal',
    message: '✅ Transactions operating within normal limits',
    ruleId: '01',
    ruleDescription: 'All transaction KPIs within threshold.',
    timestamp: '',
  },
  {
    status: 'error',
    message: '❌ Fraudulent transaction spike detected!',
    ruleId: '21',
    ruleDescription: 'Fraud pattern detected: velocity > 100 tx/min.',
    timestamp: '',
  },
  {
    status: 'warning',
    message: '⚠️ Slight transaction auth traffic spike observed',
    ruleId: '14',
    ruleDescription: 'Authorization traffic anomaly for BIN 4579.',
    timestamp: '',
  },
  {
    status: 'normal',
    message: '✅ Monitoring stable across all services',
    ruleId: '01',
    ruleDescription: 'System health stable across all services.',
    timestamp: '',
  },
  {
    status: 'error',
    message: '❌ Transaction Decline rate exceeded 20%',
    ruleId: '09',
    ruleDescription: 'Decline rate exceeded 20% on issuer side.',
    timestamp: '',
  },
];

const AlertContainer = ({ onNewAlert }: { onNewAlert: (rule: any) => void }) => {
  const [alerts, setAlerts] = useState<AlertLog[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = alertSequence[index % alertSequence.length];
      const timestamp = new Date().toLocaleTimeString();

      const newAlert = {
        ...current,
        timestamp,
      };

      setAlerts((prev) => [newAlert, ...prev]);
      setIndex((prev) => prev + 1);
      onNewAlert(newAlert); // Send to parent
    }, 5000);

    return () => clearInterval(interval);
  }, [index, onNewAlert]);

  const getColorClasses = (status: AlertStatus) => {
    switch (status) {
      case 'normal':
        return 'text-green-800 bg-green-200 border-green-700';
      case 'warning':
        return 'text-yellow-900 bg-yellow-100 border-yellow-700';
      case 'error':
        return 'text-red-800 bg-red-200 border-red-700';
      default:
        return '';
    }
  };

  return (
    <div>
      <h2 className="text-xl sticky font-bold text-white mb-4">⚠️ Alerts</h2>
      <div className="max-h-full overflow-y-auto space-y-2 pr-2">
        {alerts.map((alert, idx) => (
          <div
            key={idx}
            className={`border rounded-md px-2 py-1 text-sm ${getColorClasses(alert.status)}`}
          >
            <span className="font-mono text-xs text-gray-700 mr-2">{alert.timestamp}</span>
            {alert.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertContainer;
