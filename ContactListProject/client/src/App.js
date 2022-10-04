import react from "react";
import './App.css';
import Header from "./components/margins/header.js";
import Footer from "./components/margins/footer.js";
import ContactList from "./components/contactList";



function App() {
  return (
    <div className="App">
<Header />


<ContactList />
<Footer />
    </div>
  );
}

export default App;
