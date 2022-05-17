import { createContext } from 'react'
import { useInitialState } from './initialState'

export const AppContext = createContext(null)

export const ContextWrapper = ({ children }) => {
   const initialState = useInitialState()

   return <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
}
