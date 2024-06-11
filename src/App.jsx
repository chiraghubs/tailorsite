import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

import './App.css'

import Body from './component/Body'
import appStore from './utils/appstore'
import { Provider } from 'react-redux'


function App() {
  const [count, setCount] = useState(0)

  return (
    
     <Provider store={appStore}>
    <Body/>
    <ToastContainer/>
  </Provider>
        
  )
}

export default App
