import { useEffect, useState } from "react";
import Graph from "./Graph";

const graphUrls = [
  "https://grafana-v2.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&from=1762127339756&to=1762148939756&timezone=Europe%2FLondon&panelId=panel-5&__feature.dashboardSceneSolo=true",

  "http://grafana.datman.tools/dashboard/snapshot/7IEQcNTKOjI0XxtwpUY2W2y4Lpuk9tls?kiosk",
  "http://grafana.datman.tools/dashboard/snapshot/4myjlpQVfoguCigChl6F9bpJillQkLfC?kiosk",
  "http://grafana.datman.tools/dashboard/snapshot/7IEQcNTKOjI0XxtwpUY2W2y4Lpuk9tls?kiosk",
  "http://grafana.datman.tools/dashboard/snapshot/4myjlpQVfoguCigChl6F9bpJillQkLfC?kiosk",

  "https://grafana-v2.datman.tools/dashboard/snapshot/mQM34Q00cF8zP3xXGc4LhFekBBWJwI5i?kiosk",

  // 1.
  "https://grafana-v2.datman.tools/dashboard/snapshot/zLJHSaAF0dMHbqvoXIKn9AXsVjHbIIyj?kiosk",
  // 2.
  "https://grafana-v2.datman.tools/dashboard/snapshot/JgElGT4W2yC2p6Iyla19JOsRh16OrLGg?kiosk",
  // 3.
  "https://grafana-v2.datman.tools/dashboard/snapshot/u9EdK0RsIEkD7bz251IDZv92L3XV1sM7?kiosk",
  // 4.
  "https://grafana-v2.datman.tools/dashboard/snapshot/5zIXeBP7aMES0PB1qx977pciJhmXJolB?kiosk",
  // 5.
  "https://grafana-v2.datman.tools/dashboard/snapshot/gVSslFBNyVlYWYtYSKf7UVttRybgVk0N?kiosk",

  // ?kiosk  - for clipped view
];

const BATCH_SIZE = 4;
const INTERVAL_MS = 30000;

const GraphContainerERRORS = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullBatchesCount = Math.floor(graphUrls.length / BATCH_SIZE);
  const leftoverGraphs = graphUrls.length % BATCH_SIZE;

  const totalFrames =
    fullBatchesCount + (leftoverGraphs > 0 ? leftoverGraphs : 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalFrames);
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, [totalFrames]);

  // Display logic
  let currentGraphs: string[] = [];
  let isSingle = false;

  if (currentIndex < fullBatchesCount) {
    // Show full batch of 4
    const start = currentIndex * BATCH_SIZE;
    currentGraphs = graphUrls.slice(start, start + BATCH_SIZE);
  } else {
    // Show individual leftover graphs one-by-one
    const leftoverIndex = currentIndex - fullBatchesCount;
    const start = fullBatchesCount * BATCH_SIZE;
    currentGraphs = [graphUrls[start + leftoverIndex]];
    isSingle = true;
  }

  return (
    <div
      className={
        isSingle
          ? "h-[calc(100vh-4rem)]"
          : "grid grid-cols-2  h-[calc(100vh-4rem)]"
      }
    >
      {currentGraphs.map((url, idx) => (
        <Graph
          key={`${currentIndex}-${idx}`}
          iframeSrc={url}
          fullScreen={isSingle}
        />
      ))}
    </div>
  );
};

export default GraphContainerERRORS;





