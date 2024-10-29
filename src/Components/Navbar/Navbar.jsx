


import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { tokenContext } from "../../Context/AuthContext";
import { cartContext } from "../../Context/CartContext";

export default function Header() {
   const{ token , setToken }= useContext(tokenContext)
 const {numberOfCartItems , wishListCount} =   useContext(cartContext)
 const [isProfile, setIsProfile] = useState(false)

  const navigate =  useNavigate()
   function handleLogout() {

    localStorage.removeItem('userToken')
    localStorage.removeItem('userId')
    localStorage.removeItem('coupon')
    localStorage.removeItem('cartCount')
    localStorage.removeItem('wishlist')
    setToken(null)
    navigate('/login')
    localStorage.setItem('loggedOut','log')

   }

   function handleOpenProfile()  {

    let dropdown = document.querySelector('#dropdown')
    if(dropdown.classList.contains('hidden')) {
      setIsProfile(true)
      
    }
    else {
      setIsProfile(false)      
    }
   }


   useEffect(()=>{
    let navbar = document.getElementById('navbar')
    let height = navbar.offsetHeight
    localStorage.setItem('offset',height)
    console.log();
    

   },[])
  return (
//     <div className="flex items-center justify-around border-b border-gray-400 py-8">
//       <Link to='/home'>  <h2 className='font-bold text-2xl border-0'>Excluisve</h2 ></Link>
//       <nav>
//         <section className="MOBILE-MENU flex lg:hidden">
//           <div
//             className="HAMBURGER-ICON space-y-2 cursor-pointer"
//             onClick={() => setIsNavOpen((prev) => !prev)}
//           >
//             <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//             <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//             <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//           </div>

//           <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
//             <div
//               className="absolute top-0 right-0 px-8 py-8"
//               onClick={() => setIsNavOpen(false)}
//             >
//               <svg
//                 className="h-8 w-8 text-gray-600 cursor-pointer"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <line x1="18" y1="6" x2="6" y2="18" />
//                 <line x1="6" y1="6" x2="18" y2="18" />
//               </svg>
//             </div>
//             <ul className="flex flex-col  items-center justify-between min-h-[250px]">
//               <li className="  my-8 "   onClick={() => setIsNavOpen(false)}>
//                <NavLink to='/home'>Home</NavLink>
               
//               </li>
//               <li className="  my-8 "  onClick={() => setIsNavOpen(false)}>
//               <NavLink to='/contact'>
//         Contact
//      </NavLink>          
//          </li>
//      <li className="  my-8 "  onClick={() => setIsNavOpen(false)}>
//               <NavLink to='/about'>
//          About
//      </NavLink>                </li>
//               <li className="  my-8 "  onClick={() => setIsNavOpen(false)}>
//               <NavLink to='/register'>
//           Sign Up
//      </NavLink>                </li>
//             </ul>
//           </div>
//         </section>

//         <ul className="DESKTOP-MENU hidden items-center justify-between space-x-8 lg:flex">
//           <li>
//           <NavLink to='/home'>Home</NavLink>
//           </li>
//           <li>
//           <NavLink to='/contact'>
//        Contact
//      </NavLink>       
     
//         </li>
//           <li>
//           <NavLink to='/about'>
//        About
//      </NavLink>       
     
//         </li>


        
 



//         {
//           token ?           <li>
//           <span className="cursor-pointer" onClick={handleLogout} >
//       Log out
//      </span>       
     
//          </li> 

//           :        <li>
//           <NavLink to='/register'>
//        Sign Up
//      </NavLink>       
     
//          </li>
//         }
         

  
 
//         </ul>

   
//       </nav>
//       <div className="searchBar mt-1  hidden lg:flex lg:items-center ">
// <div className="search relative mx-4">
// <input className="bg-[#F5F5F5]  rounded w-full  px-7 py-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline mx-2"  type="text" placeholder='What are you looking for?'/>
// <i className="fa-solid fa-magnifying-glass absolute top-1/2 right-0 -translate-y-1/2"></i>
// </div>

// {token ?     <div className="loggedUser flex items-center">
//     <Link to={'/wishlist'}>
//     <i className="fa-regular fa-heart hover:text-[#DB4444] transition-all[200ms]"></i>
//     </Link>
//     <Link to={'/cart'}><i className="fa-solid fa-cart-shopping mx-3"></i></Link>
//     <Link to={'/profile'}>
//     <i className="fa-regular fa-user border border-red-500 rounded-full w-7 h-7 flex items-center justify-center bg-[#DB4444] text-white"></i>

//     </Link>
//     </div> : ''}
//     </div>
  
//       <style>{`
//       .hideMenuNav {
//         display: none;
//       }
//       .showMenuNav {
//         display: block;
//         position: fixed;
//         width: 100%;
//         height: 100vh;
//         top: 0;
//         left: 0;
//         background: #ffffffed;
//         z-index: 10;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-evenly;
//         align-items: center;
//       }
//     `}</style>
//     </div>


<nav id="navbar" className="bg-white dark:bg-gray-900 border-b border-gray-400 fixed top-0 end-0 start-0 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between myContainer">
     <Link to='/home'>  <h2 className='font-bold text-2xl border-0'>Excluisve</h2 ></Link>

  <div className="flex md:order-2">

    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 end-2 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round"strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input className="bg-[#F5F5F5] border-0  rounded w-full  px-7 py-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline mx-2"  type="text" placeholder='What are you looking for?'/>
      </div>
      {token ?     <div className="loggedUser flex items-center gap-4">
     <Link to={'/wishlist'}>
<div className="heart relative">
<i className="fa-regular fa-heart hover:text-[#DB4444] transition-all[200ms] text-2xl ms-2"></i>
<div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{wishListCount}</div>
</div>

     </Link>
     <Link to={'/cart'}>

     <div className="cart relative">
     <i className="fa-solid fa-cart-shopping mx-3 text-2xl"></i>
     {numberOfCartItems > 0 ?      <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{numberOfCartItems}</div>
 : '' }

     </div>
     </Link>
     
<button onClick={handleOpenProfile} id="dropdownDefaultButton"  className="fa-regular fa-user border border-red-500 rounded-full w-7 h-7 flex items-center justify-center bg-[#DB4444] text-white">
</button>

<div id="dropdown" class=   {isProfile ? "top-11 z-10  bg-[#00000062] divide-gray-100 rounded-lg absolute right-6 shadow w-44 dark:bg-gray-700" : "z-10 hidden bg-[#00000062] divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"  }>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li className="flex items-center">
      <i  class="fa-solid fa-basket-shopping ms-3 text-white"></i>
        <Link onClick={()=>{setIsProfile(false)}} to='/allorders' class="block px-4 py-2 text-white hover:text-gray-600 dark:hover:text-white">My Orders</Link>
      </li>
      <li className="flex items-center">
      <i class=" ms-3 fa-solid fa-ban text-white"></i>      
        <Link onClick={()=>{setIsProfile(false)}} to='/cancellation' class="block px-4 py-2 text-white hover:text-gray-600 dark:hover:text-white">My Cancellations</Link>
      </li>
      <li className="flex items-center">
      <i class="fa-regular fa-star ms-3 text-white"></i>       
       <Link  onClick={()=>{setIsProfile(false)}}  to='/reviews' class="block px-4 py-2 text-white hover:text-gray-600 dark:hover:text-white">My Reviews</Link>
      </li>
      <li className="flex items-center">
      <i class="fa-solid fa-arrow-right-from-bracket ms-3 text-white"></i>     
        <span onClick={handleLogout} class="block px-4 py-2 text-white hover:text-gray-600 dark:hover:text-white">Logout</span>
      </li>
   

    </ul>
</div>

     {/* <i className="fa-regular fa-user border border-red-500 rounded-full w-7 h-7 flex items-center justify-center bg-[#DB4444] text-white"></i> */}


     </div> : ''}
    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round"strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor"strokeLinecap="round"strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      </div>
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li className="  my-8 " >
                <NavLink to='/home'>Home</NavLink>
               
               </li>
               <li className="  my-8 ">
               <NavLink to='/contact'>
         Contact
      </NavLink>          
          </li>
      <li className="  my-8 ">
               <NavLink to='/ourstory'>
          About
      </NavLink>                </li>


{token ?     <li className="  my-8 ">
           <span className="cursor-pointer" onClick={handleLogout} >
       Log out
      </span>       
     
          </li>  : 
               <li className="  my-8 ">

                {
                  localStorage.getItem('loggedOut') ? <NavLink to='/login'>Sign in</NavLink> :  <NavLink to='/register'>
                  Sign Up
             </NavLink>  
                }
                            </li> }

      
      </ul>
    </div>

  </div>
</nav>


  )
}