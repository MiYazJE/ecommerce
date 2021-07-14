import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/User/redux/slices/userSlice'

const rootReducer = {
  user: userSlice
}

const store = configureStore({
  reducer: rootReducer
})

export default store
