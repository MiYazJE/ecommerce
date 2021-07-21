import { Button, CircularProgress } from '@material-ui/core'
import useCustomers from 'features/Customers/hooks/useCustomers'
import React, { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import customerColumns from 'features/Customers/constants/customerColumns'

import Dialog from 'common/components/Dialog/Dialog'
import NewCustomerForm from 'features/Customers/components/NewCustomerForm/NewCustomerForm'
import DeleteIcon from '@material-ui/icons/Delete'
import EditCustomerForm from 'features/Customers/components/EditCustomerForm/EditCustomerForm'

const Customers = () => {
  const [multipleCustomersSelected, setMultipleCustomersSelected] = useState([])
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [showNewCustomerModal, setShowNewCustomerModal] = useState(false)
  const [showEditCustomerModal, setShowEditCustomerModal] = useState(false)

  const { fetchingCustomers, customers, handleDeleteCustomers } = useCustomers()

  const onCustomerCreated = () => {
    setShowNewCustomerModal(false)
  }

  const onCustomerEdited = () => {
    setShowEditCustomerModal(false)
  }

  const handleEditCustomer = ({ row }) => {
    setSelectedCustomer(row)
    setShowEditCustomerModal(true)
  }

  const deleteCustomers = () => {
    handleDeleteCustomers(multipleCustomersSelected)
  }

  return (
    <>
      <div className="dashboard-content-header">
        <h1>Customers</h1>
        <div>
          <Button
            onClick={() => setShowNewCustomerModal(true)}
            variant="contained"
            color="primary"
          >
            New Customer
          </Button>

          <Button
            disabled={!multipleCustomersSelected.length}
            style={{ marginLeft: '1em' }}
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={deleteCustomers}
          >
            Delete
          </Button>
        </div>
      </div>
      <div style={{ width: '100%', height: '600px' }}>
        {fetchingCustomers ? (
          <CircularProgress />
        ) : (
          <DataGrid
            onSelectionModelChange={({ selectionModel }) =>
              setMultipleCustomersSelected(selectionModel)
            }
            checkboxSelection
            onRowDoubleClick={handleEditCustomer}
            rows={customers}
            columns={customerColumns}
          />
        )}
      </div>
      <Dialog
        open={showNewCustomerModal}
        onHide={onCustomerCreated}
        title="New customer"
      >
        <NewCustomerForm onHide={onCustomerCreated} />
      </Dialog>
      <Dialog
        open={showEditCustomerModal}
        onHide={onCustomerEdited}
        title="Edit customer"
      >
        <EditCustomerForm
          customer={selectedCustomer}
          onHide={onCustomerEdited}
        />
      </Dialog>
    </>
  )
}

export default Customers
