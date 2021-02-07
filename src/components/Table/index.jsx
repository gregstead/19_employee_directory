import React from "react";

function Table(props) {
  const { employees } = props;
  const [sortField, setSortField] = React.useState(null);

  let sortedEmployees = [...employees];
  // Sort employees

  if (sortField !== null) {
    sortedEmployees.sort((a, b) => {
      switch (sortField) {
        case "email":
          if (a[sortField] < b[sortField]) {
            return -1;
          }
          if (a[sortField] > b[sortField]) {
            return 1;
          }
          return 0;
        case "first":
        case "last":
          if (a.name[sortField] < b.name[sortField]) {
            return -1;
          }
          if (a.name[sortField] > b.name[sortField]) {
            return 1;
          }
          return 0;
        default:
          return 0;
      }
    });
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"></th>
          {/* Make table headings clickable and set sorter field */}
          <th scope="col" onClick={() => setSortField("first")}>
            First
          </th>
          <th scope="col" onClick={() => setSortField("last")}>
            Last
          </th>
          <th scope="col" onClick={() => setSortField("email")}>
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        {/* Dynamically generate table rows */}
        {sortedEmployees.map((employee, _idx) => (
          <tr key={employee.email}>
            <th scope="row">
              <img
                src={employee.picture.medium}
                alt={`${employee.name.first} ${employee.name.last}`}
              />
            </th>
            <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
