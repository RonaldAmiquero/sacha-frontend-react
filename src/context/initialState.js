import { useState } from 'react'

export const useInitialState = () => {
   const [store, setStore] = useState({})

   const addResultDisease = (payload) => {
      setStore({
         ...store,
         diseases: payload
      })
   }

   const actions = {
      addResultDisease
   }

   return {
      store,
      actions
   }
}
