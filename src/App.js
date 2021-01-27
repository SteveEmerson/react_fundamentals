import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Bio from './components/challenges/day01/Bio';
import Footer from './components/challenges/day01/Footer'
import Home from './components/challenges/day01/Home'

function App() {
  // This is the root component
  const name = "Steve";
  return (
    <div className="App">
      {/* Comments inside here need to be in {} and use block comment */}
      <Home/>
      <h1>Welcome to React {name}</h1>
      <h2>We just modified the root app component</h2>
      <Header />
      <Bio />
      <Footer/>
    </div>
  );
}

export default App;
