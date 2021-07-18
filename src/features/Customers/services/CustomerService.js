import axios from 'axios'

export default class CustomerService {
  getAll() {
    return axios.get('/customers')
  }

  post({ name, address, phone }) {
    return axios.post('/customers', {
      name,
      address,
      phone
    })
  }

  update({ name, address, phone, id }) {
    return axios.put(`/customers/${id}`, {
      name,
      address,
      phone
    })
  }

  delete(id) {
    return axios.delete(`/customers/${id}`)
  }
}
