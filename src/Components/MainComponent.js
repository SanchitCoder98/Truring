import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import Stream from './StreamingComponent';

class Main extends Component{
    constructor(props){
        super(props); 
    }

    render(){
        return(
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path='/stream' component={Stream}/>
                <Redirect to="/home"/>
            </Switch>
        );
    }
}

export default Main;