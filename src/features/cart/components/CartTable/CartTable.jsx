import {
  Container,
  Wrapper,
  Top,
  CardTableContainer,
  TheadWrapper,
  TheadRow,
  TheadColumn
} from './CartTableStyles'

import CartTableContent from '../CartTableContent/CarTableContent'
import CartBottomContent from '../CartBottomContent/CartBottomContent'
import EmptyTable from '../../../../components/EmptyTable/EmptyTable'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { getCartTotal } from '../../../../redux/slices/cartSlice'

const CartTable = () => {
  const cart = useSelector(state => state.cart)

  //   const { total, products } = useSelector(state => state.cart)
  //   const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCartTotal());
  // }, [products]);


  // useEffect(() => {
  //   dispatch(getCartTotal());
  // }, [cart.products]);


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
                <TheadColumn>Total</TheadColumn>
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
