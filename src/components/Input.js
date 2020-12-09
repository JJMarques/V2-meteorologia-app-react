import { useEffect, useState } from 'react'
import './style/Input.css'
import { changeDistrict } from '../util/util'

const Input = () => {
    
    const [search, setSearch] = useState("")
    const [autocomplete, setAutocomplete] = useState([])

     useEffect(() => {
        if (search !== "") {
            setAutocomplete(changeDistrict(search))
        }
    }, [search]) 

    return (
        <div className="Input">
            <h2>Pesquise o seu distrito </h2>
            <input 
                value={search}
                type="search"
                autoFocus
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

export default Input
