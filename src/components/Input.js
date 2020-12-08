import { useState } from 'react'
import './style/Input.css'
import { changeDistrict } from '../util/util'

const Input = () => {
    
    const [search, setSearch] = useState()

    return (
        <div className="Input">
            <h2>Pesquise no seu distrito </h2>
            <input 
                value={search}
                type="search"
                autoFocus
                onChange={(e) => changeDistrict(e.target.value)}
            />
        </div>
    )
}

export default Input
