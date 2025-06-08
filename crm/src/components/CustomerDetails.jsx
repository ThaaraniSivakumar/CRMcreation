import Table from 'react-bootstrap/Table';

export const CustomerDetails = ({details}) =>{


    return(
          <Table striped bordered >
      <thead>
        <tr>
          <th>Customer Id</th>
          <th>Customer Name </th>
          <th>Customer Email</th>
        </tr>
      </thead>
      <tbody>
        {details.map((customer)=>(
            <tr key={customer.customerId}>
               <td>{customer.customerId}</td>
               <td>{customer.customerName}</td>
               <td>{customer.customerEmail}</td>
            </tr>
        ))}
      </tbody>
    </Table>
    )
}