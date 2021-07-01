
import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import Header from '../../shared/components/Header/header';

const PrivateRoute=({isAuth, component: Component, ... rest})=>{
    
    return(
       <Route {...rest} render= { (props) => true? (
           <div>
               <Header isAuth="true"/>
               <div className="container-main">
                   <Component {...props}/>
               </div>
           </div>

       ):
        (<Redirect to ={"/"}/> )

        }/>
    );

}
export default PrivateRoute;