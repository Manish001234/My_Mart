import axios from "axios"

export const GET_DATA = 'GET_DATA'


export const getProduct=(payload)=>({
    type: GET_DATA,
    payload
    })

   

export const mobiles_api=()=>(dispatch)=>{

    
    axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products').then((res)=>{

        dispatch(getProduct(res.data))
})

}