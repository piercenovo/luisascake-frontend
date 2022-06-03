
import { Button } from '../../../../styles/globalStyles'
import ExpandMenu from '../ExpandMenu/ExpandMenu'
import { Input, SearchContainer, SDrawer, Backdrop, NavRoutes, NavRoute, RightNav } from '../Drawer/DrawerStyles'

import { Search } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const Drawer = ({ isOpen, toggleDrawer, routes }) => {
  return (
    <>
      {isOpen && <Backdrop onClick={toggleDrawer} />}
      <SDrawer isOpen={isOpen}>
        <SearchContainer>
            <Input placeholder='Buscar'/>
            <Search style={{ fontSize: 16, color: 'var(--accent-color-2)' }} />
        </SearchContainer>
        <RightNav>
          <NavRoutes>
            {routes.map((route) => {
              if (route.subRoutes) {
                return <ExpandMenu route={route} key={route.name}/>
              }
              return (
                <NavRoute
                  onClick={toggleDrawer}
                  to={route.link}
                  key={route.name}
                >
                  {route.name}
                </NavRoute>
              )
            })}
          </NavRoutes>
          <Link to='/ingresar' onClick={toggleDrawer} >
            <Button inverse>Ingresar</Button>
          </Link>
        </RightNav>
      </SDrawer>
    </>
  )
}

export default Drawer
