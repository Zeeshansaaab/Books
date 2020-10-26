import React from 'react';
import sdata from './Sdata'

function zcard(val)
{
    console.log(val.title);
    return (
    <>
    <div className="card">
        <img className="card-img-top" src={val.image} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{val.title}</h5>
      <p className="card-text">{val.para}</p>
      <a href={val.link} className="btn btn-success">Download</a>
    </div>
</div>

  </>
    )
}


function MyCard(prop){
   return(
    <>
{sdata.map(zcard)}
    </>
    )  

}

export default MyCard;