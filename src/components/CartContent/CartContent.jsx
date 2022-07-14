import CartTableContent from './CartTableContent/CarTableContent'
import {
  Container,
  Wrapper,
  Top,
  CardTableContainer,
  TheadWrapper,
  TheadRow,
  TheadColumn
} from './CartContentStyles'
import { useSelector } from 'react-redux'
import EmptyTable from '../EmptyTable/EmptyTable'
import CartBottomContent from './CartBottomContent/CartBottomContent'

const CartTable = () => {
  const cart = useSelector(state => state.cart)

  return (
    <Container>
      <Wrapper>
        <Top>
          <CardTableContainer>
            <TheadWrapper>
              <TheadRow>
                <TheadColumn>Producto</TheadColumn>
                <TheadColumn>Precio</TheadColumn>
                <TheadColumn>Cantidad</TheadColumn>
                <TheadColumn>SubTotal</TheadColumn>
                <TheadColumn>&nbsp;</TheadColumn>
              </TheadRow>
            </TheadWrapper>
            {cart.quantity > 0
              ? (
                  cart.products.map(product => <CartTableContent key={product.id_product} {...product} />)
                )
              : (
              <EmptyTable description={'al carrito de compras'} />
                )}
          </CardTableContainer>
        </Top>
        <CartBottomContent cart={cart} />
      </Wrapper>
    </Container>
  )
}

export default CartTable
