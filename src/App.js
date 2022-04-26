import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Employees from './views/Employees';




function App() {
  return (
      <div className='App'>
        <Routes>
       <Route path="/employees" element={<Employees />} />
       </Routes>
      </div>

  );
}

export default App;
