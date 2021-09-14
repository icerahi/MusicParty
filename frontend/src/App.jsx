import React, { Component } from 'react'
import CreateRoomPage from './components/CreateRoomPage'
import HomePage from './components/HomePage'
import RoomJoinPage from './components/RoomJoinPage'


export default class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="center">
        <HomePage/>
      </div>
    )
  }
}
