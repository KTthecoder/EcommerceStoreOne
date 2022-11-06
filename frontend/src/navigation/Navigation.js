import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CartScreen from '../screens/CartScreen/CartScreen'
import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen'
import CheckoutScreen from '../screens/CheckoutScreen/CheckoutScreen'
import { HomeScreen } from '../screens/HomeScreen/HomeScreen'
import LoginScren from '../screens/LoginScreen/LoginScren'
import NewestScreen from '../screens/NewestScreen/NewestScreen'
import OnSaleScreen from '../screens/OnSaleScreen/OnSaleScreen'
import PaymentScreen from '../screens/PaymentScreen/PaymentScreen'
import ProductDetails from '../screens/ProductDetails/ProductDetails'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen'
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen'
import SearchScreen from '../screens/SerachScreen/SearchScreen'
import ShopScreen from '../screens/ShopScreen/ShopScreen'
import PrivateRoute from '../utils/PrivateRoute'

export const Navigation = () => {
  return (
    <Routes>
        {/* Without Authentication*/}
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/shop' element={<ShopScreen/>} />
        <Route path='/categories' element={<CategoriesScreen/>} />
        <Route path='/newest' element={<NewestScreen/>} />
        <Route path='/on-sale' element={<OnSaleScreen/>} />
        <Route path='/search/:slug' element={<SearchScreen/>} />
        <Route path='/login' element={<LoginScren/>} />
        <Route path='/register' element={<RegisterScreen/>} />
        <Route path='/product/:slug' element={<ProductDetails/>} />
        
        {/* User need to be logged In */}
        <Route exact path='/cart' element={<PrivateRoute/>}>
          <Route path='/cart' element={<CartScreen/>} />
        </Route>
        <Route exact path='/checkout' element={<PrivateRoute/>}>
          <Route path='/checkout' element={<CheckoutScreen/>} />
        </Route>
        <Route exact path='/payment' element={<PrivateRoute/>}>
          <Route path='/payment' element={<PaymentScreen/>} />
        </Route>
        <Route exact path='/account' element={<PrivateRoute/>}>
          <Route path='/account' element={<ProfileScreen/>} />
        </Route> 
    </Routes>
  )
}
