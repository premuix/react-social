import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import { BrowserRouter as Router, Route, Routes, Navigate, } from 'react-router-dom';


function App() {
  return ( 
    <>

      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='Home' element={<Home />} />
          <Route exact path='About' element={<About />} />
          <Route exact path='Services' element={<Services />} />
          <Route exact path='Projects' element={<Projects />} />
          <Route exact path='Blog' element={<Blog />} />
          <Route path="*" element={<Navigate to="/" replace />}
          />
        </Routes>
      </Router>

    </>
  );
}

export default App;
