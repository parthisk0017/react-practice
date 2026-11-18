import React from 'react'
import{BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Singleproduct from './Pages/Singleproduct'

const App = () => {
  return (
    <>
      <BrowserRouter>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
  
          </nav>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/products/:id' element={<Singleproduct/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App