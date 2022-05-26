import React from "react";
import Header from "../components/header/header";
import ArxikiSelida from "../views/arxiki-selida/arxiki-selida";
import Kuklofories from "../views/kuklofories/kuklofories";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Emfaniseis from "../components/emfaniseis/emfanisei";
import Biografiko from "../components/biografiko/biografiko";



const Layout = () => {

    return (
        <div>
            <Router>
                <Header />
                <Switch>
                        <Route 
                            exact
                            path='/'
                            render={() => {
                                return <ArxikiSelida />;
                            }}
                        />

                        <Route 
                            path='/kuklofories'
                            render={() => {
                                return <Kuklofories />;
                            }}
                        />

                        <Route 
                            path='/emfaniseis'
                            render={() => {
                                return <Emfaniseis />;
                            }}
                        />

                        <Route 
                            path='/biografiko'
                            render={() => {
                                return <Biografiko />;
                            }}
                        />


                    
                </Switch>
            </Router>
        </div>
    )
}

export default Layout;
