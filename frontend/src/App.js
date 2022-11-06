import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './navigation/Navbar';
import { Navigation } from './navigation/Navigation';
import { Footer } from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import AuthProvider from './contexts/AuthProvider';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

function App() {
  return (
    <PayPalScriptProvider options={{"client-id": "Adh9_eqzDvB7PDA4i3pLQFVmAh3cIEw6uS-_rrwX94A2m4vwuSI7nnNNX4UEZd4VaGTiLJ6tRAkCvn0V"}}>
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
    </PayPalScriptProvider>
  );
}

export default App;
