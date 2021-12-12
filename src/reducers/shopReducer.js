const getShopReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ALL_SHOPS_REQUEST':
      return { loading: true }

    case 'GET_ALL_SHOPS_SUCCESS':
      return { loading: false, shops: action.payload }

    case 'GET_ALL_SHOPS_FAILURE':
      return { loading: false, error: action.payload }

    case 'DELETE_SHOP_SUCCESS':
      console.log(action.payload)
      return {
        loading: false,
        shops: state.shops.filter((shop) => shop.id !== action.payload.id),
      }
    default:
      return state
  }
}

const getFilteredShopReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_FILTERED_SHOPS_REQUEST':
      return { loading: true }

    case 'GET_FILTERED_SHOPS_SUCCESS':
      return { loading: false, shops: action.payload }

    case 'GET_FILTERED_SHOPS_FAILURE':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export { getShopReducer, getFilteredShopReducer }
