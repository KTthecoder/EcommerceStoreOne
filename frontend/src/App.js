import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './navigation/Navbar';
import { Navigation } from './navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Navbar/>
      </nav>
      <main>
        {/* <Navigation/> */}
      </main>
      <footer>

      </footer>
    </BrowserRouter>
  );
}

export default App;
