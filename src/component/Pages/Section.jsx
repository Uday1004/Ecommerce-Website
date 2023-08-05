// Frontenend structured to how show the product information 
//Format for showing the product name,price,addtoCart options,rating 


import React from 'react'
import { Container, Row } from "react-bootstrap"
import Product from '../Layout/Product'

export default function Section({title,bgColor,productItems,addtoCart}) {
  return (
    <section style={{background:bgColor}}>
        <Container>
            <div className='heading'>
                <h1>{title}</h1>
            </div>
            <Row className='justify-content-center'>
                {productItems.map((productItem)=>{
                    return (
                        <Product key={productItem.id} title={title} productItem={productItem} addtoCart={addtoCart}/>
                    )
                })}
            </Row>
        </Container>
    </section>
  )
}
