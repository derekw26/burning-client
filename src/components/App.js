import Plane from './Plane'
import Flight from './Flight'
import Search from './Search'
import Reservations from './Reservations'
import Navbar from './Navbar'


import {BrowserRouter as Router , Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

    <Router>
      <Navbar/>
      <Routes>
        <Route path = "/"  element={<Search/>} />
        <Route path = "/flights"  element={<Flight/>} />
        <Route path = "/planes"  element={<Plane/>} />
      </Routes>
    </Router>


    </div>


  );
}



export default App;
