import { useEffect, useState } from 'react'
import './App.css'

// import {cors} from './cors'

import axios from 'axios'
// import cros from 'cros'

function App() {
  
  // const {error, loding, product, search} = customReactQuery('/api/products')


    const [product, setProduct] = useState([])
    const [error, setError] = useState(false)
    const [loding, setLoding] = useState(false)
    const [search, setSearch] = useState('')
     useEffect(()=>{

      const controller = new AbortController()

       ;(async()=>{
         try {
           setError(false)
           setLoding(true)
           const response = await axios.get('/api/products?search=' 
            + search,{
              signal: controller.signal
            });
           // setTimeout(() => {
           //   setProduct(response.data)
           //   console.log(response.data);
           // }, 3000);
           console.log(response.data);
           setProduct(response.data);
           setLoding(false)
   
         } catch (error) {
          if(axios.isCancel(error))
           {
            // setError(true)
           console.error('Error fetching products:', error);
           setLoding(false)
           return
           }
         }
   
       })()

       ///cleanup 
       
       return () =>{
        controller.abort()
       }
   
     },[search])

  if(error){
    return <div><h1>Somthing went wrong 404</h1></div>
  }
  if(loding){
    return <div><h1>Loading...</h1></div>
  }

  return (
    <>

   
      <h1>chai or react</h1>

    <input type="message" placeholder='search'
    value={search}
    onChange={(e)=> setSearch(e.target.value)}
    />


      <h2>Number of Product are:{product.length}</h2>
      {/* <h1>{response.data}</h1> */}
    </>
  )
}

export default App

// const customReactQuery = (urlPath) =>{
//   const [product, setProduct] = useState([])
//   const [error, setError] = useState(false)
//   const [loding, setLoding] = useState(false)
//   const [search, setSearch] = useState(second)
//    useEffect(()=>{
//      (async()=>{
//        try {
//          setError(false)
//          setLoding(true)
//          const response = await axios.get(urlPath);
//          // setTimeout(() => {
//          //   setProduct(response.data)
//          //   console.log(response.data);
//          // }, 3000);
//          console.log(response.data);
//          setProduct(response.data);
//          setLoding(false)
 
//        } catch (error) {
//          setError(true)
//          console.error('Error fetching products:', error);
//          setLoding(false)
//        }
 
//      })()
     
 
//    },[])

//    return {product,error,loding}
// }