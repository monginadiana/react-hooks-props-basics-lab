import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";


import user from "../data/user";
console.log(user);

/* <Home
  color ="Dear Reader: Bjarne Stroustrup has the perfect lecture oration."
  name={true}
  city={1}
/> */
// pass this data down as props to the child component(s) that need it!




function App() {
  return (
    <div>
      <NavBar />
      <Home color={user.color} city= {user.city} name ={user.name}/>
      <About bio={user.bio} links = {user.links}/>
    </div>
  );
}

export default App;
