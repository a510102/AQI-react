import React from 'react';
import './Searchbox.css';

const Searchbox = ({ CountyList, onchangeCountyAqi })=>{
  const countyarray = CountyList.map((county, i)=>{
    return <option key={i} value={county}>{county}</option>;
  })
  return (
    <div className='flex tc aqi-searchbox'>
      <div className='aqi-title flex'>
        <h1>空氣品質指標(AQI)</h1>
        <select onChange={onchangeCountyAqi}>
          <option defaultValue>請選擇地區</option>
          { countyarray }
        </select>
      </div>
      <ul className='aqi-list flex bg-white'>
        <li>
          <p className='bg-light-green'>0~50</p>
          <p>良好</p>
        </li>
        <li>
          <p className='bg-light-yellow'>51~100</p>
          <p>普通</p>
        </li>
        <li>
          <p className='bg-light-orange'>101~150</p>
          <p>對敏感族群<br />不健康</p>
        </li>
        <li>
          <p className='bg-light-red'>151~200</p>
          <p>對所有族群<br />不健康</p>
        </li>
        <li>
          <p className='bg-light-purple'>201~300</p>
          <p>對所有族群<br />不健康</p>
        </li>
        <li>
          <p className='bg-dangerous'>301~400</p>
          <p>危害</p>
        </li>
      </ul>
    </div>
  )
}

export default Searchbox;