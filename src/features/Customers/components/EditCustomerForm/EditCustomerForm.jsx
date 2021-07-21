import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@material-ui/core'
import Input from 'common/components/Input/Input'
import { customerSchema } from 'features/Customers/constants/formValidations'
import { customerSelector } from 'features/Customers/redux/selectors/customerSelectors'
import { editCustomer } from 'features/Customers/redux/slices/customerSlice'
import React, { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

const EditCustomerForm = ({ customer, onHide }) => {
  const dispatch = useDispatch()
  const { customerSuccessEdited, editingCustomer } =
    useSelector(customerSelector)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: customer?.name || '',
      address: customer?.address || '',
      phone: customer?.phone || '',
      id: customer?.id || ''
    },
    resolver: yupResolver(customerSchema)
  })

  useEffect(() => {
    if (customerSuccessEdited) {
      onHide()
    }
  }, [customerSuccessEdited])

  const onSubmit = (data) => {
    dispatch(editCustomer(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <Input
        placeholder="Enter your name"
        {...register('name')}
        name="name"
        error={!!errors?.name}
        helperText={errors?.name?.message}
      />
      <Input
        placeholder="Enter your address"
        {...register('address')}
        name="address"
        error={!!errors?.address}
        helperText={errors?.address?.message}
      />
      <Input
        placeholder="Enter your phone"
        {...register('phone')}
        name="phone"
        error={!!errors?.phone}
        helperText={errors?.phone?.message}
      />
      <Button
        disabled={editingCustomer}
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Edit
      </Button>
    </form>
  )
}

export default EditCustomerForm
