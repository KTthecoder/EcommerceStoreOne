import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ByCategoryScreen from '../screens/ByCategoryScreen/ByCategoryScreen'
import CartScreen from '../screens/CartScreen/CartScreen'
import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen'
import CheckoutEditScreen from '../screens/CheckoutEditScreen/CheckoutEditScren'
import CheckoutScreen from '../screens/CheckoutScreen/CheckoutScreen'
import { HomeScreen } from '../screens/HomeScreen/HomeScreen'
import LoginScren from '../screens/LoginScreen/LoginScren'
import NewestScreen from '../screens/NewestScreen/NewestScreen'
import OnSaleScreen from '../screens/OnSaleScreen/OnSaleScreen'
import OrderInfoScreen from '../screens/OrderInfoScreen/OrderInfoScreen'
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
        <Route exact path='/' element={<HomeScreen/>} />
        <Route exact path='/shop' element={<ShopScreen/>} />
        <Route exact path='/categories' element={<CategoriesScreen/>} />
        <Route exact path='/categories/:slug' element={<ByCategoryScreen/>} />
        <Route exact path='/newest' element={<NewestScreen/>} />
        <Route exact path='/on-sale' element={<OnSaleScreen/>} />
        <Route exact path='/search/:slug' element={<SearchScreen/>} />
        <Route exact path='/login' element={<LoginScren/>} />
        <Route exact path='/register' element={<RegisterScreen/>} />
        <Route exact path='/product/:slug' element={<ProductDetails/>} />
        <Route exact path='/search' element={<SearchScreen/>} />
        
        {/* User need to be logged In */}
        <Route exact path='/cart' element={<PrivateRoute/>}>
          <Route path='/cart' element={<CartScreen/>} />
        </Route>
        <Route exact path='/checkout' element={<PrivateRoute/>}>
          <Route exact path='/checkout' element={<CheckoutScreen/>} />
        </Route>
        <Route path='/checkout/edit' element={<PrivateRoute/>}>
          <Route path='/checkout/edit' element={<CheckoutEditScreen/>} />
        </Route>
        <Route exact path='/payment' element={<PrivateRoute/>}>
          <Route exact path='/payment' element={<PaymentScreen/>} />
        </Route>
        <Route exact path='/account' element={<PrivateRoute/>}>
          <Route exact path='/account' element={<ProfileScreen/>} />
        </Route> 
        <Route exact path='/account/order/:id' element={<PrivateRoute/>}>
          <Route exact path='/account/order/:id' element={<OrderInfoScreen/>} />
        </Route> 
    </Routes>
  )
}
