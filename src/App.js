import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import AddUser from "./components/Users/AddUsers";
import UserDisplayList from "./components/Users/DisplayUser";
function App() {
  const [usersLists, setUsersList] = useState([]);

  const addUserHandler = (Name, Lname, Age, Maths, Sci) => {
    setUsersList((prev) => {
      return [
        ...prev,
        {
          name: Name,
          lname: Lname,
          age: Age,
          maths: Maths,
          sci: Sci,
          id: Math.random().toString(),
        },
      ];
    });
  };
  const deleteHandler = (id) => {
    const newList = usersLists.filter((item) => item.id !== id);
    setUsersList(newList);
    return (
      <UserDisplayList
        users={usersLists}
        deleteClickHandler={deleteHandler}
        // arraySorting={arraySorting}
      />
    );
  };

  // const arraySorting = () => {
  //   usersLists.sort((a, b) => {
  //     if (a.name < b.name) {
  //       return -1;
  //     }
  //     if (a.name > b.name) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   setUsersList(usersLists);
  //   console.log(usersLists);
  // return (
  //   <UserDisplayList
  //     users={usersLists}

  //     deleteClickHandler={deleteHandler}
  //     arraySorting={arraySorting}
  //   />
  // );
  // };
  return (
    <div className="App">
      <Dashboard data={usersLists} />
      <AddUser onAddUsers={addUserHandler} />
      <UserDisplayList
        users={usersLists}
        deleteClickHandler={deleteHandler}
        // arraySorting={arraySorting}
      />
    </div>
  );
}

export default App;
