import './App.css';
import Heading from './components/Heading/Heading';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Heading style="head" />
      <Main style="main" />
      <Footer style={"footer"} text={"Powered by w3.css"} />
    </div>
  );
}

export default App;


