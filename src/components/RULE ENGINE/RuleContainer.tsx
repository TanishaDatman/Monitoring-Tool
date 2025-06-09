// import React, { useEffect, useState } from 'react';
// import Rule from './Rule';

// type RuleSeverity = 'normal' | 'warning' | 'error';

// interface RuleLog {
//   id: string;
//   description: string;
//   severity: RuleSeverity;
//   timestamp: string;
// }

// // Mock Rule Triggers (map these to your alerts)
// const ruleTriggers: RuleLog[] = [
//   {
//     id: '01',
//     description: 'Transaction lifecycle successfully completed.',
//     severity: 'normal',
//     timestamp: '',
//   },
//   {
//     id: '14',
//     description: 'High volume of No3DS transactions detected.',
//     severity: 'warning',
//     timestamp: '',
//   },
//   {
//     id: '01',
//     description: 'All transaction KPIs within threshold.',
//     severity: 'normal',
//     timestamp: '',
//   },
//   {
//     id: '21',
//     description: 'Fraud pattern detected: velocity > 100 tx/min.',
//     severity: 'error',
//     timestamp: '',
//   },
//   {
//     id: '14',
//     description: 'Authorization traffic anomaly for BIN 4579.',
//     severity: 'warning',
//     timestamp: '',
//   },
//   {
//     id: '01',
//     description: 'System health stable across all services.',
//     severity: 'normal',
//     timestamp: '',
//   },
//   {
//     id: '09',
//     description: 'Decline rate exceeded 20% on issuer side.',
//     severity: 'error',
//     timestamp: '',
//   },
// ];

// const RuleContainer = () => {
//   const [rules, setRules] = useState<RuleLog[]>([]);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const raw = ruleTriggers[index % ruleTriggers.length];
//       const newRule = {
//         ...raw,
//         timestamp: new Date().toLocaleTimeString(),
//       };

//       setRules((prev) => [newRule, ...prev]);
//       setIndex((prev) => prev + 1);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [index]);

//   return (
//     <div className="ml-3">
//       <h2 className="text-xl font-bold text-white mb-4">📜 Rule Engine Logs</h2>
//       <div className="max-h-80 overflow-y-auto pr-2">
//         {rules.map((rule, idx) => (
//           <Rule
//             key={idx}
//             id={rule.id}
//             description={rule.description}
//             severity={rule.severity}
//             timestamp={rule.timestamp}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RuleContainer;



import React from 'react';
import Rule from './Rule';

const RuleContainer = ({ currentRule }: { currentRule: any }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-white mt-3 mb-4">📜 Rule Engine</h2>
      {currentRule ? (
        <Rule
          id={currentRule.ruleId}
          description={currentRule.ruleDescription}
          severity={currentRule.status}
          timestamp={currentRule.timestamp}
        />
      ) : (
        <p className="text-white text-sm italic">No rule triggered yet</p>
      )}
    </div>
  );
};

export default RuleContainer;
