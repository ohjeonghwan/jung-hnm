import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductDetail from '../page/ProductDetail'

const Privitroute = ({judge}) => {
  return judge == true ? <ProductDetail/>:<Navigate to = {'/login'}/>
}

export default Privitroute