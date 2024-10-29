import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

export default function useGetAllData() {



 
function getAllProducts() {
  

    return axios.get('https://ecommerce.routemisr.com/api/v1/products')
  
  
    
    
  
  }
  
      

  const data= useQuery({
    queryKey:'allProducts',
    queryFn: getAllProducts,
    refetchOnWindowFocus:false,
    refetchOnMount:false
  
  })
  
  


      return {
        allData : data
      }

}
