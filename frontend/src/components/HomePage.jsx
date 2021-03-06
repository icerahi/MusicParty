import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import RoomJoinPage from "./RoomJoinPage";

export class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <Router>
              <Switch>
                  <Route exact path='/'> <p>This is Home page</p> </Route>
                  <Route exact path='/join' component={RoomJoinPage}/>
                  <Route exact path='/create' component={CreateRoomPage}/>
                  <Route exact path='/room/:roomCode' component={Room}/>
              </Switch>
          </Router>
       
      </div>
    );
  }
}

export default HomePage;
