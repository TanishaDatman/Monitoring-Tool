import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Graph from "./Graph";


const now = Date.now();
const threeHoursAgo = now - 3 * 60 * 60 * 1000;
// Map country to URLs
const COUNTRY_GRAPHS: Record<string, string[]> = {
  uk: [
    // GPAY WOW - UK
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&from=${threeHoursAgo}&to=${now}ezone=Europe%2FLondon&refresh=5m&panelId=panel-1&__feature.dashboardSceneSolo=true`,
    // ExpressPay WOW - UK
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&from=${threeHoursAgo}&to=${now}&timezone=Europe%2FLondon&refresh=5m&panelId=panel-3&__feature.dashboardSceneSolo=true`,
    // APAY WOW - UK
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&from=${threeHoursAgo}&to=${now}&timezone=Europe%2FLondon&refresh=5m&panelId=panel-2&__feature.dashboardSceneSolo=true`,
    // New Card WOW - UK
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&from=${threeHoursAgo}&to=${now}&timezone=Europe%2FLondon&refresh=5m&panelId=panel-4&__feature.dashboardSceneSolo=true`,
    // All Methods WOW - UK
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&from=${threeHoursAgo}&to=${now}&timezone=Europe%2FLondon&refresh=5m&panelId=panel-5&__feature.dashboardSceneSolo=true`,
  ],
  aus: [
    // GPAY WOW - AUS
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&from=${threeHoursAgo}&to=${now}&timezone=Europe%2FLondon&refresh=5m&panelId=panel-7&__feature.dashboardSceneSolo=true`,
    // ExpressPay WOW - AUS
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&from=${threeHoursAgo}&to=${now}&timezone=Europe%2FLondon&refresh=5m&panelId=panel-8&__feature.dashboardSceneSolo=true`,
    // APAY WOW - AUS
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&from=${threeHoursAgo}&to=${now}&timezone=Europe%2FLondon&refresh=5m&panelId=panel-9&__feature.dashboardSceneSolo=true`,
    // New Card WOW - AUS
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&from=${threeHoursAgo}&to=${now}&timezone=Europe%2FLondon&refresh=5m&panelId=panel-10&__feature.dashboardSceneSolo=true`,
    // All Methods WOW - AUS
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&from=${threeHoursAgo}&to=${now}&timezone=Europe%2FLondon&refresh=5m&panelId=panel-6&__feature.dashboardSceneSolo=true`,
  ],
};



const BATCH_SIZE = 4;
const INTERVAL_MS = 30000;

const GraphContainerWOW = () => {
  const { country } = useParams();
  const graphUrls = COUNTRY_GRAPHS[country ?? "uk"] ?? COUNTRY_GRAPHS["uk"];
 
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

  let currentGraphs: string[] = [];
  let isSingle = false;

  if (currentIndex < fullBatchesCount) {
    const start = currentIndex * BATCH_SIZE;
    currentGraphs = graphUrls.slice(start, start + BATCH_SIZE);
  } else {
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
          : "grid grid-cols-2 h-[calc(100vh-4rem)]"
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

export default GraphContainerWOW;
