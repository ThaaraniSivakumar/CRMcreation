import Table from 'react-bootstrap/Table';

export const CustomerDetails = () =>{
    return(
        <div>
          <Table striped bordered >
      <thead>
        <tr>
          <th>Customer Id</th>
          <th>Customer Name </th>
          <th>Customer Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
      </tbody>
    </Table>
        </div>
    )
}