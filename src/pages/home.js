import React, {useState} from 'react'
import Sidebar from '../components/sidebar/sidebar'
import Navbar from '../components/navbar/navbar'
import StartSection from '../components/start-section/start-section'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <StartSection />
    </>
  )
}

export default Home