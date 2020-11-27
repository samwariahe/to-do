import React  from "react";

const Teams = ({teams, deleteTeam}) => {
  
    const teamList = teams.map(team =>{
          return  team.age>20 ?(
            <div className="team" key={team.id}>
            <div>Name: {team.name}</div>
            <div>Age: {team.age}</div>
            <div>Belt: {team.belt}</div>
            <button onClick={()=>{deleteTeam(team.id)}}>Delete Team</button>
     </div>
          ): null;
    })
    return (
        <div className="team-list">
            {teamList}
        </div>    )
  
  
}

export default Teams;
