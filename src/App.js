import { useState } from 'react'
import './App.css';
import Input from './components/Input'

function App() {

  const [city, setCity] = useState("")

  return (
    <div className="App">
      <div className="ImageContainer" />
      <h1>☀️ Meteorologia em Portugal 💦</h1>
      <Input />
    </div>
  );
}

export default App;
