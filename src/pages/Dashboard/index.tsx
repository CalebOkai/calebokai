import React from "react";
import Styles from "./styles";

import giticon from "../../assets/github.svg";


const Dashboard = () => {
  return (
    <Styles>
      <header>
        <h1>Caleb Okai</h1>
        <a href="https://github.com/CalebOkai">
          <img src={giticon} alt="" />
        </a>
      </header>
    </Styles>
  )
}

export default Dashboard;