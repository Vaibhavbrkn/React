import React from 'react';
import {Router, Route,Switch} from 'react-router-dom';
import streamCreate from './streams/streamCreate';
import streamDelete from './streams/streamDelete';
import streamShow from './streams/streamShow';
import streamEdit from './streams/streamEdit';
import streamList from './streams/streamList';
import Header from './Header';
import history from '../history';


const App = ()=>{
  return(
    <div className = "ui container">
      <Router history = {history}>
        <Header/>
        <Switch>
        <Route path = '/' exact component = {streamList}/>
        <Route path = '/streams/new' exact component = {streamCreate}/>
        <Route path = '/streams/edit/:id' exact component = {streamEdit}/>
        <Route path = '/streams/delete/:id' exact component = {streamDelete}/>
        <Route path = '/streams/:id' exact component = {streamShow}/>
        </Switch>
        </Router>
      
    </div>
  )
}


export default App;
