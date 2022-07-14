import { NavRoute } from '../Navbar/NavbarStyles'
import { SMenu, SubRoutesContainer, SubRoute, MenuButton } from './MenuStyles'

const Menu = ({ categories }) => {
  return (
    <SMenu>
      <MenuButton>
        <NavRoute to="/tienda">Tienda</NavRoute>
      </MenuButton>
      <SubRoutesContainer>
        {categories.map((category) => (
          <SubRoute to={`categoria/${category.link_category}`} key={category.id_category}>
            {category.name_category}
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>
  )
}

export default Menu
