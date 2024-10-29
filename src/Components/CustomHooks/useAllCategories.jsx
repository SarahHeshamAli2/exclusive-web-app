import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

export default function useAllCategories() {



    function getAllCategories() {

        return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
       
      }
    
      

    const {data} = useQuery({
        queryKey:'allCategories',
        queryFn: getAllCategories,
        refetchOnMount:false,
        refetchOnWindowFocus:false
      
      
      })


      return {
        categoriesData : data
      }

}
