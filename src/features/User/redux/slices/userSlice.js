import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import UserService from 'features/User/services/UserService'

const userService = new UserService()

export const signIn = createAsyncThunk(
  'user/signIn',
  async ({ username, password }) => {
    await userService.signIn({ username, password })

    return username
  }
)

export const signUp = createAsyncThunk(
  'user/signUp',
  async ({ username, password }, thunkApi) => {
    await userService.signUp({ username, password })
  }
)

const initialState = {
  username: '',
  logged: false,
  isUserFetching: false,
  userLoggedSuccess: false,
  userSuccessRegistered: false,
  userLoggedFail: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout() {
      return initialState
    }
  },
  extraReducers: {
    [signIn.pending](state) {
      state.isUserFetching = true
    },
    [signIn.rejected](state) {
      state.isUserFetching = false
      state.userLoggedFail = true
    },
    [signIn.fulfilled](state, { payload }) {
      state.userLoggedSuccess = true
      state.userLoggedFail = false
      state.isUserFetching = false
      state.logged = true
      state.username = payload
    },

    [signUp.pending](state) {
      state.isUserFetching = true
    },
    [signUp.rejected](state) {
      state.isUserFetching = false
    },
    [signUp.fulfilled](state) {
      state.userSuccessRegistered = true
      state.isUserFetching = false
    }
  }
})

export const { logout, clearLoginForm } = userSlice.actions

export default userSlice.reducer
