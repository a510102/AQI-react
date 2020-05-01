import React from 'react';
import './Focus.css';

const FocusCity = ({ focusSite })=> {
    let color = '';
    let AQI = focusSite.AQI;
    switch(true){
      case AQI >= 0 && AQI <= 50 :
          color = 'bg-ligth-green';
        break;
      case AQI >= 51 && AQI <= 100 :
          color = 'bg-light-yellow';
        break;
      case AQI >= 101 && AQI <= 150 :
          color = 'bg-light-orange';
        break;
      case AQI >= 151 && AQI <= 200 :
          color = 'bg-light-red';
        break;
      case AQI >= 201 && AQI <= 300 :
          color = 'bg-light-purple';
        break;
      case AQI >=300 && AQI <=400 :
          color = 'bg-dangerous';
        break; 
    }

  return (
    <div>
      <ul className="aqi-focus bg-white">
          <li className="aqi-box">
            <p>{ focusSite.SiteName }</p>
            <p className = {color}>{ focusSite.AQI }</p>
          </li>
          <li className='aqi-text'>
            <p>臭氧 <span>O<sub>3</sub>(ppb)</span></p>
            <p>{ focusSite.O3 }</p>
          </li>
          <li className='aqi-text'>
            <p>懸浮微粒 <span>PM<span className='half'>10</span>(ug/m<sup>3</sup>)</span></p>
            <p>{ focusSite['PM10'] }</p>
          </li>
          <li className='aqi-text'>
            <p>細懸浮微粒 <span>PM<span className='half'>2.5</span>(ug/m<sup>3</sup>)</span></p>
            <p>{ focusSite['PM2.5'] }</p>
          </li>
          <li className='aqi-text'>
            <p>一氧化碳 <span>CO(ppm)</span></p>
            <p>{ focusSite.CO }</p>
          </li>
          <li className='aqi-text'>
            <p>二氧化硫 <span>SO<sub>2</sub>(ppb)</span></p>
            <p>{ focusSite.SO2 }</p>
          </li>
          <li className='aqi-text'>
            <p>二氧化氮 <span>NO<sub>2</sub>(ppb)</span></p>
            <p>{ focusSite.NO }</p>
          </li>
        </ul>
    </div>
  )
}

export default FocusCity;