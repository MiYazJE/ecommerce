import { ProductService } from 'features/Products/services/ProductService'

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

const productService = new ProductService()

export const getAllProducts = createAsyncThunk('product/getAll', async () => {
  const {
    data: { products }
  } = await productService.getAll()

  return products
})

export const createProduct = createAsyncThunk(
  'product/create',
  async (product, { dispatch }) => {
    console.log(product)

    dispatch(getAllProducts())
  }
)

const initialState = {
  products: [],
  fetchingProducts: false,
  creatingProduct: false
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProducts.pending](state) {
      state.fetchingProducts = true
    },
    [getAllProducts.rejected](state) {
      state.fetchingProducts = false
    },
    [getAllProducts.fulfilled](state, { payload }) {
      state.fetchingProducts = false
      state.products = payload
    },

    [createProduct.pending](state) {
      state.creatingProduct = true
    },
    [createProduct.rejected](state) {
      state.creatingProduct = false
    },
    [createProduct.fulfilled](state) {
      state.creatingProduct = false
    }
  }
})

export default productSlice.reducer
