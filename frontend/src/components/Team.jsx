import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
        Our diverse team combines expertise in technology, hospitality, and culinary arts to create the ultimate dining reservation platform. We're food enthusiasts, tech innovators, and hospitality experts united by one goal: making exceptional dining accessible to everyone.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id} align="center">
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
                <p>{element.bio}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;