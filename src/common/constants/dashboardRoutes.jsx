import { nanoid } from '@reduxjs/toolkit'
import Customers from 'features/Customers/pages/Customers/Customers'
import Products from 'features/Products/pages/Products/Products'
import ROUTES from './paths'

const dashboardRoutes = [
  {
    key: nanoid(),
    path: ROUTES.CUSTOMERS,
    text: 'Customers',
    Component: Customers
  },
  {
    key: nanoid(),
    path: ROUTES.PRODUCTS,
    text: 'Products',
    Component: Products
  }
]

export default dashboardRoutes
