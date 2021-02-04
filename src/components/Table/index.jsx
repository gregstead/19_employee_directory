import Tbody from "../Tbody"
function Table(props) {
    return(
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col" onClick={props.handleSortClick}>First</th>
              <th scope="col" onClick={props.handleSortClick}>Last</th>
              <th scope="col" onClick={props.handleSortClick}>Email</th>
            </tr>
          </thead>
          <Tbody employees={props.employees} sortBy={props.sortby}/>
        </table>
    )
}
export default Table;