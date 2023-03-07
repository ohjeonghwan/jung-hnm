import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Productcard from '../component/Productcard'
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';


const Hompage = () => {

  const [view, setView] = useState([])

  const [query, setQuery] = useSearchParams()

  const getproductapi = async()=>{
    let searchQuery = query.get('q') || ""
    let url = `https://my-json-server.typicode.com/ohjeonghwan/jung-hnm/products?q=${searchQuery}`
    let response = await fetch(url)
    let date = await response.json()
    setView(date)
    console.log(date)
  }

  useEffect(()=>{
    getproductapi()
  },[query])


  return (
    <div>
      <Container>
        <Row>
        {view.map((menu)=>(<Col lg={3}><Productcard item = {menu}/></Col>))}
        </Row>
      </Container>
    </div>
  )
}

export default Hompage