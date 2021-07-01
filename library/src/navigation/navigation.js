import React, {Component} from "react";
import { BrowserRouter ,Switch,Route} from "react-router-dom";
import {Register,LoginContainer} from '../screen'
import Home from "../screen/home/Component/home";
import PublicRoute from "../layout/Public/PublicRoutes";
import PrivateRoute from "../layout/Private/PrivateRoutes";
import Profile from "../screen/profile/Component/profile";
import ProductDetail from "../screen/productDetail/Component/productDetail";
import Checkout from "../screen/checkout/Component/checkout";
import OrderHistory from "../screen/orderHistory/Component/orderHistory";
import SearchResult from "../screen/searchResult/Component/SearchResult";

const Navigation=()=> {
    return(
       <BrowserRouter>
        <Switch>
            <PublicRoute path="/" exact component={Home}/>
            <PublicRoute path="/register" component={Register}/>
            <PublicRoute path="/login" component={LoginContainer}/>
            <PrivateRoute path="/profile" component={Profile}/>
            <PrivateRoute path="/bookdetail" component={ProductDetail}/>
            <PrivateRoute path="/orderhistory" component={OrderHistory}/>
            <PrivateRoute path="/search" component={SearchResult}/>
            <PrivateRoute path="/checkout" component={Checkout}/>
        </Switch>
       </BrowserRouter>
    );
}

export default Navigation;