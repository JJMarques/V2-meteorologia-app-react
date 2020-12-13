import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css';
import Input from './components/Input'
import InfoDisplay from './components/InfoDisplay'

const App = () => {

  const [distrito, setDistrito] = useState({})
  const [info, setInfo] = useState([])

  useEffect(() => {
    if (Object.keys(distrito).length !== 0) {
      axios.get(`https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${distrito.id}.json`)
      .then(r => setInfo(r.data.data))
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
      <h1>{distrito.name}</h1>
      <InfoDisplay info={info} />
    </div>
  );
}

export default App;
