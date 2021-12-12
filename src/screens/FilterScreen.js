import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row, Form, Card } from 'react-bootstrap'
import { getFilteredShopAction } from '../actions/shopActions'
import Loader from '../components/Loader'

const FilterScreen = () => {
  const dispatch = useDispatch()
  const { loading, shops } = useSelector((state) => state.filteredList)
  const filterByArea = (area) => {
    dispatch(getFilteredShopAction('Area', area))
    console.log(area)
  }
  const filterByCategory = (category) => {
    console.log(category)
    dispatch(getFilteredShopAction('Category', category))
  }
  const filterByOpenClose = (status) => {
    console.log(status)
    dispatch(getFilteredShopAction(status))
  }

  return (
    <>
      <Row className='mt-4'>
        <Col md={6} xl={4} className='p-4'>
          <h4>Filters on Areas</h4>
          <Form.Select
            aria-label='Floating label select example'
            className='mt-3'
            onChange={(e) => filterByArea(e.target.value)}
          >
            <option>Select Area</option>
            <option value='Thane'>Thane</option>
            <option value='Pune'>Pune</option>
            <option value='Mumbai'>Mumbai</option>
            <option value='Nashik'>Nashik</option>
            <option value='Nagpur'>Nagpur</option>
            <option value='Ahmadnagar'>Ahmadnagar</option>
            <option value='Solapur'>Solapur</option>
          </Form.Select>
        </Col>
        <Col md={6} xl={4} className='p-4'>
          <h4>Filters on Category</h4>
          <Form.Select
            aria-label='Floating label select example'
            onChange={(e) => filterByCategory(e.target.value)}
          >
            <option>Select the Category</option>
            <option value='Grocery'>Grocery</option>
            <option value='Butcher'>Butcher</option>
            <option value='Baker'>Baker</option>
            <option value='Chemist'>Chemist </option>
            <option value='Stationery shop'>Stationery shop</option>
          </Form.Select>
        </Col>
        <Col md={6} xl={4} className='p-4'>
          <h4>Filters on Open and Close</h4>
          <Form.Select
            aria-label='Floating label select example'
            onChange={(e) => filterByOpenClose(e.target.value)}
          >
            <option>Open or Close</option>
            <option value='Open'>Open</option>
            <option value='Close'>Close</option>
          </Form.Select>
        </Col>
      </Row>

      {loading ? (
        <Loader />
      ) : shops && shops.length === 0 ? (
        <h3>No Shop Found</h3>
      ) : (
        <Row>
          {shops &&
            shops.map((shop) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <Card style={{ width: '18rem' }} border='primary'>
                  <Card.Body>
                    <Card.Title>{shop.Name}</Card.Title>
                    <Card.Text style={{ fontWeight: 'bold' }}>
                      Category : {shop.Category}
                    </Card.Text>
                    <Card.Text style={{ color: 'green', fontWeight: 'bold' }}>
                      Area : {shop.Area}
                    </Card.Text>
                    <Card.Text>Opening Date : {shop.Opening_date}</Card.Text>
                    <Card.Text>Closing Date : {shop.Closing_date}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      )}
    </>
  )
}

export default FilterScreen
