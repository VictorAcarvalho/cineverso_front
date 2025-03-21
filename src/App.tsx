import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './views/login/Login';
import HomePage from './views/homePage/HomePage';
import PrivateRoute from './services/privateRoutes';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/login" 
        element={<Login />} />
        
        <Route
         path="/homePage" 
         element={
          <PrivateRoute>
            <HomePage/>
          </PrivateRoute>
         } />
        
        {/* Rota para erros 404 - página não encontrada */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;