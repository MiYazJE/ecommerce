import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/User/redux/slices/userSlice'
import customerSlice from 'features/Customers/redux/slices/customerSlice'

const rootReducer = {
  user: userSlice,
  customer: customerSlice
}

const store = configureStore({
  reducer: rootReducer
})

export default store
