import { useState } from 'react'

export const useInitialState = () => {
   const [store, setStore] = useState({})

   const addResultDisease = (payload) => {
      setStore({
         ...store,
         diseases: payload
      })
   }
   const addIdPlant = (payload) => {
      setStore({
         ...store,
         idPlant: payload
      })
   }

   const actions = {
      addResultDisease,
      addIdPlant
   }

   return {
      store,
      actions
   }
}
