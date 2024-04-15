import './App.css';
import Home from './components/Home';
import Header from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services';
import Faq from './components/Faq';
import ContactForm from './components/ContactForm';
import Tweet from './components/Tweet';
import Reviews from './components/Reviews';
import About from './components/About';
function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'space-between',flexDirection:'column' }}>
      <Header/>
<Home/>
<Services/>
<Faq/>
<Reviews/>
<Tweet/>
<ContactForm/>
<About/>
    </div>
  );
}

export default App;
