import { useState, useEffect } from 'react'
import './App.css';
import Input from './components/Input'

function App() {

  const [distrito, setDistrito] = useState({})

  useEffect(() => {
    if (Object.keys(distrito).length !== 0) {
      console.log('hello', distrito.id)
    }
  }, [distrito])

  const changeDistrito = (item) => {
    setDistrito(item)
  }

  return (
    <div className="App">
      <div className="ImageContainer" />
      <h1>☀️ Meteorologia em Portugal 💦</h1>
      <Input changeDistrito={changeDistrito} />
      <h1>{distrito.name && distrito.name}</h1>
    </div>
  );
}

export default App;
