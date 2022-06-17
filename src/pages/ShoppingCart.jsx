import Helmet from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import { BigText, CenterText } from '../styles/globalStyles'

const ShoppingCart = () => {
  return (
    <>
      <Helmet>
        <title>Carrito de Compras - Luisa's Cake</title>
      </Helmet>
      <Breadcrumb
      firstLink={'/'}
      firstName={'Home'}
      secondName={'Carrito de Compras'}
      title={'Carrito de Compras'}
      />
      <CenterText>
      <BigText>Carrito de Compras</BigText>
    </CenterText>
    </>

  )
}

export default ShoppingCart
