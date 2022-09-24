import { useState } from 'react';
import Navbar from './Navbar.js'
import Home from './Home.js'

function App() {
  const [counter, setCounter] = useState(0);

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{counter}</h1>
        <Home />
      </div>
    </div>
  );
}

export default App;
