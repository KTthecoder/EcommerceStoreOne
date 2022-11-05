import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './navigation/Navbar';
import { Navigation } from './navigation/Navigation';
import { Footer } from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop/>
          <nav>
            <Navbar/>
          </nav>
          <main>
            <Navigation/>
          </main>
          <footer>
            <Footer/>
          </footer>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
