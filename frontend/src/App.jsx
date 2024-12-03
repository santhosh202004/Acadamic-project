import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import About from './about'; // Change 'about' to 'About' to follow the convention.
import BalerDetails from './BalerDetails'; // Import the BalerDetails component
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/about" element={<About />} /> {/* Correct the component name */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/BalerDetails" element={<BalerDetails />} /> Add the new route */}
        {/* <Route path="/BalerDetails" element={<BalerDetails />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;