import './style/InfoDisplay.css'
import { getWeekDay, getIcon } from '../util/util'

const InfoDisplay = ({ info }) => {

    const infoDisplay = info.map((i, k) => {
        
        const weekDay = getWeekDay(new Date(i.forecastDate))
        const icon = getIcon(i.idWeatherType)
        
        return(
            <div className="DayPanel" key={k}>
                <h3>{weekDay}</h3>
                <h2 style={{ fontSize: '70px', margin: '10px' }}>{icon}</h2>
                <div className="TempraturePanel">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h4>Temp. Máx.</h4>
                        <h2>{parseInt(i.tMax)}º</h2>
                    </div>
                    <div  style={{ marginLeft: '2em', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h4>Temp. Min.</h4>
                        <h2>{parseInt(i.tMin)}º</h2>
                    </div>
                </div>
                <div className="TempraturePanel">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h4>Prob. Chuva</h4>
                        <h2>{parseInt(i.precipitaProb)}%</h2>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div style={{ zIndex: '999' }}>
            <div className="InfoDisplay">
                {infoDisplay}
            </div>
            <h3 className="InfoAPI">Dados oficiais disponibilizados pelo <a href="https://www.ipma.pt/pt" target="_blank">IPMA</a></h3>
        </div>
    )
}

export default InfoDisplay
