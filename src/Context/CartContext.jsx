import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'



export const cartContext = createContext()
export default function CartContext({children}) {
    const [numberOfCartItems, setNumberOfCartItems] = useState(0)
    const [totalCartPrice, setTotalCartPrice] = useState(0)
    const [allCartProducts, setAllCartProducts] = useState(null)
    const [isLoad, setLoading] = useState(false)
    const [isCartLoad, setIsCartLoad] = useState(false) 
    const [isWishListLoad, setIsWishListLoad] = useState(false) 
    const [wishListProducts, setWishListProducts] = useState(null)
    const [isWish, setIsWish] = useState(false)
    const [wishListCount, setWishListCount] = useState(0)
    const [cartId, setCartId] = useState(null)
    const [checkOut, setCheckOut] = useState(null)
    const [cartOwner, setCartOwner] = useState(null)


useEffect(()=>{
    if(JSON.parse(localStorage.getItem('wishlist'))) {
      
        setWishListCount(JSON.parse(localStorage.getItem('wishlist')))
        
      }

      if(JSON.parse(localStorage.getItem('cartCount'))) {
      
        setNumberOfCartItems(JSON.parse(localStorage.getItem('cartCount')))
       
     }

     if(localStorage.getItem('userToken')) {
        getUserCart()
        getWishList()
      }
    
},[])

    function addProductToCart(productId) {
        setLoading(true)

         axios.post('https://ecommerce.routemisr.com/api/v1/cart',{
            "productId": productId

        } , {
            headers : {
                token : localStorage.getItem('userToken')
            }
        }).then((response)=>{
            setNumberOfCartItems(response.data.numOfCartItems)
            setAllCartProducts(response.data.data.products)
            setTotalCartPrice(response.data.data.totalCartPrice)
            toast.success('product added successfully to cart',{
               position : 'bottom-left',
                duration: 3000
            })
            setLoading(false)
            
        }).catch((error)=>{
            toast.error(error.response.data.message,{
                 position:'bottom-left'
            })
            setLoading(false)

        })

    }

    function getUserCart() {
        setIsCartLoad(true)
        
        axios.get('https://ecommerce.routemisr.com/api/v1/cart',{
            headers:{
                token : localStorage.getItem('userToken')
            }
        }).then((resp)=>{
           console.log(resp.data.data.cartOwner);
           setCartOwner(resp.data.data.cartOwner)
           
            
            localStorage.setItem('cartCount' , JSON.stringify(resp.data.numOfCartItems))
            
            setIsCartLoad(false)
           
            setNumberOfCartItems(resp.data.numOfCartItems)
            setAllCartProducts(resp.data.data.products)
            setTotalCartPrice(resp.data.data.totalCartPrice)
            setCartId(resp.data.cartId)
            setCheckOut(resp.data)

        }).catch((error)=>{console.log(error);
            setIsCartLoad(false)
        })

    }


    function updateProductCount(prodId,prodCount) {
        setLoading(true)
        axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${prodId}`,{
            'count': prodCount
        },{
            headers : {
                token : localStorage.getItem('userToken')
            }
        }).then((resp)=>{
            setNumberOfCartItems(resp.data.numOfCartItems)
            setAllCartProducts(resp.data.data.products)
            setTotalCartPrice(resp.data.data.totalCartPrice)
            setLoading(false)
        }).catch((error)=>{console.log(error);
            setLoading(false)

        })


    }

    function deleteSpecificCartItem(prodId) {
        axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${prodId}`,
          {  headers : {
                token : localStorage.getItem('userToken')
            }
        }).then((resp)=>{
            toast.success('item deleted from cart',{
                position:'bottom-left'
            })  
            setNumberOfCartItems(resp.data.numOfCartItems)
            setAllCartProducts(resp.data.data.products)
            setTotalCartPrice(resp.data.data.totalCartPrice)
        }).catch((error)=>{console.log(error);
        })


    }
    function updateUi() {
        setAllCartProducts(null),
        setCheckOut(null)
        setNumberOfCartItems(0)
    }

    function addProductToWishlist(id) {
        setIsWishListLoad(true)
        axios.post('https://ecommerce.routemisr.com/api/v1/wishlist',{
            "productId": id
        },{
            headers : {
                token : localStorage.getItem('userToken')
            }
        }).then((resp)=>{
            console.log(resp);
            
            setWishListCount(resp.data.data.length)
            setIsWishListLoad(false)
            toast.success(resp.data.message,{
                position:'bottom-left'
            })
        }).catch((err)=>{console.log(err);
            toast.error(err.response.data.message,{
                 position:'bottom-left'
            })
            setIsWishListLoad(false)
        })
    }

    function getWishList() {

        setIsWish(true)
        axios.get('https://ecommerce.routemisr.com/api/v1/wishlist',{
            headers : {
                token : localStorage.getItem('userToken')
            }
        }).then((response)=>{
           
            localStorage.setItem('wishlist' , JSON.stringify(response.data.count))

            setWishListCount(response.data.count)
            
            setWishListProducts(response.data.data)
            setIsWish(false)
        }).catch((err)=>{console.log(err);
            setIsWish(false)

        })
    }

    function removeFromWishList(id) {
        setIsCartLoad (true)
        axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
            headers : {
                token : localStorage.getItem('userToken')
            }
        }).then ((resp)=>{
            
            getWishList()
            setIsCartLoad(false)
            toast.success('item deleted from wishlist',{
                position:'bottom-left'
            })            
        }).catch((err)=>{console.log(err);
            setIsCartLoad(false)
        })
    }

return <cartContext.Provider value={{
    addProductToCart,
    totalCartPrice,
    numberOfCartItems,
    allCartProducts,
    isLoad,
    getUserCart,
    updateProductCount,
    deleteSpecificCartItem,isCartLoad,
    addProductToWishlist,
    isWishListLoad,
    getWishList,
    wishListProducts,
    removeFromWishList,
    isCartLoad,
    isWish,
    wishListCount,
    cartId,
    checkOut,
    updateUi,
    cartOwner,
    setCartOwner
    }}>

{children} 

</cartContext.Provider>
}
