import { is } from '@babel/types';
import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import Header from '../../shared/components/Header/header';
import Navbar from '../../shared/components/NavBar/navbar';
import Footer from '../../shared/components/Footer/footer';

const PublicRoute=({isAuth, component: Component, ... rest})=>{
    
    return(
       <Route {...rest} render= { (props) =>  (
           <div>
                <Header/> 
               <div className="container-main">
                   <Component {...props} />
               </div>
               

           </div>

       )

        }/>
    );

}
export default PublicRoute;