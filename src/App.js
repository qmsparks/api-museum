import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Gutendex from './pages/Gutendex';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/gutendex" element={<Gutendex />} />
      </Routes>
    </div>
  );
}

export default App;
