import { db } from '../Firebase'
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
} from '@firebase/firestore'
const ShopCollectionRef = collection(db, 'Shop_Details')

const getShopsAction = () => async (dispatch) => {
  try {
    dispatch({ type: 'GET_ALL_SHOPS_REQUEST' })

    const data = await getDocs(ShopCollectionRef)
    const actualData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

    console.log(actualData)
    localStorage.setItem('shops', JSON.stringify(actualData))
    dispatch({ type: 'GET_ALL_SHOPS_SUCCESS', payload: actualData })
  } catch (error) {
    console.log(error.message)

    dispatch({ type: 'GET_ALL_SHOPS_FAILURE', payload: error.message })
  }
}

const AddShopAction =
  (Name, Area, Category, Opening_date, Closing_date) => async (dispatch) => {
    try {
      dispatch({ type: 'ADD_SHOP_REQUEST' })

      await addDoc(ShopCollectionRef, {
        Name,
        Area,
        Category,
        Opening_date,
        Closing_date,
      })

      dispatch({ type: 'ADD_SHOP_SUCCESS' })
    } catch (error) {
      console.log(error.message)

      dispatch({ type: 'ADD_SHOP_FAILURE', payload: error.message })
    }
  }
const deleteShopAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'DELETE_SHOP_REQUEST' })

    // delete the document
    const shopDoc = doc(db, 'Shop_Details', id)
    // console.log(shopDoc.data())
    const data = await deleteDoc(shopDoc)
    console.log(data)

    dispatch({ type: 'DELETE_SHOP_SUCCESS', payload: { id } })
  } catch (error) {
    console.log(error.message)

    dispatch({ type: 'DELETE_SHOP_FAILURE', payload: error.message })
  }
}

const getFilteredShopAction = (parameter, value) => async (dispatch) => {
  try {
    dispatch({ type: 'GET_FILTERED_SHOPS_REQUEST' })
    const actualData = []
    var currentDate = new Date().toJSON().slice(0, 10)
    // console.log(currentDate)

    if (parameter === 'Open' || parameter === 'Close') {
      let data
      if (parameter === 'Open') {
        data = query(
          ShopCollectionRef,
          where('Opening_date', '<=', currentDate)
        )

        // console.log(await getDocs(data))
      } else {
        data = query(ShopCollectionRef, where('Opening_date', '<', currentDate))
        // console.log(await getDocs(data))
      }
      const querySnapshot = await getDocs(data)
      querySnapshot.forEach((doc) => {
        actualData.push({ ...doc.data(), id: doc.id })
      })
    } else {
      const data = query(ShopCollectionRef, where(parameter, '==', value))
      const querySnapshot = await getDocs(data)
      querySnapshot.forEach((doc) => {
        actualData.push({ ...doc.data(), id: doc.id })
      })
    }

    // console.log(actualData)
    dispatch({ type: 'GET_FILTERED_SHOPS_SUCCESS', payload: actualData })
  } catch (error) {
    console.log(error.message)

    dispatch({ type: 'GET_FILTERED_SHOPS_FAILURE', payload: error.message })
  }
}

export {
  getShopsAction,
  AddShopAction,
  deleteShopAction,
  getFilteredShopAction,
}
