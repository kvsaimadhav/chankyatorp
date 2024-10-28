import './App.css';
import Navbar from './component/navbar.jsx';
import Home from './component/home.jsx';
import Work from './component/work.jsx';
import Project from './component/project.jsx';
import Academic from './component/academic.jsx';
import Contact from  './component/contact.jsx';
import CopyRight from  './component/copyright.jsx';

function App() {
  return (
    <div class="App">
      <header>
        <Navbar />
      </header>
      <Home />
      <Work />
      <Project />
      <Academic />
      <Contact />
      <CopyRight />
    </div>
  );
}

export default App;
