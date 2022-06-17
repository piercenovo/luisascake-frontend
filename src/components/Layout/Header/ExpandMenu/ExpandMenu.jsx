import { KeyboardArrowDown, KeyboardArrowRight } from '@material-ui/icons'
import { useState } from 'react'
import { SMenu, MenuButton, SubRoutesContainer, SubRoute } from './ExpandMenuStyles'

const ExpandMenu = ({ route }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const iconStyle = { color: 'var(--primary-color)', fontSize: '22px' }
  return (
    <SMenu>
      <MenuButton onClick={toggleMenu}>
        {route.name} {isMenuOpen ? <KeyboardArrowDown style={iconStyle} /> : <KeyboardArrowRight style={iconStyle} />}
      </MenuButton>
      <SubRoutesContainer isOpen={isMenuOpen}>
        {route.subRoutes.map((subRoute, index) => (
          <SubRoute to={subRoute.link} key={index}>
            {subRoute.name}
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>
  )
}

export default ExpandMenu
