import React, { useState } from 'react'
import { Form, InputGroup, FormControl, Button, Alert } from 'react-bootstrap'
import { AddShopAction } from '../actions/shopActions'
import { useDispatch } from 'react-redux'

const AddShop = () => {
  const [Msg, setMsg] = useState('')
  const [Name, setName] = useState('')
  const [Area, setArea] = useState('')
  const [Category, setCategory] = useState('')
  const [OpeningDate, setOpeningDate] = useState('')
  const [ClosingDate, setClosingDate] = useState('')
  const dispatch = useDispatch()

  const AddShopHandler = (e) => {
    e.preventDefault()
    const opening = new Date(OpeningDate)
    const closing = new Date(ClosingDate)
    function getDifferenceInDays(opening, closing) {
      if (closing - opening < 0) return false
      else return true
    }
    console.log(getDifferenceInDays(opening, closing))
    if (getDifferenceInDays(opening, closing)) {
      dispatch(AddShopAction(Name, Area, Category, OpeningDate, ClosingDate))
      setName('')
      setArea('')
      setCategory('')
      setOpeningDate('')
      setClosingDate('')
      setMsg('')
    } else {
      setMsg('Closing Date is coming before Opening Date')
    }
  }
  return (
    <Form onSubmit={AddShopHandler}>
      <h2 className='m-3'>Add Shop</h2>
      {Msg && <Alert variant='danger'>{Msg}</Alert>}
      <div>
        <InputGroup className='m-3' style={{ width: '70%' }}>
          <Form.Label style={{ marginRight: '10px', marginTop: '10px' }}>
            Name
          </Form.Label>
          <FormControl
            placeholder='Name'
            aria-label='Username'
            aria-describedby='basic-addon1'
            onChange={(e) => setName(e.target.value)}
            value={Name}
            required
          />
        </InputGroup>
      </div>

      <div>
        <InputGroup className='m-3' style={{ width: '70%' }}>
          <Form.Label style={{ marginRight: '10px', marginTop: '10px' }}>
            Area
          </Form.Label>
          <Form.Select
            aria-label='Floating label select example'
            onChange={(e) => setArea(e.target.value)}
          >
            <option>Select the Area</option>
            <option value='Thane'>Thane</option>
            <option value='Pune'>Pune</option>
            <option value='Mumbai'>Mumbai</option>
            <option value='Nashik'>Nashik</option>
            <option value='Nagpur'>Nagpur</option>
            <option value='Ahmadnagar'>Ahmadnagar</option>
            <option value='Solapur'>Solapur</option>
          </Form.Select>
        </InputGroup>
      </div>

      <div>
        <InputGroup className='m-3' style={{ width: '70%' }}>
          <Form.Label style={{ marginRight: '10px', marginTop: '10px' }}>
            Category
          </Form.Label>
          <Form.Select
            aria-label='Floating label select example'
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Select the Category</option>
            <option value='Grocery'>Grocery</option>
            <option value='Butcher'>Butcher</option>
            <option value='Baker'>Baker</option>
            <option value='Chemist'>Chemist </option>
            <option value='Stationery shop'>Stationery shop</option>
          </Form.Select>
        </InputGroup>
      </div>
      <div>
        <InputGroup className='m-3' style={{ width: '70%' }}>
          <Form.Label style={{ marginRight: '10px', marginTop: '10px' }}>
            Opening Date
          </Form.Label>
          <Form.Control
            type='date'
            name='Opening Date'
            onChange={(e) => setOpeningDate(e.target.value)}
            required
          />
        </InputGroup>
      </div>
      <div>
        <InputGroup className='m-3' style={{ width: '70%' }}>
          <Form.Label style={{ marginRight: '10px', marginTop: '10px' }}>
            Closing Date
          </Form.Label>
          <Form.Control
            type='date'
            name='Closing Date'
            onChange={(e) => setClosingDate(e.target.value)}
            required
          />
        </InputGroup>
      </div>
      <Button color='success' type='submit' style={{ width: '50%' }}>
        ADD
      </Button>
    </Form>
  )
}
export default AddShop
