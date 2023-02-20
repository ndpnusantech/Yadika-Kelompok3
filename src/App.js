import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes >
        <Route path='/' element={a}></Route>
        <Route path='/' element={b}></Route>
        <Route path='/' element={c}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
