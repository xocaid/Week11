import './App.css';
import MainWeather from './components/mainWeather';
import Header from './components/margins/header';
import Footer from './components/margins/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainWeather />
      <Footer />
    </div>
  );
}

export default App;
