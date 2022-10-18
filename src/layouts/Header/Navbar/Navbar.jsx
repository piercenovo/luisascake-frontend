import Menu from '../Menu/Menu'
import { Nav, NavbarContainer, NavRoute, CenterNav, NavRoutes, Image } from './NavbarStyles'

const Navbar = ({ routes, categories }) => {
  return (
      <Nav>
        <Image src='https://res.cloudinary.com/cloud-digital-asset/image/upload/v1665612015/LuisasCake/decoration-bar_fegsz0.png' alt='Decoración'/>
        <NavbarContainer>
          <CenterNav>
            <NavRoutes>

            {routes.map((route, index) => {
              if (route.link === 'tienda') {
                return (
                  <Menu categories={categories} key={categories} />
                )
              }
              return (
                <NavRoute
                to={route.link}
                key={index}
                >
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
