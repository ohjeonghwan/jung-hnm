import React from 'react'
import { useNavigate } from 'react-router-dom'

const Productcard = ({item}) => {

  const navigate = useNavigate()

  const gotodetail = ()=>{

    navigate(`/product/${item.id}`)

  }

  return (
    <div className='product-section' onClick={gotodetail}>
        <img   className={'img-section'}src={item?.img}/>
        <div>{item?.choice == true? 'choice':''}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new == true? '신제품':''}</div>

    </div>
  )
}

export default Productcard