import './App.css';
import MainWeather from './components/mainWeather';
import Header from './components/margins/header';
import User from "./components/users/user";
import Footer from './components/margins/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <User />
      <div className='weather'>
        <MainWeather />
      </div>

        <Footer />
    </div>
  );
}

export default App;
