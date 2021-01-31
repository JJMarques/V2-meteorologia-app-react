import { useEffect, useState } from 'react'
import axios from 'axios'
import './style/Input.css'

const Input = ({ changeDistrito }) => {
    
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [distritos, setDistritos] = useState([]);

    const fetchDistritos = async() => {
        let arr = []
        const res = await axios.get('https://api.ipma.pt/open-data/distrits-islands.json')
        const data = res.data.data
        for (let v in data) {
            arr.push({ id: data[v].globalIdLocal, name: data[v].local })
        }
        setData(arr)
        setDistritos(arr.slice())
    }

    const filterNames = (d) => {
        let arr = []
        let search = query.charAt(0).toUpperCase() + query.slice(1)
        d.forEach(e => {
            if(e.name.startsWith(search)) {
                arr.push(e)
            }
        });
        setDistritos(arr)
    }

    useEffect(() => {
        filterNames(data)
    }, [query])

    useEffect(() => {
        fetchDistritos()
    }, [])
    
    return (
        <div className="Input">
            <label>Pesquise o seu distrito 🔍
            <input 
                value={query}
                type="search"
                autoFocus
                onChange={(e) => setQuery(e.target.value)}
            />
            </label>
            <div className="AutocompleteBox">
            {distritos.map((item) => {
                if (query !== "") {
                    return (
                        <button 
                            tabindex="0"
                            className="AutocompleteBtn" 
                            key={item.id}
                            onClick={() => {
                                changeDistrito(item); 
                                setQuery("")
                                localStorage.setItem('coimbra', item.name)
                            }}
                        >
                            {item.name}
                        </button>)
                }
            })}
            </div>
        </div>
    )   
}

export default Input
