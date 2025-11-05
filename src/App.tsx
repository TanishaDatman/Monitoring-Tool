import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import GraphContainerWOW from "./components/GRAPH SECTION/GraphContainerWOW";
import GraphContainerERRORS from "./components/GRAPH SECTION/GraphContainerERROR";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="wow" replace />} />
          <Route path="wow/:country" element={<GraphContainerWOW />} />
          <Route path="errors" element={<GraphContainerERRORS />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
