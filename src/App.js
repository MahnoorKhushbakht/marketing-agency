import './App.css';
import Home from './components/Home';
import Header from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services';
import Faq from './components/Faq';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Tweet from './components/Tweet';
import Reviews from './components/Reviews';
import About from './components/About';
import WhatsappBtn from './components/WhatsAppBtn';
function App() {
  return (
    <div className="App">
      <Header/>
<Home/>
<Services/>
<Faq/>
<Reviews/>
<Tweet/>
<ContactForm/>
<About/>
<WhatsappBtn/>
    </div>
  );
}

export default App;
