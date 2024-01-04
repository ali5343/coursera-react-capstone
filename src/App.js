import Header from './components/Header';
import HomePage from './pages/HomePage';
import BookingPage from './pages/HomePage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import Footer from './components/Footer';
import './App.css';
import {
  Route,
  Routes
} from "react-router-dom"

function App() {
  return (
    <>
      <Header/>
      <Routes> 
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
