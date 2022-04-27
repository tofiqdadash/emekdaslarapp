import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Employees from './views/Employees';
import Groups from './views/EmployeesChart/Groups';




function App() {
  return (
      <div className='App'>
        <Routes>
       <Route path="/employees" element={<Employees />} />
       <Route path="/groups" element={<Groups />} />
       </Routes>
      </div>

  );
}

export default App;
