import  { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap';


const Details = () => {
  const [product, setProduct] = useState({})
  const {id}= useParams()

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, []);

  return (
    <div className='row m-0'>

      <img src={product.image} className='col-6' height={"650"}></img>
      <div className='col-6 my-5 p-4'>
        <p className='fs-4' style={{ direction: 'rtl', textAlign: 'right' }}>
          {product.description}
        </p>
        <p className="text-xl font-semibold mb-4">{product.price}</p>

        <h5>sizes :</h5>
        <div className='row'>
          {product.sizes?.map((size, index) => (
              <div key={index} className='col-3'>
          <Button
            key={size}
            variant={
              product.availableSizes.includes(size)
                ? " bg-primary border-primary border px-3 py-1 rounded text-light"
                : "bg-secondary border px-3 py-1 rounded"
            }
             disabled={! product.availableSizes}
                className='w-75 my-1'
          >
            {size}
          </Button>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Details
