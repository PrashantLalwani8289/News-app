
import NavBar from './components/NavBar';
import './App.css';
import {
  BrowserRouter as Router ,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react'
import News from './components/News';
import ErrorPage from "./components/Error";


export default class App extends Component {
apiKey = process.env.REACT_APP_API_KEY
pageSize = 15
state = {
  progress : 0
}
 setProgress = (progress) => {
  this.setState({progress : progress});
 }
  render() {
    return (
      <div>
      <Router>
       <NavBar></NavBar>   
       <LoadingBar
        color='#f11946'
        height={3}
        transitionTime={400}
        progress={this.state.progress}
      />
       <Routes>    
       <Route exact path = "/" element= {<News endPoint = 'everything?q=world'  setProgress = {this.setProgress } apiKey = {this.apiKey} key="everything" pageSize={this.pageSize} country = "" category = ""/>} errorElement= {<ErrorPage />}/>
       <Route exact path = "/Entertainment" element= {<News endPoint = 'top-headlines?'  setProgress = {this.setProgress } apiKey = {this.apiKey} key="entertainment" pageSize={this.pageSize} country = "&country=in" category = "&category=entertainment"/>} errorElement= {<ErrorPage />}/>
       <Route exact path = "/Business" element= {<News endPoint = 'top-headlines?'  setProgress = {this.setProgress } apiKey = {this.apiKey} key="business" pageSize={this.pageSize} country = "&country=in" category = "&category=business"/>} errorElement= {<ErrorPage />}/>
       <Route exact path = "/Sports" element= {<News endPoint = 'top-headlines?'  setProgress = {this.setProgress } apiKey = {this.apiKey} key="sports" pageSize={this.pageSize} country = "&country=in" category = "&category=sports"/>} errorElement= {<ErrorPage />}/>
       <Route exact path = "/Science" element= {<News endPoint = 'top-headlines?'  setProgress = {this.setProgress } apiKey = {this.apiKey} key="science" pageSize={this.pageSize} country = "&country=in" category = "&category=science"/>} errorElement= {<ErrorPage />}/>
       <Route exact path = "/General" element= {<News endPoint = 'top-headlines?'  setProgress = {this.setProgress } apiKey = {this.apiKey} key="general" pageSize={this.pageSize} country = "&country=in" category = "&category=general"/>} errorElement= {<ErrorPage />}/>
       <Route exact path = "/Health" element= {<News endPoint = 'top-headlines?'  setProgress = {this.setProgress } apiKey = {this.apiKey} key="health" pageSize={this.pageSize} country = "&country=in" category = "&category=health"/>} errorElement= {<ErrorPage />}/>
       <Route exact path = "/Technology" element= {<News endPoint = 'top-headlines?'  setProgress = {this.setProgress } apiKey = {this.apiKey} key="technology" pageSize={this.pageSize} country = "&country=in" category = "&category=technology"/>} errorElement= {<ErrorPage />}/>   
       </Routes>
       </Router>
      </div>
    )
  }
}

