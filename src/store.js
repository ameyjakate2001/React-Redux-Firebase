import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getShopReducer, getFilteredShopReducer } from './reducers/shopReducer'

const reducer = combineReducers({
  shopList: getShopReducer,
  filteredList: getFilteredShopReducer,
})

const middleWare = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleWare))
)

export default store
