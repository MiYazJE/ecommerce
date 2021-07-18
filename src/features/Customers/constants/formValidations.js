import * as Yup from 'yup'

export const customerSchema = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  address: Yup.string().required('Address is required.'),
  phone: Yup.string().required('Phone is required.')
})
