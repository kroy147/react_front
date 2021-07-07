import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Register, LoginContainer, ProfileContainer, ProductDetailContainer, SearchResultContainer, OrderHistoryContainer, CheckoutContainer,HomeContainer } from '../screen'
 import Home from "../screen/home/component/Home";
import PublicRoute from "../layout/Public";
import PrivateRoute from "../layout/Private";


const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                 <PublicRoute path="/" exact component={HomeContainer}/> 
                <PublicRoute path="/register" component={Register} />
                <PublicRoute path="/login" component={LoginContainer} />
                <PrivateRoute path="/profile" component={ProfileContainer} />
                <PrivateRoute path="/bookdetail" component={ProductDetailContainer} />
                <PrivateRoute path="/search" component={SearchResultContainer} />
                <PrivateRoute path="/orderhistory" component={OrderHistoryContainer} />
                <PrivateRoute path="/checkout" component={CheckoutContainer} />
            </Switch>
        </BrowserRouter>
    );
}

export default Navigation;