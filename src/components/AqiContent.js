import React from 'react';
import FocusCity from './FocusCity';
import './AqiContent.css'

const AqiContent = ({onChangeFocusSite, County, datas, focusSite})=>{
  return (
    <div>
      <div className="aqi-content-title flex">
        <h2>{ County }</h2>
        <p>{ focusSite.PublishTime } 更新</p>
      </div>
      <div className="aqi-content-main flex">
        <FocusCity focusSite= {focusSite}/>
        <div className='aqi-content-list flex'>
          { 
            datas.map((data, i)=>{
              let color = '';
              let AQI = data.AQI;
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
                <div 
                  className="aqi-box bg-white"
                  key={i}
                  >
                    <p onClick={ onChangeFocusSite } >
                      { data.SiteName }
                    </p>
                    <p className={color}>{ data.AQI }</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default AqiContent;