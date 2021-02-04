function Tbody(props) {

    switch (props.sortBy) {
        case "first":
            return (
                <tbody>
                {props.employees
                .sort(function (a,b) {
                    return a.first - b.first;
                })
                .map((employee) => (
                  <tr key={employee.email}>
                    <th scope="row"><img src={employee.picture.medium} alt={`${employee.name.first} ${employee.name.last}`}/></th>
                    <td>{employee.name.first}</td>
                    <td>{employee.name.last}</td>
                    <td>{employee.email}</td>
                  </tr>
                ))}
              </tbody>
            )
        case "last":
            break;
        case "email":
            break;
        case "":
        default:
            return (
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
            )
    }
}

export default Tbody;