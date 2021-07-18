import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import { Provider } from 'react-redux'
import store from './app/store'
import { setupInterceptors } from 'app/config/axios.interceptors'

import 'styles/main.scss'
import './index.css'

setupInterceptors()

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
