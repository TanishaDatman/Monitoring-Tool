// import React, { useEffect, useState } from 'react';
// import Graph from './Graph';

// const GraphContainer = () => {
//   const [iframeUrl, setIframeUrl] = useState('');

//   useEffect(() => {
//     setIframeUrl('http://grafana.datman.tools/dashboard/snapshot/7IEQcNTKOjI0XxtwpUY2W2y4Lpuk9tls');
//     // setIframeUrl('http://grafana.datman.tools/dashboard/snapshot/4myjlpQVfoguCigChl6F9bpJillQkLfC');

//   }, []);

//   return (
//     <div className="h-full w-full">
//       <Graph iframeSrc={iframeUrl} />
//     </div>
//   );
// };

// export default GraphContainer;




import React, { useEffect, useState } from 'react';
import Graph from './Graph';

const graphUrls = [
  'http://grafana.datman.tools/dashboard/snapshot/7IEQcNTKOjI0XxtwpUY2W2y4Lpuk9tls',
  'http://grafana.datman.tools/dashboard/snapshot/4myjlpQVfoguCigChl6F9bpJillQkLfC',

  'http://grafana.datman.tools/dashboard/snapshot/7IEQcNTKOjI0XxtwpUY2W2y4Lpuk9tls',
  'http://grafana.datman.tools/dashboard/snapshot/4myjlpQVfoguCigChl6F9bpJillQkLfC',


  // We can add another 30–40 graphs for rotation
];

const GraphContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % graphUrls.length);
    }, 30000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full">
      <Graph iframeSrc={graphUrls[currentIndex]} />
    </div>
  );
};

export default GraphContainer;
