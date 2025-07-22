// import { useEffect, useState } from 'react';
// import Graph from './Graph';

// const graphUrls = [
//   "http://grafana.datman.tools/dashboard/snapshot/7IEQcNTKOjI0XxtwpUY2W2y4Lpuk9tls",
//   "http://grafana.datman.tools/dashboard/snapshot/4myjlpQVfoguCigChl6F9bpJillQkLfC",

//   "http://grafana.datman.tools/dashboard/snapshot/7IEQcNTKOjI0XxtwpUY2W2y4Lpuk9tls",
//   "http://grafana.datman.tools/dashboard/snapshot/4myjlpQVfoguCigChl6F9bpJillQkLfC",


//   // "https://grafana-v2.datman.tools/dashboard/snapshot/mQM34Q00cF8zP3xXGc4LhFekBBWJwI5i",

//   // We can add another 30–40 graphs for rotation
// ];

// const GraphContainer = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % graphUrls.length);
//     }, 30000); 

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="h-full w-full">
//       <Graph iframeSrc={graphUrls[currentIndex]} />
//     </div>
//   );
// };

// export default GraphContainer;























// with batch_size of 4 graphs


// import { useEffect, useState } from "react";
// import Graph from "./Graph";

// // const graphUrls = [
// //   "http://grafana.datman.tools/dashboard/snapshot/7IEQcNTKOjI0XxtwpUY2W2y4Lpuk9tls",
// //   "http://grafana.datman.tools/dashboard/snapshot/4myjlpQVfoguCigChl6F9bpJillQkLfC",
// //   "http://grafana.datman.tools/dashboard/snapshot/7IEQcNTKOjI0XxtwpUY2W2y4Lpuk9tls",
// //   "http://grafana.datman.tools/dashboard/snapshot/4myjlpQVfoguCigChl6F9bpJillQkLfC",
// //   "https://grafana-v2.datman.tools/dashboard/snapshot/mQM34Q00cF8zP3xXGc4LhFekBBWJwI5i",
// //   // Add more as needed
// // ];

// const graphUrls = [
//   "http://grafana.datman.tools/dashboard/snapshot/7IEQcNTKOjI0XxtwpUY2W2y4Lpuk9tls?kiosk",
//   "http://grafana.datman.tools/dashboard/snapshot/4myjlpQVfoguCigChl6F9bpJillQkLfC?kiosk",
//   "http://grafana.datman.tools/dashboard/snapshot/7IEQcNTKOjI0XxtwpUY2W2y4Lpuk9tls?kiosk",
//   "http://grafana.datman.tools/dashboard/snapshot/4myjlpQVfoguCigChl6F9bpJillQkLfC?kiosk",
//   "https://grafana-v2.datman.tools/dashboard/snapshot/mQM34Q00cF8zP3xXGc4LhFekBBWJwI5i?kiosk",
//   // Add more as needed
// ];

// const BATCH_SIZE = 4;
// const INTERVAL_MS = 30000;

// const GraphContainer = () => {
//   const [currentBatchIndex, setCurrentBatchIndex] = useState(0);

//   const totalBatches = Math.ceil(graphUrls.length / BATCH_SIZE);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBatchIndex((prev) => (prev + 1) % totalBatches);
//     }, INTERVAL_MS);

//     return () => clearInterval(interval);
//   }, [totalBatches]);

//   const currentGraphs = graphUrls.slice(
//     currentBatchIndex * BATCH_SIZE,
//     (currentBatchIndex + 1) * BATCH_SIZE
//   );

//   return (
//   <div className="grid grid-cols-2" style={{ height: 'calc(100vh - 4rem)' }}>
//     {currentGraphs.map((url, idx) => (
//       <Graph key={`${currentBatchIndex}-${idx}`} iframeSrc={url} />
//     ))}
//   </div>

//   );
// };

// export default GraphContainer;












//batch of 4 if 4 graphs available else 1 single graph


import { useEffect, useState } from "react";
import Graph from "./Graph";

const graphUrls = [
  "http://grafana.datman.tools/dashboard/snapshot/7IEQcNTKOjI0XxtwpUY2W2y4Lpuk9tls?kiosk",
  "http://grafana.datman.tools/dashboard/snapshot/4myjlpQVfoguCigChl6F9bpJillQkLfC?kiosk",
  "http://grafana.datman.tools/dashboard/snapshot/7IEQcNTKOjI0XxtwpUY2W2y4Lpuk9tls?kiosk",
  "http://grafana.datman.tools/dashboard/snapshot/4myjlpQVfoguCigChl6F9bpJillQkLfC?kiosk",

  "https://grafana-v2.datman.tools/dashboard/snapshot/mQM34Q00cF8zP3xXGc4LhFekBBWJwI5i?kiosk",
  // Add more as needed
];

const BATCH_SIZE = 4;
const INTERVAL_MS = 30000;

const GraphContainer = () => {
  const [currentBatchIndex, setCurrentBatchIndex] = useState(0);

  const totalBatches = Math.ceil(graphUrls.length / BATCH_SIZE);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBatchIndex((prev) => (prev + 1) % totalBatches);
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, [totalBatches]);

  const start = currentBatchIndex * BATCH_SIZE;
  const end = start + BATCH_SIZE;
  const currentGraphs = graphUrls.slice(start, end);

  const isSingleGraph = currentGraphs.length === 1;

  return (
    <div
      className={
        isSingleGraph
          ? "h-[calc(100vh-4rem)]"
          : "grid grid-cols-2 h-[calc(100vh-4rem)]"
      }
    >
      {currentGraphs.map((url, idx) => (
        <Graph
          key={`${currentBatchIndex}-${idx}`}
          iframeSrc={url}
          fullScreen={isSingleGraph}
        />
      ))}
    </div>
  );
};

export default GraphContainer;
