import React,{Component} from 'react';
import './App.css';
import About from './Components/About';
import Timeline from './Components/Timeline';
import Contact from './Components/Contact'; 
import 'bootstrap/dist/css/bootstrap.css';
import { Grid, Cell} from 'react-mdl';
import LandingPage from './Components/LandingPage';
import Sidebar from './Components/Sidebar';

class App extends Component{
  render(){
    return (
        <Grid className="app" noSpacing>
          <Cell col={3} className="app-sidebar">
            <Sidebar />
          </Cell>
          <Cell col={9} className="app-main-content">
            <LandingPage />
            <About />
            <Timeline />
            <Contact />
          </Cell>
        </Grid>
        
    )
  }
}
export default App;
