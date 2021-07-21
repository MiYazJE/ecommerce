import { client } from 'app/config/graphql'
import gql from 'graphql-tag'

export class ProductService {
  getAll() {
    return client.query({
      query: gql`
        query AllProducts {
          products {
            id
            name
            price
          }
        }
      `
    })
  }
}
