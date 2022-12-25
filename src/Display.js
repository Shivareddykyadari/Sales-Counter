import React from 'react'

const Display = ({days,hours,Min,Sec}) => {

  return (
    <div>
       <h1>SALES COUNTDOWN TIMER</h1>
       <h2>Offer ends in</h2>
       <table>
           <tbody>
              <tr>
                 <th>{days}</th>&nbsp;&nbsp;
                 <th>{hours}</th>&nbsp;&nbsp;
                 <th>{Min}</th>&nbsp;&nbsp;
                 <th>{Sec}</th>&nbsp;&nbsp;
              </tr> 
              <tr>
                 <td>DAYS</td>&nbsp;&nbsp;
                 <td>Hours</td>&nbsp;&nbsp;
                 <td>MINUTES</td>&nbsp;&nbsp;
                 <td>SECONDS</td>&nbsp;&nbsp;
              </tr> 
           </tbody>
       </table>
    </div>
  )
}

export default Display