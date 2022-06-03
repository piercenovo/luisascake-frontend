import { useState } from 'react'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa'
import { SMenu, MenuButton, SubRoutesContainer, SubRoute } from './ExpandMenuStyles'

const ExpandMenu = ({ route }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const iconStyle = { color: 'var(--primary-color)' }
  return (
    <SMenu>
      <MenuButton onClick={toggleMenu}>
        {route.name} {isMenuOpen ? <FaAngleDown style={iconStyle} /> : <FaAngleRight style={iconStyle} />}
      </MenuButton>
      <SubRoutesContainer isOpen={isMenuOpen}>
        {route.subRoutes.map((subRoute) => (
          <SubRoute to={subRoute.link} key={subRoute.name}>
            {subRoute.name}
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>
  )
}

export default ExpandMenu
