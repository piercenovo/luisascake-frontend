import { Center, Container, Left, Right, Wrapper, Logo, MenuItem } from './MiddlebarStyles'
import LuisasLogo from '../../../../../assets/svg/logo.svg'
import { Search, ShoppingCartOutlined, FavoriteBorderOutlined, MenuOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { DrawerButton } from '../Navbar/NavbarStyles'

const Middlebar = ({ toggleDrawer }) => {
  const iconStyles = { color: 'var(--text-2-color)', fontSize: '26px' }
  return (
    <Container>
      <Wrapper>
        <Left>
          <DrawerButton onClick={toggleDrawer}>
            <MenuOutlined style={{ color: 'var(--text-color)', fontSize: '24px' }}/>
          </DrawerButton>
        </Left>
        <Center>
          <Link to='/'>
            <Logo src={LuisasLogo} alt="Logo" />
          </Link>
        </Center>
        <Right>
          <MenuItem>
            <Link to='/ingresar'>
              Ingresar
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='/mis-favoritos'>
              <FavoriteBorderOutlined style={iconStyles} />
            </Link>
          </MenuItem>
          <MenuItem>
          <Link to='/carrito-de-compras'>
            <Badge badgeContent={4} color="primary" overlap="rectangular">
              <ShoppingCartOutlined style={iconStyles} />
            </Badge>
          </Link>
          </MenuItem>
          <MenuItem>
          <Link to='/busqueda'>
            <Search style={iconStyles} />
          </Link>
          </MenuItem>
        </Right>

      </Wrapper>
    </Container>
  )
}

export default Middlebar
