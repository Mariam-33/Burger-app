import React, { createContext, useState } from 'react'

const AppContext = createContext()
const MaterialProvider = ({ children }) => {

  const [lettuce, setLettuce] = useState([])
  const [bacon, setBacon] = useState([])
  const [cheese, setCheese] = useState([])
  const [meat, setMeat] = useState([])
  const [price, setPrice] = useState(3)

  return (
    <AppContext.Provider value={{
      lettuce, setLettuce,
      bacon, setBacon,
      cheese, setCheese,
      meat, setMeat,
      price, setPrice
    }}>
      {children}
    </AppContext.Provider >
  )
}
export { AppContext, MaterialProvider }
