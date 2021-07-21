import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/User/redux/slices/userSlice'
import customerSlice from 'features/Customers/redux/slices/customerSlice'
import productSlice from 'features/Products/redux/slices/productSlice'

const rootReducer = {
  user: userSlice,
  customer: customerSlice,
  product: productSlice
}

const store = configureStore({
  reducer: rootReducer
})

export default store
