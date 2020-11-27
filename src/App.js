import React, { Component } from "react";
import Teams from "./Teams";
import AddTeam from "./AddTeam";

class App extends Component {
  state = {
    teams: [
      { name: "Sam", age: "25", belt: "black", id: 1 },
      { name: "Paul", age: "24", belt: "yellow", id: 2 },
      { name: "Tess", age: "23", belt: "pink", id: 3 },
    ],
  };
  addTeam = (team) => {
    team.id = Math.random();
    let teams = [...this.state.teams, team];
    this.setState({
      teams,
    });
  };

  deleteTeam = (id) => {
    let teams = this.state.teams.filter(team => {
      return team.id !== id;
    });
    this.setState({
      teams
    })
  };

  render() {
    return (
      <div className="App container ">
        <h1> Welcome to React</h1>

        <Teams deleteTeam={this.deleteTeam} teams={this.state.teams} />
        <AddTeam addTeam={this.addTeam} />
      </div>
    );
  }
}

export default App;
