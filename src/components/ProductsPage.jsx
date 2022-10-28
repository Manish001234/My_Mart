import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductsPage = () => {
    const [data, setData]=useState([])
  
    const getData=()=>{
        axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products').then((res)=>{
            setData(res.data.data)
            console.log("single",data)
         
        })
    }
    useEffect(()=>{
        getData();
    },[])


  
       
  return (
    <div>
       
       <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Products</h1>
              <hr />
               <div className="sortbtn">
                 <select name="" id="" >
                    <option value="">Sort by price</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                 </select>
                    <select >
            <option value="">Filter by title</option>
            <option value="all">All</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        {/* <button className="btn btn-outline-primary" onClick={()=>handlesort()}>sort</button> */}
       {/* <button className="btn btn-outline-primary">filter</button> */}
               </div>
            </div>
          </div>
        </div>  
        <div className="container">
            <div className="row justify-content-around">
                {data.map((item)=>{
                    return(
                        <div className="card my-5 py-4" key={item.id} style={{width:" 18rem"}}>
                    <img src={item.image} className="card-img-top" />
                    <div className="card-body text-center">
                      <h5 className="card-title">{item.brand}</h5>
                      <h5 className="card-title">{item.title}</h5>
                      
                      <p className="lead">Rs.{item.price}</p>
                      <Link to={`/productDisplay/${item.id}`} className="btn btn-outline-primary">Buy Now</Link>
                    </div>
                  </div>
                    )
                })}
            </div>
          </div>
    </div>
  )
}

export default ProductsPage