import { Button } from '@material-ui/core'
import React from 'react'

const Customers = () => {
  return (
    <>
      <div className="dashboard-content-header">
        <h1>Customers</h1>
        <Button variant="contained" color="primary">
          New Customer
        </Button>
      </div>
    </>
  )
}

export default Customers
