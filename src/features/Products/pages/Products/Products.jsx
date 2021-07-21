import React, { useState, useEffect } from 'react'
import { Button, CircularProgress } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { DataGrid } from '@material-ui/data-grid'

import Dialog from 'common/components/Dialog/Dialog'
import NewProduct from 'features/Products/components/NewProduct/NewProduct'

import { getAllProducts } from 'features/Products/redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { productSelector } from 'features/Products/redux/selectors/productSelectors'
import productsColumns from 'features/Products/constants/productsColumns'

const Products = () => {
  const [productSelected, setProductSelected] = useState(null)
  const [multipleProductsSelected, setMultipleProductsSelected] = useState([])
  const [showModalNewProduct, setShowModalNewProduct] = useState(false)
  const dispatch = useDispatch()
  const { products, fetchingProducts } = useSelector(productSelector)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  const deleteProducts = () => { }

  const onProductEdited = () => setShowModalNewProduct(false)

  const handleEditProduct = (e) => {
    console.log(e)
  }

  return (
    <>
      <div className="dashboard-content-header">
        <h1>Products</h1>
        <div>
          <Button
            onClick={() => setShowModalNewProduct(true)}
            variant="contained"
            color="primary"
          >
            New product
          </Button>

          <Button
            disabled={!multipleProductsSelected.length}
            style={{ marginLeft: '1em' }}
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={deleteProducts}
          >
            Delete
          </Button>
        </div>
      </div>
      <div style={{ width: '100%', height: '600px' }}>
        {fetchingProducts ? (
          <CircularProgress />
        ) : (
          <DataGrid
            onSelectionModelChange={({ selectionModel }) =>
              setMultipleProductsSelected(selectionModel)
            }
            checkboxSelection
            onRowDoubleClick={handleEditProduct}
            rows={products}
            columns={productsColumns}
          />
        )}
      </div>
      <Dialog
        open={showModalNewProduct}
        onHide={onProductEdited}
        title="New Product"
      >
        <NewProduct onHide={onProductEdited} />
      </Dialog>
    </>
  )
}

export default Products
