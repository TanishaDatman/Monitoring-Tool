// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from './components/NAVBAR/Navbar';
// import AlertContainer from './components/ALERT SECTION/AlertContainer';
// import RuleContainer from './components/RULE ENGINE/RuleContainer';


// const Layout = () => {
//   return (
//     <div className="h-screen w-screen flex flex-col">
//       <Navbar />
//       <div className="flex flex-1">
//         {/* Left panel with routed graphs */}
//         <div className="w-2/3 border-r border-gray-300 overflow-auto">
//           <Outlet />
//         </div>

//         {/* Right panel with alerts */}
//         <div className="w-1/3 bg-gray-700 overflow-auto p-2">
//           <AlertContainer />
//           <RuleContainer />

//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default Layout;



import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/NAVBAR/Navbar';
import AlertContainer from './components/ALERT SECTION/AlertContainer';
import RuleContainer from './components/RULE ENGINE/RuleContainer';

const Layout = () => {
  const [latestRule, setLatestRule] = useState(null);

  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        {/* Left panel with routed graphs */}
        <div className="w-2/3 border-r border-gray-300 overflow-auto">
          <Outlet />
        </div>

        {/* Right panel: Alerts & Rule Engine */}
        <div className="w-1/3  bg-gray-700 p-3 flex flex-col">
          {/* Alert section (more height) */}
          <div className="flex-[2] overflow-y-auto mb-5">
            <AlertContainer onNewAlert={(rule) => setLatestRule(rule)} />
          </div>

          {/* Rule Engine (less height) */}
          <div className="flex-[1] border-t overflow-y-auto">
            <RuleContainer currentRule={latestRule} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
