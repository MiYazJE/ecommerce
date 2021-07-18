import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { customerSelector } from '../redux/selectors/customerSelectors'
import { deleteCustomers, getCustomers } from '../redux/slices/customerSlice'

const useCustomers = () => {
  const {
    customers,
    fetchingCustomers,
    customersSuccessDeleted,
    deletingCustomers
  } = useSelector(customerSelector)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCustomers())
  }, [dispatch])

  useEffect(() => {
    if (customersSuccessDeleted) {
      // add toast
    }
  }, [customersSuccessDeleted])

  const handleDeleteCustomers = (customers) =>
    dispatch(deleteCustomers(customers))

  return {
    customers,
    fetchingCustomers,
    deletingCustomers,
    handleDeleteCustomers
  }
}

export default useCustomers
