
import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import Header from '../../shared/components/Header/header';
import Navbar from '../../shared/components/NavBar/navbar';

const PrivateRoute=({component: Component, ... rest})=>{
    let isAuth= localStorage.getItem("isAuth");
    return(
       <Route {...rest} render= { (props) => isAuth? (
           <div>
                <Header isAuth={isAuth}/> 
               <div className="container-main">
                   <Component  {...props}/>
               </div>
           </div>

       ):
        (<Redirect to ={"/"}/> )

        }/>
    );

}
export default PrivateRoute;