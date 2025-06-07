import Button from 'react-bootstrap/Button';
import { AddCustomer } from './AddCustomer';

export const Customer =()=>{
    return (
        <div className='container '>
            <div className='d-flex flex-column gap-5' >
<div className='d-flex justify-content-end my-2'  >
          <Button  variant="success">Add Customer</Button>
</div>
<div>
    <AddCustomer/>
</div>
            </div>
        </div>
    )
}