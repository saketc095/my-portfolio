import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Resume from '../Resume.pdf';

export default class LandingPage extends Component{
    render(){
    return(
        <Grid className="landing-page" id="lp">
            <Cell col={12}>
                <div className="title">
                    <h1>Hi, <br />I'm Saket</h1>
                    <p> Full Stack Developer | Software Engineer | Coder</p><br></br>
                    <p className="resume-text"><a href={Resume} target="blank">View Resume</a></p>
                </div>
            </Cell>
        </Grid>
        )
    }
}