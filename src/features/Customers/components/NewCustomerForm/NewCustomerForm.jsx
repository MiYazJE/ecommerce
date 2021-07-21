import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@material-ui/core'
import Input from 'common/components/Input/Input'
import { customerSchema } from 'features/Customers/constants/formValidations'
import { customerSelector } from 'features/Customers/redux/selectors/customerSelectors'
import { createCustomer } from 'features/Customers/redux/slices/customerSlice'
import React, { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

const CustomerForm = ({ onHide }) => {
  const dispatch = useDispatch()
  const { customerSuccessCreated, creatingCustomer } =
    useSelector(customerSelector)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      address: '',
      phone: ''
    },
    resolver: yupResolver(customerSchema)
  })

  useEffect(() => {
    if (customerSuccessCreated) {
      onHide()
    }
  }, [customerSuccessCreated])

  const onSubmit = (data) => {
    dispatch(createCustomer(data))
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
        disabled={creatingCustomer}
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Create
      </Button>
    </form>
  )
}

export default CustomerForm
