import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TimeRangeProvider } from './contexts/TimeRangeContext.tsx';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TimeRangeProvider>
      <App />
    </TimeRangeProvider>
  </StrictMode>
);
