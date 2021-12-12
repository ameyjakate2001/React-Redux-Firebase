import React from 'react'
import { useDispatch } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import { deleteShopAction } from '../actions/shopActions'

const Shop = ({ shop }) => {
  const dispatch = useDispatch()

  const deleteShopHandler = (id) => {
    console.log(id)
    dispatch(deleteShopAction(id))
  }

  return (
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
        <Button variant='danger' onClick={() => deleteShopHandler(shop.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Shop
