import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import GraphContainer from './components/GRAPH SECTION/GraphContainer';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GraphContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
