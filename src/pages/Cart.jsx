import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cartitem from '../components/Cartitem'

function Cart() {
    const {cart} = useSelector((state) => state)

    const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
  setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])
  
    

  return (
    <>
{
    cart.length > 0 ? (<div>
        <div>
            {
                cart.map((item, index) =>(
                <Cartitem key={item.id} item={item} itemIndex={index}/>
                ))
            }   
        </div>

        <div>

<div>
    <div>Your  Cart</div>
    <div>Summary</div>
    <p>
   <span>Your Cart : {cart.length}</span> </p>
</div>

<div>
    <p>Total Amount : ${totalAmount}</p>
    <button>Checkout Now</button>
</div>
        </div>
    </div>) : 
    (<div>
        <h1>Cart Empty Hai</h1>
        <Link to={'/'}>
<button>
    Shop Now
</button>
        </Link>
    </div>)
}
    </>
  )
}

export default Cart