import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import About from './components/About'

function App() {
  return (
    <div className="App">
      <header id='header'>
        <Header />
      </header>
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
