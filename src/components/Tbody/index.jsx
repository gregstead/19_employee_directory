function Tbody(props) {
  const {employees, sortBy} = props
  let sortedEmployees = [...employees]
  sortedEmployees.sort((a,b) => {
    switch (sortBy) {
      case 'First':
        return a.name.first - b.name.first
      default:
        break;
    }
    return 0;
  })
  return (
    <tbody>
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
  );
}

export default Tbody;
