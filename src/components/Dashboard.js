import React from "react";
import "./Dashboard.css";
const Dashboard = (props) => {
  return (
    <div className="main_container">
      <h1>Total users</h1>
      <span>{props.data.length}</span>
    </div>
  );
};

export default Dashboard;
