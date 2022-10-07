import react from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Header from "./components/margins/header.js";
import Footer from "./components/margins/footer.js";
import ContactList from "./components/contactList";
// import ListContact from "./components/listContact";



function App() {
  return (
    <div className="App">
      <Header />
<Router>
  <Navbar/>
</Router>





      <ContactList />
      <Footer />
    </div>
  );
}

export default App;
