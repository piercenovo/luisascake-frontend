import Menu from '../Menu/Menu'
import { Nav, NavbarContainer, NavRoute, CenterNav, NavRoutes } from './NavbarStyles'

const Navbar = ({ routes }) => {
  return (
      <Nav>
        <NavbarContainer>
          <CenterNav>
            <NavRoutes>
              {routes.map((route) => {
                if (route.subRoutes) {
                  return <Menu route={route} key={route.name} />
                }
                return (
                  <NavRoute to={route.link} key={route.name}>
                    {route.name}
                  </NavRoute>
                )
              })}
            </NavRoutes>
          </CenterNav>
        </NavbarContainer>
      </Nav>
  )
}

export default Navbar
