import React from 'react'
import { Fragment, useContext, useEffect } from "react"
import { DataContainer } from "../../App"
import Mainslider from '../Mainslider'
import Section from './Section'
import Exclusive from './Exclusive'
import { products } from '../../Utils/product'
import { Container, Row } from 'react-bootstrap'


export default function Home() {
  const { addtoCart } = useContext(DataContainer);
  const TopProducts = products.filter(item => (item.avgRating > 3.5) && (item.category === "mobile" || item.category === "watch"));
  // const discountpro=discoutProducts.filter(item=>(item.discount>=10));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <Fragment>
      <Mainslider />
      <Section title="Top Product" bgColor="#f6f9fc" productItems={TopProducts} addtoCart={addtoCart} />
      <section style={{backgroundColor:"ButtonShadow"}}>
        <Container>
          <div className='heading'>
            <h1>Exclusive Products</h1>
          </div>
          <Row style={{backgroundColor:"white"}}>
            <Exclusive />
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}
