import { Search } from '@material-ui/icons'
import { Button } from '../../../styles/globalStyles'
import { CategoryContainer, CategoryTittle, Input, Price, SearchContainer, Sidebar, Title } from './SidebarProductStyles'

const SidebarProduct = () => {
  return (
    <Sidebar>
      <Title>Buscar Producto</Title>
      <SearchContainer>
            <Input placeholder='Buscar productos'/>
            <Search style={{ fontSize: 20, color: 'var(--accent-color-3)' }} />
      </SearchContainer>
      <Title>Filtrar Producto</Title>
      <Price>Precio: S/ 10.00 - S/. 1000.00</Price>
      <Button primary>Filtrar</Button>
      <Title>Categorías</Title>
      <CategoryContainer>
        <CategoryTittle>Tortas</CategoryTittle>
        <CategoryTittle>Postres</CategoryTittle>
        <CategoryTittle>Cheesecakes</CategoryTittle>
        <CategoryTittle>Bocaditos</CategoryTittle>
        <CategoryTittle>Packs</CategoryTittle>
      </CategoryContainer>
    </Sidebar>
  )
}

export default SidebarProduct
