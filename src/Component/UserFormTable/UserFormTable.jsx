import React from "react";

const UserFormTable = (props) => {
  console.log("PROPS", props);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone No. & Network</th>
          </tr>
        </thead>
        <tbody>
            {
                props.tableData.map((value,key)=>(
                    <tr key={key}>
                        <td>{value.firstName} </td>
                        <td>{value.lastName} </td>
                        <td>{value.email} </td>
                        <td>{value.address} </td>
                        <td>{value.phoneNumber} {value.network}</td>

                    </tr>
                )) 
            }
        </tbody>
      </table>
    </div>
  );
};

export default UserFormTable;
