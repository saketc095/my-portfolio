
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import myPic from '../myPic.jpg';
import { List,ListItem, ListItemContent } from 'react-mdl';
import {Link} from 'react-scroll';

class Sidebar extends Component{
    render(){
      return (
          <div>
            <img className="myPic" src={myPic} alt="mypic" /><br /><br />
            <div className="title">
                <h1>Saket Chinchalikar</h1>
                <p><Link style={{color:'white', margin:'auto'}} to="abt" spy={true} smooth={true} >ABOUT</Link> </p>
                <p><Link style={{color:'white', margin:'auto'}} to="timeline" spy={true} smooth={true} >TIMELINE </Link></p>              
                <p><Link style={{color:'white', margin:'auto'}} to="contact" spy={true} smooth={true} >CONTACT </Link></p>   
              <div className="social-links">
                <List>
                  <ListItem>
                    <ListItemContent style={{ fontSize: "6px" }}>
                      <a href="https://www.facebook.com/saket.chinchalikar.1" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-facebook-square" aria-hidden="true" /></a>
                      <a href="https://www.linkedin.com/in/saket-chinchalikar/" rel="noopener noreferrer" target="_blank"><br /><br />
                      <i className="fa fa-linkedin" aria-hidden="true" /></a>
                      <a href="https://www.instagram.com/saket9_c/" rel="noopener noreferrer" target="_blank"><br /><br />
                      <i className="fa fa-instagram" aria-hidden="true" /></a>
                      <a href="https://github.com/saketc095" rel="noopener noreferrer" target="_blank"><br /><br />
                      <i className="fa fa-github" aria-hidden="true" /></a>
                    </ListItemContent>
                  </ListItem>
                </List>
              </div>
            </div>
        </div>
      )
    }
}
export default Sidebar;