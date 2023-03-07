import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';


const ProductDetail = () => {

  let {id} = useParams()


  const [detail, setDetail] = useState()

  const detailapi =async()=>{
    let url = `https://my-json-server.typicode.com/ohjeonghwan/jung-hnm/products/${id}`
    let response = await fetch(url)
    let date = await response.json()
    setDetail(date)
    console.log('date',date)
  }

  useEffect(()=>{
    detailapi() 
  },[])

  return (
    <Container>
      <Row>
        <Col className='img-detail'>
          <img src={detail?.img}/>
        </Col>
        <Col>
          <h2>{detail?.title}</h2>
          <h5>₩{detail?.price}</h5>
          <div>{detail?.choice == true? 'choice':''}</div>
          <div>{detail?.price}</div>
          <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic" >
        사이즈선택
      </Dropdown.Toggle>

      <Dropdown.Menu className='size'>
        <Dropdown.Item href="#/action-1">{detail?.size[0]}</Dropdown.Item>
        <Dropdown.Item href="#/action-2">{detail?.size[1]}</Dropdown.Item>
        <Dropdown.Item href="#/action-3">{detail?.size[2]}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
   
   <div className="d-grid gap-2">
      <Button variant="dark" size="lg">
       추가
      </Button>
    </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail