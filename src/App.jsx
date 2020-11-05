import React from 'react'
import { Header, MemeContainer, SingleMemePage,Error } from './components'
import {Switch,Route} from 'react-router-dom'
import "./App.scss"
const App = () => {
  
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact ><MemeContainer /></Route>
        <Route path="/meme/:id"><SingleMemePage /></Route>
        <Route ><Error /></Route>
      </Switch>
    </div>
  )
}

export default App
