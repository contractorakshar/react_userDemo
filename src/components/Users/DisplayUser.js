import React from "react";
import Card from "../UI/Card";

import { DataGrid } from "@material-ui/data-grid";
import DeleteIcon from "@material-ui/icons/Delete";
import "./DisplayUser.css";

const UserDisplayList = (props) => {
  const rows = props.users;
  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "lname", headerName: "Last Name", width: 150 },
    { field: "age", headerName: "Age", width: 120 },
    { field: "maths", headerName: "Maths", width: 120 },
    { field: "sci", headerName: "Science", width: 130 },
    {
      field: "Actions",
      width: 100,
      sortable: false,
      headerName: "",
      disableClickEventBubbling: true,
      renderCell: (data) => {
        return (
          <button>
            <DeleteIcon
              onClick={() => {
                props.deleteClickHandler(data.id);
              }}
            />
          </button>
        );
      },
    },
    { field: "id", hide: true },
  ];

  // const searchHandler = (event) => {
  //   console.log(props.users);

  //   let obj = props.users.find((o) => o.name === event.target.value);
  //   // let obj = props.users.filter((obj) => obj.name === event.target.value);
  //   console.log(obj);
  // };
  if (props.users.length > 0) {
    return (
      <Card>
        <h1>User Data</h1>
        <div className="table_container">
          <DataGrid autoHeight rows={rows} columns={columns} />
        </div>
        {/* <TextField
          type="search"
          placeholder="Search here"
          fullWidth
          onChange={searchHandler}
        />
        <TableContainer component={Paper} className="min_Width">
          <Table className="min_Width">
            <TableHead>
              <TableRow>
                <TableCell
                  onClick={() => {
                    props.arraySorting();
                  }}
                >
                  Name
                </TableCell>
                <TableCell align="center">Last name</TableCell>
                <TableCell align="center">Age</TableCell>
                <TableCell align="center">Maths</TableCell>
                <TableCell align="center">Science</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.users.map((data) => (
                <TableRow key={data.id}>
                  <TableCell component="th" scope="row">
                    {data.name}
                  </TableCell>
                  <TableCell align="center">{data.lname}</TableCell>
                  <TableCell align="center">{data.age}</TableCell>
                  <TableCell align="center">{data.maths}</TableCell>
                  <TableCell align="center">{data.sci}</TableCell>
                  <TableCell align="center">
                    <DeleteIcon
                      onClick={() => {
                        props.deleteClickHandler(data.id);
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}
      </Card>
    );
  }
  return null;
};
export default UserDisplayList;
