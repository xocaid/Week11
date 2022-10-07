import './App.css';
import WeatherDisplay from './components/weather/weatherDisplay';
import Header from './components/margins/header';
import User from "./components/users/user";
import Footer from './components/margins/footer';

function App() {
  return (
    <div className="maincontainer">
      <Header />
      <User />
      <WeatherDisplay />
      <Footer />
    </div>
  );
}

export default App;
