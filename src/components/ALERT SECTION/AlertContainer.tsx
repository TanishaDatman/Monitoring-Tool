// import React, { useEffect, useState } from 'react';

// const AlertContainer = () => {
//   const [alerts, setAlerts] = useState<string[]>([]);

//   useEffect(() => {
//     const fetchAlerts = async () => {
//       const response = await fetch('/api/alerts'); // Custom backend or Grafana Webhook
//       const data = await response.json();
//       setAlerts(data.alerts);
//     };

//     fetchAlerts();
//     const interval = setInterval(fetchAlerts, 30000); 

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className='ml-3 '>
//       <h2 className="text-xl font-bold text-white mb-4">⚠️  Alerts</h2>
//       {alerts.length === 0 ? (
//         <p className="text-green-800 bg-green-200 border-green-700 rounded-md border px-2">All systems normal</p>
//       ) : (
//         <ul className="list-disc pl-5 text-red-600">
//           {alerts.map((alert, idx) => (
//             <li key={idx}>{alert}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default AlertContainer;




// import React, { useEffect, useState } from 'react';

// type AlertStatus = 'normal' | 'warning' | 'error';

// interface AlertLog {
//   status: AlertStatus;
//   message: string;
//   timestamp: string;
// }

// const alertSequence: { status: AlertStatus; message: string }[] = [
//   { status: 'normal', message: '✅ All transactions life cycle in place' },
//   { status: 'warning', message: '⚠️ High No3ds time detected' },
//   { status: 'normal', message: '✅ Transactions operating within normal limits' },
//   { status: 'error', message: '❌ Fraudulent transaction spike detected!' },
//   { status: 'warning', message: '⚠️ Slight transaction auth traffic spike observed' },
//   { status: 'normal', message: '✅ Monitoring stable across all services' },
//   { status: 'error', message: '❌ Transaction Decline rate exceeded 20%' },
// ];

// const AlertContainer = () => {
//   const [alerts, setAlerts] = useState<AlertLog[]>([]);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const current = alertSequence[index % alertSequence.length];
//       const timestamp = new Date().toLocaleTimeString();

//       const newAlert: AlertLog = {
//         ...current,
//         timestamp,
//       };

//       setAlerts((prev) => [newAlert, ...prev]); // Add to top
//       setIndex((prev) => prev + 1);
//     }, 5000); // Every 5 seconds

//     return () => clearInterval(interval);
//   }, [index]);

//   const getColorClasses = (status: AlertStatus) => {
//     switch (status) {
//       case 'normal':
//         return 'text-green-800 bg-green-200 border-green-700';
//       case 'warning':
//         return 'text-yellow-900 bg-yellow-100 border-yellow-700';
//       case 'error':
//         return 'text-red-800 bg-red-200 border-red-700';
//       default:
//         return '';
//     }
//   };

//   return (
//     <div className="ml-3">
//       <h2 className="text-xl font-bold text-white mb-4">⚠️ Alerts</h2>
//       <div className="max-h-80 overflow-y-auto space-y-2 pr-2">
//         {alerts.map((alert, idx) => (
//           <div
//             key={idx}
//             className={`border rounded-md px-2 py-1 text-sm ${getColorClasses(alert.status)}`}
//           >
//             <span className="font-mono text-xs text-gray-700 mr-2">{alert.timestamp}</span>
//             {alert.message}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AlertContainer;



import React, { useEffect, useState } from 'react';

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
