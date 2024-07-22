import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { Services } from './components/services/services';
import { Support } from './components/support/support';
import { NavBar } from './components/nav-bar/nav-bar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
