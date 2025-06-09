import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import GraphContainer from './components/GRAPH SECTION/GraphContainer';



const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<GraphContainer />} />



      </Routes>
    </Router>
  );
};

export default AppRoutes;