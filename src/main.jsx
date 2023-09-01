import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import KasirPage from './Pages/KasirPage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import CheckoutPage from './Pages/CheckoutPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/kasir',
    element: <KasirPage />
  },
  {
    path: '/checkout',
    element: <CheckoutPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
