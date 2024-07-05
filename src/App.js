
import './App.css';
import Navbar from './components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header
        id="Navbar"
        className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-center border-b-2"
      >
        <Navbar />
      </header>
        <h1>React 18 Alpha</h1>
        <p>
          Edit 2<code>src/App.js</code> and save to reload.
        </p>
    </div>
  );
}

export default App;
