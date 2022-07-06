import { actionType } from './actionType'
export const reducer = (state, action) => {
   switch (action.type) {
      case actionType.ADD_RESULT_DISEASE:
         return {
            ...state,
            diseases: action.payload
         }
      case actionType.ADD_ID_PLANT:
         return {
            ...state,
            idPlant: action.payload
         }
      default:
         throw new Error()
   }
}
