import React from 'react';

function Greeting()
{
    let currDate = new Date();
currDate = currDate.getHours();
let greetings = "";
const cssStyle={};
if(currDate>=1 && currDate<12)
{
    greetings="Good Morning";
    cssStyle.color="Green";
}
else if(currDate>11 && currDate<=19){
    greetings = "Good Afternoon"
    cssStyle.color="Orange";
}

else if(currDate>19 && currDate<=24){

    greetings = "Good Night"
    cssStyle.color="Black";
}


    return <div className="greeting_div">

    <h1 className="greeting">Hello Sir, <span style={cssStyle}>{greetings}</span></h1>

    </div>
}

export default Greeting;