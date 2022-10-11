import Helmet from 'react-helmet'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { BigText, CenterText } from '../../styles/globalStyles'

const Checkout = () => {
  return (
    <>
      <Helmet>
        <title>Finalizar compra - Luisa's Cake</title>
      </Helmet>
      <Breadcrumb
      active
      firstLink={'/tienda'}
      firstName={'Tienda'}
      secondName={'Finalizar Compra'}
      />
      <CenterText>
      <BigText>Finalizar Compra</BigText>
    </CenterText>
    </>

  )
}

export default Checkout
