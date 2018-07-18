import React, { Component } from 'react';
import '../styles/styles.css';
import Header from '../Components/HeaderComponent'
import Footer from '../Components/FooterComponent';

const sliderStyle = {
    height: window.innerHeight
}

class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Header/>
                <div className="row header-break-two d-none d-sm-block">
                    <div className="slider col-12" style={sliderStyle}>
                        <div className="slide1"></div>
                        <div className="slide2"></div>
                        <div className="slide3"></div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;