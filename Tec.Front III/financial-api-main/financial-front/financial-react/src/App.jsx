import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Customers from './pages/Customers'
import CustomersCreate from './pages/CustomersCreate'
import CustomersEdit from './pages/CustomersEdit'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <h1>App Financeiro</h1>
      <Navbar/>
      <Routes>
      <Route path='/customers' element = {<Customers/>}/>
      <Route path='/customers/create' element = {<CustomersCreate/>}/>
      <Route path={'/customers/:documentNumber'} element = {<CustomersEdit/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App