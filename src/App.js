import logo from './logo.svg';
import './App.css';
import PageOne from './components/PageOne/page';
import PageTwo from './components/PageTwo/page-two';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/login" element={<PageTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
