import { Link } from 'react-router-dom'
import { Button } from '../../../styles/globalStyles'
import { Bottom, ButtonContainer, SummaryContainer, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle, SummaryWrapper } from './CartBottomContentStyles'

const CartBottomContent = (props) => {
  return (
    <Bottom>
      <ButtonContainer>
        <Link to='/tienda'>
          <Button>Seguir Comprando</Button>
        </Link>
        <Button primary>Limpiar Carrito</Button>
      </ButtonContainer>
      <SummaryContainer>
        <SummaryWrapper>
          <SummaryTitle>Total de Compra</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>S/. {props.cart.total}.00</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Envío estimado</SummaryItemText>
            <SummaryItemPrice>A calcular</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>S/. {props.cart.total}.00</SummaryItemPrice>
          </SummaryItem>
          <Button primary normal>
            Finalizar Compra
          </Button>
        </SummaryWrapper>
      </SummaryContainer>
    </Bottom>
  )
}

export default CartBottomContent
