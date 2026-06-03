/* eslint-disable no-unused-vars */
import React from 'react'
import HeroSection from '../components/HeroSection'
import CTASection from '../components/CTASection'
import ProductCategories from '../components/ProductCategories'
import SecurityProcess from '../components/SecurityProcess'
import IndustriesSection from '../components/IndustriesSection'
import FAQSection from '../components/FAQSection'


const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductCategories />
      <SecurityProcess />
      <IndustriesSection />
      <FAQSection />
      <CTASection />
    </>
  )
}

export default Home