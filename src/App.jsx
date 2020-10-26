import React from "react";
import './index.css'
import Error from './Error';
import {Switch, Route, Router} from 'react-router-dom';
import HomePage from './HomePage'
import Contact from './Contact'
import Books from './Books';
import Paper from './Paper';

function App(){

return(
<> 

<Switch>
    <Route exact path='/' component = {HomePage}/>
    <Route exact path='/papers' component={Paper}/>
    <Route exact path='/contact' component={Contact}/>
    <Route exact path='/books' component={Books}/>
    <Route component={Error}/>
</Switch>


</>);
}
export default App;