import { useState, useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import Drawer from './Drawer/Drawer'
import { routes } from '../../../data/RouterData'
import Middlebar from './Middlebar/Middlebar'
import Topbar from './Topbar/Topbar'
import { HeaderContainer } from './Navbar/NavbarStyles'
import { publicRequest } from '../../../redux/api'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  const [categories, setCategories] = useState([])

  useEffect(() => {
    publicRequest.get('/category/get-all-categories').then((resp) => {
      setCategories(resp.data.categories)
    })
  }, [])

  return (
    <HeaderContainer>
      <Topbar/>
      <Drawer routes={routes} categories={categories} isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Middlebar toggleDrawer={toggleDrawer} />
      <Navbar routes={routes} categories={categories} />
    </HeaderContainer>
  )
}

export default Header
