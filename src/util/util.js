import axios from 'axios'

export const changeDistrict = (s) => {
    
    let districts = []
    //capitalize first letter
    let input = s.charAt(0).toUpperCase() + s.slice(1)
    axios.get('https://api.ipma.pt/open-data/distrits-islands.json')
    .then((r) => {
        let res = r.data.data
        res.filter((d) => {
            if(d.local.startsWith(input))
            districts.push(d.local)
        })
    })
    //console.log(districts);
    return districts
}