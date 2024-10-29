import React, { useContext } from 'react'
import signUpImg from '../../assets/imgs/singUp.jpeg'
import googleIcon from '../../assets/imgs/google.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import { useState } from 'react';
import { tokenContext } from '../../Context/AuthContext'
import { cartContext } from '../../Context/CartContext'
export default function SignIn() {
  

  

const user = {
  email : '',
  password : '',

}

   const {setToken} = useContext(tokenContext)

  const { getUserCart  ,getWishList}= useContext(cartContext)

const [isClicked, setIsClicked] = useState(false)
const [errorMsg, setErrorMsg] = useState('')
const [sucessMsg, setSucessMsg] = useState(false)
const navigate = useNavigate()


  function register(values) {
    setIsClicked(true)
    
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin' , values).then((response)=>{
      setToken(response.data.token)
      localStorage.setItem('userToken',response.data.token)

      if(localStorage.getItem('userToken')) {
        getUserCart()
        getWishList()
      }
    

      setSucessMsg(true)
      setTimeout(() => {
        navigate('/home')
      }, 1500);
      setIsClicked(false)
    }).catch((error)=>{console.log(error.response.data.message);
      setErrorMsg(error.response.data.message)
      setTimeout(() => {
        setErrorMsg('')

      }, 1000);
      setIsClicked(false)
    })

    
  }

  const registerForm = useFormik(
    
    
    {
      initialValues : user ,
      
    
        onSubmit : register,
        validate : function(values) {

          const errors = {}


           
            if(values.email.includes('@') == false || values.email.includes('.') == false || values.email.length == 0) {
              errors.email = 'please enter a valid email'
            }

            if(values.password.length < 6  || values.password.length ==0) {
              errors.password = 'password must be at least 6 charachters'
            }

   

          return errors

        }
    }
    
    
  )

 return <>
 
 <section className='py-10  px-3 md:px-0 md:mt-[100px] mt-[40px]'>
<div className="innerSection md:flex  gap-x-16 md:pr-10 xl:px-0">
  
<div className="leftPart xl:w-1/2 md:w-full">
<img src={signUpImg} alt="shopping cart" className='w-full'  />
</div>
<div className="rightPart xl:w-1/4 mt-10 md:w-full">
  <div className="signUpForm">
    <h2 className='text-4xl'>Log in to Exclusive</h2>
    <p className='my-3'>Enter your details below</p>
    <form  onSubmit={registerForm.handleSubmit} className="signUpInputs my-6 xl:w-3/4">
   
    <input onBlur={registerForm.handleBlur} onChange={registerForm.handleChange} name='email' value={registerForm.values.email} type="text" placeholder='Email' className='border-b-2 border-0 w-full focus:outline-none my-6'/>


{registerForm.errors.email  && registerForm.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {registerForm.errors.email}
</div> : ''}



    <input onBlur={registerForm.handleBlur} onChange={registerForm.handleChange}  name='password' value={registerForm.values.password} type="password" placeholder='password' className='border-b-2 w-full focus:outline-none'/>
    {registerForm.errors.password && registerForm.touched.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {registerForm.errors.password}
</div> : ''}  




{errorMsg ?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {errorMsg}
  </div> : ''
   }
{sucessMsg ?<div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 Welcome !
  </div> : ''
   }
  <div className="flex items-center justify-between cursor-pointer">
    
  <button onChange={registerForm.handleChange} type='submit' className='bg-[#DB4444] hover:bg-[#b43c3c] transition-all text-white px-10 py-3 rounded my-5'>
      
      {

          isClicked ? <i className="fa-solid fa-spinner fa-spin"></i> :       'Login'


      }


    </button>


    <span className='text-[#DB4444]'>Forget Password?</span>
  </div>


    </form>

  </div>
</div>
</div>
 </section>
 
 
 
 </>
}
