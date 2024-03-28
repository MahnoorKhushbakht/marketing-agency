import './App.css';
import Home from './components/Home';
import Header from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services';
import Faq from './components/Faq';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Tweet from './components/Tweet';
function App() {
  return (
    <div className="App">
      <Header/>
<Home/>
<Services/>
<Faq/>
<Tweet/>
<ContactForm/>
<Footer/>
    </div>
  );
}

export default App;
