import React, { useState } from 'react';

function Form()
{
    const [fullname,setFullName] = useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
    });

    const [subFullName,setSubFullName] = useState({
        setFname:"",
        setLname:"",
        setEmail:"",
        setPassword:"",
}); 

    function Change(event){
        
            const {name,value} = event.target;
            
            console.log(value);

        setFullName((preVal)=>{
            
                return {
                    ...preVal,
                    [name]:value,
                }

           
        })
        
        
        
        }
       
    

function onSubmit(event){
    event.preventDefault();
setSubFullName(fullname);
}
    return(
        <>
        <div className="main_div">
            <form onSubmit={onSubmit}>

                  <h1> LOGIN FORM</h1>
                   <p></p> 
                    <input type="text" placeholder="Enter Your Name" name="fname" value={fullname.fname} onChange={Change}/>
                    <br/><input type="text" placeholder="Enter Your Last Name" name="lname" value={fullname.lname}  onChange={Change}/>
                    <br/><input type="text" placeholder="Enter Your Email" name="email" value={fullname.email}  onChange={Change}/>
                    <br/><input type="text" placeholder="Enter Your Password" name="password" value={fullname.password}  onChange={Change}/>
                    <br/><button > Click </button>
                
         </form>
        </div>
        </>
    )
}

export default Form;