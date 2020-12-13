import { TiWeatherCloudy, TiWeatherDownpour, TiWeatherSunny,TiWeatherSnow, TiWeatherStormy } from 'react-icons/ti'

export const getWeekDay = (d) => {
    
    let m = d.getMonth() + 1
    let mf
    switch (m) {
        case 1:
            mf = 'Jan'
            break
        case 2:
            mf = 'Fev'
            break
        case 3:
            mf = 'Mar'
            break
        case 4:
            mf = 'Abr'
            break
        case 5:
            mf = 'Mai'
            break
        case 6:
            mf = 'Jun'
            break
        case 7:
            mf = 'Jul'
            break
        case 8:
            mf = 'Ago'
            break
        case 9:
            mf = 'Set'
            break
        case 10:
            mf = 'Out'
            break
        case 11:
            mf = 'Nov'
            break
        case 12:
            mf = 'Dez'
            break
        default:
            break;
    }
    const dateFormat = `${d.getDate()} ${mf}`

    let wd = d.getDay()
    switch (wd) {
        case 0:
            return `Domingo, ${dateFormat}`
        case 1:
            return `Segunda-Feira, ${dateFormat}`
        case 2:
            return `Terça-Feira, ${dateFormat}`
        case 3:
            return `Quarta-Feira, ${dateFormat}`
        case 4:
            return `Quinta-Feira, ${dateFormat}`
        case 5:
            return `Sexta-Feira, ${dateFormat}`
        case 6:
            return `Sábado, ${dateFormat}`
        default:
            break;
    }
}

export const getIcon = (id) => {
    if (id === 2 || id === 3 || id === 4 || id === 5 || id === 16 || id === 17 || id === 24 || id === 25 || id === 26 || id === 27) {
        return <TiWeatherCloudy /> //céu nublado
    } else if (id === 6 || id === 7 || id === 8 || id === 9 || id === 10 || id === 11 || id === 12 || id === 13 || id === 14 || id === 15 || id === 21) {
        return <TiWeatherDownpour /> //chuva
    } else if (id === 1) {
        return <TiWeatherSunny /> //ceu limpo
    } else if (id === 18 || id === 22) {
        return <TiWeatherSnow /> //neve
    } else if (id === 19 || id === 20 || id === 23) {
        return <TiWeatherStormy /> //tempestade
    }
}