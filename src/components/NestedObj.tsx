import {useState} from 'react'

const NestedObj = () => {
const [customer, setCustomer] = useState({
name :" Nadia ",
address: {
    city: "Houston",
    zipCode : 77379
}
})

const handleClick = ()=>{
    setCustomer({...customer,address:{...customer.address,zipCode : 77340 }})
}

  return (
    <div>
        {customer.name} {customer.address.zipCode}
    <button onClick= {handleClick} >Change the Zip Code</button>
    </div>

  )
}

export default NestedObj