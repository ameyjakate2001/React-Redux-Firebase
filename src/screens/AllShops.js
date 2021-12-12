import React, { useEffect } from 'react'
import { getShopsAction } from '../actions/shopActions'
import { useDispatch, useSelector } from 'react-redux'
import Shop from '../components/Shop'
import Loader from '../components/Loader'
import { Row, Col } from 'react-bootstrap'

const AllShops = () => {
  const dispatch = useDispatch()
  const { loading, shops } = useSelector((state) => state.shopList)
  useEffect(() => {
    dispatch(getShopsAction())
  }, [dispatch])
  console.log(shops)

  return (
    <div>
      <h1 className='mb-4'>All Shops</h1>

      {loading ? (
        <Loader />
      ) : shops && shops.length === 0 ? (
        <h3>No Shops Added</h3>
      ) : (
        <Row>
          {shops &&
            shops.map((shop) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <Shop key={shop.id} shop={shop} />
              </Col>
            ))}
        </Row>
      )}
    </div>
  )
}

export default AllShops
