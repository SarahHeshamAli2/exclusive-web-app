import React, { createContext, useEffect, useState } from 'react'

export const tokenContext = createContext()



export default function AuthContext({children}) {

    let userToken = localStorage.getItem('userToken')

    const [token, setToken] = useState(userToken)

    




    return <tokenContext.Provider value={{
        token , setToken
    }}>


    {children}
    
    </tokenContext.Provider>

}
