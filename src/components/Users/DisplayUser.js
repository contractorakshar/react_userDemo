import React from "react";
import Card from "../UI/Card";
import "./DisplayUser.css";
const UserDisplayList = (props) => {
  if (props.users.length > 0) {
    return (
      <Card>
        <table>
          <caption>User Data</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last name</th>
              <th>Age</th>
              <th>Maths</th>
              <th>Science</th>
            </tr>
          </thead>
          <tbody>
            {props.users.map((data) => (
              <tr
                key={data.id}
                onClick={() => {
                  props.deleteClickHandler(data.id);
                }}
              >
                <td>{data.name}</td>
                <td>{data.lname}</td>
                <td>{data.age}</td>
                <td>{data.maths}</td>
                <td>{data.sci}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <ul className="UsersLists">
          {props.users.map((data) => (
            <li
              key={data.id}
              className="user_list"
              onClick={() => {
                props.deleteClickHandler(data.id);
              }}
            >
              Name: {data.name}
              <br /> Last Name: {data.lname}
              <br /> Age: {data.age}
              <br />
              Maths:{data.maths} Sci: {data.sci}
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            props.arraySorting();
          }}
        >
          Sort
        </button> */}
        <button
          onClick={() => {
            props.arraySorting();
          }}
        >
          Sort
        </button>
      </Card>
    );
  }
  return null;
};
export default UserDisplayList;
