import Button from 'react-bootstrap/Button';
import { AddCustomer } from './AddCustomer';
import { useState } from 'react';
import { CustomerDetails } from './CustomerDetails';

export const Customer =()=>{
    
    const[showCustomerModal , setShowCustomerModal]=useState(false)
    const addCustomer = ()=>{
      setShowCustomerModal(true)
    }

    return (
        <div className='container '>
            <div className='d-flex flex-column gap-5' >
<div className='d-flex justify-content-end my-2'  >
          <Button  variant="success" onClick={addCustomer}>Add Customer</Button>
</div>
<div>
    <CustomerDetails/>
</div>
   {showCustomerModal && ( <AddCustomer hide={()=>setShowCustomerModal(false)} />)}

            </div>
        </div>
    )
}