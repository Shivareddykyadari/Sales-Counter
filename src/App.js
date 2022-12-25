import './App.css';
import {useEffect, useState} from 'react';
import Display from './Display';
function App() {
  const endTime=new Date('Dec 29, 2023 00:00:00').getTime();
  const [currentTime,SetCurrentTime]=useState(new Date().getTime());
  const gap=endTime-currentTime;

  

  const Seconds=1000;
  const Minutes=Seconds*60;
  const Hours=Minutes*60;
  const days=Hours*24;

  const remDays=Math.floor(gap/days);
  const remHours=Math.floor((gap%days)/Hours);
  const remMin=Math.floor((gap%Hours)/Minutes);
  const remSec=Math.floor((gap%Minutes)/Seconds);

   useEffect(()=>{
    setTimeout(()=>SetCurrentTime(new Date().getTime()),1000)
   },[currentTime])
  return (
    <div className="App">
       <center>
        <Display days={remDays} hours={remHours} Min={remMin} Sec={remSec}/>
       </center>
    </div>
  );
}

export default App;
