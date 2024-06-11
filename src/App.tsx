import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home/Home';
import Contact from './components/contact/contact';
import About from './components/about/About';
import Tasks from './components/tasks/Tasks';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/contact">Contato</Link></li>
            <li><Link to="/about">Sobre</Link></li>
            <li><Link to="/tasks">Tarefas</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
