import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import AddShop from './screens/AddShop'
import AllShops from './screens/AllShops'
import FilterScreen from './screens/FilterScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<AllShops />} exact />
            <Route path='/addShop' element={<AddShop />} />
            <Route path='/filters' element={<FilterScreen />} />
          </Routes>
        </Container>
      </main>
    </Router>
  )
}

export default App
