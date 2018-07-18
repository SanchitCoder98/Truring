import React, { Component } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '../styles/styles.css';
import HeaderTwo from '../Components/HeaderTwo';
import Footer from './FooterComponent';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

window.videojs = videojs;
require('videojs-contrib-hls/dist/videojs-contrib-hls.js');

class Stream extends Component {

    componentDidMount() {
        // instantiate Video.js
        this.player1 = videojs(this.videoNode1, this.props, function onPlayerReady() {
          console.log('onPlayerReady', this)
        });
        this.player2 = videojs(this.videoNode2, this.props, function onPlayerReady() {
            console.log('onPlayerReady', this)
          });
        this.player3 = videojs(this.videoNode3, this.props, function onPlayerReady() {
            console.log('onPlayerReady', this)
        });
        this.player4 = videojs(this.videoNode4, this.props, function onPlayerReady() {
            console.log('onPlayerReady', this)
        });
      }
    
   /* startVideo(video) {
        videojs(video);
    }*/
    
    width; 

    componentWillMount(){
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }

    componentWillUnmount(){
        if(this.player1){
            this.player1.dispose();
        }
        if(this.player2){
            this.player1.dispose();
        }
        if(this.player3){
            this.player1.dispose();
        }
        if(this.player4){
            this.player1.dispose();
        }
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div>
                <HeaderTwo/>
                <div className="row header-break-two">
                    <div className="col-12 col-md-6">
                        <Card>
                            <CardBody>
                            <CardTitle className="al smtxt">Camera 1</CardTitle>
                            <video ref={node => this.videoNode1 = node} width={this.width/2.3} height={this.height/2.8} className="video-js vjs-default-skin" controls>
                                <source src="http://34.205.76.90:8080/neww/test.m3u8" type="application/x-mpegURL" />
                            </video>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-6">
                    <Card>
                        <CardBody>
                        <CardTitle className="al smtxt">Camera 2</CardTitle>
                        <video ref={node => this.videoNode2 = node} width={this.width/2.3} height={this.height/2.8} className="video-js vjs-default-skin" controls>
                            <source src="http://34.205.76.90:8080/neww/test.m3u8" type="application/x-mpegURL" />
                        </video>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-md-6">
                    <Card>
                        <CardBody>
                        <CardTitle className="al smtxt">Camera 3</CardTitle>
                        <video ref={node => this.videoNode3 = node} width={this.width/2.3} height={this.height/2.8} className="video-js vjs-default-skin" controls>
                            <source src="http://34.205.76.90:8080/neww/test.m3u8" type="application/x-mpegURL" />
                        </video>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-md-6">
                    <Card>
                        <CardBody>
                        <CardTitle className="al smtxt">Camera 4</CardTitle>
                        <video ref={node => this.videoNode4 = node} width={this.width/2.3} height={this.height/2.8} className="video-js vjs-default-skin" controls>
                            <source src="http://34.205.76.90:8080/neww/test.m3u8" type="application/x-mpegURL" />
                        </video>
                        </CardBody>
                    </Card>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Stream;
