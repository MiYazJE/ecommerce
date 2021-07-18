import CustomerService from 'features/Customers/services/CustomerService'

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

const customerService = new CustomerService()

export const getCustomers = createAsyncThunk('customer/getAll', async () => {
  const { data } = await customerService.getAll()
  return data
})

export const createCustomer = createAsyncThunk(
  'customer/create',
  async (customer, thunkApi) => {
    await customerService.post(customer)

    thunkApi.dispatch(getCustomers())
  }
)

export const editCustomer = createAsyncThunk(
  'customer/edit',
  async (customer, thunkApi) => {
    await customerService.update(customer)

    thunkApi.dispatch(getCustomers())
  }
)

export const deleteCustomers = createAsyncThunk(
  'customer/delete',
  async (customersId, thunkApi) => {
    const promises = customersId.map((customerId) =>
      customerService.delete(customerId)
    )

    await Promise.all([promises])

    thunkApi.dispatch(getCustomers())
  }
)

const initialState = {
  customers: [],
  fetchingCustomers: false,
  customerSuccessCreated: false,
  customerSuccessEdited: false,
  creatingCustomer: false,
  editingCustomer: false,
  deletingCustomers: false,
  customersSuccessDeleted: false
}

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {},
  extraReducers: {
    [getCustomers.pending](state) {
      state.fetchingCustomers = true
    },
    [getCustomers.rejected](state) {
      state.fetchingCustomers = false
    },
    [getCustomers.fulfilled](state, { payload }) {
      state.fetchingCustomers = false
      state.customerSuccessCreated = false
      state.customerSuccessEdited = false
      state.customersSuccessDeleted = false
      state.customers = payload
    },

    [createCustomer.pending](state) {
      state.creatingCustomer = true
      state.customerSuccessCreated = false
    },
    [createCustomer.rejected](state) {
      state.creatingCustomer = false
    },
    [createCustomer.fulfilled](state) {
      state.creatingCustomer = false
      state.customerSuccessCreated = true
    },

    [editCustomer.pending](state) {
      state.editingCustomer = true
      state.customerSuccessEdited = false
    },
    [editCustomer.rejected](state) {
      state.editingCustomer = false
    },
    [editCustomer.fulfilled](state) {
      state.editingCustomer = false
      state.customerSuccessEdited = true
    },

    [deleteCustomers.pending](state) {
      state.deletingCustomers = true
      state.customersSuccessDeleted = false
    },
    [deleteCustomers.rejected](state) {
      state.deletingCustomers = false
    },
    [deleteCustomers.fulfilled](state) {
      state.deletingCustomers = false
      state.customersSuccessDeleted = true
    }
  }
})

export default customerSlice.reducer
