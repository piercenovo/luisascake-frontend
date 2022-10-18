import { Center, Container, Left, Right, Wrapper, Logo, MenuItem, iconStylesTwo, iconStyles, StyledBadge } from './MiddlebarStyles'
import LuisasLogo from '../../../assets/svg/logo.svg'
import { Search, ShoppingCartOutlined, FavoriteBorderOutlined, MenuOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { DrawerButton } from '../Navbar/NavbarStyles'
import { useSelector } from 'react-redux'

const Middlebar = ({ toggleDrawer }) => {
  const quantity = useSelector(state => state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <DrawerButton onClick={toggleDrawer}>
            <MenuOutlined style={iconStylesTwo}/>
          </DrawerButton>
        </Left>
        <Center>
          <Link to='/'>
            <Logo src={LuisasLogo} alt="Logo" />
          </Link>
        </Center>
        <Right>
          <MenuItem>
            <Link to='/mis-favoritos'>
              <FavoriteBorderOutlined style={iconStyles} />
            </Link>
          </MenuItem>
          <MenuItem>
          <Link to='/carrito-de-compras'>
            <StyledBadge badgeContent={quantity} overlap="rectangular">
              <ShoppingCartOutlined style={iconStyles} />
            </StyledBadge>
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
