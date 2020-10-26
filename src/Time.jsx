import React, { useState } from 'react';

function Time()
{
    let time = new Date().toLocaleTimeString();
    const [cTime , sTime] = useState(time);

    function uTime()
    {
    let time = new Date().toLocaleTimeString();
    sTime(time);
    }

setInterval(uTime,1000);

return <h1>{cTime}</h1>


}


export default Time;