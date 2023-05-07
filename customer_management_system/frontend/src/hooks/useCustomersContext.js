import {CustomersContext } from "../context/CustomersContext"
import { useContext } from "react"

export const useCustomersContext = () => {
  const context = useContext(CustomersContext)

  if(!context) {
    throw Error('useCustomersContex must be used inside an CustomerContexProvider')
  }

  return context
}