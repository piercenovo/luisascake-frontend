import Menu from '../Menu/Menu'
import { Nav, NavbarContainer, NavRoute, CenterNav, NavRoutes, Image } from './NavbarStyles'

const Navbar = ({ routes }) => {
  return (
      <Nav>
        <Image src='https://res.cloudinary.com/cloud-digital-asset/image/upload/v1654726775/decoration_wehrzf.png' />
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
