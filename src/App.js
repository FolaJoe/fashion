import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import PageWrapper from './Components/PageWrapper';
import Header from './Components/Header';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

class App extends Component{
  render(){
    return(
      <Router>
        <Route 
         exact = {true}
         path = "/"
         render = {props =>
          <div>
            <PageWrapper>
              <Header/>
            </PageWrapper>

          </div>
        }

        />
        <Route 
          exact = {true}
          path = "/portfolio"
          render = {props =>
            <div>
              <PageWrapper>
                <Portfolio/>
              </PageWrapper>
            </div>
          }

          
        />
        <Route 
          exact = {true}
          path = "/about"
          render = {props =>
            <div>
              <PageWrapper>
                <About/>
              </PageWrapper>
           
            </div>
          }
        />
         <Route 
          exact = {true}
          path = "/contact"
          render = {props =>
            <div>
              <PageWrapper>
                <Contact/>
              </PageWrapper>
           
            </div>
          }
        />
      </Router>

    )
  }
}

export default App;
