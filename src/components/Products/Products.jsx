import MainProduct from './MainProduct/MainProduct'
import { ProductsContainer, Wrapper } from './MainProduct/MainProductStyles'
import SidebarProduct from './SidebarProduct/SidebarProduct'

const Products = () => {
  return (
    <ProductsContainer>
      <Wrapper>
      <SidebarProduct />
      <MainProduct />
      </Wrapper>
    </ProductsContainer>
  )
}

export default Products
