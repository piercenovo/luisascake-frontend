import { NavRoute } from '../Navbar/NavbarStyles'
import { SMenu, SubRoutesContainer, SubRoute, MenuButton } from './MenuStyles'

const Menu = ({ route }) => {
  return (
    <SMenu>
      <MenuButton>
        <NavRoute to="/tienda">{route.name}</NavRoute>
      </MenuButton>
      <SubRoutesContainer>
        {route.subRoutes.map((subRoute, index) => (
          <SubRoute to={subRoute.link} key={index}>
            {subRoute.name}
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>
  )
}

export default Menu
