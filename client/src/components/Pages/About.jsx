import React from 'react'
import Header from '../header/Header'
import Footer from '../Home/Footer'
import { Box, Typography,styled } from '@mui/material'


const About = () => {
  return (
    <Box>
     <Header/>
      <Box style={{background:"#DDFFBC" , padding:"50px"  }}>
  <h2 style={{color:"#263A29" }} >About </h2>
  <p style={{color:"#263A29" , fontSize:"18px", fontWeight:"600" }}>  Did you ever imagine that the top quality products and hundreds of branded items could be handpicked and delivered to your home, all at the click of a button? India's first comprehensive online megastore, ABC brings a whopping 20000+ products with more than 1000 brands, to over 4 million happy customers. From household cleaning products to beauty and makeup, we have everything you need for your daily needs.</p>
 
 <p style={{color:"#263A29" , fontSize:"18px", fontWeight:"600" }}>ABC is convenient personified:
We've taken away all the stress associated with shopping for daily essentials, and you can now order all your household products and even buy groceries online without travelling long distances or standing in serpentine queues. Add to this the convenience of finding all your requirements at one single source, along with great savings, and you will realize that ABC- India's largest online supermarket, has revolutionized. Get clothes, electronics and more online at your convenience.
</p>

<p style={{color:"#263A29" , fontSize:"18px", fontWeight:"600" }}> Hassle-free home delivery:
We deliver to 25 cities across India and maintain excellent delivery times, ensuring that all your products reach you in time.</p>

<p style={{color:"#263A29" , fontSize:"18px", fontWeight:"600" }}>Best-Quality products for our quality-conscious customers:
ABC is synonymous with superior quality & continues to strive for higher levels of customer trust and confidence, by taking feedback and giving our customers what they want. We have added the convenience of premium quality products in our range. If it's a product category you're looking to shop from, we've made it convenient for you to access all products in a section easily. For instance, if you're looking for beverages, you can order from a long list of beverages that include cool drinks, hot teas, fruit juices and more.</p>

<p style={{color:"#263A29" , fontSize:"18px", fontWeight:"600" }}>When it comes to payment, we have made it easy for our customers can pay through multiple payment channels like Credit and Debit cards.</p>

      </Box>
      <Footer/>
    </Box>
  )
}

export default About
