import axios from 'axios'

export const changeDistrict = async (s) => {
    let districts = []
    let input = s.charAt(0).toUpperCase() + s.slice(1)
    console.log(input);

    await axios.get('https://api.ipma.pt/open-data/distrits-islands.json')
    .then((r) => {
        let res = r.data.data
        res.filter((d) => {
            if(d.local.startsWith(input))
            districts.push(d.local)
        })
    })

    //Falta fazer um filtro para todos os distritos que correspondem com a pesquisa
}