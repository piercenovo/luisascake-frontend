import { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Drawer from './Drawer/Drawer'
import { routes } from '../../../data/RoutersData'
import Middlebar from './Middlebar/Middlebar'
import Topbar from './Topbar/Topbar'
import { HeaderContainer } from './Navbar/NavbarStyles'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <HeaderContainer>
      <Topbar/>
      <Drawer routes={routes} isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Middlebar toggleDrawer={toggleDrawer} />
      <Navbar routes={routes} />
    </HeaderContainer>
  )
}

export default Header
