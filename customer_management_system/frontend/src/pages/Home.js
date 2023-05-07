import React from 'react';
import { useEffect } from "react"
import {useCustomersContext } from '../hooks/useCustomersContext'
import { useAuthContext } from "../hooks/useAuthContext"



const Home ={} = () => {
   const{customers,dispatch} = useCustomersContext()
   const {user} = useAuthContext()

   useEffect(() => {
    const fetchCustomers = async () => {
      const response = await fetch('/api/customers',{
        headers: {
          'Authorization': `Bearer ${user.token}`
        },
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_CUSTOMERS', payload: json})
      }
    }
    
    if (user) {
    fetchCustomers()
    }
  }, [dispatch,user])
    

  return (
    <div>
     <div style={{ height: '100vh', 
     backgroundImage: "", 
     backgroundSize: 'cover',
      backgroundPosition: 'center center', 
     backgroundRepeat: 'no-repeat' }}></div>
    </div>
  
);

}

export default Home