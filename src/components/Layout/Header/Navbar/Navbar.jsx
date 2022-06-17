import Menu from '../Menu/Menu'
import { Nav, NavbarContainer, NavRoute, CenterNav, NavRoutes, Image } from './NavbarStyles'

const Navbar = ({ routes }) => {
  return (
      <Nav>
        <Image src='https://res.cloudinary.com/cloud-digital-asset/image/upload/v1655092023/decoration-bar_ri0k7d.png' alt='Decoración'/>
        <NavbarContainer>
          <CenterNav>
            <NavRoutes>
              {routes.map((route, index) => {
                if (route.subRoutes) {
                  return <Menu route={route} key={index} />
                }
                return (
                  <NavRoute to={route.link} key={index}>
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
