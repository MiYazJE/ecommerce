import React from 'react'
import { Button } from '@material-ui/core'
import Input from 'common/components/Input/Input'
import { productSchema } from 'features/Products/constants/formValidations'
import { createProduct } from 'features/Products/redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { productSelector } from 'features/Products/redux/selectors/productSelectors'

const NewProduct = () => {
  const { creatingProduct } = useSelector(productSelector)
  const dispatch = useDispatch()

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
    resolver: yupResolver(productSchema)
  })

  const onSubmit = (product) => {
    dispatch(createProduct(product))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <Input
        placeholder="Product name"
        {...register('name')}
        name="name"
        error={!!errors?.name}
        helperText={errors?.name?.message}
      />
      <Input
        placeholder="Product price"
        {...register('price')}
        name="price"
        error={!!errors?.price}
        helperText={errors?.price?.message}
      />
      <Button
        disabled={creatingProduct}
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

export default NewProduct
