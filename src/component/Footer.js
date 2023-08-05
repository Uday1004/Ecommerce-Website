 import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  // MDBIcon,
  
  MDBCol,
  MDBRow, 
  
} from 'mdb-react-ui-kit';
import {RiInstagramFill} from 'react-icons/ri' 
import {RiTwitterFill} from 'react-icons/ri' 
import {RiGithubFill} from 'react-icons/ri' 
import {RiLinkedinBoxFill} from 'react-icons/ri' 
import {RiStackFill} from 'react-icons/ri' 
import './style/style.scss';


 


export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        {/* <section className='mb-4'>
         
          
        </section> */}
        <section>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                
              <RiStackFill/>  Welcome to Treasurease: Unveil the World of Wonders!
              </h6>
              <p>
 
              At Treasurease, we invite you on an enchanting journey of exploration, discovery, and sheer delight. Step into a realm where imagination knows no bounds, where hidden gems and untold wonders await around every corner. 
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold '>Products</h6>
              <p>
                <a href='!' className='text-reset'>
                  Artifacts
                </a>
              </p>
              <p>
                <a href='!' className='text-reset'>
                  Accessories
                </a>
              </p>
              <p>
                <a href='!' className='text-reset'>
                  Brands
                </a>
              </p>
              <p>
                <a href='!' className='text-reset'>
                  Grocery
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Social links</h6>
              <p>
                <a href='https://www.instagram.com/udaysolankii03/' className='text-reset'>
                 <RiInstagramFill/> Instagram
                </a>
              </p>
              <p>
                <a href='!' className='text-reset'>
                  <RiTwitterFill/> Twitter
                </a>
              </p>
              <p>
                <a href='!' className='text-reset'>
                  <RiGithubFill/> Github
                </a>
              </p>
              <p>
                <a href='!' className='text-reset'>
                  <RiLinkedinBoxFill/> Linkdin
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                 
               Inodre , 452011 , India
              </p>
              <p>
                 
              TreasurEaseBuy@gmail.com
              </p>
              <p>
                  <a href = "mailto: udaysolanki530@gmail.com" style={{textDecoration:'none' , color:'white'}}>udaysolanki530@gmail.com</a>
              </p>
              <p>
                   <a href = "mailto: sandeepprajapat200@gmail.com" style={{textDecoration:'none' , color:'white'}}>sandeepprajapat200@gmail.com</a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      
          <p style={{
            textAlign:'left',
            marginLeft:'3%'
          }}>
           <p>TreasurEase: Revolutionizing online shopping  Delivery
            </p>  
            At Treasurease, we believe that every dream has the potential to become a reality. Step into a world of boundless possibilities, where shopping transforms into a delightful adventure filled with endless choices, exclusive collections, and unparalleled convenience.  
          </p>

            
        </section>

         
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href=''>
        TreasurEase.com
        </a>
      </div>
    </MDBFooter>
  );
}