import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDisplay = () => {
    const mobid = useParams();
    const [data, setData]=useState([])
  
    const getData=()=>{
        axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${mobid.id}`).then((res)=>{
            setData(res.data.data)
            console.log("display",res.data.data)
         
        })
    }
    useEffect(()=>{
        getData();
    },[])

  return (
    <div>
         <div className="container my-5 py-1" >
            <div className="row">
                     <div className="col-md-6 d-flex justify-content-center mmx-auto product">
                         <img src={data.image} alt="" height="400px"  />
                     </div>   
                     <div className="col-md-6 d-flex flex-column justify-cuntent-center">
                         <h1 className='display-5 fw-bold' >{data.brand}</h1>
                         <hr />
                         <h2 className='my-4' >Rs - {data.title}</h2>
                         <p className='lead'>{data.price}</p>
                         <button  className='btn btn-outline-primary my-5'>add to cart</button>
                     </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay