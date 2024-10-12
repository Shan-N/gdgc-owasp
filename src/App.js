// import logo from './logo.svg';
import './App.css';
import PageOne from './components/PageOne/page';
import PageTwo from './components/PageTwo/page-two';
import PageThree from './components/PageThree/page-three';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/login" element={<PageTwo />} />
        <Route path="/pawned" element={<PageThree />} />

      </Routes>
    </Router>
  );
}

export default App;
