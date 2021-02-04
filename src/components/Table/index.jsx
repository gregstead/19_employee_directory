
function Table(props) {
    return(
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {props.employees.map((employee) => (
              <tr key={employee.email}>
                <th scope="row"><img src={employee.picture.medium} alt={`${employee.name.first} ${employee.name.last}`}/></th>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
    )
}
export default Table;