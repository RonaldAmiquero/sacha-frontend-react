import { useReducer } from 'react'
import { reducer } from './reducer'
import { actionType } from './actionType'
export const useInitialState = () => {
   const initialState = {}
   const [store, dispatch] = useReducer(reducer, initialState)

   const addResultDisease = (payload) => {
      dispatch({ type: actionType.ADD_RESULT_DISEASE, payload })
   }
   const addIdPlant = (payload) => {
      dispatch({ type: actionType.ADD_ID_PLANT, payload })
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
