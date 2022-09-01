import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio?<p>{props.bio}</p>: false}
     
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github= {props.links.github} linkedin={props.links.linkedin} />

      {/* <a href="https://www.linkedin.com/in/diana-mongina-74196a1a2/">Linkeldn</a>
      <a href="https://github.com/monginadiana">Github</a> */}
   </div>
  );
}

export default About;
