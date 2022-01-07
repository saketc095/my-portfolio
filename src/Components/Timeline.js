import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import { Grid, Cell } from 'react-mdl';

export default class Timeline extends Component {
render() {
    return (
        <div className="timeline-page" id="timeline">
            <Grid className="IntroPage">
                <Cell col={12}>
                    <div className="intro-text">
                        <br></br>
                        <h2>TIMELINE</h2>
                        <br></br>
                    </div>
                    <div className="timeline-grid">
                        <Card className="timeline-card" style={{width: '1000px', height:'270px',margin: 'auto',backgroundColor: 'transparent',border:'none'}}>
                            <h2>SOFTWARE ENGINEER AT TRAVELPORT, CO, USA      <br /><span>October 2019- January 2020</span></h2>
                            <Card.Text className="TCard2Tx">
                            I am working at Travelport as a Developer and a part of an agile team. My main part is working with Travelport processes. 
                            We perform business process modeling (BPMN) using Bizagi Studio as a tool for various workflows of Travelport to support the onboarding of products and automate processes. 
                            I have also deployed and monitored applications on cloud using Bizagi Management Console. We analyze user needs and develop, test and deploy software using Java, Node.js, and MySQL database
                            </Card.Text>
                        </Card>
                        <Card className="timeline-card" style={{width: '1000px', height:'200px',margin: 'auto',backgroundColor: 'transparent',border:'none'}}>
                            <h2>Graduate studies from SUNY Binghamton, New York, USA    <span>August 2018 - May 2020</span></h2>
                            <Card.Text className="TCard2Tx">
                            I have completed my graduate studies (Master's in Science) with major in Computer Science from SUNY Binghamton. It has helped me provide a career boost to
                            expand my knowledge in this field and has exceptionally prepared me by specializing skills in the areas of software development.
                            </Card.Text>
                        </Card>
                        <Card className="timeline-card" style={{width: '1000px', height:'200px',margin: 'auto',backgroundColor: 'transparent',border:'none'}}>
                            <h2>UnderGraduate studies from University of Mumbai, Mumbai    <span>August 2013-May 2017</span></h2>
                            <Card.Text className="TCard2Tx">
                            I have completed my undergraduate studies (Bachelor's in Engineering) in Computer Engineering from Atharva College of Engineering, Mumbai.
                            I had taken courses like OOPs, Theory of Computer Science, Web Technologies over the years and have better understanding of these subjects.
                            I have also been a part of National Service Scheme for 2 years which served as a platform to serve the society and nation.

                            </Card.Text>
                        </Card>
                    </div>
                </Cell>
            </Grid>
        </div>   
        )
    }
}