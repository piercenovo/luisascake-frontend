import Helmet from 'react-helmet'
import { BigText, CenterText } from '../styles/globalStyles'

const ShoppingCart = () => {
  return (
    <>
      <Helmet>
        <title>Carrito de Compras</title>
      </Helmet>
      <CenterText>
      <BigText>Carrito de Compras</BigText>
    </CenterText>
    </>

  )
}

export default ShoppingCart
